import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/n8n-automation-services-india/Navbar";
import Hero from "@/components/n8n-automation-services-india/Hero";
import OverviewSection from "@/components/n8n-automation-services-india/OverviewSection";
import TechStack from "@/components/n8n-automation-services-india/TechStack";
import ServicesSection from "@/components/n8n-automation-services-india/ServicesSection";
import ProcessTimeline from "@/components/n8n-automation-services-india/ProcessTimeline";
import ArchitectureScopeCta from "@/components/n8n-automation-services-india/ArchitectureScopeCta";
import WhyChooseUs from "@/components/n8n-automation-services-india/WhyChooseUs";
import SelfHostedArchitecture from "@/components/n8n-automation-services-india/SelfHostedArchitecture";
import IndustriesSection from "@/components/n8n-automation-services-india/IndustriesSection";
import FaqAccordion from "@/components/n8n-automation-services-india/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

const PAGE_TITLE = "n8n Automation Services in India | Webnox Digital";
const PAGE_DESC =
  "Custom n8n workflow automation in India covering AI agent integration, API connectors, self-hosted VPC deployment, and ongoing enterprise workflow support.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/n8n-automation-services-india/",
});

export default function N8nAutomationServicesIndiaPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/n8n-automation-services-india/",
          serviceType: "n8n Automation Services in India",
          areaServed: "IN",
        })}
      />
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <Hero />
        <OverviewSection />
        <TechStack />
        <ServicesSection />
        <ProcessTimeline />
        <ArchitectureScopeCta />
        <WhyChooseUs />
        <SelfHostedArchitecture />
        <IndustriesSection />
        <FaqAccordion />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

