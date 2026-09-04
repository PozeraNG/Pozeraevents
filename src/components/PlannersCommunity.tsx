import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const joinUrl = "https://chat.whatsapp.com/JN9mYSd5Gst2H2EJ0Xk2sP?mode=gi_t";

export default function PlannersCommunity() {
  return (
    <section className="bg-white-bg px-6 py-24">
      <div className="mx-auto flex max-w-[1345px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-0">
        <RevealGroup as="div" stagger={0.12} className="flex w-full max-w-[563px] flex-col items-start gap-3 lg:py-0">
          <RevealItem>
            <Image src="/images/community-logo.png" alt="" aria-hidden width={150} height={94} className="w-[120px] sm:w-[150px]" />
          </RevealItem>
          <RevealItem as="p" className="w-full text-center font-body text-[22px] font-medium text-brand-orange lg:text-left">
            POZERA PLANNERS COMMUNITY
          </RevealItem>
          <RevealItem as="h2" variant="fade-up-blur" className="font-display text-fluid-h2 font-bold leading-tight text-charcoal-card">
            You Don&apos;t have to Plan Events <span className="text-brand-orange">Alone</span>
          </RevealItem>
          <RevealItem as="p" className="font-body text-[18px] font-light leading-[30px] text-muted-text sm:text-[22px]">
            Join a growing community of event planners to connect, learn, share ideas, and grow
            together — <span className="text-brand-orange">completely free.</span>
          </RevealItem>
          <RevealItem
            as="a"
            href={joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center rounded-[72px] border-2 border-white bg-brand-orange px-[55px] py-4 font-body text-[18px] text-white transition duration-300 hover:scale-[1.03] hover:bg-[#e86f2f] hover:shadow-[0_12px_24px_-8px_rgba(253,126,20,0.5)]"
          >
            Join the Community — It&apos;s Free
          </RevealItem>
        </RevealGroup>

        <Reveal
          as="div"
          variant="scale-in"
          duration={0.9}
          delay={0.1}
          className="relative aspect-[782/884] w-full max-w-[782px] shrink-0"
        >
          <Image src="/images/community-collage.png" alt="Pozera Planners Community" fill className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
