"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface SolutionItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  industry: string;
  challenge: string;
  solution: string;
  highlight: string;
  outcomes: string[];
  mockup: {
    badge: string;
    systemName: string;
    metric: string;
    status: string;
  };
}

const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "01",
    tag: "01 | MANUFACTURING & OPERATIONS",
    title: "Bull Machine",
    subtitle: "AI-Native Procurement & Inventory Automation",
    industry: "Manufacturing & Operations",
    challenge:
      "Procurement and stock management involved repetitive manual work across purchase orders, vendor communication, stock monitoring, and internal processing. Follow-ups could also be missed when vendors did not respond on time.",
    solution:
      "Webnox built an AI-native procurement workflow that automates the purchase-order lifecycle, monitors stock levels, sends purchase requests and communication to the appropriate vendors, and automatically follows up when responses are not received.",
    highlight: "70% Reduction in Manual Workflow",
    outcomes: [
      "70% reduction in manual procurement workflow",
      "Automated vendor communication and follow-ups",
      "On-demand stock visibility and monitoring",
      "Reduced missed follow-ups",
      "Faster coordination between vendors and internal teams",
    ],
    mockup: {
      badge: "PROCUREMENT AGENT",
      systemName: "Bull AutoPO Engine",
      metric: "-70% Manual Work",
      status: "Active · Autonomous",
    },
  },
  {
    id: "02",
    tag: "02 | DIGITAL MARKETING",
    title: "SEO Copilot",
    subtitle: "AI-Native SEO Workflow from Keyword Research to Deployment",
    industry: "Digital Marketing",
    challenge:
      "SEO execution traditionally requires multiple manual stages, including keyword research, content planning, content production, technical optimization, deployment, story management, backlink activities, and reporting.",
    solution:
      "We built SEO Copilot as an internal AI-native workflow to orchestrate the complete SEO execution process. The system automates workflows from keyword research and analysis through content generation, optimization, deployment, task/story management, backlink workflows, and ongoing SEO execution.",
    highlight: "Up to 200× Faster Workflow",
    outcomes: [
      "Up to 200× faster workflow execution",
      "Automated SEO operations from research to deployment",
      "Reduced repetitive human coordination",
      "Consistent execution across multiple SEO activities",
      "Built and validated through real internal workflows",
    ],
    mockup: {
      badge: "ORCHESTRATION OS",
      systemName: "SEO Copilot Engine",
      metric: "200× Speedup",
      status: "Pipeline Running",
    },
  },
  {
    id: "03",
    tag: "03 | HR & BUSINESS OPERATIONS",
    title: "Rathz AI HRMS",
    subtitle: "Agentic HR Management & Business Automation",
    industry: "HR & Business Operations",
    challenge:
      "HR operations involve repetitive workflows across employee management, requests, approvals, communication, records, and day-to-day administrative processes.",
    solution:
      "We are building Rathz as an AI-native HRMS where agents can interact with HR data, workflows, business rules, and applications to execute operational tasks. Instead of adding an AI chatbot on top of a traditional HRMS, the system is designed around agentic workflows, allowing AI to participate directly in business processes.",
    highlight: "Up to 80% Effort Reduction",
    outcomes: [
      "Up to 80% reduction in repetitive workflow effort",
      "AI-assisted HR operations",
      "Agent-driven workflow execution",
      "Reduced manual administrative work",
      "Connected HR data, processes, and intelligent automation",
    ],
    mockup: {
      badge: "AGENTIC HR SUITE",
      systemName: "Rathz Autonomous HR",
      metric: "-80% Repetitive Effort",
      status: "Multi-Agent Sync",
    },
  },
  {
    id: "04",
    tag: "04 | ENTERPRISE OPERATIONS",
    title: "AI-Native ERP",
    subtitle: "Agentic ERP Workflows for Business Operations",
    industry: "Enterprise Operations",
    challenge:
      "Core business operations such as inventory, CRM, field service management, approvals, and operational coordination often require teams to manually move information between multiple systems and processes.",
    solution:
      "We are developing an AI-native ERP workflow layer connecting Inventory, CRM, and Field Service Management through intelligent agents and automated business processes. Agents understand business context, retrieve information, coordinate tasks, trigger actions, and move processes forward automatically.",
    highlight: "Cross-Module Coordination",
    outcomes: [
      "Agentic inventory workflows",
      "AI-powered CRM operations",
      "Automated field service workflows",
      "Cross-module business process coordination",
      "Reduced manual operational dependency",
    ],
    mockup: {
      badge: "ENTERPRISE INTELLIGENCE",
      systemName: "ERP Agentic Mesh",
      metric: "Zero-Handoff",
      status: "Live Integration",
    },
  },
  {
    id: "05",
    tag: "05 | MARKETING & GROWTH",
    title: "AI Marketing",
    subtitle: "Fully Agentic Marketing Operations",
    industry: "Marketing & Growth",
    challenge:
      "Modern marketing involves multiple connected activities such as research, content, SEO, campaign planning, publishing, optimization, analytics, and reporting. Managing these activities manually creates significant coordination overhead.",
    solution:
      "We are building an agentic marketing workflow where specialized AI agents work across different stages of the marketing lifecycle. The system connects research, strategy, content, SEO, campaign execution, publishing, performance analysis, and optimization into a coordinated AI-native workflow.",
    highlight: "End-to-End Autonomous Growth",
    outcomes: [
      "End-to-end AI marketing workflows",
      "Specialized agents for different marketing functions",
      "Automated research and execution",
      "Faster content and campaign operations",
      "Continuous optimization driven by performance data",
    ],
    mockup: {
      badge: "GROWTH MULTI-AGENT",
      systemName: "Autonomous Growth Lab",
      metric: "Continuous ROI",
      status: "Self-Optimizing",
    },
  },
];

