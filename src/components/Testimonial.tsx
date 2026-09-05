"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuoteRight, FaPlay, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const reviews = [
  {
    couple: "Bolanle & Opeyemi",
    photo: "/images/testimonial-photo-2.jpg",
    photoAlt: "Bolanle & Opeyemi at their wedding celebration",
    quote: (
      <>
        Pozera eventssssss
        <br />
        My wedding paparazzi will not be complete without me appreciating you for your service
        . Thank you so so much, you have a great team and your team members are very lovely
        and good. You made my bridal experience so easy and stress free especially for the two
        days. If the bridal assistant could bath me, I&apos;m sure she would. May God be with
        you and enlarge your brand more than your imagination. Thank you so much for being
        part of our big day and even the energy after the party. God bless you.I truly
        appreciate your team
      </>
    ),
  },
  {
    couple: "Rose & Reuben",
    photo: "/images/testimonial-rose-new.png",
    photoAlt: "Rose & Reuben at their traditional wedding ceremony",
    quote: (
      <>
        Honestly, thank you so much for making our wedding a beautiful success. Your
        professionalism, patience, and calmness throughout the process were truly impressive.
        You coordinated all our vendors so well and ensured everyone delivered excellently,
        even on short notice. You made the entire planning process feel less overwhelming and
        gave us peace of mind. Your attention to detail, coordination, and problem-solving made
        a huge difference. You were more than an event planner—you were someone we could trust
        to get things done. We will gladly and wholeheartedly recommend you to anyone looking
        for an amazing event planner.
      </>
    ),
  },
  {
    couple: "Titilayo & Olamide",
    photo: "/images/testimonial-titilayo.png",
    photoAlt: "Titilayo & Olamide at their wedding celebration",
    quote: (
      <>
        &ldquo;I just want to say a very big thank you for the amazing job you did at my
        wedding. Everything went smoothly, beautifully, and even better than I imagined. Your
        professionalism, patience, and effort did not go unnoticed. Thank you for making our
        special day such a success. I truly appreciate you.&rdquo;
        <br />
        #THEAYOOLAAFFAIRS26
      </>
    ),
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const go = (direction: 1 | -1) => {
    setIndex((prev) => (prev + direction + reviews.length) % reviews.length);
  };

  return (
    <section className="relative bg-white-bg py-16">
      <div className="mx-auto max-w-[1360px] px-6">
        <RevealGroup as="div" stagger={0.1} className="mb-12 flex items-center justify-center gap-4 lg:justify-start">
          <RevealItem>
            <Image
              src="/images/testimonial-doodle.png"
              alt=""
              aria-hidden
              width={80}
              height={90}
              className="hidden sm:block"
            />
          </RevealItem>
          <RevealItem as="h2" variant="fade-up-blur" className="font-display text-fluid-h2 font-bold text-charcoal-card">
            Clients Review
          </RevealItem>
        </RevealGroup>

        <div className="relative mx-auto flex max-w-[1287px] flex-col items-center lg:block lg:min-h-[720px]">
          <Reveal
            as="div"
            variant="scale-in"
            duration={0.8}
            className="relative order-1 aspect-[665/523] w-full max-w-[665px] overflow-hidden rounded-tl-[100px] border-[3px] border-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] lg:absolute lg:left-[48.3%] lg:top-[5.3%] lg:order-none lg:w-[51.7%]"
          >
            <Image src={review.photo} alt={review.photoAlt} fill className="object-cover" />

            <div className="absolute bottom-6 right-6 flex gap-3">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => go(-1)}
                className="flex size-[58px] items-center justify-center rounded-full border-2 border-white bg-brand-orange text-white shadow-[0px_21px_35px_-17px_rgba(20,18,18,0.2)] transition duration-300 hover:scale-110 hover:bg-[#e86f2f]"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => go(1)}
                className="flex size-[58px] items-center justify-center rounded-full border-2 border-white bg-brand-orange text-white shadow-[0px_21px_35px_-17px_rgba(20,18,18,0.2)] transition duration-300 hover:scale-110 hover:bg-[#e86f2f]"
              >
                <FaChevronRight />
              </button>
            </div>
          </Reveal>

          <Reveal
            as="div"
            delay={0.2}
            className="relative z-10 order-2 -mt-10 flex w-full max-w-[832px] flex-col items-center gap-4 rounded-br-[100px] bg-white p-8 text-center shadow-[0px_4px_4px_#ff803f] sm:p-[50px] lg:absolute lg:left-0 lg:top-[16.2%] lg:order-none lg:m-0 lg:w-[64.6%]"
          >
            <span className="flex size-20 items-center justify-center rounded-full bg-brand-orange text-white">
              <FaQuoteRight size={28} />
            </span>
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-[28px] text-[#f5a623]" />
              ))}
            </div>
            <h3 className="w-full text-center font-display text-fluid-h3 font-bold text-charcoal-card">
              {review.couple}
            </h3>
            <p className="font-body text-[18px] font-light leading-[30px] text-ink sm:text-[22px]">
              {review.quote}
            </p>
            <a
              href="#gallery"
              className="mt-2 inline-flex items-center gap-[5px] rounded-[72px] border-2 border-[#ff803f] px-8 py-4 font-body text-[#ff803f] transition duration-300 hover:scale-[1.03] hover:bg-brand-orange hover:text-white hover:shadow-[0_10px_20px_-8px_rgba(255,128,63,0.4)]"
            >
              <FaPlay size={14} />
              See the Story
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
