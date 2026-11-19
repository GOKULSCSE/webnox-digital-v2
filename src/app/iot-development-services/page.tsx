import type { Metadata } from "next";
import { buildPageMetadata, getServicePageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/iot-development-services/Navbar";
import Hero from "@/components/iot-development-services/Hero";
import OverviewSection from "@/components/iot-development-services/OverviewSection";
import ServicesSection from "@/components/iot-development-services/ServicesSection";
import WhyChooseUs from "@/components/iot-development-services/WhyChooseUs";
import IndustriesSection from "@/components/iot-development-services/IndustriesSection";
import TechStackSection from "@/components/iot-development-services/TechStackSection";
import ProcessTimeline from "@/components/iot-development-services/ProcessTimeline";
import BenefitsSection from "@/components/iot-development-services/BenefitsSection";
import ScopingCta from "@/components/iot-development-services/ScopingCta";
import FaqAccordion from "@/components/iot-development-services/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

const PAGE_TITLE = "IoT Development Services | Webnox Digital";
const PAGE_DESC =
  "Webnox Digital provides IoT development services, custom IoT software, embedded firmware and AIoT solutions to build secure, connected business systems.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/iot-development-services/",
});

export default function IotDevelopmentServicesPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getServicePageSchema({
          name: PAGE_TITLE,
          description: PAGE_DESC,
          path: "/iot-development-services/",
          serviceType: "IoT Development Services",
        })}
      />
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <Hero />
        <OverviewSection />
        <ServicesSection />
        <WhyChooseUs />
        <IndustriesSection />
        <TechStackSection />
        <ProcessTimeline />
        <BenefitsSection />
        <ScopingCta />
        <FaqAccordion />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
