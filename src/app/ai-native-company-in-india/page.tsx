import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-native-india/Navbar";
import Hero from "@/components/ai-native-india/Hero";
import OverviewMetrics from "@/components/ai-native-india/OverviewMetrics";
import ServicesRange from "@/components/ai-native-india/ServicesRange";
import ProductsShowcase from "@/components/ai-native-india/ProductsShowcase";
import WhyChooseUs from "@/components/ai-native-india/WhyChooseUs";
import TechStack from "@/components/ai-native-india/TechStack";
import IndustryApplications from "@/components/ai-native-india/IndustryApplications";
import ProcessTimeline from "@/components/ai-native-india/ProcessTimeline";
import ConversionCta from "@/components/ai-native-india/ConversionCta";
import FaqAccordion from "@/components/ai-native-india/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

const PAGE_TITLE = "AI Native Company in India | Webnox Digital";
const PAGE_DESC =
  "Enterprise AI engineering in India delivering custom AI software, autonomous AI agents, LLM integration, and RAG systems built on 15+ years of experience.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/ai-native-company-in-india/",
});

export default function AiNativeCompanyInIndiaPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/ai-native-company-in-india/",
          serviceType: "Enterprise AI Engineering in India",
          areaServed: "IN",
        })}
      />
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <Hero />
        <OverviewMetrics />
        <ServicesRange />
        <ProductsShowcase />
        <WhyChooseUs />
        <TechStack />
        <IndustryApplications />
        <ProcessTimeline />
        <ConversionCta />
        <FaqAccordion />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

