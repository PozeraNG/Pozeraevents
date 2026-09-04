import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";
import GalleryInstagramFeed from "@/components/GalleryInstagramFeed";

export const metadata: Metadata = {
  title: "Gallery | Pozera Events",
  description:
    "Explore a collection of unforgettable celebrations, beautifully crafted details, and extraordinary moments by Pozera Events.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <GalleryHero />
        <GalleryGrid />
        <GalleryInstagramFeed />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
