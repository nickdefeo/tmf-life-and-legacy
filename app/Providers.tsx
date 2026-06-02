"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps the app in Framer Motion's MotionConfig with reducedMotion="user",
 * which makes every animation automatically honor the OS-level
 * "prefers-reduced-motion" setting. One place, whole-site coverage.
 */
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