export default function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragPosRef = useRef(0);
  const singleWidthRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  // Triple the data items for an unbreakable infinite marquee buffer
  const displayItems = [
    ...SOLUTIONS_DATA,
    ...SOLUTIONS_DATA,
    ...SOLUTIONS_DATA,
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate width of one single cycle of the 5 cards
    const computeWidth = () => {
      if (!track) return;
      const totalWidth = track.scrollWidth;
      singleWidthRef.current = totalWidth / 3;
      if (posRef.current === 0) {
        posRef.current = singleWidthRef.current;
      }
    };

    computeWidth();
    window.addEventListener("resize", computeWidth);

    const speed = 0.65; // Smooth slow scroll

    const tick = () => {
      if (!isHoveredRef.current && !isDraggingRef.current && singleWidthRef.current > 0) {
        posRef.current += speed;

        if (posRef.current >= singleWidthRef.current * 2) {
          posRef.current -= singleWidthRef.current;
        }

        if (track) {
          track.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
        }
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", computeWidth);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Controls for manual next / prev buttons
  const scrollNext = () => {
    const cardStep =
      singleWidthRef.current > 0
        ? singleWidthRef.current / SOLUTIONS_DATA.length
        : 394;
    if (
      singleWidthRef.current > 0 &&
      posRef.current + cardStep >= singleWidthRef.current * 2
    ) {
      posRef.current -= singleWidthRef.current;
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
      }
    }
    const target = posRef.current + cardStep;
    gsap.to(posRef, {
      current: target,
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => {
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
        }
      },
    });
  };

  const scrollPrev = () => {
    const cardStep =
      singleWidthRef.current > 0
        ? singleWidthRef.current / SOLUTIONS_DATA.length
        : 394;
    if (
      singleWidthRef.current > 0 &&
      posRef.current - cardStep < singleWidthRef.current
    ) {
      posRef.current += singleWidthRef.current;
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
      }
    }
    const target = posRef.current - cardStep;
    gsap.to(posRef, {
      current: target,
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => {
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
        }
      },
    });
  };

  // Drag-to-scrub handlers
  const onPointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    dragPosRef.current = posRef.current;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = startXRef.current - e.clientX;
    let nextPos = dragPosRef.current + delta;
    if (singleWidthRef.current > 0) {
      while (nextPos >= singleWidthRef.current * 2) nextPos -= singleWidthRef.current;
      while (nextPos < singleWidthRef.current) nextPos += singleWidthRef.current;
    }
    posRef.current = nextPos;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
    }
  };

  const onPointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section
      id="solutions"
      className="relative w-full bg-[#fcf8f2] text-neutral-900 py-24 sm:py-32 overflow-hidden select-none border-t border-neutral-200/60"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse" />
              Autonomous Business Systems
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#140803] leading-[1.18]">
              AI-Native Systems We{" "}
              <span className="text-[#ff5e00]">Build & Operate</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal mt-4 leading-relaxed max-w-2xl">
              We don’t just experiment with AI. We build AI-native products, automate our own operations, and deploy intelligent workflows that solve real business problems. Our work spans client-specific automation, internal products, and agentic business systems—designed to reduce manual effort, accelerate execution, and connect AI directly with day-to-day business workflows.
            </p>
          </div>

          {/* Navigation Slider Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Previous Solution"
              className="w-12 h-12 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 hover:bg-neutral-50 text-neutral-600 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next Solution"
              className="w-12 h-12 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 hover:bg-neutral-50 text-neutral-600 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          onMouseEnter={() => (isHoveredRef.current = true)}
          onMouseLeave={() => {
            isHoveredRef.current = false;
            isDraggingRef.current = false;
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          className="relative w-full cursor-grab active:cursor-grabbing"
        >
          {/* Static Pinned Orange Badge Card on the Left (Desktop) */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 z-20 pointer-events-none">
            <div className="w-[300px] xl:w-[340px] h-[440px] rounded-[28px] bg-gradient-to-br from-[#ff6a2b] via-[#ff5511] to-[#f43f00] p-7 xl:p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(255,94,0,0.3)] text-white border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <span className="text-white text-lg font-bold">✦</span>
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-white/90">
                  Proven Impact
                </span>
              </div>

              {/* Middle Headline */}
              <div>
                <p className="text-sm font-medium text-white/90 uppercase tracking-wider mb-2">
                  Engineered For Scale
                </p>
                <h3 className="text-2xl xl:text-[27px] font-bold leading-tight">
                  Autonomous Reality in Production
                </h3>
              </div>

              {/* Bottom Row: 15+ Years and Stats */}
              <div className="flex items-end gap-3">
                <div className="flex flex-col flex-1">
                  <div
                    className="text-[64px] xl:text-[76px] font-black leading-[0.88] tracking-tight select-none"
                    style={{
                      background:
                        "linear-gradient(180deg, #FFFFFF 25%, rgba(255, 255, 255, 0.75) 55%, rgba(255, 255, 255, 0.05) 92%, rgba(255, 255, 255, 0) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    15+
                  </div>
                  <div className="text-lg xl:text-xl font-bold text-white tracking-tight mt-1 whitespace-nowrap">
                    Years of Trust
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Infinite Scrolling Slider Track */}
          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex items-center gap-6 will-change-transform lg:pl-[330px] xl:pl-[370px]"
              style={{ width: "max-content" }}
            >
              {displayItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="w-[330px] sm:w-[360px] md:w-[390px] h-[440px] rounded-[24px] bg-white border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(255,94,0,0.09)] transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between flex-shrink-0 group"
                >
                  {/* Top Tablet/Screen UI Mockup Preview */}
                  <div className="w-full h-[175px] rounded-[18px] bg-gradient-to-br from-[#fcf2e8] via-[#faeae0] to-[#f7dfd0] relative overflow-hidden flex items-center justify-center p-3 border border-orange-500/10 shadow-inner">
                    {/* Concentric Decorative Rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                      <div className="w-48 h-48 rounded-full border border-orange-400/25" />
                      <div className="w-32 h-32 rounded-full border border-orange-400/35" />
                    </div>

                    {/* Tablet Device Mockup */}
                    <div className="w-[94%] h-[92%] rounded-[12px] bg-neutral-900 p-2 shadow-xl border border-neutral-700/60 transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500 flex flex-col justify-between">
                      {/* Screen Header Bar */}
                      <div className="w-full bg-neutral-800/90 rounded-t-[8px] px-2.5 py-1 flex items-center justify-between border-b border-neutral-700/50">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#ff5e00] animate-pulse" />
                          <span className="text-[9px] font-bold tracking-wider text-white uppercase">
                            {item.mockup.badge}
                          </span>
                        </div>
                        <span className="text-[8px] font-medium text-emerald-400">
                          {item.mockup.status}
                        </span>
                      </div>

                      {/* Screen Content Dashboard */}
                      <div className="flex-1 bg-neutral-950 p-2.5 flex flex-col justify-between rounded-b-[8px]">
                        <div>
                          <p className="text-[11px] font-bold text-white tracking-tight">
                            {item.mockup.systemName}
                          </p>
                          <p className="text-[8.5px] text-neutral-400 mt-0.5 line-clamp-1">
                            {item.industry}
                          </p>
                        </div>

                        {/* Visual metric pill on screen */}
                        <div className="bg-white/10 rounded-md p-1.5 flex items-center justify-between border border-white/10">
                          <span className="text-[8px] uppercase tracking-wider text-neutral-300">
                            Impact
                          </span>
                          <span className="text-[10px] font-bold text-[#ff5e00]">
                            {item.mockup.metric}
                          </span>
                        </div>

                        {/* Action Bar */}
                        <div className="w-full bg-[#ff5e00] text-white text-[8px] font-semibold py-1 rounded-[4px] text-center shadow-sm">
                          Autonomous System Online
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle Text Details */}
                  <div className="flex-1 flex flex-col justify-center my-2">
                    <span className="text-[#ff5e00] font-bold text-[11px] sm:text-xs uppercase tracking-wider block">
                      {item.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mt-0.5 group-hover:text-[#ff5e00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-semibold text-neutral-800 mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed mt-1.5 line-clamp-2">
                      {item.solution}
                    </p>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-neutral-100">
                    <span className="text-xs sm:text-[13px] font-bold text-neutral-900">
                      {item.highlight}
                    </span>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                      <img
                        src="/images/arrow.svg"
                        alt="View details"
                        className="w-full h-full object-contain"
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
