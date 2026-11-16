import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "n8n Automation Services | Webnox Digital",
  description:
    "Automate business workflows with Webnox Digital n8n automation services. Build AI agents, connect APIs, integrate business systems and deploy secure n8n workflows.",
  alternates: {
    canonical: "/n8n-automation-services/",
  },
  openGraph: {
    title: "n8n Automation Services | Webnox Digital",
    description:
      "Automate business workflows with Webnox Digital n8n automation services. Build AI agents, connect APIs, integrate business systems and deploy secure n8n workflows.",
    url: "/n8n-automation-services/",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function N8nAutomationServicesPage() {
  return (
    <SmoothScroll>
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

