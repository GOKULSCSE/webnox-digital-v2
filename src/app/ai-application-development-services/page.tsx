import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-services/Navbar";
import Hero from "@/components/ai-services/Hero";
import OverviewMetrics from "@/components/ai-services/OverviewMetrics";
import ServicesRange from "@/components/ai-services/ServicesRange";
import Testimonials from "@/components/ai-services/Testimonials";
import ProjectsShowcase from "@/components/ai-services/ProjectsShowcase";
import SolutionsGrid from "@/components/ai-services/SolutionsGrid";
import WhyChooseUs from "@/components/ai-services/WhyChooseUs";
import ProcessTimeline from "@/components/ai-services/ProcessTimeline";
import ConversionCta from "@/components/ai-services/ConversionCta";
import TechStack from "@/components/ai-services/TechStack";
import IndustryApplications from "@/components/ai-services/IndustryApplications";
import FaqAccordion from "@/components/ai-services/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "AI Application Development Services | Webnox Digital",
  description:
    "Webnox Digital is an AI application development company offering AI application development services for custom AI apps, AI agents, generative AI solutions and business automation.",
  openGraph: {
    title: "AI Application Development Services | Webnox Digital",
    description:
      "Webnox Digital is an AI application development company offering AI application development services for custom AI apps, AI agents, generative AI solutions and business automation.",
    url: "https://webnox.in/ai-application-development-services",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function AiApplicationDevelopmentServicesPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section with H1, Description, CTAs, and Awards */}
        <Hero />

        {/* Company Overview & Key Metrics */}
        <OverviewMetrics />

        {/* 6 Core AI Development Services */}
        <ServicesRange />

        {/* Google Client Testimonials */}
        <Testimonials />

        {/* 6 Featured Case Studies */}
        <ProjectsShowcase />

        {/* 10 AI Solutions Built for Businesses */}
        <SolutionsGrid />

        {/* Why Choose Webnox - Dark Obsidian Section */}
        <WhyChooseUs />

        {/* 6-Step Production Engineering Process */}
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
