"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { EASE_PREMIUM } from "./motion/variants";

// A soft crossfade on every route change, instead of a hard cut between pages.
// Opacity-only (no transform/y): a transformed ancestor establishes a new
// containing block that can break position:sticky/fixed descendants (like the
// nav) relative to the real viewport, so this stays off of transform entirely.
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return <>{children}</>;

  return (
    <motion.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: EASE_PREMIUM }}>
      {children}
    </motion.div>
  );
}
