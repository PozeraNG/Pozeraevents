import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaCalendarCheck, FaPhoneAlt, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const companyLinksLeft = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Organizer", href: "/#team" },
];

const companyLinksRight = [
  { label: "Home", href: "/#home" },
  { label: "Pricing", href: "/academy" },
  { label: "Contact Us", href: "#footer-contact" },
  { label: "Gallery Single", href: "/gallery" },
];

const socials = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/pozera_events/",
    bg: "linear-gradient(45deg, #fdf497, #fd5949, #8134af)",
    color: "#fff",
    label: "Instagram",
  },
  {
    icon: SiTiktok,
    href: "https://www.tiktok.com/@pozeraevents?_r=1&_t=ZN-99Rui39u4tm",
    bg: "#ffffff",
    color: "#000000",
    border: "1px solid #232323",
    label: "TikTok",
  },
  { icon: FaFacebookF, href: "#", bg: "#1877f2", color: "#fff", label: "Facebook" },
  { icon: FaLinkedinIn, href: "#", bg: "#3272bd", color: "#fff", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white-bg py-24">
      <Reveal
        variant="fade-in"
        duration={1.2}
        className="pointer-events-none absolute bottom-0 right-6 hidden opacity-70 lg:block"
      >
        <Image src="/images/footer-mandala.png" alt="" aria-hidden width={370} height={231} />
      </Reveal>
      <Reveal
        variant="fade-in"
        duration={1.2}
        className="pointer-events-none absolute left-10 top-16 hidden sm:block"
      >
        <Image src="/images/footer-birds.png" alt="" aria-hidden width={100} height={72} className="animate-float-slow" />
      </Reveal>

      <div className="relative mx-auto max-w-[1360px] px-6">
        {/* CTA row — shares the same 475fr/95fr/285fr/285fr column template as the row below,
            so "Let's Start Planning!" and the buttons line up with the columns beneath them. */}
        <RevealGroup
          as="div"
          stagger={0.12}
          className="grid grid-cols-1 items-center gap-6 border-b border-black/5 pb-12 text-center lg:grid-cols-[475fr_95fr_285fr_285fr] lg:gap-0 lg:text-left"
        >
          <RevealItem as="h2" variant="fade-up-blur" className="font-display text-fluid-h3 font-bold text-charcoal-card lg:col-span-2 lg:pl-[16.7%]">
            Let&apos;s Start Planning!
          </RevealItem>
          <RevealItem className="flex flex-wrap items-center justify-center gap-4 lg:col-span-2 lg:justify-start lg:pl-[5%]">
            <Link
              href="/book-consultation"
              className="flex h-[63px] items-center gap-3 rounded-[60px] border-2 border-peach bg-brand-orange px-8 font-body text-[18px] text-white transition duration-300 hover:scale-[1.03] hover:bg-[#e86f2f] hover:shadow-[0_12px_24px_-8px_rgba(253,126,20,0.5)]"
            >
              <FaCalendarCheck />
              Make Reservations
            </Link>
            <a
              href="#about"
              className="inline-flex items-center rounded-[72px] border-2 border-[#ff803f] px-9 py-4 font-body capitalize text-[#ff803f] transition duration-300 hover:scale-[1.03] hover:bg-brand-orange hover:text-white"
            >
              Learn More
            </a>
          </RevealItem>
        </RevealGroup>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[475fr_95fr_285fr_285fr] lg:gap-0">
          <Reveal
            as="div"
            variant="scale-in"
            duration={0.8}
            className="flex aspect-[445/450] w-full max-w-[445px] flex-col items-center justify-center gap-[21px] rounded-[240px] bg-[#fcf8f4] px-12 py-14 text-center"
          >
            <Image src="/images/footer-logo.png" alt="Pozera Events" width={191} height={117} />
            <p className="font-body text-[18px] font-light leading-[30px] text-muted-text">
              Full-service event planning and coordination for every occasion — plus the
              Pozera Events Academy, training the next generation of planners.
            </p>
            <div className="flex gap-[4.8px]">
              {socials.map(({ icon: Icon, href, bg, color, border, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ background: bg, color, border }}
                  className="flex size-[33px] items-center justify-center rounded-full transition duration-300 hover:scale-110 hover:opacity-90"
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </Reveal>

          <div />

          <RevealGroup as="div" stagger={0.1} className="grid grid-cols-2 gap-8 lg:gap-0">
            <RevealItem>
              <h3 className="font-body text-[22px] font-semibold uppercase text-ink">Company</h3>
              <ul className="mt-4 flex flex-col gap-4">
                {companyLinksLeft.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="font-body text-[18px] font-light text-muted-text transition-colors hover:text-brand-orange">
                      › {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </RevealItem>
            <RevealItem className="mt-[42px]">
              <ul className="flex flex-col gap-4">
                {companyLinksRight.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="font-body text-[18px] font-light text-muted-text transition-colors hover:text-brand-orange">
                      › {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </RevealItem>
          </RevealGroup>

          <Reveal as="div" delay={0.1} id="footer-contact" className="relative flex flex-col gap-[34px] pt-4 lg:pt-16">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                <FaPhoneAlt size={14} />
              </span>
              <div>
                <p className="font-body text-[18px] text-brand-orange">Call Us:</p>
                <p className="font-body text-[18px] font-light text-muted-text">+234 814 611 7487</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                <FaEnvelope size={14} />
              </span>
              <div>
                <p className="font-body text-[18px] text-brand-orange">Email Us:</p>
                <p className="font-body text-[18px] font-light text-muted-text">help@Pozeraevents.com</p>
              </div>
            </div>

            <button
              type="button"
              aria-label="Chat with us"
              className="absolute -top-20 right-4 hidden size-[70px] items-center justify-center rounded-full bg-brand-orange text-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] transition duration-300 hover:scale-110 hover:bg-[#e86f2f] lg:flex"
            >
              <FaCommentDots size={26} />
            </button>
          </Reveal>
        </div>

        <p className="mt-16 text-center font-body text-[18px] font-light text-muted-text lg:pl-[41.7%] lg:text-left">
          Copyright ©2026 Pozeraevents.com All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
