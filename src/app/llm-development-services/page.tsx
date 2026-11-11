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
import ArchitectureGuide from "@/components/llm-services/ArchitectureGuide";
import IndustryApplications from "@/components/llm-services/IndustryApplications";
import TechStack from "@/components/llm-services/TechStack";
import FaqAccordion from "@/components/llm-services/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "LLM Development Services in India for High Uptime Enterprise Systems | Webnox Digital",
  description:
    "We design, fine-tune, and deploy custom large language models that automate complex enterprise operations. From self-hosted open-source models to hybrid RAG pipelines with 2-week working sandbox delivery.",
  openGraph: {
    title: "LLM Development Services in India for High Uptime Enterprise Systems | Webnox Digital",
    description:
      "Enterprise LLM development company in India. We design, fine-tune, and deploy custom large language models for high uptime business operations.",
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

        {/* Hero Section with H1, Description, CTAs, and Enterprise Governance Standards */}
        <Hero />

        {/* H2: Custom LLM Development Services India: Engineered for Reliable Production */}
        <OverviewMetrics />

        {/* H2: Custom LLM Development Services in India Built for Your Business (5 Services) */}
        <ServicesRange />

        {/* Google Client Testimonials */}
        <Testimonials />

        {/* Featured Case Studies */}
        <ProjectsShowcase />

        {/* Real-World LLM Solutions Grid */}
        <SolutionsGrid />

        {/* H2: Ready to Build a Custom AI for Your Business? (Mid-Page Conversion Banner) */}
        <ConversionCta />

        {/* H2: Why Choose Webnox Digital as Your LLM Development Company in India? (6 Pillars) */}
        <WhyChooseUs />

        {/* H2: Our Step by Step Custom LLM Development Process (4 Phases) */}
        <ProcessTimeline />

        {/* H2: Industries We Serve with Custom LLM Solutions in India (6 Industries) */}
        <IndustryApplications />

        {/* H3: Architecture Guide for Enterprise LLM Solutions in India (4 Tiers) */}
        <ArchitectureGuide />

        {/* H2: Technology Behind Your Custom AI System */}
        <TechStack />

        {/* H2: Frequently Asked Questions About LLM Development Services (6 Questions in H5) */}
        <FaqAccordion />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
