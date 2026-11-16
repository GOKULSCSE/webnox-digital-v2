import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-chatbot-development-services/Navbar";
import Hero from "@/components/ai-chatbot-development-services/Hero";
import OverviewSection from "@/components/ai-chatbot-development-services/OverviewSection";
import ServicesSection from "@/components/ai-chatbot-development-services/ServicesSection";
import ScopingCta from "@/components/ai-chatbot-development-services/ScopingCta";
import TechStack from "@/components/ai-chatbot-development-services/TechStack";
import WhyChooseUs from "@/components/ai-chatbot-development-services/WhyChooseUs";
import ArchitectureGuide from "@/components/ai-chatbot-development-services/ArchitectureGuide";
import ProcessTimeline from "@/components/ai-chatbot-development-services/ProcessTimeline";
import IndustriesSection from "@/components/ai-chatbot-development-services/IndustriesSection";
import FaqAccordion from "@/components/ai-chatbot-development-services/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "AI Chatbot Development Services | Webnox Digital",
  description:
    "Explore AI chatbot development services for custom AI chatbots, LLM integration, Generative AI, RAG and business process automation.",
  alternates: {
    canonical: "/ai-chatbot-development-services/",
  },
  openGraph: {
    title: "AI Chatbot Development Services | Webnox Digital",
    description:
      "Explore AI chatbot development services for custom AI chatbots, LLM integration, Generative AI, RAG and business process automation.",
    url: "/ai-chatbot-development-services/",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function AiChatbotDevelopmentServicesPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <Hero />
        <OverviewSection />
        <ServicesSection />
        <ScopingCta />
        <TechStack />
        <WhyChooseUs />
        <ArchitectureGuide />
        <ProcessTimeline />
        <IndustriesSection />
        <FaqAccordion />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

