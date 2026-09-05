import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const team = [
  { src: "/images/team-paul-new.png", name: "Paul Ugoma Glory", title: "Lead Planner" },
  { src: "/images/team-efetobore-new.png", name: "Efetobore Praise Okpako", title: "Project Manager" },
  { src: "/images/team-akinte.jpg", name: "Akinte Elizabeth Ayooluwa", title: "Academy Admin" },
  { src: "/images/team-rotimi.png", name: "Rotimi Oluwademilade", title: "Project Manager" },
];

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-[#fcf8f4] py-16">
      <Reveal
        variant="fade-in"
        duration={1.2}
        className="pointer-events-none absolute right-10 top-10 hidden sm:block"
      >
        <Image src="/images/team-doodle.png" alt="" aria-hidden width={139} height={100} className="animate-float-slow" />
      </Reveal>

      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-14 px-6 lg:flex-row lg:items-center lg:justify-between">
        <RevealGroup as="div" stagger={0.12} className="flex max-w-[420px] flex-col items-center gap-3 text-center">
          <RevealItem>
            <Image src="/images/team-crest.png" alt="" width={150} height={94} />
          </RevealItem>
          <RevealItem as="h2" variant="fade-up-blur" className="font-display text-fluid-h2 font-bold leading-tight text-charcoal-card">
            Meet Our Creative
            <br />
            Event Organizer
          </RevealItem>
          <RevealItem as="p" className="font-body text-[18px] font-light leading-relaxed text-muted-text lg:text-[22px]">
            Meet the passionate minds behind Pozera Events. Our dedicated team brings
            creativity, expertise, and attention to detail together to create seamless and
            unforgettable events.
          </RevealItem>
          <RevealItem>
            <a
              href="#about"
              className="mt-2 inline-flex items-center rounded-[72px] border-2 border-[#ff803f] bg-[#fcf5f2] px-9 py-4 font-body capitalize text-brand-orange transition duration-300 hover:scale-[1.03] hover:bg-brand-orange hover:text-white hover:shadow-[0_10px_20px_-8px_rgba(255,128,63,0.4)]"
            >
              Learn More
            </a>
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          as="div"
          stagger={0.1}
          className="grid w-full max-w-[380px] grid-cols-1 gap-y-6 sm:max-w-[570px] sm:grid-cols-2 sm:gap-x-[43px] sm:gap-y-[53px]"
        >
          {team.map((member, i) => (
            <RevealItem
              key={member.name}
              className={`group overflow-hidden rounded-[4px] border border-black/10 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.25)] ${
                i % 2 === 1 ? "sm:mt-[53px]" : ""
              }`}
            >
              <div className="relative aspect-[8/7] w-full overflow-hidden bg-[#c3d4db] sm:aspect-[261/214]">
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center gap-1 py-4 text-center sm:gap-0.5 sm:py-[13px]">
                <p className="font-display text-[22px] text-ink sm:text-[20px]">{member.name}</p>
                <p className="font-display text-[17px] italic text-brand-orange sm:text-[16px]">{member.title}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
