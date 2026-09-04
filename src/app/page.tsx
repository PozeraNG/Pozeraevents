import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoCollections from "@/components/VideoCollections";
import Services from "@/components/Services";
import WeddingShowcase from "@/components/WeddingShowcase";
import HowWeWork from "@/components/HowWeWork";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import AcademyCTA from "@/components/AcademyCTA";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <VideoCollections />
        <Services />
        <WeddingShowcase />
        <HowWeWork />
        <Team />
        <Testimonial />
        <AcademyCTA />
        <InstagramFeed />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
