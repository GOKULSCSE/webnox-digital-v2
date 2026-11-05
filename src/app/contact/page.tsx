import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-services/Navbar";
import ArchitectSolution from "@/components/contact/ArchitectSolution";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "Let’s Architect Your Next AI or Web Solution | Webnox Digital",
  description:
    "Share your technical requirements, product concept or automation challenge. Our engineering team reviews every inquiry and delivers a structured feasibility assessment within 24 hours.",
  openGraph: {
    title: "Let’s Architect Your Next AI or Web Solution | Webnox Digital",
    description:
      "Find the right AI solution for your business. Speak directly with senior AI engineers and software architects at Webnox Digital.",
    url: "https://webnox.in/contact",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <ArchitectSolution />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

