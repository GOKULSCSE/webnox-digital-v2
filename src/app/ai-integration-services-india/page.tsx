import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-integration-services-india/Navbar";
import Hero from "@/components/ai-integration-services-india/Hero";
import OverviewSection from "@/components/ai-integration-services-india/OverviewSection";
import ProductionWorkflows from "@/components/ai-integration-services-india/ProductionWorkflows";
import ServicesSection from "@/components/ai-integration-services-india/ServicesSection";
import ProcessTimeline from "@/components/ai-integration-services-india/ProcessTimeline";
import WhyChooseUs from "@/components/ai-integration-services-india/WhyChooseUs";
import SystemsIntegration from "@/components/ai-integration-services-india/SystemsIntegration";
import ConversionCta from "@/components/ai-integration-services-india/ConversionCta";
import FaqAccordion from "@/components/ai-integration-services-india/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

const PAGE_TITLE = "AI Integration Services in India | Webnox Digital";
const PAGE_DESC =
  "Webnox Digital offers AI integration services in India, uniting LLM integration services, RAG and AI agents with ERP & CRM. Book a scoping call today.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/ai-integration-services-india/",
});

export default function AiIntegrationServicesIndiaPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/ai-integration-services-india/",
          serviceType: "AI Integration Services in India",
          areaServed: "IN",
        })}
      />
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <Hero />
        <OverviewSection />
        <ProductionWorkflows />
        <ServicesSection />
        <ProcessTimeline />
        <WhyChooseUs />
        <SystemsIntegration />
        <ConversionCta />
        <FaqAccordion />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

