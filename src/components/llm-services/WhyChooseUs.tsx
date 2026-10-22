"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  Target,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface CapabilityItem {
  id: string;
  tabTitle: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
  bullets: string[];
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "ai-native-expertise",
    tabTitle: "AI-Native Engineering Expertise",
    icon: <Cpu className="w-4 h-4" />,
    heading: "1. AI-Native Engineering Expertise",
    description:
      "AI is integrated into software development, digital products and business workflows to address practical challenges. This approach connects LLM capabilities with the wider systems and experiences businesses rely on.",
    bullets: [
      "Deep integration across software development and digital products",
      "Connecting LLM capabilities with existing business systems",
      "Engineering workflows built for practical enterprise automation",
      "End-to-end delivery from concept to production-scale operations",
    ],
  },
  {
    id: "business-first-solutions",
    tabTitle: "Business-First LLM Solutions",
    icon: <Target className="w-4 h-4" />,
    heading: "2. Business-First LLM Solutions",
    description:
      "Every project starts with its business objectives and technical requirements. The right combination of prompt engineering, RAG, fine-tuning, and conventional software logic depends on the use case, data, and expected outcomes.",
    bullets: [
      "Strategy aligned with measurable business outcomes and ROI",
      "Objective selection of prompt engineering, RAG, or fine-tuning",
      "Conventional software logic blended with AI models for determinism",
      "Architectural design tailored to specific enterprise datasets",
    ],
  },
  {
    id: "existing-systems-integration",
    tabTitle: "Integration With Existing Systems",
    icon: <Network className="w-4 h-4" />,
    heading: "3. Integration With Existing Systems",
    description:
      "LLM applications can connect with business software, APIs, databases, and internal knowledge sources. Careful integration planning accounts for data access, permissions, and existing operational processes.",
    bullets: [
      "Seamless connectors for ERP, CRM, and SaaS software",
      "Granular enterprise role-based access and data permissions",
      "Real-time synchronization with proprietary databases and data lakes",
      "Preservation of existing workflows without operational disruption",
    ],
  },
  {
    id: "testing-beyond-prototype",
    tabTitle: "Testing Beyond the Prototype",
    icon: <ShieldCheck className="w-4 h-4" />,
    heading: "4. Testing Beyond the Prototype",
    description:
      "Production-focused evaluation examines response quality, reliability, security, latency, and operating costs. Ongoing monitoring helps identify limitations and improve LLM application performance after deployment.",
    bullets: [
      "Comprehensive evaluation of response quality and factual grounding",
      "Rigorous testing for security vulnerabilities and prompt injection",
      "Continuous latency tracking and token-cost optimization",
      "Active monitoring and regression testing in live environments",
    ],
  },
  {
    id: "connected-growth",
    tabTitle: "Connected Product & Growth Capabilities",
    icon: <TrendingUp className="w-4 h-4" />,
    heading: "5. Connected Product and Growth Capabilities",
    description:
      "Software development, AI engineering, automation, and digital marketing expertise come together to support the wider product lifecycle—from development and launch to promotion and continuous improvement.",
    bullets: [
      "Full product lifecycle support from development to deployment",
      "Cross-functional synergy between software, AI, and digital growth",
      "Continuous post-launch enhancements and feature iterations",
      "Scalable infrastructure built for long-term user expansion",
    ],
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = CAPABILITIES[activeIndex];

  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#080503] text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.04] blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-center leading-[1.2] tracking-tight text-white">
            Why Choose Webnox Digital as Your<br className="hidden sm:inline" />{" "}
            <span className="text-[#FF7230]">LLM</span> Development Company?
          </h2>
        </div>

        {/* 3-Column Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Selector List (5 items) */}
          <div className="lg:col-span-3 flex flex-col gap-3 justify-between">
            {CAPABILITIES.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full text-left p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "border-transparent text-white shadow-lg shadow-orange-950/40"
                      : "bg-[#140e0a]/80 border-white/[0.08] hover:bg-[#1c130d] hover:border-white/20 text-neutral-300"
                  }`}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
                        }
                      : undefined
                  }
                >
                  {/* Left Icon Square */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive
                        ? "bg-white/20 border border-white/40 text-white shadow-inner"
                        : "bg-white/[0.06] border border-white/[0.08] text-neutral-400"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Tab Title */}
                  <span
                    className={`text-xs sm:text-[13px] font-bold leading-snug tracking-tight ${
                      isActive ? "text-white" : "text-neutral-300"
                    }`}
                  >
                    {item.tabTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Middle Column: The Brown Card (Expanded Width) */}
          <div
            className="lg:col-span-6 relative rounded-[28px] sm:rounded-[34px] border border-white/10 p-7 sm:p-9 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[460px]"
            style={{
              background:
                "linear-gradient(152.18deg, #60290B -16.91%, #140B06 99.34%)",
            }}
          >
            {/* Corner diagonal arrow watermark */}
            <svg
              className="absolute right-[-10px] bottom-[-10px] w-48 h-48 text-[#FF7230]/[0.08] pointer-events-none select-none stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 flex flex-col h-full justify-between"
              >
                <div>
                  {/* Heading */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-4">
                    {activeItem.heading}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-sm text-neutral-200/90 leading-relaxed font-normal mb-8">
                    {activeItem.description}
                  </p>
                </div>

                {/* Feature Bullet Points with custom brand gradient double-chevron icon */}
                <div className="flex flex-col gap-3.5 pt-4 border-t border-white/10">
                  {activeItem.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      {/* Custom brand double-chevron SVG bullet */}
                      <svg
                        className="w-3.5 h-3.5 flex-shrink-0 mt-1"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <g clipPath="url(#clip0_1467_1522)">
                          <path
                            d="M15 15H8L1 8H8L15 15ZM15 8H8L1 1H8L15 8Z"
                            fill="url(#paint0_linear_1467_1522)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1467_1522"
                            x1="1"
                            y1="11.64"
                            x2="13.3208"
                            y2="13.1127"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF7230" />
                            <stop offset="0.258735" stopColor="#FF6A2F" />
                            <stop offset="0.439271" stopColor="#FF7631" />
                            <stop offset="0.697859" stopColor="#FF8935" />
                            <stop offset="0.996331" stopColor="#FF532B" />
                          </linearGradient>
                          <clipPath id="clip0_1467_1522">
                            <rect width="15" height="15" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-xs sm:text-[13px] text-neutral-300 font-medium leading-relaxed">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: AI Crystal Sphere Orb Card */}
          <div className="lg:col-span-3 relative rounded-[28px] sm:rounded-[34px] border border-white/10 overflow-hidden shadow-2xl bg-[#0d0805] min-h-[460px] flex items-center justify-center">
            <img
              src="/images/ai-crystal-orb.jpg"
              alt="LLM Development Engineering Crystal Orb"
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              draggable={false}
            />
            {/* Subtle bottom gradient shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
