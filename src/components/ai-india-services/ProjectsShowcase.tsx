"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProjectItem {
  id: string;
  tag: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  ctaText: string;
  ctaLink: string;
  image: string;
  mockup: {
    badge: string;
    appName: string;
    tagline: string;
    rating: string;
  };
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "01",
    tag: "FinTech · OCR + Fine-Tuned LLM",
    title: "FinTech: Autonomous Financial Document Parsing & Fraud Detection",
    challenge:
      "A multi-national lending institution faced an 8-day turnaround time to manually review loan applications, balance sheets, and bank statements across 4 different languages.",
    solution:
      "We architected an OCR + Fine-Tuned LLM pipeline coupled with a deterministic rule engine to extract financial ratios, flag balance sheet discrepancies, and detect fraudulent signatures.",
    results: [
      "Review time decreased from 8 days to < 12 mins",
      "99.2% accuracy across 50,000+ monthly docs",
      "Annual cost savings exceeding $420,000",
    ],
    ctaText: "Discuss FinTech Scope",
    ctaLink: "#contact",
    image: "/images/projects/amaramba.jpg",
    mockup: {
      badge: "FINTECH AI",
      appName: "DocParser IQ",
      tagline: "Autonomous Verification",
      rating: "99.2% Acc",
    },
  },
  {
    id: "02",
    tag: "E-Commerce · Multi-Agent RL",
    title: "E-Commerce & Retail: Multi-Agent Personalization & Dynamic Pricing Engine",
    challenge:
      "A high-volume online marketplace struggled with static pricing models and cart abandonment rates hovering at 74%.",
    solution:
      "Deployed a multi-agent reinforcement learning system that monitors competitor price changes in real time, forecasts inventory velocity and generates dynamic bundle recommendations.",
    results: [
      "18.4% increase in checkout conversions",
      "14.2% margin expansion via dynamic pricing",
      "Recommendation latency kept strictly below 85ms",
    ],
    ctaText: "Discuss Retail Scope",
    ctaLink: "#contact",
    image: "/images/projects/make-u-easy.jpg",
    mockup: {
      badge: "RETAIL AI",
      appName: "DynamicPrice IQ",
      tagline: "Real-Time RL Agent",
      rating: "+18.4% Conv",
    },
  },
  {
    id: "03",
    tag: "AI Automation · Procurement & Inventory",
    title: "Bull Machine: Intelligent Supply Chain Procurement",
    challenge:
      "Heavy equipment manufacturer required automated procurement, vendor follow-ups, and real-time inventory tracking.",
    solution:
      "An AI-native procurement workflow that automates purchase-order processes, vendor communication, stock monitoring, and follow-ups to eliminate manual coordination.",
    results: [
      "85% reduction in manual procurement follow-up",
      "100% automated stock alerts and tracking",
      "Deployed in production in 6 weeks",
    ],
    ctaText: "View Project",
    ctaLink: "#contact",
    image: "/images/projects/bull-machine.jpg",
    mockup: {
      badge: "BULL MACHINE",
      appName: "Procurement AI",
      tagline: "AutoPO Engine",
      rating: "5.0 ★",
    },
  },
  {
    id: "04",
    tag: "AI Software · Digital Marketing",
    title: "SEO Copilot: Enterprise Content Automation",
    challenge:
      "Large-scale digital publication needed continuous keyword discovery, content generation, and performance optimization.",
    solution:
      "An internal AI-powered workflow that connects keyword research, content generation, optimization, deployment, and ongoing SEO tasks in one coordinated process.",
    results: [
      "3.2x faster organic content publication",
      "Consistent 98% factual verification score",
      "Automated internal linking & metadata",
    ],
    ctaText: "View Project",
    ctaLink: "#contact",
    image: "/images/projects/seo-copilot.jpg",
    mockup: {
      badge: "SEO COPILOT",
      appName: "Content Engine",
      tagline: "Automated SEO Ops",
      rating: "4.9 ★",
    },
  },
  {
    id: "05",
    tag: "Mobile Application · Field Service Management",
    title: "Easy Field Services: Fleet & Dispatch Optimization",
    challenge:
      "Field teams suffered from disconnected dispatching, delayed work orders, and manual expense logging.",
    solution:
      "A field service management application that helps teams schedule jobs, dispatch technicians, track work orders, and manage service operations from a central platform.",
    results: [
      "40% faster technician route dispatching",
      "Sub-second offline sync capability",
      "Deployed across 5,000+ active field technicians",
    ],
    ctaText: "View Project",
    ctaLink: "#contact",
    image: "/images/projects/easy-field.jpg",
    mockup: {
      badge: "EASY FIELD",
      appName: "JobDispatch IQ",
      tagline: "Live Fleet Tracking",
      rating: "4.9 ★",
    },
  },
];

