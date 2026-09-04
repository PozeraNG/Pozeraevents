import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white-bg py-24">
      <Reveal
        variant="fade-in"
        duration={1.2}
        className="pointer-events-none absolute bottom-[15%] right-0 hidden opacity-[0.59] lg:block"
      >
        <Image
          src="/images/about-leaf.png"
          alt=""
          aria-hidden
          width={248}
          height={235}
          className="animate-float-slow"
        />
      </Reveal>

      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-12 px-6 lg:flex-row lg:gap-[47px]">
        <RevealGroup as="div" stagger={0.12} className="flex w-full max-w-[540px] flex-col gap-5">
          <RevealItem as="p" className="font-display text-[22px] text-brand-orange">
            About Pozera
          </RevealItem>
          <RevealItem as="h2" variant="fade-up-blur" className="font-display text-fluid-h2 font-bold leading-tight text-charcoal-card">
            What We do, We do
            <br />
            With Passion
          </RevealItem>
          <RevealItem
            as="p"
            className="max-w-[506px] pr-0 pt-1 font-body text-[18px] font-light leading-[30px] text-muted-text lg:pr-8 lg:text-[22px]"
          >
            Pozera Events brings calm, organised, hands-on planning to every kind of occasion
            not just weddings. Every engagement is treated with the same care: a clear plan, a
            transparent budget, and a team that&apos;s steady under pressure. That same standard
            is what he now teaches through the Pozera Events Academy.
          </RevealItem>
          <RevealItem>
            <Link
              href="/about"
              className="mt-2 inline-flex w-fit items-center rounded-[72px] border-2 border-[#ff803f] bg-white px-9 py-4 font-body capitalize text-brand-orange transition duration-300 hover:scale-[1.03] hover:bg-brand-orange hover:text-white hover:shadow-[0_10px_20px_-8px_rgba(253,126,20,0.4)]"
            >
              learn more
            </Link>
          </RevealItem>
        </RevealGroup>

        <RevealGroup as="div" stagger={0.15} amount={0.15} className="relative aspect-[589/479] w-full max-w-[589px] shrink-0">
          <RevealItem
            variant="fade-down"
            duration={0.6}
            className="pointer-events-none absolute left-0 top-[11.3%] z-10 w-[70px] sm:w-[100px]"
          >
            <Image src="/images/about-bird-icon.png" alt="" aria-hidden width={100} height={113} className="w-full" />
          </RevealItem>

          <RevealItem
            variant="scale-in"
            duration={0.8}
            className="absolute left-[23.8%] top-[0.6%] h-[73.9%] w-[76.2%] overflow-hidden rounded-tr-[80px] border-[3px] border-white bg-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)]"
          >
            <Image
              src="/images/about-photo-couple-new.png"
              alt="Pozera Events couple portrait"
              fill
              className="object-cover"
            />
          </RevealItem>

          <RevealItem
            variant="scale-in"
            duration={0.7}
            className="absolute left-0 top-[47.8%] h-[52.2%] w-[49.4%] overflow-hidden rounded-tr-[80px] border-[3px] border-white bg-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)]"
          >
            <Image
              src="/images/about-photo-conference.png"
              alt="Pozera Events speaking panel"
              fill
              className="object-cover"
            />
          </RevealItem>

          <RevealItem
            variant="scale-in"
            duration={0.6}
            className="absolute left-[57.6%] top-[80.2%] h-[19.8%] w-[43.3%] overflow-hidden rounded-tr-[80px] border-[3px] border-white bg-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)]"
          >
            <Image
              src="/images/about-photo-toast.png"
              alt="Toast at a Pozera Events celebration"
              fill
              className="object-cover"
            />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
