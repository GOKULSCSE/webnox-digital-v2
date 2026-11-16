import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-services/Navbar";
import Hero from "@/components/ai-consulting-services/Hero";
import OverviewMetrics from "@/components/ai-consulting-services/OverviewMetrics";
import ServicesRange from "@/components/ai-consulting-services/ServicesRange";
import Testimonials from "@/components/ai-services/Testimonials";
import ProjectsShowcase from "@/components/ai-services/ProjectsShowcase";
import SolutionsGrid from "@/components/ai-consulting-services/SolutionsGrid";
import WhyChooseUs from "@/components/ai-consulting-services/WhyChooseUs";
import ComparisonTable from "@/components/ai-consulting-services/ComparisonTable";
import ProcessTimeline from "@/components/ai-consulting-services/ProcessTimeline";
import ConversionCta from "@/components/ai-consulting-services/ConversionCta";
import IndustryApplications from "@/components/ai-consulting-services/IndustryApplications";
import FaqAccordion from "@/components/ai-consulting-services/FaqAccordion";
import Footer from "@/components/ai-services/Footer";

export const metadata: Metadata = {
  title: "AI Consulting Services | Webnox Digital",
  description:
    "Webnox Digital is a leading AI consulting company offering enterprise AI strategy consulting, generative AI consulting services and machine learning solutions.",
  alternates: {
    canonical: "https://webnox.in/ai-consulting-services/",
  },
  openGraph: {
    title: "AI Consulting Services | Webnox Digital",
    description:
      "Webnox Digital is a leading AI consulting company offering enterprise AI strategy consulting, generative AI consulting services and machine learning solutions.",
    url: "https://webnox.in/ai-consulting-services/",
    siteName: "Webnox Digital",
    type: "website",
  },
};

export default function AiConsultingServicesPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* H1: AI Consulting Services for Measurable Business Growth */}
        <Hero />

        {/* H2: Practical AI Business Consulting Focused on Real ROI, Not Slide Decks */}
        <OverviewMetrics />

        {/* H2: Our Core Artificial Intelligence Consulting Services (8 Services Carousel) */}
        <ServicesRange />

        {/* Google Client Testimonials */}
        <Testimonials />

        {/* Featured Case Studies */}
        <ProjectsShowcase />

        {/* H3: Applied AI Consulting: Advanced Capabilities & Frameworks (6 Bento Cards) */}
        <SolutionsGrid />

        {/* H2: Why Choose Webnox Digital Among Top AI Consulting Companies? */}
        <WhyChooseUs />

        {/* H2: Comparing AI Consulting Companies: Strategic Advisory vs. Technical Execution */}
        <ComparisonTable />

        {/* H2: Our 4-Phase AI Consulting & Implementation Roadmap */}
        <ProcessTimeline />

        {/* Mid-Page Call-To-Action Banner */}
        <ConversionCta />

        {/* H2: Industries We Serve with AI Consulting Services */}
        <IndustryApplications />

        {/* H5/H6: Frequently Asked Questions About AI Consulting Services */}
        <FaqAccordion />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
