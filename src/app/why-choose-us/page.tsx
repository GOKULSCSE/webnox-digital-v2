import type { Metadata } from "next";
import { buildPageMetadata, getStandardPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-services/Navbar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Footer from "@/components/ai-services/Footer";
import Link from "next/link";

const PAGE_TITLE = "Why Choose Webnox Digital | AI-Native Engineering Team";
const PAGE_DESC =
  "Discover why 2,570+ clients across 20+ countries partner with Webnox Digital for 15+ years of software stability, connected AI workflows, and full IP ownership.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/why-choose-us/",
});

export default function WhyChooseUsPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getStandardPageSchema({
          pageType: "WebPage",
          name: PAGE_TITLE,
          breadcrumbName: "Why Choose Us",
          description: PAGE_DESC,
          path: "/why-choose-us/",
        })}
      />
      <main className="w-full min-h-screen bg-[#080503] text-white selection:bg-[#ff5e00] selection:text-white">
        <Navbar />

        <header className="pt-32 sm:pt-36 pb-4 px-6 sm:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Why Businesses Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] to-[#FF532B]">
              Webnox Digital
            </span>{" "}
            as Their AI Partner
          </h1>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            15+ years of software engineering discipline paired with AI-native product delivery, security controls, and unified growth execution.
          </p>
        </header>

        <WhyChooseUs />

        <section id="contact" className="py-24 px-4 bg-[#050302] text-center border-t border-white/[0.06] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[radial-gradient(ellipse_at_top,rgba(255,94,0,0.15),transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build with an AI-Native Engineering Partner?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Partner with Webnox to turn mission-critical concepts into battle-tested, high-performance software.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#ff5e00] text-white px-9 py-4 rounded-full font-medium hover:bg-[#ff4800] transition-colors duration-300 text-base shadow-[0_10px_25px_rgba(255,94,0,0.35)] cursor-pointer"
          >
            Schedule a Discovery Call
          </Link>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
