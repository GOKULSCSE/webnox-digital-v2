import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/rag-development-services/Navbar";
import Hero from "@/components/rag-development-services/Hero";
import OverviewSection from "@/components/rag-development-services/OverviewSection";
import ServicesSection from "@/components/rag-development-services/ServicesSection";
import WhyChooseUs from "@/components/rag-development-services/WhyChooseUs";
import ComparisonTable from "@/components/rag-development-services/ComparisonTable";
import ProcessTimeline from "@/components/rag-development-services/ProcessTimeline";
import IndustriesSection from "@/components/rag-development-services/IndustriesSection";
import FaqAccordion from "@/components/rag-development-services/FaqAccordion";
import ScopingCta from "@/components/rag-development-services/ScopingCta";
import Footer from "@/components/ai-services/Footer";

const PAGE_TITLE = "RAG Development Services | Webnox Digital";
const PAGE_DESC =
  "Webnox Digital delivers custom RAG development services. Build enterprise retrieval augmented generation pipelines, hybrid search and agentic workflows.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/rag-development-services/",
});

export default function RagDevelopmentServicesPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/rag-development-services/",
          serviceType: "RAG Development Services",
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
