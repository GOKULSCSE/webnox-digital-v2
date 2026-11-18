import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-chatbot-development-services-india/Navbar";
import Hero from "@/components/ai-chatbot-development-services-india/Hero";
import OverviewSection from "@/components/ai-chatbot-development-services-india/OverviewSection";
import ServicesSection from "@/components/ai-chatbot-development-services-india/ServicesSection";
import WhyChooseUs from "@/components/ai-chatbot-development-services-india/WhyChooseUs";
import ProcessTimeline from "@/components/ai-chatbot-development-services-india/ProcessTimeline";
import ComparisonGuide from "@/components/ai-chatbot-development-services-india/ComparisonGuide";
import IndustriesSection from "@/components/ai-chatbot-development-services-india/IndustriesSection";
import FaqAccordion from "@/components/ai-chatbot-development-services-india/FaqAccordion";
import ScopingCta from "@/components/ai-chatbot-development-services-india/ScopingCta";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "AI Chatbot Development Services in India | Webnox Digital",
  description:
    "Webnox Digital is an AI chatbot development company in India offering custom AI chatbot development, enterprise chatbot solutions, generative AI and LLM integration services.",
  alternates: {
    canonical: "/ai-chatbot-development-services-india/",
  },
  openGraph: {
    title: "AI Chatbot Development Services in India | Webnox Digital",
    description:
      "Webnox Digital is an AI chatbot development company in India offering custom AI chatbot development, enterprise chatbot solutions, generative AI and LLM integration services.",
    url: "/ai-chatbot-development-services-india/",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function AiChatbotDevelopmentServicesIndiaPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <Hero />
        <OverviewSection />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessTimeline />
        <ComparisonGuide />
        <IndustriesSection />
        <FaqAccordion />
        <ScopingCta />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
