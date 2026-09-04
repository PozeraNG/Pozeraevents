"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const levels = ["Complete beginner", "Some experience", "Currently planning events", "Experienced planner"];

export default function AcademyCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = `Hi, I'm interested in the Event Planning Academy.\nName: ${name}\nEmail: ${email}\nLocation: ${location}\nLevel in event planning: ${level || "Not specified"}`;
    const url = `https://wa.me/2348146117487?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="academy" className="relative overflow-hidden bg-[#fcf8f4] py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:gap-12">
        <Reveal
          as="div"
          variant="scale-in"
          duration={0.8}
          className="relative aspect-[542/678] w-full max-w-[542px] shrink-0 overflow-hidden rounded-tr-[100px] rounded-bl-[100px] border-2 border-white bg-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)]"
        >
          <Image
            src="/images/academy-promo-card.jpg"
            alt="Pozera Events Academy — 4 Weeks Event Planning Training"
            fill
            className="object-cover"
          />
        </Reveal>

        <RevealGroup as="div" stagger={0.12} className="relative flex w-full max-w-[652px] flex-col gap-6">
          <Reveal
            variant="fade-in"
            duration={1.2}
            className="pointer-events-none absolute right-0 top-0 hidden sm:block"
          >
            <Image src="/images/academy-doodle.png" alt="" aria-hidden width={100} height={72} className="animate-float-slow" />
          </Reveal>

          <RevealItem>
            <Image src="/images/academy-logo.png" alt="Pozera Events Academy" width={176} height={131} />
          </RevealItem>

          <RevealItem as="h2" variant="fade-up-blur" className="-mt-3 font-display text-fluid-h2 font-bold leading-tight text-charcoal-card">
            Learn to plan events professionally — in four weeks.
          </RevealItem>
          <RevealItem as="p" className="font-body text-[18px] font-light leading-[30px] text-muted-text lg:text-[22px]">
            A hands-on, in-person course for anyone who wants to build a career in event
            planning. Taught by Pozera Events founder Paul Glory, with three months of
            mentorship after you graduate.
          </RevealItem>

          <RevealItem duration={0.7}>
            <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
              <RevealGroup as="div" stagger={0.08} className="grid grid-cols-2 gap-3 sm:gap-4">
                <RevealItem
                  as="label"
                  className="relative flex h-[48px] items-center rounded-2xl border border-[#ff803f] bg-white px-3 shadow-[0px_6px_38px_0px_#dae0e5] sm:h-[58px] sm:rounded-[24px] sm:px-[24px]"
                >
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent font-body text-[12px] text-ink placeholder:text-muted-text-secondary focus:outline-none sm:text-[14px]"
                  />
                </RevealItem>
                <RevealItem
                  as="label"
                  className="relative flex h-[48px] items-center rounded-2xl border border-[#ff803f] bg-white px-3 shadow-[0px_6px_38px_0px_#dae0e5] sm:h-[58px] sm:rounded-[24px] sm:px-[24px]"
                >
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent font-body text-[12px] text-ink placeholder:text-muted-text-secondary focus:outline-none sm:text-[14px]"
                  />
                </RevealItem>
                <RevealItem
                  as="label"
                  className="relative flex h-[48px] items-center rounded-2xl border border-[#ff803f] bg-white px-3 shadow-[0px_6px_38px_0px_#dae0e5] sm:h-[58px] sm:rounded-[24px] sm:px-[24px]"
                >
                  <input
                    type="text"
                    required
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent font-body text-[12px] text-ink placeholder:text-muted-text-secondary focus:outline-none sm:text-[14px]"
                  />
                </RevealItem>
                <RevealItem
                  as="label"
                  className="relative flex h-[48px] items-center rounded-2xl border border-[#ff803f] bg-white px-3 shadow-[0px_6px_38px_0px_#dae0e5] sm:h-[58px] sm:rounded-[24px] sm:px-[24px]"
                >
                  <select
                    required
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full bg-transparent font-body text-[11px] text-form-text focus:outline-none sm:text-[14px]"
                  >
                    <option value="" disabled>
                      Level in event planning
                    </option>
                    {levels.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </RevealItem>
              </RevealGroup>

              <Reveal delay={0.1}>
                <button
                  type="submit"
                  className="w-fit rounded-[72px] border-2 border-white bg-brand-orange px-[55px] py-4 font-body text-[18px] text-white transition duration-300 hover:scale-[1.03] hover:bg-[#e86f2f] hover:shadow-[0_12px_24px_-8px_rgba(253,126,20,0.5)]"
                >
                  Enroll via WhatsApp
                </button>
              </Reveal>
            </form>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
