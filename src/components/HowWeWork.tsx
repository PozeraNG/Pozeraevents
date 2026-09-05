import Image from "next/image";
import { RevealGroup, RevealItem } from "./motion/Reveal";

const steps = [
  {
    title: "Consultation",
    body: "We learn your event, your guests, your budget, and what matters most to you.",
  },
  {
    title: "Proposal & Planning",
    body: "A clear plan and itemised budget, so you know exactly what you're getting.",
  },
  {
    title: "Vendor Coordination",
    body: "We source, brief and manage every vendor from our trusted network.",
  },
  {
    title: "Event Day Execution",
    body: "We run the room so you can be present — not managing logistics.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white-bg py-16">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-12 px-6">
        <RevealGroup as="div" stagger={0.12} className="flex flex-col items-center gap-2 text-center">
          <RevealItem>
            <Image src="/images/howwework-crest.png" alt="" width={150} height={94} />
          </RevealItem>
          <RevealItem as="p" className="font-body text-[22px] font-medium text-[#ff803f]">
            HOW WE WORK
          </RevealItem>
          <RevealItem
            as="h2"
            variant="fade-up-blur"
            className="max-w-[900px] font-display text-fluid-h2 font-bold leading-tight text-charcoal-card"
          >
            A calm, structured process - start to finish
          </RevealItem>
        </RevealGroup>

        <RevealGroup as="div" stagger={0.15} className="grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <RevealItem key={step.title} className="relative flex flex-col gap-[11px]">
              <div className="mb-4 flex items-center gap-4">
                <span className="flex size-[47px] shrink-0 items-center justify-center rounded-full border-2 border-[#ff803f] font-body text-[22px] text-[#ff803f]">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden h-0 flex-1 border-t-2 border-dashed border-peach lg:block"
                  />
                )}
              </div>
              <h3 className="font-display text-[20px] font-semibold text-ink">{step.title}</h3>
              <p className="font-body text-[16px] font-light leading-relaxed text-muted-text">
                {step.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
