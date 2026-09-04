import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const badgeClass =
  "inline-flex items-center justify-center rounded-[72px] bg-brand-orange px-4 py-1 font-body text-[18px] font-light text-white";

export default function GalleryGrid() {
  return (
    <section className="relative overflow-hidden bg-white-bg py-24">
      <Reveal
        variant="fade-in"
        duration={1.2}
        className="pointer-events-none absolute -right-4 top-[38%] hidden opacity-80 xl:block"
      >
        <Image src="/images/gallery-design-img.png" alt="" aria-hidden width={391} height={624} className="animate-float-slow" />
      </Reveal>

      <div className="relative mx-auto flex max-w-[1140px] flex-col items-center gap-10 px-6">
        <RevealGroup as="div" stagger={0.15} amount={0.1} className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-0">
          <RevealItem
            variant="scale-in"
            duration={0.7}
            className="group flex w-full max-w-[665px] flex-col overflow-hidden rounded-tl-[50px] rounded-bl-[55px] rounded-tr-[55px] bg-white pb-8 shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] lg:px-0"
          >
            <div className="relative aspect-[635/540] w-full overflow-hidden rounded-tr-[59px] border-[5px] border-white">
              <Image
                src="/images/gallery-bolanle.png"
                alt="Bolanle & Opeyemi's wedding"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center gap-[15px] pt-5">
              <span className={badgeClass}>06/12/2025</span>
              <h3 className="font-display text-[32px] font-bold text-charcoal-card sm:text-[40px]">
                Bolanle &amp; Opeyemi
              </h3>
              <p className="font-body text-[18px] font-light text-muted-text sm:text-[22px]">Lagos, Nigeria</p>
            </div>
          </RevealItem>

          <RevealGroup as="div" stagger={0.12} className="flex w-full max-w-[475px] flex-col gap-[30px] lg:pl-[30px]">
            <RevealItem
              variant="scale-in"
              duration={0.6}
              className="group flex w-full flex-col overflow-hidden rounded-bl-[55px] rounded-tr-[55px] bg-white pb-8 shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]"
            >
              <div className="relative aspect-[438/303] w-full overflow-hidden rounded-tr-[59px] border-[5px] border-white">
                <Image
                  src="/images/gallery-favex.png"
                  alt="Favex App event"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center gap-2 pt-7">
                <span className={badgeClass}>18/08/2025</span>
                <h3 className="font-display text-[24px] font-bold text-ink sm:text-[30px]">Favex App</h3>
                <p className="font-body text-[18px] font-light text-muted-text sm:text-[22px]">Lagos, Nigeria</p>
              </div>
            </RevealItem>

            <RevealItem
              variant="scale-in"
              duration={0.6}
              className="group relative aspect-[445/220] w-full overflow-hidden rounded-br-[50px] shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)]"
            >
              <Image
                src="/images/gallery-img3.png"
                alt=""
                aria-hidden
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </RevealItem>
          </RevealGroup>
        </RevealGroup>

        <RevealGroup as="div" stagger={0.12} className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <RevealItem
            variant="scale-in"
            duration={0.6}
            className="group flex flex-col overflow-hidden rounded-tl-[55px] bg-white pb-8 shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-tl-[55px]">
              <Image
                src="/images/gallery-chidera.png"
                alt="Chidera & Benjamin's wedding"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center gap-2 pt-5">
              <span className={badgeClass}>21/09/2025</span>
              <h3 className="font-display text-[24px] font-bold text-ink sm:text-[30px]">Chidera &amp; Benjamin</h3>
              <p className="font-body text-[18px] font-light text-muted-text sm:text-[22px]">Lagos, Nigeria</p>
            </div>
          </RevealItem>

          <RevealItem
            variant="scale-in"
            duration={0.6}
            className="group flex flex-col overflow-hidden bg-white pb-8 shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/images/gallery-titilayo.png"
                alt="Titilayo & Olamide's wedding"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center gap-2 pt-5">
              <span className={badgeClass}>11/06/2026</span>
              <h3 className="font-display text-[24px] font-bold text-charcoal-card sm:text-[30px]">Titilayo &amp; Olamide</h3>
              <p className="font-body text-[18px] font-light text-muted-text sm:text-[22px]">Lagos, Nigeria</p>
            </div>
          </RevealItem>

          <RevealItem
            variant="scale-in"
            duration={0.6}
            className="group flex flex-col overflow-hidden rounded-bl-[55px] rounded-tr-[55px] bg-white pb-8 shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-tr-[50px]">
              <Image
                src="/images/gallery-rose.png"
                alt="Rose & Reuben's wedding"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center gap-2 pt-5">
              <span className={badgeClass}>29/08/2026</span>
              <h3 className="font-display text-[24px] font-bold text-ink sm:text-[30px]">Rose &amp; Reuben</h3>
              <p className="font-body text-[18px] font-light text-muted-text sm:text-[22px]">Ibadan, Nigeria</p>
            </div>
          </RevealItem>
        </RevealGroup>

        <Reveal>
          <Link
            href="/book-consultation"
            className="rounded-[72px] border-2 border-[#ff803f] px-9 py-4 font-body capitalize text-[#ff803f] transition duration-300 hover:scale-[1.03] hover:bg-brand-orange hover:text-white hover:shadow-[0_10px_20px_-8px_rgba(255,128,63,0.4)]"
          >
            Book Consultation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
