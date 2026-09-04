import type { Variants } from "framer-motion";

// Premium "expo-out" style easing — smooth deceleration, no bounce.
export const EASE_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1];

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-in"
  | "fade-up-blur";

const DISTANCE = 28;
const SLIDE_DISTANCE = 44;

export function getRevealVariants(variant: RevealVariant): Variants {
  switch (variant) {
    case "fade-down":
      return { hidden: { opacity: 0, y: -DISTANCE }, visible: { opacity: 1, y: 0 } };
    case "slide-left":
      return { hidden: { opacity: 0, x: -SLIDE_DISTANCE }, visible: { opacity: 1, x: 0 } };
    case "slide-right":
      return { hidden: { opacity: 0, x: SLIDE_DISTANCE }, visible: { opacity: 1, x: 0 } };
    case "scale-in":
      return { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } };
    case "fade-in":
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    case "fade-up-blur":
      return {
        hidden: { opacity: 0, y: DISTANCE, filter: "blur(8px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      };
    case "fade-up":
    default:
      return { hidden: { opacity: 0, y: DISTANCE }, visible: { opacity: 1, y: 0 } };
  }
}
