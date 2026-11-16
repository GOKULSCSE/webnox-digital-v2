import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/generative-ai-development-company-india/Navbar";
import Hero from "@/components/generative-ai-development-company-india/Hero";
import OverviewSection from "@/components/generative-ai-development-company-india/OverviewSection";
import ServicesSection from "@/components/generative-ai-development-company-india/ServicesSection";
import EnterpriseSolutions from "@/components/generative-ai-development-company-india/EnterpriseSolutions";
import ProcessTimeline from "@/components/generative-ai-development-company-india/ProcessTimeline";
import WhyChooseUs from "@/components/generative-ai-development-company-india/WhyChooseUs";
import TechStack from "@/components/generative-ai-development-company-india/TechStack";
import IndustriesSection from "@/components/generative-ai-development-company-india/IndustriesSection";
import ConceptToProduction from "@/components/generative-ai-development-company-india/ConceptToProduction";
import FaqAccordion from "@/components/generative-ai-development-company-india/FaqAccordion";
import ContactSection from "@/components/generative-ai-development-company-india/ContactSection";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "Generative AI Development Company in India | Webnox Digital",
  description:
    "Webnox Digital is a Generative AI development company in India delivering custom AI applications, LLMs, RAG systems, AI agents, copilots and enterprise AI solutions.",
  alternates: {
    canonical: "/generative-ai-development-company-india/",
  },
  openGraph: {
    title: "Generative AI Development Company in India | Webnox Digital",
    description:
      "Webnox Digital is a Generative AI development company in India delivering custom AI applications, LLMs, RAG systems, AI agents, copilots and enterprise AI solutions.",
    url: "/generative-ai-development-company-india/",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function GenerativeAiDevelopmentCompanyIndiaPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <Hero />
        <OverviewSection />
        <ServicesSection />
        <EnterpriseSolutions />
        <ProcessTimeline />
        <WhyChooseUs />
        <TechStack />
        <IndustriesSection />
        <ConceptToProduction />
        <FaqAccordion />
        <ContactSection />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

