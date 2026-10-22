import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-services/Navbar";
import Hero from "@/components/llm-services/Hero";
import OverviewMetrics from "@/components/llm-services/OverviewMetrics";
import ServicesRange from "@/components/llm-services/ServicesRange";
import Testimonials from "@/components/ai-services/Testimonials";
import ProjectsShowcase from "@/components/ai-services/ProjectsShowcase";
import SolutionsGrid from "@/components/llm-services/SolutionsGrid";
import WhyChooseUs from "@/components/llm-services/WhyChooseUs";
import ProcessTimeline from "@/components/llm-services/ProcessTimeline";
import ConversionCta from "@/components/llm-services/ConversionCta";
import TechStack from "@/components/llm-services/TechStack";
import IndustryApplications from "@/components/llm-services/IndustryApplications";
import FaqAccordion from "@/components/llm-services/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "LLM Development Services | Webnox Digital",
  description:
    "Webnox Digital is an LLM development company offering LLM development services, including custom LLM applications, RAG, fine-tuning, AI agents and integration.",
  openGraph: {
    title: "LLM Development Services | Webnox Digital",
    description:
      "Webnox Digital is an LLM development company offering LLM development services, including custom LLM applications, RAG, fine-tuning, AI agents and integration.",
    url: "https://webnox.in/llm-development-services",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function LlmDevelopmentServicesPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section with H1, Description, CTAs, and Awards */}
        <Hero />

        {/* Company Overview & Key Metrics */}
        <OverviewMetrics />

        {/* 6 Core LLM Engineering Services with Feature Carousel */}
        <ServicesRange />

        {/* Google Client Testimonials */}
        <Testimonials />

        {/* Featured Case Studies */}
        <ProjectsShowcase />

        {/* 6 Real-World LLM Solutions with Magic Bento */}
        <SolutionsGrid />

        {/* Why Choose Webnox - Dark Obsidian Section with 3-Column Interactive Layout */}
        <WhyChooseUs />

        {/* 6-Step LLM Engineering Process with Stepper */}
        <ProcessTimeline />

        {/* Mid-Page Call-To-Action Banner */}
        <ConversionCta />

        {/* Technology Stack Grid with FolderFloat Interactive Explorer */}
        <TechStack />

        {/* Industry Specific Applications with CardSwap 3D Interactive Stack */}
        <IndustryApplications />

        {/* 10 Frequently Asked Questions Accordion */}
        <FaqAccordion />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
