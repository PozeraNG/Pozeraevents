import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-[#fcf8f4] py-24">
      <Image
        src="/images/services-mandala-bg.png"
        alt=""
        aria-hidden
        fill
        className="pointer-events-none hidden object-cover object-left opacity-40 lg:block"
      />

      <div className="relative mx-auto flex max-w-[1360px] flex-col items-center gap-14 px-6 lg:flex-row lg:gap-[43px]">
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

        <RevealGroup as="div" stagger={0.12} className="relative flex w-full max-w-[554px] flex-col gap-5">
          <Reveal
            variant="fade-in"
            duration={1.2}
            className="pointer-events-none absolute right-0 top-0 hidden sm:block"
          >
            <Image src="/images/about-page-hearts.png" alt="" aria-hidden width={138} height={100} className="animate-float-slow" />
          </Reveal>

          <RevealItem as="p" className="font-display text-[22px] text-peach">
            About Pozera
          </RevealItem>
          <RevealItem
            as="h2"
            variant="fade-up-blur"
            className="font-display text-fluid-h2 font-bold leading-tight tracking-[-1px] text-charcoal-card"
          >
            What We do, We do
            <br />
            With Passion
          </RevealItem>
          <RevealItem as="p" className="pr-0 pt-1 font-body text-[18px] font-light leading-[30px] text-muted-text lg:pr-1 lg:text-[22px]">
            Founder Paul Glory built Pozera Events around a simple standard: treat every event,
            big or small, joyful or solemn, with the same discipline. That means a real plan, a
            transparent budget, and a team that stays composed when things don&apos;t go
            exactly to script. It&apos;s the same standard now taught through the Pozera Events
            Academy.
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
