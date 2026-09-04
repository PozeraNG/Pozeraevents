import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const checklist = [
  "Every plan starts with a clear, itemised budget, no surprise costs later.",
  "One point of contact throughout, so nothing gets lost between vendors.",
];

export default function AboutPageHero() {
  return (
    <section className="relative overflow-hidden bg-white-bg pb-24">
      <Image
        src="/images/hero-bg-paint.png"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover object-bottom opacity-50"
      />

      <RevealGroup as="div" trigger="mount" stagger={0.14} delay={0.15} className="relative mx-auto max-w-[1140px] px-6 pt-16 text-center sm:pt-20">
        <RevealItem as="h1" variant="fade-up-blur" className="font-display text-fluid-h1 font-bold leading-[1.1] tracking-[-2px] text-ink">
          About <span className="text-[#ff803f]">Us!</span>
        </RevealItem>
        <RevealItem
          as="p"
          className="mx-auto mt-4 max-w-[564px] font-body text-[18px] font-light leading-[31px] text-muted-text sm:text-[22px]"
        >
          Pozera Events is a full-service planning company built on one idea: whatever
          you&apos;re planning, we plan it — with the same care, the same structure, and the
          same calm, whether it&apos;s a wedding, a corporate launch, or a naming ceremony.
        </RevealItem>
        <RevealItem as="p" className="mt-4 font-body text-[18px]">
          <Link href="/" className="text-ink hover:text-brand-orange">
            Home -
          </Link>{" "}
          <span className="text-peach">About</span>
        </RevealItem>
      </RevealGroup>

      <div className="relative mx-auto mt-16 flex max-w-[1140px] flex-col items-center gap-12 px-6 lg:flex-row lg:items-center lg:gap-[43px]">
        <RevealGroup as="div" trigger="mount" stagger={0.1} delay={0.55} className="relative flex w-full max-w-[540px] flex-col gap-[23px]">
          <Reveal
            variant="fade-in"
            duration={1.2}
            className="pointer-events-none absolute -left-16 top-8 hidden lg:block"
          >
            <Image src="/images/about-bird-icon.png" alt="" aria-hidden width={100} height={113} className="animate-float-slow" />
          </Reveal>

          <RevealItem as="p" className="font-display text-[22px] text-peach">
            Who We Are
          </RevealItem>

          <div className="flex flex-col gap-[9px]">
            <RevealItem as="h2" variant="fade-up-blur" className="font-display text-fluid-h2 font-bold leading-tight text-charcoal-card">
              Planner for Your
              <br />
              Perfect Event
            </RevealItem>
            <RevealItem as="p" className="pr-0 pt-2 font-body text-[18px] font-light leading-[30px] text-muted-text lg:pr-8 lg:text-[22px]">
              We don&apos;t specialise in one type of celebration, we specialise in planning
              done properly. From the first conversation about your budget and guest list to
              the last vendor packing up, Pozera Events handles the details so you can actually
              be present at your own event.
            </RevealItem>

            <RevealGroup as="ul" stagger={0.1} className="mt-2 flex flex-col gap-[23px]">
              {checklist.map((item) => (
                <RevealItem as="li" key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex size-[18px] shrink-0 items-center justify-center rounded-full border-2 border-muted-text text-[10px] text-muted-text">
                    <FaCheck />
                  </span>
                  <span className="font-body text-[18px] text-muted-text sm:text-[22px]">
                    {item}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <RevealItem>
            <Link
              href="/book-consultation"
              className="mt-2 inline-flex w-fit items-center rounded-[72px] border-2 border-[#fd7e14] px-7 py-4 font-body capitalize text-[#ff803f] transition duration-300 hover:scale-[1.03] hover:bg-brand-orange hover:text-white hover:shadow-[0_10px_20px_-8px_rgba(253,126,20,0.4)]"
            >
              Get A Free Quote
            </Link>
          </RevealItem>
        </RevealGroup>

        <Reveal
          as="div"
          trigger="mount"
          delay={0.75}
          variant="scale-in"
          duration={0.9}
          className="relative aspect-[466/590] w-full max-w-[466px] shrink-0 overflow-hidden rounded-tl-[50px] rounded-br-[50px] border-[6px] border-white bg-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)]"
        >
          <Image
            src="/images/about-page-hero-portrait.jpg"
            alt="Pozera Events team member"
            fill
            priority
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
