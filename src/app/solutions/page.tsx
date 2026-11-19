import type { Metadata } from "next";
import { buildPageMetadata, getStandardPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-services/Navbar";
import Solutions from "@/components/sections/Solutions";
import Footer from "@/components/ai-services/Footer";
import Link from "next/link";

const PAGE_TITLE = "AI-Native Enterprise Systems & Solutions | Webnox Digital";
const PAGE_DESC =
  "Explore production AI-native platforms engineered by Webnox Digital across manufacturing, healthcare, fintech, ERP automation, and digital SEO growth.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/solutions/",
});

export default function SolutionsPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getStandardPageSchema({
          pageType: "CollectionPage",
          name: PAGE_TITLE,
          breadcrumbName: "Solutions",
          description: PAGE_DESC,
          path: "/solutions/",
        })}
      />
      <main className="w-full min-h-screen bg-[#fcf8f2] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />

        <header className="pt-32 sm:pt-36 pb-4 px-6 sm:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#140803] leading-[1.15]">
            Production AI Solutions Engineered for Enterprise Impact
          </h1>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Real-world AI systems built by Webnox Digital across procurement automation, SEO operations, HRMS intelligence, and connected ERP workflows.
          </p>
        </header>

        <Solutions />

        <section id="contact" className="py-24 px-4 bg-[#fcf8f2] text-center border-t border-neutral-200/60">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900">
            Ready to Build Your Custom Solution?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-9 py-4 rounded-full font-medium hover:bg-[#ff5e00] transition-colors duration-300 text-base shadow-md"
          >
            Schedule a Strategy Call
          </Link>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
