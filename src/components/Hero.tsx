import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const features = [
  { title: "Full planning", detail: "Concept to execution" },
  { title: "Coordination", detail: "Day-of partial support" },
  { title: "The Academy", detail: "Train as a planner" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white-bg">
      <Image
        src="/images/hero-bg-paint.png"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover object-bottom opacity-50"
      />

      <Image
        src="/images/hero-grid-lines.png"
        alt=""
        aria-hidden
        width={555}
        height={890}
        className="pointer-events-none absolute left-[50.6%] top-[4.9%] hidden h-[99%] w-[28.9%] object-cover lg:block"
      />

      <Reveal
        as="div"
        trigger="mount"
        variant="fade-in"
        duration={1.2}
        className="pointer-events-none absolute -left-1 top-[17.2%] hidden w-[11.5%] min-w-[140px] lg:block"
      >
        <Image
          src="/images/hero-branch-left.png"
          alt=""
          aria-hidden
          width={220}
          height={240}
          className="w-full animate-float-slow"
        />
      </Reveal>

      <RevealGroup
        as="div"
        trigger="mount"
        stagger={0.16}
        delay={0.15}
        className="relative mx-auto flex max-w-[1360px] flex-col items-center gap-[26px] px-6 py-24 lg:flex-row lg:items-center lg:py-32"
      >
        <RevealGroup as="div" trigger="mount" stagger={0.14} className="flex w-full max-w-[832px] flex-col gap-[53px]">
          <div className="flex flex-col items-start gap-[25px]">
            <RevealItem variant="fade-down">
              <Image
                src="/images/hero-ring-icon.png"
                alt=""
                width={90}
                height={70}
                className="h-[54px] w-[70px] sm:h-[70px] sm:w-[90px]"
              />
            </RevealItem>

            <RevealItem variant="fade-up-blur" as="h1" className="font-display text-fluid-h1 font-bold leading-[1.1] tracking-[-2px] text-ink">
              Every Events, Meets{" "}
              <span className="text-[#ff803f]">Exclusive Experiences.</span>
            </RevealItem>

            <RevealItem
              as="p"
              className="max-w-[680px] pr-0 font-body text-[18px] font-light leading-[26px] text-muted-text lg:pr-6 lg:text-[22px] lg:leading-[31px]"
            >
              Weddings, birthdays, corporate functions, burials, award ceremonies, naming
              ceremonies — whatever you&apos;re planning, Pozera Events plans it. Full planning
              from concept to execution, or coordination on the day itself.
            </RevealItem>

            <RevealItem>
              <Link
                href="/book-consultation"
                className="flex h-[54px] w-[259.77px] items-center justify-center gap-3 rounded-[60px] border-2 border-peach bg-brand-orange font-body text-[18px] text-white transition duration-300 hover:scale-[1.03] hover:bg-[#e86f2f] hover:shadow-[0_12px_24px_-8px_rgba(253,126,20,0.5)] sm:h-[63px]"
              >
                <FaCalendarCheck className="text-[18px]" />
                Book Consultation
              </Link>
            </RevealItem>
          </div>

          <RevealItem className="flex items-center gap-x-[12px] gap-y-6 p-[10px] sm:flex-wrap sm:gap-x-[19px]">
            {features.map((feature, i) => (
              <div key={feature.title} className="flex items-end gap-[13px] sm:gap-[21px]">
                {i > 0 && <span className="h-[35px] w-[1.5px] shrink-0 bg-[#ff803f] sm:h-[55px] sm:w-[2px]" />}
                <div className="flex flex-col gap-[4px] sm:gap-[9px]">
                  <span className="font-display text-[17px] font-bold text-charcoal-card sm:text-[24px]">
                    {feature.title}
                  </span>
                  <span className="font-body text-[11px] text-muted-text sm:text-[18px]">{feature.detail}</span>
                </div>
              </div>
            ))}
          </RevealItem>
        </RevealGroup>

        <RevealItem
          variant="scale-in"
          duration={0.9}
          className="relative aspect-[395/469] w-full shrink-0 overflow-hidden rounded-tl-[50px] rounded-br-[50px] border-[6px] border-white bg-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] sm:aspect-[466/590] sm:w-[400px] lg:w-[466px]"
        >
          <Image
            src="/images/hero-portrait-2.jpg"
            alt="Bride and groom at their wedding"
            fill
            priority
            className="object-cover"
          />
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
