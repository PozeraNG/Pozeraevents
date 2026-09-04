import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-white-bg pb-24">
      <Image
        src="/images/hero-bg-paint.png"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover object-bottom opacity-50"
      />

      <Reveal
        variant="fade-in"
        trigger="mount"
        duration={1.2}
        className="pointer-events-none absolute -left-1 top-[17.2%] hidden w-[11.5%] min-w-[140px] lg:block"
      >
        <Image src="/images/hero-branch-left.png" alt="" aria-hidden width={220} height={240} className="w-full animate-float-slow" />
      </Reveal>

      <Reveal
        variant="fade-in"
        trigger="mount"
        duration={1.2}
        delay={0.1}
        className="pointer-events-none absolute bottom-[15%] right-0 hidden opacity-[0.59] lg:block"
      >
        <Image src="/images/about-leaf.png" alt="" aria-hidden width={248} height={235} className="animate-float-slow" />
      </Reveal>

      <RevealGroup
        as="div"
        trigger="mount"
        stagger={0.14}
        delay={0.15}
        className="relative mx-auto flex max-w-[1140px] flex-col items-center gap-5 px-6 pt-16 text-center sm:pt-20"
      >
        <RevealItem as="h1" variant="fade-up-blur" className="font-display text-fluid-h1 font-bold tracking-[-2px] text-[#ff803f]">
          Services
        </RevealItem>
        <RevealItem as="p" className="max-w-[610px] font-body text-[18px] font-light leading-[31px] text-muted-text sm:text-[22px]">
          A full range of event planning services — from first concept to final toast —
          tailored to whatever you&apos;re celebrating.
        </RevealItem>
        <RevealItem as="p" className="font-body text-[18px]">
          <Link href="/" className="text-ink hover:text-brand-orange">
            Home -
          </Link>{" "}
          <span className="text-peach">Services</span>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
