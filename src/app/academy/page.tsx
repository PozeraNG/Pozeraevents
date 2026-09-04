import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AcademyHero from "@/components/AcademyHero";
import AcademyCTA from "@/components/AcademyCTA";
import PlannersCommunity from "@/components/PlannersCommunity";

export const metadata: Metadata = {
  title: "Academy | Pozera Events",
  description:
    "Learn to plan events professionally in four weeks with the Pozera Events Academy — plus a free community of event planners to grow with.",
};

export default function AcademyPage() {
  return (
    <>
      <Header />
      <main>
        <AcademyHero />
        <AcademyCTA />
        <PlannersCommunity />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
