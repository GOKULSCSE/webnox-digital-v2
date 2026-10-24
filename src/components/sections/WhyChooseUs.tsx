"use client";

import { useState } from "react";

interface PillarItem {
  id: string;
  tabLabel: string;
  iconType: "expand" | "plus" | "concept" | "marketing" | "tech" | "growth";
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

const PILLARS_DATA: PillarItem[] = [
  {
    id: "engineering",
    tabLabel: "Strong Software\nEngineering Foundation",
    iconType: "expand",
    title: "Strong Software Engineering Foundation",
    description:
      "Backed by 14+ years of experience in web, mobile, software, and digital product engineering, we provide the battle-tested technical foundation required to build mission-critical, AI-powered products and connected enterprise platforms that scale effortlessly.",
    highlights: [
      "Full-stack web, cloud, and cross-platform mobile engineering",
      "High-concurrency distributed systems and microservice architectures",
      "Production-ready AI integration with robust data pipelines",
      "Enterprise-grade security, automated CI/CD, and 99.9% uptime reliability",
    ],
    image: "/images/ai-crystal-orb.jpg",
  },
  {
    id: "ai-legacy",
    tabLabel: "AI Across Existing\nTechnology",
    iconType: "plus",
    title: "AI Across Existing Technology",
    description:
      "Modernize legacy enterprise workflows without disruptive rewrites. We seamlessly inject state-of-the-art predictive intelligence, LLM agents, and automated decision engines directly into your existing software stack and core operations.",
    highlights: [
      "Custom LLM orchestration & enterprise RAG knowledge systems",
      "Seamless API gateways connecting ERPs, CRMs, and core databases",
      "Autonomous workflow agents reducing repetitive operational tasks by 65%",
      "Real-time edge telemetry and zero-data-leakage compliance pipelines",
    ],
    image: "/images/ai-neural-cube.jpg",
  },
  {
    id: "concept-to-product",
    tabLabel: "Product Development\nfrom Concept",
    iconType: "concept",
    title: "Product Development from Concept",
    description:
      "Transform visionary ideas into market-defining digital reality. From high-fidelity interactive prototyping and user validation to cloud-native production deployment, our multidisciplinary squads engineer products primed for viral market traction.",
    highlights: [
      "Rapid interactive MVP prototyping and user validation in 4-week sprints",
      "Bespoke design systems prioritizing engagement, speed, and premium aesthetics",
      "Scalable event-driven architectures prepared for exponential user growth",
      "Comprehensive telemetry, product analytics, and continuous feature roadmapping",
    ],
    image: "/images/ai-concept-prism.jpg",
  },
  {
    id: "digital-marketing",
    tabLabel: "AI and Digital\nMarketing",
    iconType: "marketing",
    title: "AI and Digital Marketing",
    description:
      "Supercharge brand resonance and accelerate qualified pipeline acquisition. We fuse algorithmic audience clustering, generative creative variants, and predictive lifetime value models to maximize customer acquisition efficiency.",
    highlights: [
      "Dynamic AI-driven ad creative generation and programmatic A/B testing",
      "Multi-touch attribution modeling delivering optimized customer acquisition costs",
      "Generative Search Optimization (GEO) structured for AI answers & LLM citations",
      "Predictive conversion funnels with hyper-personalized user onboarding",
    ],
    image: "/images/ai-torus-ring.jpg",
  },
  {
    id: "tech-capabilities",
    tabLabel: "Multiple Technology\nCapabilities",
    iconType: "tech",
    title: "Multiple Technology Capabilities",
    description:
      "Harness a versatile arsenal of modern frameworks and cutting-edge tech stacks. From Python, Node.js, and Go to Next.js, Flutter, and cloud-native Kubernetes ecosystems, we select the optimal toolchain for unmatched performance.",
    highlights: [
      "Multi-cloud engineering across AWS, Google Cloud, and Azure environments",
      "Modern frontend frameworks: React, Next.js, WebGL/Three.js, and Flutter",
      "High-throughput microservices, vector databases, and GraphQL/gRPC APIs",
      "End-to-end DevOps automation, containerization, and 24/7 observability",
    ],
    image: "/images/ai-quantum-stack.jpg",
  },
  {
    id: "unified-team",
    tabLabel: "Technology and Growth\nUnder One Team",
    iconType: "growth",
    title: "Technology and Growth Under One Team",
    description:
      "Eliminate friction between technical engineering and commercial expansion. We unite software architects, AI researchers, and growth strategists under a unified cross-functional pod aligned directly with your revenue targets.",
    highlights: [
      "Unified sprint cycles synchronizing code releases with growth campaigns",
      "Dedicated squads providing total transparency, velocity metrics, and proactive leadership",
      "Predictable development velocity with zero handoff latency",
      "Post-launch scaling, infrastructure cost optimization, and proactive SLA guarantees",
    ],
    image: "/images/ai-growth-core.jpg",
  },
];

function TabIcon({ type, active }: { type: PillarItem["iconType"]; active: boolean }) {
  const iconClass = active ? "text-white" : "text-neutral-400 group-hover:text-white";

  switch (type) {
    case "expand":
      // 4-corner expand arrows icon matching screenshot
      return (
        <svg className={`w-4 h-4 ${iconClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      );
    case "plus":
      // Square with plus / cross & corner dots
      return (
        <svg className={`w-4 h-4 ${iconClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
    case "concept":
      // Broadcast / signal / concept arcs
      return (
        <svg className={`w-4 h-4 ${iconClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11a9 9 0 0 1 9 9" />
          <path d="M4 4a16 16 0 0 1 16 16" />
          <circle cx="5" cy="19" r="1.5" fill="currentColor" />
        </svg>
      );
    case "marketing":
      // Target / crosshair icon
      return (
        <svg className={`w-4 h-4 ${iconClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="2" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
        </svg>
      );
    case "tech":
      // 4-cube / technology grid icon
      return (
        <svg className={`w-4 h-4 ${iconClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "growth":
      // Arrow up right inside rounded square
      return (
        <svg className={`w-4 h-4 ${iconClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M9 15L15 9" />
          <path d="M10 9h5v5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = PILLARS_DATA[activeIndex];

  return (
    <section className="relative w-full bg-[#080503] text-white py-24 sm:py-32 overflow-hidden select-none">
      {/* Background Ambient Warm Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(255,94,0,0.16),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,94,0,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-32 right-10 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,80,0,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-14 sm:mb-16">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] shadow-[0_0_8px_#ff5e00]" />
            <span className="text-neutral-300 text-xs sm:text-sm font-medium tracking-wide">
              Why Choose us
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight text-white leading-[1.18] max-w-4xl mx-auto">
            Webnox as Your Strategic
            <br />
            <span className="text-[#ff5e00]">AI</span>-Native Engineering Partner
          </h2>
        </div>

        {/* 3-Column Cockpit Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Column: Navigation Tabs with Connected Active Rail */}
          <div className="lg:col-span-4 xl:col-span-3 flex relative">
            {/* Tabs List */}
            <div className="w-full flex flex-col gap-2.5 sm:gap-3">
              {PILLARS_DATA.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative text-left w-full rounded-2xl p-3.5 sm:p-4 transition-all duration-300 cursor-pointer flex items-center gap-3.5 ${
                      isActive
                        ? "bg-gradient-to-r from-[#ff6b2b] via-[#ff5511] to-[#f43f00] text-white shadow-[0_8px_30px_rgba(255,94,0,0.35)]"
                        : "bg-[#140f0b]/80 hover:bg-[#1f1712] border border-white/[0.06] hover:border-white/15 text-neutral-300"
                    }`}
                  >
                    {/* Icon Box */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-white/20 border border-white/30 backdrop-blur-sm"
                          : "bg-white/[0.04] border border-white/[0.08] group-hover:border-white/20 group-hover:bg-white/[0.08]"
                      }`}
                    >
                      <TabIcon type={item.iconType} active={isActive} />
                    </div>

                    {/* Button Text */}
                    <span
                      className={`text-[12.5px] sm:text-[13px] font-semibold tracking-tight whitespace-pre-line leading-tight flex-1 ${
                        isActive ? "text-white font-bold" : "text-neutral-400 group-hover:text-neutral-200"
                      }`}
                    >
                      {item.tabLabel}
                    </span>

                    {/* Active Tab Accent Glow */}
                    {isActive && (
                      <span className="absolute right-2.5 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Vertical Divider Rail with Animated Orange Bar (Hidden on small screens) */}
            <div className="hidden lg:flex flex-col items-center ml-4 relative w-[3px] bg-white/[0.07] rounded-full my-2">
              <div
                className="absolute w-full bg-[#ff5e00] rounded-full transition-all duration-300 shadow-[0_0_12px_#ff5e00]"
                style={{
                  height: `${100 / PILLARS_DATA.length}%`,
                  top: `${(activeIndex * 100) / PILLARS_DATA.length}%`,
                }}
              />
            </div>
          </div>

          {/* Middle Column: Feature Details Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex">
            <div className="w-full relative overflow-hidden rounded-[26px] bg-gradient-to-b from-[#22160d]/95 via-[#160e08]/95 to-[#0f0905]/98 border border-[#ff5e00]/25 p-7 sm:p-9 lg:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              
              {/* Background Ambient Gradient inside Card */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(255,94,0,0.12),transparent_70%)] pointer-events-none" />

              {/* Watermark Diagonal Arrow in Bottom Right (Matches Mockup) */}
              <div className="absolute -right-6 -bottom-8 w-56 h-56 pointer-events-none select-none opacity-[0.07] text-[#ff5e00]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </div>

              {/* Upper Text Content */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-white tracking-tight leading-[1.22] mb-5">
                  {activeItem.title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-[14px] leading-relaxed mb-7 font-normal">
                  {activeItem.description}
                </p>

                {/* Highlights List with Custom Orange Chevron Glyphs */}
                <ul className="space-y-3.5">
                  {activeItem.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      {/* Double Chevron SVG Glyph */}
                      <svg
                        className="w-3.5 h-3.5 text-[#ff5e00] shrink-0 mt-0.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M3.5 3.5L7.5 8L3.5 12.5H5.5L9.5 8L5.5 3.5H3.5ZM7.5 3.5L11.5 8L7.5 12.5H9.5L13.5 8L9.5 3.5H7.5Z" />
                      </svg>
                      <span className="text-neutral-300 text-xs sm:text-[13.5px] leading-normal font-normal">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Subtle Pill Indicator */}
              <div className="relative z-10 pt-7 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-neutral-400">
                <span className="font-mono text-neutral-500">
                  0{activeIndex + 1} / 0{PILLARS_DATA.length}
                </span>
                <span className="text-[#ff5e00] font-medium flex items-center gap-1.5">
                  Enterprise Ready
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual 3D Showcase Card */}
          <div className="lg:col-span-3 xl:col-span-4 flex">
            <div className="w-full relative overflow-hidden rounded-[26px] border border-white/10 bg-[#090604] min-h-[420px] lg:min-h-[500px] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              
              {/* Backing Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,94,0,0.15),transparent_65%)] pointer-events-none" />

              {/* Main 3D Artwork Image */}
              <img
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                draggable={false}
              />

              {/* Soft overlay gradient on image edges for seamless card integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
