import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AboutPageHero from "@/components/AboutPageHero";
import AboutStory from "@/components/AboutStory";
import AboutStats from "@/components/AboutStats";
import AboutFunFacts from "@/components/AboutFunFacts";

export const metadata: Metadata = {
  title: "About Us | Pozera Events",
  description:
    "Pozera Events is a full-service planning company built on one idea: whatever you're planning, we plan it.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutPageHero />
        <AboutStory />
        <AboutStats />
        <AboutFunFacts />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
