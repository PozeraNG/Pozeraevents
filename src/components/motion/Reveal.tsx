"use client";

import { motion, useReducedMotion } from "framer-motion";
import { forwardRef, type ElementType, type MouseEventHandler, type ReactNode } from "react";
import { EASE_PREMIUM, getRevealVariants, type RevealVariant } from "./variants";
import { usePageReady } from "./usePageReady";

// A handful of passthrough props for when `as` renders an interactive element
// (e.g. as="a") — lets callers make the reveal wrapper itself the link/button
// instead of nesting a second real element inside it.
type Passthrough = {
  id?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler;
  "aria-label"?: string;
  "aria-hidden"?: boolean;
};

type RevealProps = Passthrough & {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
  as?: ElementType;
  /** "viewport" (default) animates on scroll-into-view; "mount" animates once on mount —
   * use "mount" for above-the-fold content (e.g. the Hero) that should never be hidden
   * behind a scroll trigger. */
  trigger?: "viewport" | "mount";
};

// Reveals its children once, when it scrolls into view — the workhorse for the
// site's section-entrance animations. Falls back to a static wrapper under
// prefers-reduced-motion instead of skipping the animation silently.
export const Reveal = forwardRef<HTMLElement, RevealProps>(function Reveal(
  {
    children,
    variant = "fade-up",
    delay = 0,
    duration = 0.7,
    amount = 0.2,
    className,
    as = "div",
    trigger = "viewport",
    href,
    target,
    rel,
    onClick,
    ...aria
  },
  ref,
) {
  const prefersReducedMotion = useReducedMotion();
  const pageReady = usePageReady();
  const MotionTag = motion.create(as as ElementType) as unknown as typeof motion.div;
  const passthrough = { href, target, rel, onClick, ...aria };

  if (prefersReducedMotion) {
    const Tag = as as ElementType;
    return (
      <Tag ref={ref as never} className={className} {...passthrough}>
        {children}
      </Tag>
    );
  }

  if (trigger === "mount") {
    return (
      <MotionTag
        ref={ref as never}
        className={className}
        initial="hidden"
        // Above-the-fold "mount" content waits for the Pozera logo transition
        // (when one is in flight) instead of always animating in on mount —
        // see pageReadyStore for why this is a shared external flag.
        animate={pageReady ? "visible" : "hidden"}
        variants={getRevealVariants(variant)}
        transition={{ duration, delay, ease: EASE_PREMIUM }}
        {...passthrough}
      >
        {children}
      </MotionTag>
    );
  }

  if (!pageReady) {
    // A logo transition is covering the screen — even scroll-triggered
    // content must not reveal itself underneath it. Held hidden here; once
    // pageReady flips true this same element re-renders into the branch
    // below and whileInView takes over immediately (already-in-view content
    // fires right away, off-screen content still waits for real scroll).
    return (
      <MotionTag ref={ref as never} className={className} initial="hidden" animate="hidden" variants={getRevealVariants(variant)} {...passthrough}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={getRevealVariants(variant)}
      transition={{ duration, delay, ease: EASE_PREMIUM }}
      {...passthrough}
    >
      {children}
    </MotionTag>
  );
});

type RevealGroupProps = Passthrough & {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
  delay?: number;
  as?: ElementType;
  trigger?: "viewport" | "mount";
};

// Wrap a set of RevealItem children in this to have them animate in one after
// another (a "stagger") instead of all at once, once the group scrolls into view.
export const RevealGroup = forwardRef<HTMLElement, RevealGroupProps>(function RevealGroup(
  {
    children,
    className,
    stagger = 0.12,
    amount = 0.2,
    delay = 0,
    as = "div",
    trigger = "viewport",
    href,
    target,
    rel,
    onClick,
    ...aria
  },
  ref,
) {
  const prefersReducedMotion = useReducedMotion();
  const pageReady = usePageReady();
  const MotionTag = motion.create(as as ElementType) as unknown as typeof motion.div;
  const passthrough = { href, target, rel, onClick, ...aria };

  if (prefersReducedMotion) {
    const Tag = as as ElementType;
    return (
      <Tag ref={ref as never} className={className} {...passthrough}>
        {children}
      </Tag>
    );
  }

  const groupVariants = { hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } };

  if (trigger === "mount") {
    return (
      <MotionTag
        ref={ref as never}
        className={className}
        initial="hidden"
        animate={pageReady ? "visible" : "hidden"}
        variants={groupVariants}
        {...passthrough}
      >
        {children}
      </MotionTag>
    );
  }

  if (!pageReady) {
    return (
      <MotionTag ref={ref as never} className={className} initial="hidden" animate="hidden" variants={groupVariants} {...passthrough}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={groupVariants}
      {...passthrough}
    >
      {children}
    </MotionTag>
  );
});

type RevealItemProps = Passthrough & {
  children: ReactNode;
  variant?: RevealVariant;
  duration?: number;
  className?: string;
  as?: ElementType;
};

// A single staggered member of a RevealGroup. Must be a direct (or motion-passthrough)
// descendant of a RevealGroup to inherit its hidden/visible trigger.
export const RevealItem = forwardRef<HTMLElement, RevealItemProps>(function RevealItem(
  { children, variant = "fade-up", duration = 0.6, className, as = "div", href, target, rel, onClick, ...aria },
  ref,
) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion.create(as as ElementType) as unknown as typeof motion.div;
  const passthrough = { href, target, rel, onClick, ...aria };

  if (prefersReducedMotion) {
    const Tag = as as ElementType;
    return (
      <Tag ref={ref as never} className={className} {...passthrough}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      variants={getRevealVariants(variant)}
      transition={{ duration, ease: EASE_PREMIUM }}
      {...passthrough}
    >
      {children}
    </MotionTag>
  );
});
