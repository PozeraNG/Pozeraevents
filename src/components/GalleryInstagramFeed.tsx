import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const posts = [
  { src: "/images/gallery-insta-1.png", alt: "Hands with wedding rings" },
  { src: "/images/gallery-insta-2.png", alt: "Couple at an event" },
  { src: "/images/gallery-insta-3.png", alt: "Couple at a doorway" },
  { src: "/images/gallery-insta-4.png", alt: "Bride and groom portrait" },
];

export default function GalleryInstagramFeed() {
  return (
    <section className="relative min-h-[900px] overflow-hidden sm:min-h-[950px] lg:min-h-[1050px]">
      <Image
        src="/images/gallery-scenic-banner.png"
        alt="Wedding ceremony by the water"
        fill
        className="object-cover"
      />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(253,248,244,0.97) 0%, rgba(253,248,244,0.93) 15%, rgba(253,248,244,0.8) 30%, rgba(253,248,244,0.55) 45%, rgba(253,248,244,0.25) 60%, rgba(253,248,244,0) 75%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1140px] flex-col items-center px-6 pt-24">
        <RevealGroup as="div" stagger={0.1} className="relative flex items-center gap-[22px]">
          <RevealItem
            as="a"
            href="https://www.instagram.com/pozera_events/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Pozera Events on Instagram"
            className="flex size-[70px] items-center justify-center rounded-full bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#8134af] text-white transition duration-300 hover:scale-110 hover:opacity-90"
          >
            <FaInstagram size={32} />
          </RevealItem>
          <RevealItem
            as="a"
            href="https://www.tiktok.com/@pozeraevents?_r=1&_t=ZN-99Rui39u4tm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Pozera Events on TikTok"
            className="flex size-[78px] items-center justify-center rounded-full bg-black text-white transition duration-300 hover:scale-110 hover:opacity-90"
          >
            <SiTiktok size={28} />
          </RevealItem>

          <Reveal
            variant="fade-in"
            duration={1.2}
            className="pointer-events-none absolute -right-24 -top-16 hidden sm:block"
          >
            <Image src="/images/insta-bird.png" alt="" aria-hidden width={100} height={113} className="animate-float-slow" />
          </Reveal>
        </RevealGroup>

        <Reveal as="h2" variant="fade-up-blur" delay={0.15} className="mt-4 text-center font-display text-fluid-h2 font-bold text-charcoal-card">
          Instagram/Tiktok Feed
        </Reveal>

        <RevealGroup
          as="div"
          stagger={0.08}
          delay={0.1}
          className="-mx-6 mt-16 flex w-[calc(100%+3rem)] gap-6 overflow-x-auto px-6 pb-2 sm:mx-0 sm:w-full sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0"
        >
          {posts.map((post) => (
            <RevealItem
              key={post.src}
              as="a"
              href="#"
              variant="scale-in"
              duration={0.6}
              className="group relative block size-[255px] shrink-0 overflow-hidden shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] transition hover:shadow-[0_16px_32px_-10px_rgba(0,0,0,0.35)]"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
