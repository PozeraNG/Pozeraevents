"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM } from "./motion/variants";

export default function SkillBar({ label, value }: { label: string; value: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-[20px] text-ink sm:text-[22px]">{label}</h3>
        <span className="font-body text-[16px] text-ink">{value}%</span>
      </div>
      <div className="h-[16px] w-full overflow-hidden rounded-[75px] bg-[#e9ecef]">
        <motion.div
          className="h-full rounded-[75px] bg-brand-orange"
          initial={{ width: prefersReducedMotion ? `${value}%` : "0%" }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: EASE_PREMIUM, delay: 0.15 }}
        />
      </div>
    </>
  );
}
