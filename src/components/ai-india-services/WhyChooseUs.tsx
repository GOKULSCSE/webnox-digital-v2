"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  Target,
  Network,
  ShieldCheck,
  TrendingUp,
  Lock,
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
    id: "ai-native",
    tabTitle: "AI-Native Development Expertise",
    icon: <Cpu className="w-4 h-4" />,
    heading: "1. AI-Native Development Expertise",
    description:
      "AI capabilities are integrated into software products and business workflows to solve practical challenges, improve processes and support business growth.",
    bullets: [
      "15+ years of software engineering heritage applied to AI systems",
      "Seamless integration into websites, mobile apps, and business software",
      "Robust error-handling, edge-case mitigation, and deterministic logic",
      "End-to-end delivery from architecture design to production maintenance",
    ],
  },
  {
    id: "business-strategy",
    tabTitle: "Business-Focused AI Strategy",
    icon: <Target className="w-4 h-4" />,
    heading: "2. Business-Focused AI Strategy",
    description:
      "Every project begins with clear business goals, identifying practical AI opportunities and the right technical approach for measurable outcomes.",
    bullets: [
      "Alignment with clear ROI metrics, speed-to-market, and cost savings",
      "Objective model selection based on accuracy, cost, and latency",
      "Workflow assessment to ensure AI directly solves the bottleneck",
      "Pragmatic engineering avoiding speculative demos or vanity tech",
    ],
  },
  {
    id: "flexible-architecture",
    tabTitle: "Flexible AI Architecture",
    icon: <Network className="w-4 h-4" />,
    heading: "3. Flexible AI Architecture",
    description:
      "Suitable AI models, RAG pipelines and agent frameworks are selected according to data requirements, performance goals and deployment needs.",
    bullets: [
      "Agnostic integration across OpenAI, Claude, Gemini, and open-source models",
      "Custom vector retrieval and hybrid search pipelines",
      "Modular components allowing seamless future model upgrades",
      "Support for private VPC, on-premise, or managed cloud deployments",
    ],
  },
  {
    id: "security-driven",
    tabTitle: "Security-Driven Development",
    icon: <ShieldCheck className="w-4 h-4" />,
    heading: "4. Security-Driven Development",
    description:
      "Data privacy, access controls and security requirements are considered throughout the AI development lifecycle.",
    bullets: [
      "Strict zero-data-leakage policies ensuring models do not train on your data",
      "Role-based access control (RBAC) and end-to-end data encryption",
      "Automated prompt injection, jailbreak, and hallucination guardrails",
      "Comprehensive compliance alignment with enterprise data standards",
    ],
  },
  {
    id: "product-growth",
    tabTitle: "Connected Product & Growth Expertise",
    icon: <TrendingUp className="w-4 h-4" />,
    heading: "5. Connected Product and Growth Expertise",
    description:
      "AI engineering, software development and digital marketing capabilities support the product journey from development to market growth.",
    bullets: [
      "Over 2,570+ global clients served with 20+ proprietary products built",
      "Cross-functional synergy across engineering, UX, and market growth",
      "Continuous optimization through live telemetry and user feedback loops",
      "Long-term post-launch scalability support and SLA commitments",
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#ff8935] text-xs font-semibold uppercase tracking-wider mb-4">
            The Webnox Advantage
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-center leading-[1.2] tracking-tight text-white">
            Why Choose Webnox Digital as Your<br className="hidden sm:inline" />{" "}
            <span className="text-[#FF7230]">AI Development Company in India?</span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Webnox Digital combines 15+ years of software engineering experience, AI capabilities,
            digital marketing expertise, 2,570+ clients, 20+ own products and delivery across 20+
            countries to help businesses develop AI solutions aligned with their technical needs and
            growth goals.
          </p>

          {/* Highlight Badge */}
          <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-orange-500/15 border border-orange-500/30 text-[#ff9c54] text-xs sm:text-sm font-semibold">
            <Lock className="w-4 h-4 text-[#ff5e00]" />
            <span>Enterprise-Grade Data Privacy, Zero Leakage &amp; 100% IP Ownership</span>
          </div>
        </div>

        {/* 3-Column Showcase Layout matching other pages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Column: Selector List (5 items) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 sm:gap-3 justify-between">
            {CAPABILITIES.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2.5 sm:gap-3 transition-all duration-300 cursor-pointer border ${
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
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
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
            className="lg:col-span-6 relative rounded-[22px] sm:rounded-[34px] border border-white/10 p-5 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]"
            style={{
              background:
                "linear-gradient(152.18deg, #60290B -16.91%, #140B06 99.34%)",
            }}
          >
            {/* Corner diagonal arrow watermark */}
            <svg
              className="absolute right-[-10px] bottom-[-10px] w-36 sm:w-48 h-36 sm:h-48 text-[#FF7230]/[0.08] pointer-events-none select-none stroke-current"
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
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-3 sm:mb-4">
                    {activeItem.heading}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-sm text-neutral-200/90 leading-relaxed font-normal mb-6 sm:mb-8">
                    {activeItem.description}
                  </p>
                </div>

                {/* Feature Bullet Points with custom brand gradient double-chevron icon */}
                <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                  {activeItem.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 sm:gap-3">
                      <svg
                        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 sm:mt-1"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <g clipPath="url(#clip0_why_choose_ai)">
                          <path
                            d="M15 15H8L1 8H8L15 15ZM15 8H8L1 1H8L15 8Z"
                            fill="url(#paint0_linear_why_choose_ai)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_why_choose_ai"
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
                          <clipPath id="clip0_why_choose_ai">
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
          <div className="lg:col-span-3 relative rounded-[22px] sm:rounded-[34px] border border-white/10 overflow-hidden shadow-2xl bg-[#0d0805] h-52 sm:h-72 lg:h-auto min-h-[220px] sm:min-h-[320px] lg:min-h-[460px] flex items-center justify-center">
            <img
              src="/images/ai-crystal-orb.jpg"
              alt="AI Development Engineering Crystal Orb"
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
