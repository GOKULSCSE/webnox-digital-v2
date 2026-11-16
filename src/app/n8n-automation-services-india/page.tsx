import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "n8n Automation Services in India | Webnox Digital",
  description:
    "Webnox Digital provides n8n automation services in India, including workflow development, AI agent integration, self-hosted deployment, API integration and ongoing support.",
  alternates: {
    canonical: "/n8n-automation-services-india/",
  },
  openGraph: {
    title: "n8n Automation Services in India | Webnox Digital",
    description:
      "Webnox Digital provides n8n automation services in India, including workflow development, AI agent integration, self-hosted deployment, API integration and ongoing support.",
    url: "/n8n-automation-services-india/",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function N8nAutomationServicesIndiaPage() {
  return (
    <SmoothScroll>
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

