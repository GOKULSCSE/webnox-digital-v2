"use client";

import { useState } from "react";

interface Testimonial {
  id: number;
  initials: string;
  name: string;
  role: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    initials: "SJ",
    name: "Sarah Jenkins",
    role: "Head of Operations, FinEdge",
    quote:
      "Partnering with Webnox was one of the best decisions we made for our brand. From the very first discovery call, the team took the time to understand our complex workflows and delivered a resilient AI system.",
  },
  {
    id: 2,
    initials: "ER",
    name: "Elena Rostova",
    role: "VP of Product, NexusAI",
    quote:
      "Webnox engineered our enterprise AI pipeline with incredible precision. They took our proprietary logic and turned it into an autonomous, production-ready system in just four weeks.",
  },
  {
    id: 3,
    initials: "RT",
    name: "Robert Tom",
    role: "Founder of Something",
    quote:
      "Partnering with Webnox was one of the best decisions we made for our brand, From the very first discovery call, the team took the time to understand our goals and engineer the exact solution we needed.",
  },
  {
    id: 4,
    initials: "DC",
    name: "David Chen",
    role: "CTO, HyperScale Systems",
    quote:
      "Most agencies talk about AI hype. Webnox actually builds scalable infrastructure. Zero data retention, full source code delivery, and flawless execution from day one.",
  },
  {
    id: 5,
    initials: "MV",
    name: "Marcus Vance",
    role: "Co-Founder, Aura Health",
    quote:
      "From requirement discovery to final testing, Webnox showed unparalleled engineering rigor. Truly the most capable and reliable AI development partner we’ve ever worked with.",
  },
];

export default function Testimonials() {
  const [activeId, setActiveId] = useState<number | null>(null);

  // Duplicate for seamless infinite loop
  const displayItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden select-none"
      style={{
        background:
          "linear-gradient(115deg, #FF7230 0%, #FF6A2F 26%, #FF7631 48%, #FF8935 72%, #FF532B 100%)",
      }}
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-white/95">
            What clients say about us?
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-white tracking-tight leading-[1.16]">
            We’re proud to partner with visionaries and businesses. Their feedback
            inspires digital experiences that make impact.
          </h2>
          <p className="mt-4 sm:mt-5 text-white/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            While the world talks about AI possibilities, we engineer the autonomous
            systems that actually run your business.
          </p>
        </div>

        {/* Automatic Scrolling Carousel Track (No scrollbar) */}
        <div
          className="relative mt-14 sm:mt-18 lg:mt-20 overflow-hidden group w-full"
          onMouseLeave={() => setActiveId(null)}
        >
          {/* Marquee Track */}
          <div className="flex items-center gap-5 sm:gap-6 lg:gap-7 w-max py-8 animate-[testimonials-marquee_38s_linear_infinite] group-hover:[animation-play-state:paused]">
            {displayItems.map((item, index) => {
              const isActive = activeId === item.id;
              return (
                <div
                  key={`${item.id}-${index}`}
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onClick={() => setActiveId(item.id)}
                  className={`cursor-pointer rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 shrink-0 w-[290px] sm:w-[340px] md:w-[370px] min-h-[250px] sm:min-h-[270px] ${
                    isActive
                      ? "bg-white text-[#140803] scale-105 z-10 ]"
                      : "bg-white/[0.12] backdrop-blur-md text-white hover:bg-white/[0.18] hover:scale-[1.02]"
                  }`}
                >
                  {/* Quote */}
                  <p
                    className={`text-xs sm:text-[13.5px] leading-relaxed line-clamp-4 font-normal transition-colors duration-300 ${
                      isActive ? "text-[#221711]" : "text-white/95"
                    }`}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Author Meta */}
                  <div className="pt-4 mt-auto">
                    {/* Divider line */}
                    <div
                      className={`h-[1px] w-full mb-3.5 transition-colors duration-300 ${
                        isActive ? "bg-neutral-200/90" : "bg-white/20"
                      }`}
                    />

                    <div className="flex items-center gap-3">
                      {/* Avatar initials circle */}
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shrink-0 transition-colors duration-300 ${
                          isActive
                            ? "bg-[#ede4db] text-[#3d2417]"
                            : "bg-white/25 text-white border border-white/30"
                        }`}
                      >
                        {item.initials}
                      </div>

                      {/* Name & Role */}
                      <div className="flex flex-col text-left overflow-hidden">
                        <span
                          className={`text-xs sm:text-sm font-semibold truncate transition-colors duration-300 ${
                            isActive ? "text-[#140803]" : "text-white"
                          }`}
                        >
                          {item.name}
                        </span>
                        <span
                          className={`text-[11px] sm:text-xs truncate transition-colors duration-300 ${
                            isActive ? "text-[#756b64]" : "text-white/75"
                          }`}
                        >
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Iconic Webnox Logo Ribbon */}
        <div className="mt-14 sm:mt-18 lg:mt-20 flex justify-center">
          <img
            src="/images/Vector (1) White.svg"
            alt="Webnox"
            className="h-8 sm:h-9 w-auto object-contain opacity-95 drop-shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:opacity-100 transition-opacity"
            draggable={false}
          />
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes testimonials-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
