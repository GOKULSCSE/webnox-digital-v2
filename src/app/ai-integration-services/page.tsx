import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-integration-services/Navbar";
import Hero from "@/components/ai-integration-services/Hero";
import OverviewSection from "@/components/ai-integration-services/OverviewSection";
import ServicesSection from "@/components/ai-integration-services/ServicesSection";
import TechApproach from "@/components/ai-integration-services/TechApproach";
import ProcessTimeline from "@/components/ai-integration-services/ProcessTimeline";
import WhyChooseUs from "@/components/ai-integration-services/WhyChooseUs";
import ConversionCta from "@/components/ai-integration-services/ConversionCta";
import FaqAccordion from "@/components/ai-integration-services/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

const PAGE_TITLE = "AI Integration Services | Webnox Digital";
const PAGE_DESC =
  "Connect LLMs, RAG pipelines, and autonomous AI agents with your CRM, ERP, and enterprise apps without full software rebuilds. Book a scoping call today.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/ai-integration-services/",
});

export default function AiIntegrationServicesPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/ai-integration-services/",
          serviceType: "AI Integration Services",
        })}
      />
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <Hero />
        <OverviewSection />
        <ServicesSection />
        <TechApproach />
        <ProcessTimeline />
        <WhyChooseUs />
        <ConversionCta />
        <FaqAccordion />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

