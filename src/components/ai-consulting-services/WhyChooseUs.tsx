"use client";

import React, { useState } from "react";
import {
  Calendar,
  Cpu,
  Users2,
  KeyRound,
  Lock,
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
    tabTitle: "15+ Years Software Stability",
    icon: <Calendar className="w-4 h-4" />,
    heading: "1. 15+ Years of Proven Software Stability",
    description:
      "With over 15 years of software engineering experience and 2,570+ client projects delivered globally, we stand out among top AI consulting companies for proven operational maturity.",
    bullets: [
      "15+ years of continuous enterprise software engineering",
      "2,570+ client projects delivered across global markets",
      "Proven operational maturity beyond short-lived AI wrappers",
      "Long-term architectural stability and production SLAs",
    ],
  },
  {
    id: "prototypes",
    tabTitle: "Working Prototypes Over Decks",
    icon: <Cpu className="w-4 h-4" />,
    heading: "2. Working Prototypes Over Theoretical Decks",
    description:
      "Unlike traditional AI consulting firms that deliver static presentations, our team builds working sandbox prototypes within weeks, letting you validate real performance before committing full capital.",
    bullets: [
      "Functional PoC sandboxes delivered in weeks, not months",
      "Test retrieval precision and latency on real company data",
      "De-risk capital investments with empirical accuracy benchmarks",
      "Zero wasted spend on static multi-month advisory slides",
    ],
  },
  {
    id: "consultants",
    tabTitle: "Dedicated Data & AI Consultants",
    icon: <Users2 className="w-4 h-4" />,
    heading: "3. Dedicated Data and AI Consultants",
    description:
      "You collaborate directly with senior data and AI consultants and backend architects from day one, ensuring clear milestones, fast turnaround cycles and zero middleman account delays.",
    bullets: [
      "Direct day-one access to senior AI consultants and architects",
      "Clear weekly technical milestones and transparent roadmaps",
      "Fast iteration cycles with zero non-technical middlemen",
      "Plain-English trade-off reviews on models, latency, and cost",
    ],
  },
  {
    id: "ownership",
    tabTitle: "100% IP & Code Ownership",
    icon: <KeyRound className="w-4 h-4" />,
    heading: "4. 100% Intellectual Property & Code Ownership",
    description:
      "All custom application source code, prompt libraries, ingestion scripts and vector database setups are delivered directly to your company repositories with zero vendor lock-in or royalties.",
    bullets: [
      "Full source code and prompt libraries pushed to your repos",
      "Ingestion pipelines and vector DBs hosted in your cloud",
      "Zero recurring licensing royalties or vendor lock-in",
      "Complete autonomy to extend and scale internally",
    ],
  },
  {
    id: "security",
    tabTitle: "Enterprise-Grade Security",
    icon: <Lock className="w-4 h-4" />,
    heading: "5. Enterprise-Grade Security & Data Isolation",
    description:
      "Your private data remains strictly isolated within your private cloud environment (AWS, Azure or GCP), fully protected by automated PII masking and zero-data-retention API policies.",
    bullets: [
      "Isolated private VPC deployments on AWS, Azure, or GCP",
      "Automated PII masking and role-based access controls",
      "Certified zero-data-retention enterprise API policies",
      "Aligned with global GDPR, HIPAA, and SOC 2 standards",
    ],
  },
  {
    id: "integration",
    tabTitle: "Seamless Software Integration",
    icon: <PlugZap className="w-4 h-4" />,
    heading: "6. Seamless Integration with Existing Software",
    description:
      "We integrate custom AI models directly into your daily enterprise tools, including Salesforce, HubSpot, SAP, Zendesk and custom APIs, avoiding costly disruptions to your current workflows.",
    bullets: [
      "Native connectors for Salesforce, HubSpot, SAP, and Zendesk",
      "Custom REST/GraphQL APIs and secure event bus sync",
      "Zero disruption to established team workflows",
      "Human-in-the-loop approvals for sensitive actions",
    ],
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#080503] text-white overflow-hidden">
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
            Why Choose Webnox Digital Among Top AI Consulting Companies?
          </h2>
        </div>

        {/* 3-Column Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Column: Selector List */}
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
            className="lg:col-span-6 relative rounded-[22px] sm:rounded-[34px] border border-white/10 p-5 sm:p-8 md:p-10 grid overflow-hidden shadow-2xl min-h-[300px] sm:min-h-[380px] lg:min-h-[460px]"
            style={{
              background:
                "linear-gradient(152.18deg, #60290B -16.91%, #140B06 99.34%)",
            }}
          >
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

            {CAPABILITIES.map((item, index) => {
              const isActive = index === activeIndex;
              const paintId = `paint0_linear_consulting_why_${item.id}`;
              const clipId = `clip0_consulting_why_${item.id}`;
              return (
                <div
                  key={item.id}
                  aria-hidden={!isActive}
                  className={`col-start-1 row-start-1 relative z-10 flex flex-col h-full justify-between transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-3 sm:mb-4">
                      {item.heading}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-200/90 leading-relaxed font-normal mb-6 sm:mb-8">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 sm:gap-3">
                        <svg
                          className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 sm:mt-1"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <g clipPath={`url(#${clipId})`}>
                            <path
                              d="M15 15H8L1 8H8L15 15ZM15 8H8L1 1H8L15 8Z"
                              fill={`url(#${paintId})`}
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id={paintId}
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
                            <clipPath id={clipId}>
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
                </div>
              );
            })}
          </div>

          {/* Right Column: AI Crystal Sphere Orb Card */}
          <div className="lg:col-span-3 relative rounded-[22px] sm:rounded-[34px] border border-white/10 overflow-hidden shadow-2xl bg-[#0d0805] h-52 sm:h-72 lg:h-auto min-h-[220px] sm:min-h-[320px] lg:min-h-[460px] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ai-crystal-orb.jpg"
              alt="AI Consulting Engineering Crystal Orb"
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
