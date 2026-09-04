"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { EASE_PREMIUM } from "./motion/variants";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function isInstagram(url: string) {
  return url.includes("instagram.com");
}

function getTikTokEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const match = parsed.pathname.match(/\/video\/(\d+)/);
    return match ? `https://www.tiktok.com/embed/v2/${match[1]}` : null;
  } catch {
    return null;
  }
}

export default function VideoModal({
  url,
  onClose,
}: {
  url: string;
  onClose: () => void;
}) {
  const blockquoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  useEffect(() => {
    if (!isInstagram(url)) return;

    let cancelled = false;
    let attempts = 0;

    const tryProcess = () => {
      if (cancelled) return;
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process();
        return;
      }
      attempts += 1;
      if (attempts < 30) {
        setTimeout(tryProcess, 150);
      }
    };

    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    tryProcess();

    return () => {
      cancelled = true;
    };
  }, [url]);

  const tiktokEmbedUrl = getTikTokEmbedUrl(url);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      initial={prefersReducedMotion ? undefined : { opacity: 0 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.3, ease: EASE_PREMIUM }}
    >
      <motion.div
        className="relative max-h-[90vh] w-full max-w-[420px] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.94, y: 16 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE_PREMIUM }}
      >
        <button
          type="button"
          aria-label="Close video"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-black/60 text-white transition duration-300 hover:scale-110 hover:bg-black/80"
        >
          <FaTimes />
        </button>

        {isInstagram(url) ? (
          <blockquote
            ref={blockquoteRef}
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{ margin: 0, width: "100%", minWidth: "auto" }}
          />
        ) : tiktokEmbedUrl ? (
          <div className="aspect-[9/16] w-full">
            <iframe
              src={tiktokEmbedUrl}
              className="size-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex aspect-[9/16] w-full items-center justify-center p-6 text-center text-muted-text">
            This video can&apos;t be embedded here.
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
