import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/n8n-automation-services/Navbar";
import Hero from "@/components/n8n-automation-services/Hero";
import OverviewSection from "@/components/n8n-automation-services/OverviewSection";
import ServicesSection from "@/components/n8n-automation-services/ServicesSection";
import ProcessTimeline from "@/components/n8n-automation-services/ProcessTimeline";
import ArchitectureScopeCta from "@/components/n8n-automation-services/ArchitectureScopeCta";
import WhyChooseUs from "@/components/n8n-automation-services/WhyChooseUs";
import SelfHostedArchitecture from "@/components/n8n-automation-services/SelfHostedArchitecture";
import IndustriesSection from "@/components/n8n-automation-services/IndustriesSection";
import FaqAccordion from "@/components/n8n-automation-services/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

const PAGE_TITLE = "n8n Automation Services | Webnox Digital";
const PAGE_DESC =
  "Automate business workflows with custom n8n engineering. Connect APIs, CRMs, ERPs, and AI agents through secure, self-hosted or cloud n8n architectures.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/n8n-automation-services/",
});

export default function N8nAutomationServicesPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/n8n-automation-services/",
          serviceType: "n8n Workflow Automation Services",
        })}
      />
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <Hero />
        <OverviewSection />
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

