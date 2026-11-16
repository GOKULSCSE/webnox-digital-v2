import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AI Integration Service| Webnox Digital",
  description:
    "Webnox Digital delivers AI integration services, LLM integration, and AI agents for your CRM, ERP, and business apps without full rebuilds. Talk to our AI experts.",
  alternates: {
    canonical: "/ai-integration-services/",
  },
  openGraph: {
    title: "AI Integration Service| Webnox Digital",
    description:
      "Webnox Digital delivers AI integration services, LLM integration, and AI agents for your CRM, ERP, and business apps without full rebuilds. Talk to our AI experts.",
    url: "/ai-integration-services/",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function AiIntegrationServicesPage() {
  return (
    <SmoothScroll>
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

