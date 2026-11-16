import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-development-company/Navbar";
import Hero from "@/components/ai-development-company/Hero";
import OverviewMetrics from "@/components/ai-development-company/OverviewMetrics";
import ServicesRange from "@/components/ai-development-company/ServicesRange";
import Benefits from "@/components/ai-development-company/Benefits";
import WhyChooseUs from "@/components/ai-development-company/WhyChooseUs";
import ProcessTimeline from "@/components/ai-development-company/ProcessTimeline";
import ConversionCta from "@/components/ai-development-company/ConversionCta";
import TechStack from "@/components/ai-development-company/TechStack";
import IndustryApplications from "@/components/ai-development-company/IndustryApplications";
import FaqAccordion from "@/components/ai-development-company/FaqAccordion";
import Footer from "@/components/ai-development-company/Footer";

export const metadata: Metadata = {
  title: "AI Development Company | Webnox Digital",
  description:
    "Webnox Digital is an AI development company building custom AI software, AI applications, AI agents and Generative AI solutions for business workflows.",
  openGraph: {
    title: "AI Development Company | Webnox Digital",
    description:
      "Webnox Digital is an AI development company building custom AI software, AI applications, AI agents and Generative AI solutions for business workflows.",
    url: "https://webnox.in/ai-development-company",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function AiDevelopmentCompanyPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section with H1, Description, CTAs, and Awards */}
        <Hero />

        {/* Company Overview & Key Metrics */}
        <OverviewMetrics />

        {/* 12 Core AI Development Services */}
        <ServicesRange />

        {/* Benefits Grid (Corresponding to SolutionsGrid in ai-services) */}
        <Benefits />

        {/* Why Choose Webnox - Dark Obsidian Section */}
        <WhyChooseUs />

        {/* 7-Step Production Engineering Process */}
        <ProcessTimeline />

        {/* Mid-Page Call-To-Action Banner (Positioned after ProcessTimeline) */}
        <ConversionCta />

        {/* Technology Stack Explorer */}
        <TechStack />

        {/* Industry Specific Applications */}
        <IndustryApplications />

        {/* Frequently Asked Questions Accordion */}
        <FaqAccordion />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
