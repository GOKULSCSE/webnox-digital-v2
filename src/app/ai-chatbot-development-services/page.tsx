import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
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

const PAGE_TITLE = "AI Chatbot Development Services | Webnox Digital";
const PAGE_DESC =
  "Explore AI chatbot development services for custom AI chatbots, LLM integration, Generative AI, RAG and business process automation.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/ai-chatbot-development-services/",
});

export default function AiChatbotDevelopmentServicesPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/ai-chatbot-development-services/",
          serviceType: "AI Chatbot Development Services",
        })}
      />
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

