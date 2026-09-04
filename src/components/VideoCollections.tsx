"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import VideoModal from "./VideoModal";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const videos = [
  {
    src: "/images/video-thumb-1-new.png",
    alt: "Couple in formal wedding attire",
    url: "https://www.instagram.com/reel/DRc8WJtjYAi/",
  },
  {
    src: "/images/video-thumb-2.jpg",
    alt: "Event host on stage",
    url: "https://www.instagram.com/reel/DNGmDzEsZ8K/",
  },
  {
    src: "/images/video-thumb-3-new.png",
    alt: "Couple in traditional attire",
    url: "https://www.instagram.com/reel/DaSZGXyNaNG/",
  },
  {
    src: "/images/video-thumb-kids.png",
    alt: "Kids photoshoot",
    url: "https://www.instagram.com/reel/DYhqqfnNnRF/",
  },
  {
    src: "/images/video-thumb-4.png",
    alt: "Model in a blue gown",
    url: "https://www.instagram.com/reel/DYy3fQdt9mZ/",
  },
];

export default function VideoCollections() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeUrl, setActiveUrl] = useState<string | null>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-video-card]");
    const amount = card ? card.offsetWidth + 37 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="overflow-hidden bg-white-bg py-20">
      <div className="mx-auto max-w-[1360px] px-6">
        <div className="mb-10 flex items-center justify-between">
          <Reveal as="h2" className="font-display text-fluid-h2 font-bold text-charcoal-card">
            Video Collections
          </Reveal>
          <Reveal as="div" variant="fade-in" delay={0.15} className="flex gap-3">
            <button
              type="button"
              aria-label="Previous videos"
              onClick={() => scroll(-1)}
              className="flex size-11 items-center justify-center rounded-full bg-brand-orange text-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] transition duration-300 hover:scale-110 hover:bg-[#e86f2f]"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next videos"
              onClick={() => scroll(1)}
              className="flex size-11 items-center justify-center rounded-full bg-brand-orange text-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] transition duration-300 hover:scale-110 hover:bg-[#e86f2f]"
            >
              <FaChevronRight />
            </button>
          </Reveal>
        </div>

        <RevealGroup
          as="div"
          stagger={0.1}
          ref={trackRef}
          className="-mx-6 flex gap-[37px] overflow-x-auto scroll-smooth px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((video) => (
            <RevealItem key={video.src} variant="scale-in" duration={0.6} as="div" className="shrink-0">
              <button
                type="button"
                data-video-card
                onClick={() => video.url && setActiveUrl(video.url)}
                aria-label={`Play video: ${video.alt}`}
                className="group relative aspect-[438/640] w-[290px] overflow-hidden rounded-tl-[50px] rounded-br-[50px] border-[5px] border-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] sm:w-[340px] lg:w-[438px]"
              >
                <Image
                  src={video.src}
                  alt={video.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-1/2 top-1/2 flex size-[83px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] transition duration-300 group-hover:scale-110">
                  <Image src="/images/video-play-icon.png" alt="" width={32} height={32} />
                </span>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {activeUrl && <VideoModal url={activeUrl} onClose={() => setActiveUrl(null)} />}
    </section>
  );
}
