import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AI Native Company in India | Webnox Digital",
  description:
    "Webnox Digital is an AI native company in India offering AI development services, AI agents, AI software, Generative AI, LLM development and custom AI solutions.",
  alternates: {
    canonical: "/ai-native-company-in-india/",
  },
  openGraph: {
    title: "AI Native Company in India | Webnox Digital",
    description:
      "Webnox Digital is an AI native company in India offering AI development services, AI agents, AI software, Generative AI, LLM development and custom AI solutions.",
    url: "/ai-native-company-in-india/",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function AiNativeCompanyInIndiaPage() {
  return (
    <SmoothScroll>
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

