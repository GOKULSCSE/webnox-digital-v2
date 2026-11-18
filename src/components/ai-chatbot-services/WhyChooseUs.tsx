"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  FileCheck2,
  KeyRound,
  Lock,
  Users2,
  PlugZap,
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
    id: "stability",
    tabTitle: "15+ Years of Software Stability",
    icon: <Calendar className="w-4 h-4" />,
    heading: "1. 15+ Years of Proven Software Stability",
    description:
      "With over 15 years of software engineering experience and 2,570+ client projects delivered across 20+ countries, Webnox Digital provides proven technical maturity that temporary AI wrapper agencies cannot offer.",
    bullets: [
      "15+ years of continuous enterprise software engineering",
      "2,570+ client projects delivered across 20+ countries",
      "Production-grade architecture built for long-term uptime",
      "Zero startup fragility or short-lived wrapper tooling",
    ],
  },
  {
    id: "accuracy",
    tabTitle: "Accurate Answers on Approved Files",
    icon: <FileCheck2 className="w-4 h-4" />,
    heading: "2. Accurate Answers Built on Your Approved Files",
    description:
      "Instead of guessing or hallucinating answers, your chatbot verifies approved company files and internal databases before responding, applying strict safety guardrails and transparent citations for complete customer trust.",
    bullets: [
      "Hybrid RAG retrieval across approved PDFs, catalogs, and DBs",
      "Transparent source citations on every factual response",
      "Strict fallback guardrails when information is unavailable",
      "Benchmarked with RAGAS and DeepEval accuracy frameworks",
    ],
  },
  {
    id: "ownership",
    tabTitle: "100% Ownership of Everything Built",
    icon: <KeyRound className="w-4 h-4" />,
    heading: "3. You Own 100% of Everything We Build",
    description:
      "All custom application source code, ingestion scripts, prompt templates, and vector databases are delivered directly to your company repositories and cloud accounts with zero vendor lock-in or royalties.",
    bullets: [
      "Full source code and ingestion pipelines pushed to your repos",
      "Prompt templates and vector indexes hosted in your cloud",
      "Zero per-resolution or per-seat SaaS subscription fees",
      "Complete freedom to scale or modify internally anytime",
    ],
  },
  {
    id: "compliance",
    tabTitle: "DPDP Act 2023 & GDPR Compliance",
    icon: <Lock className="w-4 h-4" />,
    heading: "4. Built for India's DPDP Act 2023 & GDPR Compliance",
    description:
      "Your customer chats and private records stay inside your secure cloud accounts on AWS Mumbai or Azure India, fully compliant with DPDP Act rules without training public models.",
    bullets: [
      "Hosted inside AWS Mumbai or Azure India private VPCs",
      "Presidio PII masking for phone numbers, PAN, and Aadhaar",
      "Zero customer chat data used to train public AI models",
      "Role-based access control and full audit logging",
    ],
  },
  {
    id: "senior-engineers",
    tabTitle: "Direct Senior AI Engineers",
    icon: <Users2 className="w-4 h-4" />,
    heading: "5. Direct Collaboration with Senior AI Engineers",
    description:
      "You communicate directly with our senior full stack AI and backend architects from day one, ensuring clear technical milestones, faster project iterations and zero miscommunication from non-technical account managers.",
    bullets: [
      "Day-one access to senior full-stack AI and backend architects",
      "Clear weekly milestones and working sandbox reviews",
      "Zero translation delays through non-technical middlemen",
      "Transparent token cost and latency trade-off guidance",
    ],
  },
  {
    id: "integrations",
    tabTitle: "Indian & Global Business Tools",
    icon: <PlugZap className="w-4 h-4" />,
    heading: "6. Seamless Integration with Indian & Global Business Tools",
    description:
      "We connect your chatbot directly into the software your teams run daily, including WhatsApp Business API, Zoho CRM, LeadSquared, Salesforce, HubSpot and custom REST APIs for automated workflows.",
    bullets: [
      "Official WhatsApp Business Cloud API with HMAC SHA-256 webhooks",
      "Native connectors for Zoho CRM, LeadSquared, Salesforce & HubSpot",
      "Custom REST API & ERP integrations for live order/inventory lookups",
      "Instant human agent handoff with full conversation summaries",
    ],
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = CAPABILITIES[activeIndex];

  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#080503] text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.04] blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7230]" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-400">
              Why Choose us
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-center leading-[1.2] tracking-tight text-white">
            Why Choose Webnox Digital as Your AI Chatbot Development Company in India?
          </h2>
        </div>

        {/* 3-Column Showcase Layout (Exact /ai-application-development-services/ UI) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Column: Selector List (2-col on mobile, 3-col on sm, 1-col on lg) */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2.5 sm:gap-3 justify-between">
            {CAPABILITIES.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full text-left p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl flex items-center gap-2.5 sm:gap-3 transition-all duration-300 cursor-pointer border ${
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
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive
                        ? "bg-white/20 border border-white/40 text-white shadow-inner"
                        : "bg-white/[0.06] border border-white/[0.08] text-neutral-400"
                    }`}
                  >
                    {item.icon}
                  </div>

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

          {/* Middle Column: The Brown Card */}
          <div
            className="lg:col-span-6 relative rounded-[22px] sm:rounded-[34px] border border-white/10 p-5 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[300px] sm:min-h-[380px] lg:min-h-[460px]"
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
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-3 sm:mb-4">
                    {activeItem.heading}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-200/90 leading-relaxed font-normal mb-6 sm:mb-8">
                    {activeItem.description}
                  </p>
                </div>

                {/* 4 Feature Bullet Points with custom brand gradient double-chevron icon */}
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
                        <g clipPath="url(#clip0_chatbot_why)">
                          <path
                            d="M15 15H8L1 8H8L15 15ZM15 8H8L1 1H8L15 8Z"
                            fill="url(#paint0_linear_chatbot_why)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_chatbot_why"
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
                          <clipPath id="clip0_chatbot_why">
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ai-crystal-orb.jpg"
              alt="AI Chatbot Engineering Crystal Orb"
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
