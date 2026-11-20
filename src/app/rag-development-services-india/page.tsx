import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/rag-development-services-india/Navbar";
import Hero from "@/components/rag-development-services-india/Hero";
import OverviewSection from "@/components/rag-development-services-india/OverviewSection";
import ServicesSection from "@/components/rag-development-services-india/ServicesSection";
import WhyChooseUs from "@/components/rag-development-services-india/WhyChooseUs";
import ComparisonTable from "@/components/rag-development-services-india/ComparisonTable";
import ProcessTimeline from "@/components/rag-development-services-india/ProcessTimeline";
import IndustriesSection from "@/components/rag-development-services-india/IndustriesSection";
import FaqAccordion from "@/components/rag-development-services-india/FaqAccordion";
import ScopingCta from "@/components/rag-development-services-india/ScopingCta";
import Footer from "@/components/ai-services/Footer";

const PAGE_TITLE = "RAG Development Services in India | Webnox Digital";
const PAGE_DESC =
  "Webnox Digital delivers RAG development services in India. We build custom AI search tools that answer questions using your real company files.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/rag-development-services-india/",
});

export default function RagDevelopmentServicesIndiaPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/rag-development-services-india/",
          serviceType: "RAG Development Services in India",
          areaServed: "IN",
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
