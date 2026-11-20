import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import Navbar from "@/components/ai-copilot-development-services-india/Navbar";
import Hero from "@/components/ai-copilot-development-services-india/Hero";
import OverviewSection from "@/components/ai-copilot-development-services-india/OverviewSection";
import ServicesSection from "@/components/ai-copilot-development-services-india/ServicesSection";
import WhyChooseUs from "@/components/ai-copilot-development-services-india/WhyChooseUs";
import ProcessTimeline from "@/components/ai-copilot-development-services-india/ProcessTimeline";
import ComparisonTable from "@/components/ai-copilot-development-services-india/ComparisonTable";
import IndustriesSection from "@/components/ai-copilot-development-services-india/IndustriesSection";
import FaqAccordion from "@/components/ai-copilot-development-services-india/FaqAccordion";
import ScopingCta from "@/components/ai-copilot-development-services-india/ScopingCta";
import Footer from "@/components/ai-services/Footer";

const PAGE_TITLE = "AI Copilot Development in India | Webnox Digital";
const PAGE_DESC =
  "Custom AI copilot development in India by Webnox Digital. Build secure, action-taking copilots integrated with Tally, Zoho and WhatsApp—zero per-seat fees.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/ai-copilot-development-services-india/",
});

export default function AiCopilotDevelopmentServicesIndiaPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: "AI Copilot Development in India | Webnox Digital",
          description: PAGE_DESC,
          path: "/ai-copilot-development-services-india/",
          serviceType: "Custom AI Copilot Development Services in India",
          areaServed: "IN",
        })}
      />
      <div className="min-h-screen bg-[#160a04] text-white selection:bg-[#FF7230]/30 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <OverviewSection />
          <ServicesSection />
          <WhyChooseUs />
          <ProcessTimeline />
          <ComparisonTable />
          <IndustriesSection />
          <FaqAccordion />
          <ScopingCta />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
