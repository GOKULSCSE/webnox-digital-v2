import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/iot-development-company-india/Navbar";
import Hero from "@/components/iot-development-company-india/Hero";
import OverviewSection from "@/components/iot-development-company-india/OverviewSection";
import SolutionsSection from "@/components/iot-development-company-india/SolutionsSection";
import IndustriesSection from "@/components/iot-development-company-india/IndustriesSection";
import ProcessTimeline from "@/components/iot-development-company-india/ProcessTimeline";
import WhyIndiaSection from "@/components/iot-development-company-india/WhyIndiaSection";
import FaqAccordion from "@/components/iot-development-company-india/FaqAccordion";
import ScopingCta from "@/components/iot-development-company-india/ScopingCta";
import Footer from "@/components/ai-services/Footer";

const PAGE_TITLE = "IOT Development Company India | Top IOT Development Services";
const PAGE_DESC =
  "As a custom IoT development company in India, we build smart, scalable, secure IoT software and apps for all industries to automate tasks and drive growth.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/iot-development-company-india/",
});

export default function IotDevelopmentCompanyIndiaPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/iot-development-company-india/",
          serviceType: "IoT Development Services in India",
          areaServed: "IN",
        })}
      />
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <Hero />
        <OverviewSection />
        <SolutionsSection />
        <IndustriesSection />
        <ProcessTimeline />
        <WhyIndiaSection />
        <FaqAccordion />
        <ScopingCta />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
