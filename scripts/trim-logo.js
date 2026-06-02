// One-off: crop the transparent padding around the TMF logo so the gold mark
// fills the frame. Pure Node (zlib only) — no external deps. Run with:
//   node scripts/trim-logo.js
const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

const SRC = path.join(__dirname, "..", "public", "TMF_logo.png");
const BACKUP = path.join(__dirname, "..", "public", "TMF_logo_original.png");
const ALPHA_THRESHOLD = 16; // pixels more opaque than this count as "content"

const buf = fs.readFileSync(SRC);

// --- parse chunks ---
let off = 8;
let ihdr = null;
const idat = [];
while (off < buf.length) {
  const len = buf.readUInt32BE(off);
  const type = buf.toString("ascii", off + 4, off + 8);
  const data = buf.slice(off + 8, off + 8 + len);
  if (type === "IHDR") ihdr = data;
  if (type === "IDAT") idat.push(data);
  off += 12 + len;
  if (type === "IEND") break;
}

const width = ihdr.readUInt32BE(0);
const height = ihdr.readUInt32BE(4);
const bitDepth = ihdr[8];
const colorType = ihdr[9];
const interlace = ihdr[12];
if (bitDepth !== 8 || colorType !== 6 || interlace !== 0) {
  throw new Error(`Unsupported PNG (depth ${bitDepth}, color ${colorType}, interlace ${interlace})`);
}

const bpp = 4;
const stride = width * bpp;
const inflated = zlib.inflateSync(Buffer.concat(idat));
const out = Buffer.alloc(height * stride);

const paeth = (a, b, c) => {
  const p = a + b - c;
  const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
};

for (let y = 0; y < height; y++) {
  const ft = inflated[y * (stride + 1)];
  const rowStart = y * (stride + 1) + 1;
  for (let x = 0; x < stride; x++) {
    const val = inflated[rowStart + x];
    const a = x >= bpp ? out[y * stride + x - bpp] : 0;
    const b = y > 0 ? out[(y - 1) * stride + x] : 0;
    const c = x >= bpp && y > 0 ? out[(y - 1) * stride + x - bpp] : 0;
    let pred = 0;
    if (ft === 1) pred = a;
    else if (ft === 2) pred = b;
    else if (ft === 3) pred = (a + b) >> 1;
    else if (ft === 4) pred = paeth(a, b, c);
    out[y * stride + x] = (val + pred) & 0xff;
  }
}

// --- bounding box of non-transparent content ---
let minX = width, minY = height, maxX = -1, maxY = -1;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (out[(y * width + x) * 4 + 3] > ALPHA_THRESHOLD) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const newW = maxX - minX + 1;
const newH = maxY - minY + 1;

// --- crop (re-encode with filter 0) ---
const cropped = Buffer.alloc(newH * (newW * 4 + 1));
let p = 0;
for (let y = minY; y <= maxY; y++) {
  cropped[p++] = 0; // filter: none
  for (let x = minX; x <= maxX; x++) {
    const s = (y * width + x) * 4;
    cropped[p++] = out[s];
    cropped[p++] = out[s + 1];
    cropped[p++] = out[s + 2];
    cropped[p++] = out[s + 3];
  }
}

// --- CRC32 ---
const crcTable = (() => {
  const t = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
const crc32 = (b) => {
  let c = 0xffffffff;
  for (let i = 0; i < b.length; i++) c = crcTable[(c ^ b[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
};

const newIhdr = Buffer.alloc(13);
newIhdr.writeUInt32BE(newW, 0);
newIhdr.writeUInt32BE(newH, 4);
newIhdr[8] = 8; // bit depth
newIhdr[9] = 6; // RGBA
newIhdr[10] = 0;
newIhdr[11] = 0;
newIhdr[12] = 0;

const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  chunk("IHDR", newIhdr),
  chunk("IDAT", zlib.deflateSync(cropped, { level: 9 })),
  chunk("IEND", Buffer.alloc(0)),
]);

if (!fs.existsSync(BACKUP)) fs.copyFileSync(SRC, BACKUP);
fs.writeFileSync(SRC, png);
console.log(`Cropped ${width}x${height} -> ${newW}x${newH} (saved; original backed up)`);
