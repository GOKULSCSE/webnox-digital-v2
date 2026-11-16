"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import PerspectiveTunnelHero, {
  TUNNEL_IMAGES,
  TunnelItem,
} from "@/components/ui/perspective-tunnel-hero";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const STAGE_NAMES = [
  "Business Problem",
  "AI Use Case",
  "Architecture",
  "Prototype",
  "Production",
  "Optimization",
];

// Real images from the original component; labels are the 6 roadmap stages
const ITEMS: TunnelItem[] = [2, 7, 5, 4, 8, 0].map((imgIdx, i) => ({
  src: TUNNEL_IMAGES[imgIdx].src,
  title: `0${i + 1} ${STAGE_NAMES[i]}`,
}));

export default function RoadmapStrategy() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).__lenis) {
      (window as any).__lenis.scrollTo("#contact", { duration: 1.2 });
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[320vh] bg-[#fdfaf6] border-t border-neutral-200/70"
    >
      <div className="sticky top-0 h-screen min-h-[100dvh] w-full overflow-hidden">
        <PerspectiveTunnelHero progress={scrollYProgress} items={ITEMS} className="w-full h-full">
          {/* Text sits behind the flying cards */}
          <div className="flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.96] text-[#12141a]">
              From Generative AI Idea
              <br />
              <span className="bg-gradient-to-b from-[#FF7230] to-[#FF532B] bg-clip-text text-transparent">
                to Production System
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-xs sm:text-sm md:text-base font-medium text-neutral-700 leading-relaxed">
              You do not need to begin with a massive AI transformation.
              <br className="hidden sm:inline" />{" "}
              Start with one business problem where Generative AI can create measurable value.
            </p>

            <p className="mt-3 text-xs sm:text-sm font-semibold text-neutral-800">
              Webnox can help you move from:
            </p>

            <p className="mt-2 max-w-xl text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Whether you need an AI assistant, RAG system, copilot, AI agent, multimodal application, or GenAI-powered product, we engineer the system around your business requirements.
            </p>

            {/* Clickable CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5 pointer-events-auto relative z-30">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#FF7230] to-[#FF532B] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer pointer-events-auto relative z-30"
              >
                <span>Build Your AI Solution</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 font-semibold text-xs sm:text-sm border border-neutral-300/80 shadow-xs hover:border-[#FF7230]/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer pointer-events-auto relative z-30"
              >
                <span>Talk to Our AI Experts</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-600" />
              </a>
            </div>
          </div>
        </PerspectiveTunnelHero>
      </div>
    </section>
  );
}
