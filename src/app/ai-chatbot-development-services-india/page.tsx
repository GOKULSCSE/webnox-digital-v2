import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-services/Navbar";
import Hero from "@/components/ai-chatbot-services/Hero";
import OverviewMetrics from "@/components/ai-chatbot-services/OverviewMetrics";
import ServicesRange from "@/components/ai-chatbot-services/ServicesRange";
import Testimonials from "@/components/ai-services/Testimonials";
import ProjectsShowcase from "@/components/ai-services/ProjectsShowcase";
import SolutionsGrid from "@/components/ai-chatbot-services/SolutionsGrid";
import WhyChooseUs from "@/components/ai-chatbot-services/WhyChooseUs";
import ProcessTimeline from "@/components/ai-chatbot-services/ProcessTimeline";
import ConversionCta from "@/components/ai-chatbot-services/ConversionCta";
import TechStack from "@/components/ai-chatbot-services/TechStack";
import ArchitectureGuide from "@/components/ai-chatbot-services/ArchitectureGuide";
import IndustryApplications from "@/components/ai-chatbot-services/IndustryApplications";
import FaqAccordion from "@/components/ai-chatbot-services/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "AI Chatbot Development Services in India | Webnox Digital",
  description:
    "Webnox Digital offers custom AI chatbot development services in India. We build Generative AI, RAG and WhatsApp chatbots integrated with your CRM, ERP and databases.",
  alternates: {
    canonical: "https://webnox.in/ai-chatbot-development-services-india/",
  },
  openGraph: {
    title: "AI Chatbot Development Services in India | Webnox Digital",
    description:
      "Webnox Digital offers custom AI chatbot development services in India. We build Generative AI, RAG and WhatsApp chatbots integrated with your CRM, ERP and databases.",
    url: "https://webnox.in/ai-chatbot-development-services-india/",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function AiChatbotDevelopmentServicesIndiaPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section with H1, Description, CTAs, and Awards */}
        <Hero />

        {/* Company Overview & Key Metrics */}
        <OverviewMetrics />

        {/* 8 Core AI Chatbot Services Carousel */}
        <ServicesRange />

        {/* Google Client Testimonials */}
        <Testimonials />

        {/* Featured Case Studies */}
        <ProjectsShowcase />

        {/* 6 Intelligent AI Chatbot Features Bento */}
        <SolutionsGrid />

        {/* Mid-Page Call-To-Action Banner */}
        <ConversionCta />

        {/* Interactive FolderFloat Technology Stack */}
        <TechStack />

        {/* Why Choose Webnox - Dark Obsidian 3-Column Section */}
        <WhyChooseUs />

        {/* 4-Tier AI Chatbot Architecture Guide */}
        <ArchitectureGuide />

        {/* 4-Phase Production Engineering Process Stepper */}
        <ProcessTimeline />

        {/* Industry Specific Applications with CardSwap 3D Stack */}
        <IndustryApplications />

        {/* 8 Frequently Asked Questions Accordion */}
        <FaqAccordion />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
