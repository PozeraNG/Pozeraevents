"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import AnnouncementBar from "./AnnouncementBar";
import { Reveal } from "./motion/Reveal";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Academy", href: "/academy" },
];

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/pozera_events/", label: "Instagram" },
  { icon: SiTiktok, href: "https://www.tiktok.com/@pozeraevents?_r=1&_t=ZN-99Rui39u4tm", label: "TikTok" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/#home" ? pathname === "/" : pathname === href;

  return (
    <Reveal as="header" trigger="mount" variant="fade-down" duration={0.5} className="sticky top-0 z-50 w-full bg-white-bg">
      <div className="relative h-[35px] w-full overflow-hidden bg-[#ff803f] text-white">
        {/* The marquee is confined to the middle strip between the "Announcement:" label
            and the "Follow us on" block (rather than running full-bleed underneath them),
            so it can never show through behind either block at any viewport width. */}
        <div className="mx-auto flex h-full w-full max-w-[1330px] items-center px-6">
          <div className="flex h-full shrink-0 items-center bg-[#fd7e14] pr-3">
            <span className="whitespace-nowrap font-body text-[15px] font-bold text-[#ff0000] sm:text-[18px]">
              Announcement:
            </span>
          </div>

          <div className="relative h-full min-w-0 flex-1 overflow-hidden">
            <AnnouncementBar />
          </div>

          <div className="flex h-full shrink-0 items-center gap-2 py-[6px] pl-8">
            <span className="hidden font-body text-[16px] leading-[18px] sm:inline">Folllow us on:</span>
            <div className="flex items-center gap-[8.8px]">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[16px] hover:opacity-80"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1330px] items-center justify-between gap-4 px-6 py-[7px] lg:mt-[20px]">
        <Link href="/#home" aria-label="Pozera Events home" className="shrink-0">
          <Image src="/images/logo.png" alt="Pozera Events" width={79} height={49} priority />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-[38px] lg:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`whitespace-nowrap font-body text-[16px] leading-[20px] transition-colors duration-200 xl:text-[18px] ${
                isActive(href) ? "text-[#ff803f]" : "text-ink"
              } hover:text-[#ff803f]`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:gap-[9.81px] lg:flex">
          <Link
            href="/book-consultation"
            className="whitespace-nowrap rounded-[35px] border-2 border-[#ff803f] bg-[#ff803f] px-5 py-[12px] font-body text-[14px] leading-[16px] text-white transition duration-300 hover:scale-[1.03] hover:bg-[#e86f2f] xl:px-7 xl:py-[15px] xl:text-[16px]"
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            aria-label="Search"
            className="rounded-full border-2 border-peach px-[13px] py-[12px] text-peach transition hover:bg-peach/10 xl:px-[15px] xl:py-[14px]"
          >
            <FaSearch className="text-[16px]" />
          </button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border-2 border-peach text-brand-orange lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-black/5 bg-white-bg px-6 py-6 lg:hidden">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-body text-[18px] ${isActive(href) ? "text-[#ff803f]" : "text-ink"}`}
            >
              {label}
            </a>
          ))}
          <Link
            href="/book-consultation"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-fit rounded-[35px] border-2 border-[#ff803f] bg-[#ff803f] px-7 py-[15px] font-body text-[16px] text-white"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </Reveal>
  );
}
