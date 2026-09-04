import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import Script from "next/script";
import WelcomeIntro from "@/components/WelcomeIntro";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageTransition from "@/components/PageTransition";
import NavTransition from "@/components/NavTransition";
import "./globals.css";

// Runs before hydration/paint. If the welcome intro already played this session,
// hide it via a plain CSS class before the browser ever paints it — this is what
// prevents a repeat visit from flashing the intro (React's own check in
// WelcomeIntro runs after hydration, which is too late to avoid a flash on its own).
const SKIP_INTRO_SCRIPT = `
try {
  if (sessionStorage.getItem('pozera-welcome-shown') === '1') {
    document.documentElement.classList.add('skip-welcome-intro');
  }
} catch (e) {}
`;

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Pozera Events",
  description: "Full-service event planning, coordination, and The Academy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="skip-welcome-intro"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: SKIP_INTRO_SCRIPT }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${jost.variable} antialiased`}
      >
        <PageTransition>{children}</PageTransition>
        <WelcomeIntro />
        <WhatsAppFloat />
        <NavTransition />
      </body>
    </html>
  );
}
