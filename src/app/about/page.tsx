import type { Metadata } from "next";
import { buildPageMetadata, getStandardPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
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

const PAGE_TITLE = "About Webnox Digital | AI-Native Engineering Company";
const PAGE_DESC =
  "Backed by 15+ years of software engineering and 2,570+ client projects, Webnox Digital builds custom AI systems and connected digital products worldwide.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/about/",
});

export default function AboutPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getStandardPageSchema({
          pageType: "AboutPage",
          name: PAGE_TITLE,
          breadcrumbName: "About Us",
          description: PAGE_DESC,
          path: "/about/",
        })}
      />
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

