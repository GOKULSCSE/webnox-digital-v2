"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AwardBadge {
  src: string;
  alt: string;
  platform: string;
}

const AWARD_BADGES: AwardBadge[] = [
  {
    src: "/images/Award 1.png",
    alt: "SoftwareSuggest Top Software Company 2026",
    platform: "SoftwareSuggest",
  },
  {
    src: "/images/Award 2.png",
    alt: "AppFutura Top App Development Company in India 2023",
    platform: "AppFutura",
  },
  {
    src: "/images/Award 3.png",
    alt: "Capterra Best Ease of Use 2023",
    platform: "Capterra",
  },
  {
    src: "/images/Award 4.png",
    alt: "GoodFirms Top 50 Enterprise Products Best Software Awards 2023",
    platform: "GoodFirms",
  },
  {
    src: "/images/Award 5.png",
    alt: "ITFirms Top Software Development Company 2023",
    platform: "ITFirms",
  },
  {
    src: "/images/Award 6.png",
    alt: "DesignRush Top Web Design Agency 2023",
    platform: "DesignRush",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#160a04] text-white selection:bg-[#ff5e00] selection:text-white">
      {/* Deep Brown Background Gradient Base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 82% 38%, #2e1307 0%, #1a0b04 45%, #130702 100%)",
        }}
        aria-hidden="true"
      />

      {/* Ambient Orange Glow behind the 3D architecture visual */}
      <div
        className="absolute right-0 lg:right-[-5%] top-[38%] -translate-y-1/2 w-[550px] lg:w-[750px] h-[550px] lg:h-[750px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 94, 0, 0.28) 0%, rgba(255, 114, 48, 0.12) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Top-Left Warm Vignette */}
      <div
        className="absolute left-[-10%] top-[-5%] w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.09) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Main 2-Column Hero Grid: Left Content, Right 3D Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Heading, Paragraph, and Pill CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-bold text-white tracking-tight leading-[1.14]">
              AI Chatbot Development{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
                Services in India
              </span>
            </h1>

            {/* Hero Paragraphs */}
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl mt-4 sm:mt-6">
              Webnox Digital provides end-to-end AI chatbot development services in India to help growing businesses and enterprises automate customer interactions, resolve high-volume inquiries and support operations 24/7. As an established AI development company in India, we build custom conversational solutions using Generative AI, Large Language Models, Natural Language Processing, and Retrieval Augmented Generation.
            </p>
            <p className="text-neutral-300/90 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl mt-3">
              Our chatbots do not just chat, they integrate directly with your website, official WhatsApp Business API, CRM and internal databases to deliver verified, context aware responses while keeping your company data private and secure.
            </p>

            {/* Primary Action Buttons (Exact /ai-application-development-services/ Pill Style) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-7 sm:mt-9 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-neutral-950 text-sm sm:text-base font-semibold pl-2 pr-6 py-2.5 sm:py-2 rounded-full transition-all duration-300 shadow-[0_4px_24px_rgba(255,114,48,0.22)] hover:shadow-[0_6px_32px_rgba(255,114,48,0.36)] hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF7230] to-[#FF532B] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span>Build Your AI Chatbot</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-neutral-300 hover:text-white text-sm sm:text-base font-medium px-6 py-3 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-pointer text-center"
              >
                <span>Talk to Our AI Experts</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Floating 3D Chatbot Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-2 lg:mt-0">
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#FF7230]/25 via-[#FF6A2F]/20 to-transparent blur-[100px] rounded-full pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative w-full max-w-[260px] sm:max-w-[420px] lg:max-w-[540px] flex items-center justify-center">
              <Image
                src="/images/ai-chatbot-hero.png"
                alt="Webnox AI Chatbot Architecture: Conversational Orb, Speech Bubbles, RAG Documents, and API Integrations"
                width={540}
                height={540}
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.03] select-none pointer-events-none drop-shadow-[0_24px_48px_rgba(255,94,0,0.22)]"
                draggable={false}
                priority
              />
            </div>
          </div>
        </div>

        {/* Industry Awards & Recognitions Bar (Compact 3x2 on mobile, 6-col on desktop) */}
        <div className="w-full mt-8 sm:mt-16 lg:mt-20 pt-6 sm:pt-10 border-t border-white/10">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-5 md:gap-8 items-center justify-items-center max-w-6xl mx-auto px-0 sm:px-4">
            {AWARD_BADGES.map((badge, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center py-2 px-2 sm:p-2 rounded-xl bg-white/[0.04] sm:bg-transparent border border-white/10 sm:border-transparent transition-all duration-300 group"
              >
                <div className="relative w-20 sm:w-32 md:w-36 lg:w-40 h-14 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                    className="object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
