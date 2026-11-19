import type { Metadata } from "next";
import { buildPageMetadata, getStandardPageSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ai-services/Navbar";
import ArchitectSolution from "@/components/contact/ArchitectSolution";
import Footer from "@/components/ai-services/Footer";

const PAGE_TITLE = "Architect Your Next AI Solution | Contact Webnox Digital";
const PAGE_DESC =
  "Share your AI engineering requirements, product concept, or workflow challenge with senior Webnox architects and receive a technical assessment in 24 hours.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESC,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <SmoothScroll>
      <JsonLd
        data={getStandardPageSchema({
          pageType: "ContactPage",
          name: PAGE_TITLE,
          breadcrumbName: "Contact",
          description: PAGE_DESC,
          path: "/contact/",
        })}
      />
      <main className="w-full min-h-screen bg-[#fdfaf6] text-neutral-900 selection:bg-[#ff5e00] selection:text-white">
        <Navbar />
        <ArchitectSolution />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

