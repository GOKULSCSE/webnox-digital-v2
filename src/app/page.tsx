import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-services/Navbar";
import ThreeDShowcase from "@/components/sections/ThreeDShowcase";
import WhoWeAre from "@/components/sections/WhoWeAre";
import AiNativeServices from "@/components/sections/AiNativeServices";
import Solutions from "@/components/sections/Solutions";
import Testimonials from "@/components/sections/Testimonials";
import NotTypicalAgency from "@/components/sections/NotTypicalAgency";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ConversionCta from "@/components/ai-services/ConversionCta";
import AiDevelopmentProcess from "@/components/sections/AiDevelopmentProcess";
import Services from "@/components/sections/Services";
import LabsSectionGate from "@/components/sections/LabsSectionGate";
import TechStack from "@/components/ai-services/TechStack";
import TechStackTable from "@/components/sections/TechStackTable";
import IndustrySolutions from "@/components/sections/IndustrySolutions";
import LetsGrowTogether from "@/components/sections/LetsGrowTogether";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "AI Native Company | Webnox Digital",
  description:
    "Webnox Digital is an AI native company building AI agents, generative AI and enterprise AI software for 2,570+ clients in 20+ countries.",
};

export default function Home() {
  return (
    <SmoothScroll>
      <main className="w-full bg-[#fdfaf6]">
        {/* Navigation Bar */}
        <Navbar />

        {/* 1. Hero & Measurable AI Productivity */}
        <ThreeDShowcase />

        {/* 2. AI-Native Engineering Built on 15+ Years & The Numbers Behind Our Journey */}
        <WhoWeAre />
        <Services />

        <LabsSectionGate>
          {/* 8. Build, Launch and Grow With an AI-Native Partner */}
          <ConversionCta />
          <TechStack />

          {/* 11. Technologies Powering Our AI and Software Solutions */}
          {/* <TechStackTable /> */}
          {/* 4. AI-Native Systems We Build & Operate */}
          <Solutions />
          {/* 7. Why Choose Webnox as Your AI-Native Partner */}
          <WhyChooseUs />
          {/* 12. AI-Native Solutions for Every Industry */}
          <IndustrySolutions />
          <AiDevelopmentProcess />


          {/* 6. AI-Native Company vs. Traditional AI Company */}
          <NotTypicalAgency />
          {/* 5. What Businesses Say About Webnox AI Solutions */}
          <Testimonials />
          {/* 14. Frequently Asked Questions In Our AI Native Company */}
          <Faq />

          {/* 13. Build Your Next AI Product with Webnox Digital */}
          <LetsGrowTogether />
          {/* 15. Footer */}
          <Footer />
        </LabsSectionGate>
      </main>
    </SmoothScroll>
  );
}
