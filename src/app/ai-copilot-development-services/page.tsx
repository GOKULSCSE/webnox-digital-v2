import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-copilot-development-services/Navbar";
import Hero from "@/components/ai-copilot-development-services/Hero";
import OverviewSection from "@/components/ai-copilot-development-services/OverviewSection";
import ServicesSection from "@/components/ai-copilot-development-services/ServicesSection";
import WhyChooseUs from "@/components/ai-copilot-development-services/WhyChooseUs";
import ComparisonTable from "@/components/ai-copilot-development-services/ComparisonTable";
import ProcessTimeline from "@/components/ai-copilot-development-services/ProcessTimeline";
import IndustriesSection from "@/components/ai-copilot-development-services/IndustriesSection";
import FaqAccordion from "@/components/ai-copilot-development-services/FaqAccordion";
import ScopingCta from "@/components/ai-copilot-development-services/ScopingCta";
import Footer from "@/components/ai-services/Footer";

const PAGE_TITLE = "AI Copilot Development Services | Webnox Digital";
const PAGE_DESC =
  "Custom AI copilot development services to build secure enterprise copilots that automate workflows and integrate directly with your CRM, ERP, and daily apps.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/ai-copilot-development-services/",
});

export default function AiCopilotDevelopmentServicesPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/ai-copilot-development-services/",
          serviceType: "AI Copilot Development Services",
        })}
      />
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <Hero />
        <OverviewSection />
        <ServicesSection />
        <WhyChooseUs />
        <ComparisonTable />
        <ProcessTimeline />
        <IndustriesSection />
        <FaqAccordion />
        <ScopingCta />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
