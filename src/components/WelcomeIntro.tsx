"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const SESSION_KEY = "pozera-welcome-shown";
const FULL_TEXT = "Welcome to Pozera Events";
const BLACK_PART_LENGTH = "Welcome to ".length;

const START_DELAY = 500;
const CHAR_DELAY = 70;
const HOLD_DURATION = 1600;
const FADE_DURATION = 800;

type Phase = "idle" | "typing" | "holding" | "fading" | "hidden";

export default function WelcomeIntro() {
  // Renders visible by default (both on the server and on the client's first paint)
  // so the intro is the literal first thing shown — no flash of the page underneath.
  // Repeat visits within the same session are handled separately by a blocking
  // inline script (see layout.tsx) that hides this via CSS before anything paints.
  const [phase, setPhase] = useState<Phase>("idle");
  const [typedLength, setTypedLength] = useState(0);
  const startedRef = useRef(false);

  useLayoutEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
      if (!alreadyShown) sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // sessionStorage unavailable (privacy mode etc.) — just show the intro once, don't crash.
    }

    if (alreadyShown) setPhase("hidden");
  }, []);

  useEffect(() => {
    if (phase === "hidden") {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "idle") return;
    const t = setTimeout(() => setPhase("typing"), START_DELAY);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "typing") return;
    if (typedLength >= FULL_TEXT.length) {
      setPhase("holding");
      return;
    }
    const t = setTimeout(() => setTypedLength((n) => n + 1), CHAR_DELAY);
    return () => clearTimeout(t);
  }, [phase, typedLength]);

  useEffect(() => {
    if (phase !== "holding") return;
    const t = setTimeout(() => setPhase("fading"), HOLD_DURATION);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "fading") return;
    const t = setTimeout(() => setPhase("hidden"), FADE_DURATION);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "hidden") return null;

  const typed = FULL_TEXT.slice(0, typedLength);
  const blackPart = typed.slice(0, BLACK_PART_LENGTH);
  const orangePart = typed.slice(BLACK_PART_LENGTH);
  const showCursor = phase === "typing" || phase === "holding";

  return (
    <div
      id="pozera-welcome-intro"
      role="dialog"
      aria-label="Welcome to Pozera Events"
      className={`fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-white-bg transition-opacity ease-out ${
        phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_DURATION}ms` }}
    >
      <Image
        src="/images/hero-bg-paint.png"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover object-bottom opacity-50"
      />

      <Image
        src="/images/footer-logo.png"
        alt=""
        aria-hidden
        width={510}
        height={313}
        className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[35vw] max-w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-[0.05] sm:block"
      />

      <Image
        src="/images/services-mandala-bg.png"
        alt=""
        aria-hidden
        width={624}
        height={391}
        className="pointer-events-none absolute bottom-0 right-0 hidden w-[38vw] max-w-[624px] opacity-60 lg:block"
      />

      <Image
        src="/images/hero-branch-left.png"
        alt=""
        aria-hidden
        width={220}
        height={240}
        className="pointer-events-none absolute left-2 top-8 hidden w-[120px] sm:block"
      />

      <Image
        src="/images/services-doodle.png"
        alt=""
        aria-hidden
        width={139}
        height={100}
        className="pointer-events-none absolute left-6 top-[38%] hidden w-[90px] sm:block"
      />

      <h1 className="relative px-6 text-center font-display text-fluid-h1 font-bold leading-[1.1] tracking-[-2px] text-ink">
        {blackPart}
        <span className="text-[#ff803f]">{orangePart}</span>
        <span
          aria-hidden
          className={`ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-[#ff803f] align-middle ${
            showCursor ? "animate-[blink_1s_step-start_infinite]" : "opacity-0"
          }`}
        />
      </h1>
    </div>
  );
}
