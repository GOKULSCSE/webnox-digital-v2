import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-india-services/Navbar";
import Hero from "@/components/ai-india-services/Hero";
import OverviewMetrics from "@/components/ai-india-services/OverviewMetrics";
import ServicesRange from "@/components/ai-india-services/ServicesRange";
import Testimonials from "@/components/ai-services/Testimonials";
import ProjectsShowcase from "@/components/ai-india-services/ProjectsShowcase";
import SolutionsGrid from "@/components/ai-india-services/SolutionsGrid";
import WhyChooseUs from "@/components/ai-india-services/WhyChooseUs";
import ProcessTimeline from "@/components/ai-india-services/ProcessTimeline";
import ConversionCta from "@/components/ai-india-services/ConversionCta";
import TechStack from "@/components/ai-india-services/TechStack";
import IndustryApplications from "@/components/ai-india-services/IndustryApplications";
import FaqAccordion from "@/components/ai-india-services/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "AI Development Company in India | Webnox Digital",
  description:
    "Webnox Digital is an AI development company in India. We combine 15+ years of software engineering to build custom AI software, AI agents and GenAI solutions.",
  alternates: {
    canonical: "https://webnox.in/ai-development-company-india/",
  },
  openGraph: {
    title: "AI Development Company in India | Webnox Digital",
    description:
      "Webnox Digital is an AI development company in India. We combine 15+ years of software engineering to build custom AI software, AI agents and GenAI solutions.",
    url: "https://webnox.in/ai-development-company-india/",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function AiDevelopmentCompanyIndiaPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section with H1, Description, CTAs, and Awards */}
        <Hero />

        {/* Moving Beyond Simple Demos: We Build AI That Actually Works in Production & Key Metrics */}
        <OverviewMetrics />

        {/* 12 Core AI Development Services with Feature Carousel & Mid-Page CTA */}
        <ServicesRange />

        {/* Google Client Testimonials */}
        <Testimonials />

        {/* Featured Case Studies with Signature Projects Showcase Slider */}
        <ProjectsShowcase />

        {/* 6-Layer AI Development Architecture with Magic Bento */}
        <SolutionsGrid />

        {/* Why Choose Webnox - Dark Obsidian Section with 3-Column Interactive Layout */}
        <WhyChooseUs />

        {/* 4-Week AI Development Process with Interactive Stepper */}
        <ProcessTimeline />

        {/* Mid-Page Call-To-Action Banner with Halftone Dot Matrix & PatternWaves */}
        <ConversionCta />

        {/* AI Technologies and Frameworks We Use with FolderFloat Interactive Explorer */}
        <TechStack />

        {/* Industry Specific Applications with CardSwap 3D Interactive Stack */}
        <IndustryApplications />

        {/* Frequently Asked Questions Accordion (Questions in H5) */}
        <FaqAccordion />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
