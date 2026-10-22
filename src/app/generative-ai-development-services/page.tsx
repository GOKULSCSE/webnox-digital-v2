import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/generative-ai-services/Navbar";
import Hero from "@/components/generative-ai-services/Hero";
import OverviewMetrics from "@/components/generative-ai-services/OverviewMetrics";
import ServicesRange from "@/components/generative-ai-services/ServicesRange";
import Testimonials from "@/components/generative-ai-services/Testimonials";
import ProjectsShowcase from "@/components/generative-ai-services/ProjectsShowcase";
import SolutionsGrid from "@/components/generative-ai-services/SolutionsGrid";
import RoadmapStrategy from "@/components/generative-ai-services/RoadmapStrategy";
import WhyChooseUs from "@/components/generative-ai-services/WhyChooseUs";
import ProcessTimeline from "@/components/generative-ai-services/ProcessTimeline";
import ConversionCta from "@/components/generative-ai-services/ConversionCta";
import TechStack from "@/components/generative-ai-services/TechStack";
import IndustryApplications from "@/components/generative-ai-services/IndustryApplications";
import FaqAccordion from "@/components/generative-ai-services/FaqAccordion";
import Footer from "@/components/generative-ai-services/Footer";

export const metadata: Metadata = {
  title: "Generative AI Development Services | Webnox Digital",
  description:
    "Webnox Digital is a Generative AI Development Company delivering custom Generative AI solutions, LLM applications, RAG, AI agents, copilots, multimodal AI and enterprise Generative AI integration.",
  openGraph: {
    title: "Generative AI Development Services | Webnox Digital",
    description:
      "Webnox Digital is a Generative AI Development Company delivering custom Generative AI solutions, LLM applications, RAG, AI agents, copilots, multimodal AI and enterprise Generative AI integration.",
    url: "https://webnox.in/generative-ai-development-services",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function GenerativeAiDevelopmentServicesPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section with H1, Description, CTAs, and Awards */}
        <Hero />

        {/* Company Overview & Key Metrics */}
        <OverviewMetrics />

        {/* 10 Core Generative AI Development Services */}
        <ServicesRange />

        {/* Google Client Testimonials */}
        <Testimonials />

        {/* 6 Featured Case Studies */}
        <ProjectsShowcase />

        {/* Generative AI Solutions Built for Businesses */}
        <SolutionsGrid />

        {/* 3D Perspective Tunnel Roadmap: From Idea to Production */}
        <RoadmapStrategy />

        {/* Why Choose Webnox - Dark Obsidian Section */}
        <WhyChooseUs />

        {/* 8-Step Production Engineering Process */}
        <ProcessTimeline />

        {/* Mid-Page Call-To-Action Banner */}
        <ConversionCta />

        {/* Technology Stack Grid */}
        <TechStack />

        {/* Industry Specific Applications */}
        <IndustryApplications />

        {/* 10 Frequently Asked Questions Accordion */}
        <FaqAccordion />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