export default function ProjectsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragPosRef = useRef(0);
  const singleWidthRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  const displayItems = [...PROJECTS_DATA, ...PROJECTS_DATA, ...PROJECTS_DATA];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const computeWidth = () => {
      const firstSetLength = PROJECTS_DATA.length;
      const children = Array.from(track.children) as HTMLElement[];
      if (children.length >= firstSetLength) {
        let width = 0;
        for (let i = 0; i < firstSetLength; i++) {
          width += children[i].offsetWidth;
          width += 24; // gap-6
        }
        singleWidthRef.current = width;
        if (posRef.current === 0 && width > 0) {
          posRef.current = width;
          track.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
        }
      }
    };

    computeWidth();
    window.addEventListener("resize", computeWidth);

    const speed = 0.85;

    const tick = () => {
      if (!isHoveredRef.current && !isDraggingRef.current) {
        posRef.current += speed;
        if (singleWidthRef.current > 0 && posRef.current >= singleWidthRef.current * 2) {
          posRef.current -= singleWidthRef.current;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
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

  const scrollNext = () => {
    const cardStep = singleWidthRef.current > 0 ? singleWidthRef.current / PROJECTS_DATA.length : 394;
    if (singleWidthRef.current > 0 && posRef.current + cardStep >= singleWidthRef.current * 2) {
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
    const cardStep = singleWidthRef.current > 0 ? singleWidthRef.current / PROJECTS_DATA.length : 394;
    if (singleWidthRef.current > 0 && posRef.current - cardStep < singleWidthRef.current) {
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
    <section id="case-studies" className="relative w-full bg-[#fcf8f2] text-neutral-900 py-16 sm:py-24 lg:py-28 overflow-hidden select-none border-t border-neutral-200/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-16">
        {/* Top Header Row with Exact H2 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 sm:mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
              Measurable Business Impact
            </div>
            {/* H2 Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#1c1b18] leading-[1.2]">
              Real-World AI Case Studies: Delivering Measurable Business Impact
            </h2>
          </div>

          {/* Navigation Slider Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              type="button"
              aria-label="Previous Case Study"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 hover:bg-neutral-50 text-neutral-600 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              type="button"
              aria-label="Next Case Study"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ff5e00] hover:bg-[#e65500] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Area with Left Floating Trust Badge */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing px-1 py-3 sm:p-3"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {/* Left Floating Trust Badge Card with Frame 109.svg */}
          <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-[345px] xl:w-[385px] h-[430px] xl:h-[445px] z-20 select-none pointer-events-none group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Frame 109.svg"
              alt="2.5K+ Solution Delivered - 15+ Years of Trust"
              className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow-[12px_0_28px_rgba(255,94,0,0.3)]"
              draggable={false}
            />

            <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-7 xl:p-8 text-white">
              <div>
                <div className="flex items-center gap-1.5 text-white text-lg sm:text-xl">
                  {"★★★★★"}
                </div>
                <p className="text-white font-bold text-lg sm:text-xl xl:text-[22px] tracking-tight mt-2 drop-shadow-sm">
                  2,570+ Clients Served
                </p>
              </div>

              <div className="flex items-end gap-2.5 sm:gap-3 xl:gap-3.5">
                <div className="flex flex-col flex-1 min-w-0">
                  <div
                    className="text-[68px] sm:text-[76px] xl:text-[86px] font-black leading-[0.88] tracking-tight select-none"
                    style={{
                      background: "linear-gradient(180deg, #FFFFFF 25%, rgba(255, 255, 255, 0.75) 55%, rgba(255, 255, 255, 0.05) 92%, rgba(255, 255, 255, 0) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    15+
                  </div>
                  <div className="text-lg sm:text-xl xl:text-2xl font-bold text-white tracking-tight mt-1 drop-shadow-sm whitespace-nowrap">
                    Years Heritage
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Sliding Cards Track */}
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform lg:pl-[380px] xl:pl-[420px]"
            style={{ width: "max-content" }}
          >
            {displayItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="group/card relative w-[340px] sm:w-[380px] md:w-[420px] flex-shrink-0 bg-white rounded-[26px] border border-neutral-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(255,94,0,0.12)] hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7"
              >
                <div>
                  {/* Top Badge & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff5e00] bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      CASE #{item.id}
                    </span>
                  </div>

                  {/* Title (H3) */}
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Challenge (H4) */}
                  <div className="mb-3">
                    <h4 className="text-[11px] uppercase tracking-wider font-bold text-neutral-500 mb-1">
                      The Challenge
                    </h4>
                    <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>

                  {/* Solution (H4) */}
                  <div className="mb-4">
                    <h4 className="text-[11px] uppercase tracking-wider font-bold text-[#FF7230] mb-1">
                      The Solution
                    </h4>
                    <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  {/* Impact & Results (H4) */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white mb-4">
                    <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#ff8935] mb-2">
                      Impact &amp; Results
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-200">
                      {item.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="text-[#ff5e00] font-bold">✓</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-500">
                    {item.mockup.appName}
                  </span>
                  <a
                    href={item.ctaLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5e00] hover:text-[#d34b16] transition-colors"
                  >
                    <span>{item.ctaText}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
