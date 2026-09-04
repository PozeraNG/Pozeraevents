"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { EASE_PREMIUM } from "./motion/variants";
import { setPageReady } from "./motion/pageReadyStore";

// Total time the overlay stays up, and how long into that we actually swap
// routes underneath it (early enough that the destination page is fully
// mounted and settled well before the overlay starts fading away).
const HOLD_MS = 2600;
const REDUCED_HOLD_MS = 700;
const FADE_MS = 450;
const NAVIGATE_AT_MS = 550;
const REDUCED_NAVIGATE_AT_MS = 150;

// Resolves a clicked <a> to a destination path IF it's an internal link that
// should trigger the cinematic transition — i.e. a real navigation to a
// different page, not a same-page anchor, external link, new-tab link, etc.
function resolveInternalDestination(anchor: HTMLAnchorElement, currentPath: string): string | null {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) return null;
  if (anchor.target && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return null;

  let url: URL;
  try {
    url = new URL(href, window.location.origin);
  } catch {
    return null;
  }
  if (url.origin !== window.location.origin) return null;
  // Same page (only the hash differs, or identical) — let the browser's
  // native same-document scroll happen instead of a fake page transition.
  if (url.pathname === currentPath) return null;

  return url.pathname + url.search + url.hash;
}

export default function NavTransition() {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);
  const pendingRef = useRef(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a");

      // A transition is already playing — swallow any further nav clicks
      // instead of letting them queue up a second navigation underneath it.
      if (pendingRef.current) {
        if (anchor) event.preventDefault();
        return;
      }

      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!anchor) return;

      const destination = resolveInternalDestination(anchor, window.location.pathname);
      if (!destination) return;

      event.preventDefault();
      pendingRef.current = true;
      setIsActive(true);
      // Hold the destination page's above-the-fold entrance animations in
      // their hidden state — they'll fire together the instant the logo
      // transition finishes below, instead of racing ahead while still
      // covered by the overlay.
      setPageReady(false);

      const hold = prefersReducedMotion ? REDUCED_HOLD_MS : HOLD_MS;
      const navigateAt = prefersReducedMotion ? REDUCED_NAVIGATE_AT_MS : NAVIGATE_AT_MS;

      window.setTimeout(() => router.push(destination), navigateAt);
      window.setTimeout(() => {
        setIsActive(false);
        pendingRef.current = false;
        setPageReady(true);
      }, hold);
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [router, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_MS / 1000, ease: EASE_PREMIUM }}
        >
          <Image
            src="/images/hero-bg-paint.png"
            alt=""
            fill
            aria-hidden
            className="pointer-events-none object-cover object-bottom opacity-50"
          />

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: [0, 1, 1, 0.92, 1], scale: [0.85, 1, 0.96, 1.04, 1] }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0.3, ease: EASE_PREMIUM }
                : {
                    duration: (HOLD_MS - FADE_MS) / 1000,
                    times: [0, 0.25, 0.55, 0.8, 1],
                    ease: EASE_PREMIUM,
                  }
            }
          >
            <Image
              src="/images/footer-logo.png"
              alt="Pozera Events"
              width={191}
              height={117}
              priority
              className="h-auto w-[150px] sm:w-[190px]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
