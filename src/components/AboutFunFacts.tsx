import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import SkillBar from "./SkillBar";

const bullets = [
  "We listen before we plan. Every proposal is built around your event, not a template.",
  "We manage every vendor directly, so you're never chasing three different people.",
  "We plan for what could go wrong, so on the day, nothing feels like a crisis.",
  "We're transparent about cost from the first conversation to the final invoice.",
];

const skills = [
  { label: "Professionality", value: 100 },
  { label: "Quality", value: 99 },
  { label: "Experience", value: 100 },
  { label: "Guarantee", value: 100 },
];

export default function AboutFunFacts() {
  return (
    <section className="relative overflow-hidden bg-white-bg py-24">
      <Reveal
        variant="fade-in"
        duration={1.2}
        className="pointer-events-none absolute left-6 top-16 hidden lg:block"
      >
        <Image src="/images/about-bird-icon.png" alt="" aria-hidden width={100} height={113} className="animate-float-slow" />
      </Reveal>

      <div className="mx-auto flex max-w-[1360px] flex-col gap-14 px-6 lg:flex-row lg:gap-0">
        <RevealGroup as="div" stagger={0.12} className="flex w-full max-w-[540px] flex-col gap-5">
          <RevealItem as="p" className="font-display text-[22px] text-peach">
            Pozera Fun Facts
          </RevealItem>
          <RevealItem as="h2" variant="fade-up-blur" className="font-display text-fluid-h2 font-bold leading-tight text-charcoal-card">
            What You Get Working With Pozera
          </RevealItem>
          <RevealItem as="p" className="font-body text-[18px] font-light leading-[30px] text-muted-text lg:text-[22px]">
            {bullets.map((bullet, i) => (
              <span key={bullet}>
                — {bullet}
                {i < bullets.length - 1 && <br />}
              </span>
            ))}
          </RevealItem>
        </RevealGroup>

        <div className="hidden w-[95px] shrink-0 lg:block" />

        <RevealGroup as="div" stagger={0.1} className="flex w-full max-w-[570px] flex-col gap-5">
          {skills.map((skill) => (
            <RevealItem key={skill.label} className="flex flex-col gap-2">
              <SkillBar label={skill.label} value={skill.value} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
