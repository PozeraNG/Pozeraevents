import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ConsultationForm from "@/components/ConsultationForm";
import Link from "next/link";
import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Book Consultation | Pozera Events",
  description:
    "For all event planning inquiries, please fill out the form below and you'll hear from us within 1-2 business days.",
};

export default function BookConsultationPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-white-bg py-16 sm:py-20">
          <Image
            src="/images/hero-bg-paint.png"
            alt=""
            fill
            aria-hidden
            className="pointer-events-none object-cover object-bottom opacity-50"
          />

          <RevealGroup
            as="div"
            trigger="mount"
            stagger={0.14}
            delay={0.15}
            className="relative mx-auto flex max-w-[1140px] flex-col items-center gap-5 px-6 text-center"
          >
            <RevealItem as="h1" variant="fade-up-blur" className="font-display text-fluid-h1 font-bold leading-[1.1] tracking-[-2px] text-ink">
              Book <span className="text-[#ff803f]">Consultation!</span>
            </RevealItem>
            <RevealItem as="p" className="max-w-[564px] font-body text-[18px] font-light leading-[31px] text-muted-text sm:text-[22px]">
              For all event planning inquiries, please fill out the form below and
              you&apos;ill hear from us within 1-2 business days
            </RevealItem>
            <RevealItem as="p" className="font-body text-[18px]">
              <Link href="/" className="text-ink hover:text-brand-orange">
                Home -
              </Link>{" "}
              <span className="text-peach">Book Consultation</span>
            </RevealItem>
          </RevealGroup>
        </section>

        <ConsultationForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
