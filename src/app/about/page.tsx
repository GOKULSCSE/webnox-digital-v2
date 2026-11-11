import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-services/Navbar";
import Hero from "@/components/about/Hero";
import MetricsStability from "@/components/about/MetricsStability";
import StoryEvolution from "@/components/about/StoryEvolution";
import AiNativeComparison from "@/components/about/AiNativeComparison";
import TwoEngines from "@/components/about/TwoEngines";
import HowWeWork from "@/components/about/HowWeWork";
import ConversionCta from "@/components/about/ConversionCta";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "About Us | Webnox Digital — The AI-Native Engineering Company",
  description:
    "Backed by 15+ years of software experience, Webnox Digital builds custom software and smart AI tools. Re-engineered for the AI Era with production-grade AI engineering and connected performance marketing.",
  openGraph: {
    title: "About Us | Webnox Digital — The AI-Native Engineering Company",
    description:
      "15 Years of Software Heritage. Re-engineered for the AI Era. Explore how Webnox Digital operates on AI-first workflows.",
    url: "https://webnox.in/about",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Section 02: The Numbers Behind Our Stability */}
        <MetricsStability />

        {/* Section 03: Our Story & Evolution */}
        <StoryEvolution />

        {/* Section 04: What "AI-Native" Means At Webnox Digital */}
        <AiNativeComparison />

        {/* Section 05: The Two Engines of Webnox Digital */}
        <TwoEngines />

        {/* Section 06: How We Work With Our Partners */}
        <HowWeWork />

        {/* Final Conversion CTA Banner */}
        <ConversionCta />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}

