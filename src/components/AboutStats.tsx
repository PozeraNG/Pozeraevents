import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const stats = [
  { value: "276+", label: "Happy Client" },
  { value: "278+", label: "events" },
  { value: "108+", label: "Decoration" },
  { value: "175+", label: "Locations" },
];

export default function AboutStats() {
  return (
    <section className="bg-[#fcf8f4] px-6 pb-24">
      <Reveal
        as="div"
        variant="scale-in"
        duration={0.8}
        className="relative mx-auto max-w-[1110px] rounded-[24px] bg-brand-orange shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)]"
      >
        <RevealGroup as="div" stagger={0.1} className="grid grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-4 sm:gap-y-0 sm:px-10 sm:py-12">
          {stats.map((stat, i) => (
            <RevealItem
              key={stat.label}
              className={`flex flex-col items-center gap-[14px] text-center ${
                i < stats.length - 1 ? "sm:border-r sm:border-[#fad2c9]" : ""
              }`}
            >
              <p className="font-display text-fluid-h2 font-bold leading-none text-white">
                {stat.value}
              </p>
              <p className="font-body text-[18px] font-light text-white sm:text-[22px]">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Reveal>
    </section>
  );
}
