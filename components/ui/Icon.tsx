"use client";

import {
  icons,
  Shield,
  type LucideProps,
} from "lucide-react";

/**
 * Renders a lucide-react icon by its string name (as stored in
 * data/site-content.ts). Falls back to a Shield icon if the name is unknown,
 * so a content typo never crashes the page.
 *
 * Browse icon names at https://lucide.dev/icons (use the PascalCase name).
 */
export default function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const LucideIcon = icons[name as keyof typeof icons] ?? Shield;
  return <LucideIcon {...props} />;
}
