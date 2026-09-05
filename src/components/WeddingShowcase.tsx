import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

export default function WeddingShowcase() {
  return (
    <section className="relative overflow-hidden bg-white-bg py-16">
      <Image
        src="/images/wedding-bg.png"
        alt=""
        aria-hidden
        fill
        className="pointer-events-none object-cover opacity-70"
      />

      <div className="relative mx-auto flex max-w-[1140px] flex-col items-center gap-10 px-6">
        <RevealGroup as="div" stagger={0.12} className="flex flex-col items-center gap-6">
          <RevealItem>
            <Image src="/images/wedding-badge.png" alt="3+ years of experience" width={166} height={99} />
          </RevealItem>
          <RevealItem as="h2" variant="fade-up-blur" className="text-center font-display text-fluid-h2 font-bold leading-tight text-charcoal-card">
            The Unrivaled Scenery, Unforgettable
            <br />
            Wedding Program
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          as="div"
          stagger={0.15}
          amount={0.15}
          className="flex w-full flex-col items-center gap-[27px] lg:flex-row lg:items-center lg:justify-center"
        >
          <RevealItem
            variant="scale-in"
            duration={0.8}
            className="relative aspect-[635/599] w-full max-w-[635px] overflow-hidden rounded-tl-[50px] rounded-bl-[50px] border-2 border-white bg-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)]"
          >
            <Image
              src="/images/wedding-photo-main.jpg"
              alt="Bride and groom at their wedding reception"
              fill
              className="object-cover"
            />
          </RevealItem>
          <RevealGroup as="div" stagger={0.12} className="flex w-full max-w-[442px] flex-col gap-[19px]">
            <RevealItem
              variant="scale-in"
              duration={0.7}
              className="relative aspect-[442/290] w-full overflow-hidden rounded-tr-[50px] border-[3px] border-white bg-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)]"
            >
              <Image
                src="/images/wedding-photo-top.png"
                alt="Couple in traditional attire"
                fill
                className="object-cover object-top"
              />
            </RevealItem>
            <RevealItem
              variant="scale-in"
              duration={0.7}
              className="relative aspect-[442/290] w-full overflow-hidden rounded-tr-[50px] border-[3px] border-white bg-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)]"
            >
              <Image
                src="/images/wedding-photo-bottom.jpg"
                alt="Bride in traditional blue gele"
                fill
                className="object-cover object-top"
              />
            </RevealItem>
          </RevealGroup>
        </RevealGroup>

        <Reveal>
          <Link
            href="/book-consultation"
            className="rounded-[72px] border-2 border-[#ff803f] px-9 py-4 font-body capitalize text-[#ff803f] transition duration-300 hover:scale-[1.03] hover:bg-brand-orange hover:text-white hover:shadow-[0_10px_20px_-8px_rgba(255,128,63,0.4)]"
          >
            Book Consultation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
