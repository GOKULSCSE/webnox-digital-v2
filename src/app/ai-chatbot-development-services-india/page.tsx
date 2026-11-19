import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
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

const PAGE_TITLE = "AI Chatbot Development Services in India | Webnox Digital";
const PAGE_DESC =
  "Custom AI chatbot development in India. Build Generative AI, RAG, and WhatsApp Business chatbots integrated directly with your CRM, ERP, and databases.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/ai-chatbot-development-services-india/",
});

export default function AiChatbotDevelopmentServicesIndiaPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/ai-chatbot-development-services-india/",
          serviceType: "AI Chatbot Development Services in India",
          areaServed: "IN",
        })}
      />
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <Hero />
        <OverviewMetrics />
        <ServicesRange />
        <Testimonials />
        <ProjectsShowcase />
        <SolutionsGrid />
        <ConversionCta />
        <TechStack />
        <WhyChooseUs />
        <ArchitectureGuide />
        <ProcessTimeline />
        <IndustryApplications />
        <FaqAccordion />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
