import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ServicesHero from "@/components/ServicesHero";
import Services from "@/components/Services";
import InstagramFeed from "@/components/InstagramFeed";

export const metadata: Metadata = {
  title: "Services | Pozera Events",
  description:
    "A full range of event planning services — from first concept to final toast — tailored to whatever you're celebrating.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <Services />
        <InstagramFeed />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
