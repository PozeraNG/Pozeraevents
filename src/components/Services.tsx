import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const categories = [
  { src: "/images/services-weddings.png", label: "Weddings", offset: false },
  { src: "/images/services-corporate.png", label: "Corporate Events", offset: true },
  { src: "/images/services-birthdays.png", label: "Birthdays", offset: false },
  { src: "/images/services-other.png", label: "& Every Other Occasion", offset: true },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#fcf8f4] py-16">
      <Image
        src="/images/services-mandala-bg.png"
        alt=""
        aria-hidden
        fill
        className="pointer-events-none hidden object-cover object-right opacity-40 lg:block"
      />
      <Reveal
        variant="fade-in"
        duration={1.2}
        className="pointer-events-none absolute left-6 top-10 hidden sm:block lg:left-[226px]"
      >
        <Image src="/images/services-doodle.png" alt="" aria-hidden width={139} height={100} className="animate-float-slow" />
      </Reveal>

      <div className="relative mx-auto flex max-w-[1360px] flex-col items-center gap-14 px-6 lg:flex-row lg:items-center lg:justify-between">
        <RevealGroup as="div" stagger={0.12} className="flex max-w-[540px] flex-col items-center text-center">
          <RevealItem>
            <Image src="/images/services-crest.png" alt="" width={150} height={94} className="mb-4" />
          </RevealItem>
          <RevealItem as="p" className="font-body text-[22px] font-medium tracking-wide text-[#ff803f]">
            OUR SERVICES
          </RevealItem>
          <RevealItem as="h2" variant="fade-up-blur" className="mt-2 font-display text-fluid-h2 font-bold leading-tight text-charcoal-card">
            Not niched to one occasion whatever you&apos;re planning, we plan it.
          </RevealItem>
          <RevealItem as="p" className="mt-4 font-body text-[18px] font-light leading-[30px] text-muted-text lg:text-[22px]">
            We plan every events from weddings to Birthdays, Corporate events, Naming
            Ceremonies, Burials &amp; Memorials, Anniversary and Every other Occasions
          </RevealItem>
        </RevealGroup>

        <RevealGroup as="div" stagger={0.1} className="grid w-full max-w-[570px] grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <RevealItem
              key={category.label}
              variant="fade-up"
              className={`group overflow-hidden rounded-[4px] border border-black/10 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.25)] ${
                category.offset ? "sm:mt-10" : ""
              }`}
            >
              <div className="relative aspect-[261/220] w-full overflow-hidden">
                <Image
                  src={category.src}
                  alt={category.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="py-[10px] text-center font-display text-[20px] text-ink">
                {category.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
