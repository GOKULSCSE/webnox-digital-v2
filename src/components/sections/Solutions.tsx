"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface SolutionItem {
  id: string;
  tag: string;
  title: string;
  service: string;
  description: string;
  highlight: string;
  mockup: {
    badge: string;
    carName: string;
    price: string;
    rating: string;
  };
}

const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "01",
    tag: "01 | MOBILITY & RENTAL",
    title: "Onroadz",
    service: "SEO & Website Development",
    description: "Engineered search-focused web architecture and location-based SEO, securing top organic rankings for competitive city-level self-drive bookings.",
    highlight: "Top Search Visibility",
    mockup: {
      badge: "FIND YOUR RIDE",
      carName: "Tesla Model 3",
      price: "$89/day",
      rating: "4.9 ★",
    },
  },
  {
    id: "02",
    tag: "02 | HEALTHCARE & MEDTECH",
    title: "Aura Health",
    service: "AI Diagnostic & Telehealth Platform",
    description: "Architected HIPAA-compliant neural triage model reducing patient intake wait times by 48% with automated specialist scheduling.",
    highlight: "99.4% Diagnostic Precision",
    mockup: {
      badge: "TELEHEALTH SUITE",
      carName: "CarePulse AI",
      price: "Real-Time",
      rating: "5.0 ★",
    },
  },
  {
    id: "03",
    tag: "03 | FINTECH & PAYMENTS",
    title: "Nexus Flow",
    service: "Fraud Scoring & Core Banking Core",
    description: "Built high-frequency distributed ledger processing 25,000 TPS with sub-millisecond fraud anomaly detection and automated compliance.",
    highlight: "Zero-Latency Security",
    mockup: {
      badge: "LEDGER ENGINE",
      carName: "PayVault Core",
      price: "25K TPS",
      rating: "4.9 ★",
    },
  },
  {
    id: "04",
    tag: "04 | E-COMMERCE & LUXURY",
    title: "Lumina Retail",
    service: "Interactive 3D Configurator & Commerce",
    description: "Engineered WebGL virtual showroom boosting online conversion rates by 64% and average basket order value by 38% across global storefronts.",
    highlight: "+64% Conversion Lift",
    mockup: {
      badge: "VIRTUAL SHOWROOM",
      carName: "3D Customizer",
      price: "Omnichannel",
      rating: "4.8 ★",
    },
  },
  {
    id: "05",
    tag: "05 | SUPPLY CHAIN & FLEET",
    title: "Volt Logistics",
    service: "Autonomous Routing & Fleet Telematics",
    description: "Delivered dynamic route optimization model reducing fleet fuel expenditures by 22% across 1,200 commercial interstate freight trucks.",
    highlight: "22% Fuel Reduction",
    mockup: {
      badge: "FLEET DISPATCH",
      carName: "RouteMaster IQ",
      price: "1.2K Fleets",
      rating: "5.0 ★",
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

  // Triple array to guarantee a seamless, infinite loop
  const displayItems = [...SOLUTIONS_DATA, ...SOLUTIONS_DATA, ...SOLUTIONS_DATA];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const computeWidth = () => {
      // Calculate width of one full set of items
      const firstSetLength = SOLUTIONS_DATA.length;
      const children = Array.from(track.children) as HTMLElement[];
      if (children.length >= firstSetLength) {
        let width = 0;
        for (let i = 0; i < firstSetLength; i++) {
          width += children[i].offsetWidth;
          // Add gap (gap-6 = 24px)
          width += 24;
        }
        singleWidthRef.current = width;
      }
    };

    computeWidth();
    window.addEventListener("resize", computeWidth);

    // Continuous infinite scroll loop
    const speed = 0.85; // smooth gliding speed in px/frame

    const tick = () => {
      if (!isHoveredRef.current && !isDraggingRef.current) {
        posRef.current += speed;
        if (singleWidthRef.current > 0 && posRef.current >= singleWidthRef.current) {
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

  // Controls for manual next / prev buttons
  const scrollNext = () => {
    const cardStep = 400;
    const target = posRef.current + cardStep;
    gsap.to(posRef, {
      current: target,
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => {
        if (singleWidthRef.current > 0 && posRef.current >= singleWidthRef.current) {
          posRef.current -= singleWidthRef.current;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
        }
      },
    });
  };

  const scrollPrev = () => {
    const cardStep = 400;
    let target = posRef.current - cardStep;
    if (target < 0 && singleWidthRef.current > 0) {
      target += singleWidthRef.current;
      posRef.current += singleWidthRef.current;
    }
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
      if (nextPos >= singleWidthRef.current) nextPos -= singleWidthRef.current;
      if (nextPos < 0) nextPos += singleWidthRef.current;
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
    <section className="relative w-full bg-[#fcf8f2] text-neutral-900 py-20 sm:py-28 overflow-hidden select-none">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#73716d] leading-[1.2]">
              <span className="font-bold text-[#1c1b18]">Solutions</span> We have Built
              <br />
              Across AI and Technology
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 font-normal mt-3 max-w-xl">
              Curated projects engineered for scale across diverse industries.
            </p>
          </div>

          {/* Navigation Slider Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Previous Solution"
              className="w-12 h-12 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 hover:bg-neutral-50 text-neutral-600 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next Solution"
              className="w-12 h-12 rounded-full bg-[#ff5e00] hover:bg-[#e65500] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
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
          className="relative w-full flex items-stretch"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {/* Left Floating Trust Badge Card */}
          <div className="hidden lg:flex flex-col justify-between w-[250px] xl:w-[270px] h-[400px] rounded-[28px] bg-gradient-to-br from-[#ff6e05] to-[#f54e00] text-white p-6 shadow-[0_16px_40px_rgba(255,94,0,0.32)] flex-shrink-0 z-20 relative mr-6">
            {/* Top Stars & Delivered Count */}
            <div>
              <div className="flex items-center gap-1 text-white text-base">
                {"★★★★★"}
              </div>
              <p className="text-white font-semibold text-sm tracking-tight mt-1.5 drop-shadow-sm">
                2.5K+ Solution Delivered
              </p>
            </div>

            {/* Middle People Silhouette Art */}
            <div className="relative w-full h-28 my-auto flex items-center justify-center overflow-hidden opacity-30">
              <svg className="w-full h-full text-white" viewBox="0 0 200 80" fill="currentColor">
                <circle cx="20" cy="20" r="10" />
                <path d="M10 50 C10 38 30 38 30 50 Z" />
                <circle cx="50" cy="18" r="10" />
                <path d="M40 50 C40 36 60 36 60 50 Z" />
                <circle cx="80" cy="22" r="10" />
                <path d="M70 52 C70 40 90 40 90 52 Z" />
                <circle cx="110" cy="16" r="12" />
                <path d="M98 52 C98 34 122 34 122 52 Z" />
                <circle cx="140" cy="20" r="10" />
                <path d="M130 50 C130 38 150 38 150 50 Z" />
                <circle cx="170" cy="22" r="10" />
                <path d="M160 52 C160 40 180 40 180 52 Z" />
              </svg>
            </div>

            {/* Bottom Avatars & 15+ Years Trust */}
            <div>
              <div className="flex items-center -space-x-2.5 mb-2.5">
                <div className="w-9 h-9 rounded-full border-2 border-white bg-neutral-800 overflow-hidden shadow-sm flex items-center justify-center text-xs font-bold">
                  <span>JD</span>
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-white bg-[#1a2b40] overflow-hidden shadow-sm flex items-center justify-center text-xs font-bold">
                  <span>AK</span>
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-white bg-[#4a2810] overflow-hidden shadow-sm flex items-center justify-center text-xs font-bold">
                  <span>MR</span>
                </div>
              </div>
              <div className="text-[44px] xl:text-[50px] font-black text-white leading-none tracking-tight drop-shadow-sm">
                15+
              </div>
              <div className="text-sm font-semibold text-white/95 tracking-wide mt-1 drop-shadow-sm">
                Years of Trust
              </div>
            </div>
          </div>

          {/* Continuous Infinite Scrolling Slider Track */}
          <div className="overflow-hidden flex-1 w-full cursor-grab active:cursor-grabbing">
            <div
              ref={trackRef}
              className="flex items-center gap-6 will-change-transform"
              style={{ width: "max-content" }}
            >
              {displayItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="w-[320px] sm:w-[350px] md:w-[370px] h-[400px] rounded-[24px] bg-white border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between flex-shrink-0 group"
                >
                  {/* Top Tablet/Screen UI Mockup Preview */}
                  <div className="w-full h-[175px] rounded-[18px] bg-gradient-to-br from-[#fcf2e8] via-[#faeae0] to-[#f7dfd0] relative overflow-hidden flex items-center justify-center p-3 border border-orange-500/10 shadow-inner">
                    {/* Concentric Decorative Rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                      <div className="w-48 h-48 rounded-full border border-orange-400/25" />
                      <div className="w-32 h-32 rounded-full border border-orange-400/35" />
                    </div>

                    {/* Tablet Device Mockup */}
                    <div className="w-[92%] h-[90%] rounded-[12px] bg-neutral-900 p-1.5 shadow-xl border border-neutral-700/60 transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500 flex flex-col">
                      {/* Screen Header Bar */}
                      <div className="w-full bg-neutral-800/90 rounded-t-[8px] px-2.5 py-1.5 flex items-center justify-between border-b border-neutral-700/50">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#ff5e00]" />
                          <span className="text-[9px] font-bold tracking-wider text-white uppercase">{item.mockup.badge}</span>
                        </div>
                        <span className="text-[8px] font-medium text-neutral-400">{item.mockup.rating}</span>
                      </div>

                      {/* Screen Content Dashboard */}
                      <div className="flex-1 bg-neutral-950 p-2 flex flex-col justify-between rounded-b-[8px]">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-bold text-white tracking-tight">{item.mockup.carName}</p>
                            <p className="text-[8px] text-neutral-400">Available Instantly</p>
                          </div>
                          <span className="text-[10px] font-bold text-[#ff5e00]">{item.mockup.price}</span>
                        </div>

                        {/* Calendar / Schedule preview grid */}
                        <div className="grid grid-cols-7 gap-1 my-1 opacity-70">
                          {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                            <div
                              key={d}
                              className={`h-2.5 rounded-[2px] flex items-center justify-center text-[7px] ${
                                d === 3 || d === 4 ? "bg-[#ff5e00] text-white font-bold" : "bg-neutral-800 text-neutral-400"
                              }`}
                            >
                              {d}
                            </div>
                          ))}
                        </div>

                        {/* Search / Action Button on Device Screen */}
                        <div className="w-full bg-[#ff5e00] text-white text-[8px] font-semibold py-1 rounded-[4px] text-center shadow-sm">
                          Book Instant Ride
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle Text Details */}
                  <div className="flex-1 flex flex-col justify-center my-2">
                    <span className="text-[#ff5e00] font-bold text-[11px] sm:text-xs uppercase tracking-wider block">
                      {item.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-neutral-800 mt-0.5">
                      {item.service}
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed mt-1.5 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900">
                      {item.highlight}
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ff5e00] text-white flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-[#e05300] transition-all cursor-pointer">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
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
