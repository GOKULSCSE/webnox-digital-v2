"use client";

import React from "react";

interface PartnerItem {
  name: string;
  badge?: string;
}

const PARTNER_CLIENTS: PartnerItem[] = [
  { name: "OneStepGPS" },
  { name: "Cyber Upgrade" },
  { name: "RevPartners" },
  { name: "FARRAGUT" },
  { name: "LIFELENZ" },
  { name: "supio" },
  { name: "Microsoft" },
];

interface AwardItem {
  platform: string;
  award: string;
  year?: string;
}

const AWARDS_LIST: AwardItem[] = [
  {
    platform: "SoftwareSuggest",
    award: "Top Software Company",
    year: "2023",
  },
  {
    platform: "AppFutura",
    award: "Top App Development Company",
  },
  {
    platform: "Capterra",
    award: "Best Ease of Use",
    year: "2023",
  },
  {
    platform: "GoodFirms",
    award: "Top 50 Enterprise Software",
    year: "2023",
  },
  {
    platform: "ITFirms",
    award: "Top Software Development",
    year: "2023",
  },
  {
    platform: "DesignRush",
    award: "Top Web Design Agency",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#030303] text-white">
      {/* Background Ambience & Gradient Orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1500px] h-[750px] pointer-events-none -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft Amber Glow behind the graphic and left text */}
        <div className="absolute top-10 right-0 w-[650px] h-[650px] rounded-full bg-gradient-to-b from-[#ff7230]/16 via-[#ff532b]/8 to-transparent blur-[140px]" />
        <div className="absolute top-[-80px] left-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#ff7230]/10 via-[#ff532b]/5 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main 2-Column Hero Grid: Left Content, Right 3D Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Paragraph, and Pill CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-bold text-white tracking-tight leading-[1.12]">
              AI Application{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
                Development Services
              </span>
            </h1>

            {/* Hero Paragraph */}
            <p className="text-neutral-400 text-base sm:text-lg font-normal leading-relaxed max-w-xl mt-6 sm:mt-8">
              Webnox Digital provides AI application development services to build custom AI
              applications, generative AI solutions and AI agents that integrate business data,
              automate workflows and connect with existing software. As an AI native company, we
              combine AI assisted engineering with application development and testing to deliver
              production ready solutions.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-white hover:bg-neutral-100 text-neutral-950 text-sm sm:text-base font-semibold pl-2 pr-6 py-2 rounded-full transition-all duration-300 shadow-[0_4px_24px_rgba(255,114,48,0.22)] hover:shadow-[0_6px_32px_rgba(255,114,48,0.36)] hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF7230] to-[#FF532B] flex items-center justify-center text-white shadow-sm">
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
                <span>Build Your AI Solution</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-white text-sm sm:text-base font-medium px-6 py-3 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                <span>Talk to Our AI Experts</span>
              </a>
            </div>
          </div>

          {/* Right Column: Floating 3D Isometric Architecture Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Ambient orange glow directly behind the 3D stack */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#FF7230]/25 via-[#FF6A2F]/20 to-transparent blur-[100px] rounded-full pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Seamless 3D Visual (No bounding card, floating directly on dark canvas) */}
            <div className="relative w-full max-w-[560px] lg:max-w-[620px] xl:max-w-[660px] flex items-center justify-center">
              <img
                src="/images/cybersecurity_technology_assurance.svg"
                alt="Webnox AI Architecture Stack: Intelligence, Automation, Solutions"
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.03]"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Bottom Client / Partner Bar */}
        <div className="w-full mt-20 sm:mt-24 pt-10 border-t border-white/10">
          <p className="text-xs sm:text-sm text-neutral-400 font-normal tracking-wide text-center mb-8">
            We collaborate closely with our clients to deliver the highest level of service:
          </p>

          {/* Partner Brand Logos with Vertical Dividers */}
          <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-6 sm:gap-x-8 max-w-5xl mx-auto px-4">
            {PARTNER_CLIENTS.map((partner, index) => (
              <React.Fragment key={partner.name}>
                <div className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300">
                  <span className="font-semibold text-xs sm:text-sm tracking-wider uppercase">
                    {partner.name}
                  </span>
                </div>
                {index < PARTNER_CLIENTS.length - 1 && (
                  <span className="hidden sm:inline-block w-px h-3.5 bg-white/15" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Industry Recognitions Pill Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 max-w-5xl mx-auto mt-8 pt-6 border-t border-white/5">
            {AWARDS_LIST.map((award, index) => (
              <div
                key={index}
                className="bg-white/[0.03] hover:bg-white/[0.06] rounded-xl p-3 border border-white/10 hover:border-[#FF7230]/40 transition-all duration-300 flex flex-col items-center justify-center text-center group"
              >
                <span className="font-semibold text-xs text-neutral-200 group-hover:text-white">
                  {award.platform}
                </span>
                <span className="text-[10px] text-neutral-400 font-normal leading-tight mt-0.5">
                  {award.award}
                </span>
                {award.year && (
                  <span className="text-[9px] text-neutral-400 mt-0.5">({award.year})</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
