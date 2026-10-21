"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  Database,
  Layers,
  Target,
  ShieldCheck,
  Gauge,
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
    id: "ai-native-workflow",
    tabTitle: "AI-Native Engineering Workflow",
    icon: <Cpu className="w-4 h-4" />,
    heading: "1. AI-Native Engineering Workflow",
    description:
      "AI is considered across application planning, coding, testing and deployment, helping identify opportunities for automation throughout the development lifecycle.",
    bullets: [
      "AI considered across application planning and system architecture",
      "Automated testing and coding workflows integrated early",
      "Continuous identification of automation opportunities across lifecycle",
      "Streamlined deployment pipelines with production-ready AI models",
    ],
  },
  {
    id: "business-data",
    tabTitle: "Business Data Connected to AI",
    icon: <Database className="w-4 h-4" />,
    heading: "2. Business Data Connected to AI",
    description:
      "We connect AI applications with relevant business documents, databases, APIs and internal systems so outputs can use context specific to your operations.",
    bullets: [
      "Direct integration with proprietary business documents and knowledge bases",
      "Secure connectivity to relational databases and data lakes",
      "Context-aware outputs tailored to enterprise workflows",
      "Controlled data access protocols and API connectors",
    ],
  },
  {
    id: "model-agnostic",
    tabTitle: "Model-Agnostic Application Architecture",
    icon: <Layers className="w-4 h-4" />,
    heading: "3. Model-Agnostic Application Architecture",
    description:
      "We select AI models according to the use case and design integrations around changing technical requirements, helping avoid unnecessary dependence on a single model provider.",
    bullets: [
      "Objective model selection tailored strictly to the use case",
      "Flexible architectural abstraction avoiding single-vendor lock-in",
      "Dynamic routing and fallback between proprietary and open models",
      "Adaptable integrations supporting evolving technical requirements",
    ],
  },
  {
    id: "real-task-evaluation",
    tabTitle: "AI Evaluation Against Real Tasks",
    icon: <Target className="w-4 h-4" />,
    heading: "4. AI Evaluation Against Real Tasks",
    description:
      "We assess application performance using representative business scenarios, including response relevance, information extraction, task completion and failure handling.",
    bullets: [
      "Rigorous evaluation using representative real-world business scenarios",
      "Continuous benchmarks for response relevance and contextual precision",
      "Structured metrics for information extraction and task completion",
      "Graceful error recovery, fallback, and failure handling policies",
    ],
  },
  {
    id: "controlled-actions",
    tabTitle: "Controlled AI Actions and Approvals",
    icon: <ShieldCheck className="w-4 h-4" />,
    heading: "5. Controlled AI Actions and Approvals",
    description:
      "We define which actions an AI application can perform, which data it can access and when a human must review or approve an operation.",
    bullets: [
      "Strict definition of executable actions and tool invocations",
      "Granular role-based access controls for enterprise data",
      "Configurable human-in-the-loop review and approval checkpoints",
      "Comprehensive audit logging for regulatory and operational governance",
    ],
  },
  {
    id: "cost-performance",
    tabTitle: "Application-Level Cost Control",
    icon: <Gauge className="w-4 h-4" />,
    heading: "6. Application-Level Cost and Performance Control",
    description:
      "We consider model usage, response latency, caching, request volume and processing requirements to help manage operating costs as application usage grows.",
    bullets: [
      "Model usage tracking and inference cost monitoring",
      "Aggressive semantic caching and request latency optimization",
      "Dynamic load balancing and request volume throttling",
      "Predictable infrastructure spend as application usage scales",
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
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7230]" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-400">
              Why Choose us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-center leading-[1.2] tracking-tight text-white">
            Why Choose Webnox for<br className="hidden sm:inline" />{" "}
            <span className="text-[#FF7230]">AI</span> Application Development?
          </h2>
        </div>

        {/* 3-Column Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Selector List (6 items) */}
          <div className="lg:col-span-3 flex flex-col gap-3 justify-between">
            {CAPABILITIES.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full text-left p-3 sm:p-3.5 rounded-2xl flex items-center gap-3 transition-all duration-300 cursor-pointer border ${
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

                {/* 4 Feature Bullet Points with custom brand gradient double-chevron icon */}
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
              alt="AI-Native Engineering Crystal Orb"
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
