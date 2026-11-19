import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
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

const PAGE_TITLE = "Generative AI Development Company in India | Webnox Digital";
const PAGE_DESC =
  "Partner with our Indian engineering team for custom Generative AI apps, enterprise LLMs, RAG pipelines, copilots, and autonomous multi-agent AI solutions.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/generative-ai-development-company-india/",
});

export default function GenerativeAiDevelopmentCompanyIndiaPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/generative-ai-development-company-india/",
          serviceType: "Generative AI Development in India",
          areaServed: "IN",
        })}
      />
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

