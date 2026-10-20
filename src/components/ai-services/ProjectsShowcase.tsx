"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProjectItem {
  id: string;
  tag: string;
  title: string;
  capabilities: string;
  description: string;
  ctaText: string;
  ctaLink: string;
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
    tag: "AI Automation · Procurement & Inventory",
    title: "Bull Machine",
    capabilities: "Procurement automation, inventory visibility, vendor follow-ups.",
    description:
      "An AI-native procurement workflow that automates purchase-order processes, vendor communication, stock monitoring and follow-ups to reduce manual coordination.",
    ctaText: "View Project",
    ctaLink: "#contact",
    mockup: {
      badge: "BULL MACHINE",
      appName: "Procurement AI",
      tagline: "AutoPO Engine",
      rating: "5.0 ★",
    },
  },
  {
    id: "02",
    tag: "AI Software · Digital Marketing",
    title: "SEO Copilot",
    capabilities: "Keyword analysis, content workflows, SEO execution.",
    description:
      "An internal AI-powered workflow that connects keyword research, content generation, optimisation, deployment and ongoing SEO tasks in one coordinated process.",
    ctaText: "View Project",
    ctaLink: "#contact",
    mockup: {
      badge: "SEO COPILOT",
      appName: "Content Engine",
      tagline: "Automated SEO Ops",
      rating: "4.9 ★",
    },
  },
  {
    id: "03",
    tag: "Mobile Application · Field Service Management",
    title: "Easy Field Services",
    capabilities: "Work orders, technician tracking, expense management.",
    description:
      "A field service management application that helps teams schedule jobs, dispatch technicians, track work orders and manage service operations from a central platform.",
    ctaText: "View Project",
    ctaLink: "#contact",
    mockup: {
      badge: "EASY FIELD",
      appName: "JobDispatch IQ",
      tagline: "Live Fleet Tracking",
      rating: "4.9 ★",
    },
  },
  {
    id: "04",
    tag: "FinTech · Mobile Application",
    title: "Amaramba",
    capabilities: "KYC workflows, wallet transactions, market tracking.",
    description:
      "A stock market application supporting user registration, KYC, digital transactions, wallet management and market information within a security-conscious interface.",
    ctaText: "View Project",
    ctaLink: "#contact",
    mockup: {
      badge: "AMARAMBA",
      appName: "TradeVault",
      tagline: "Secure KYC Core",
      rating: "5.0 ★",
    },
  },
  {
    id: "05",
    tag: "eCommerce · Mobile Application",
    title: "Make U Easy",
    capabilities: "Product catalogue, checkout, shipping integration.",
    description:
      "A custom shopping application with product browsing, cart management, checkout, order history and shipping integration for a mechanical-sector business.",
    ctaText: "View Project",
    ctaLink: "#contact",
    mockup: {
      badge: "MAKE U EASY",
      appName: "ShopFlow Pro",
      tagline: "Integrated Checkout",
      rating: "4.8 ★",
    },
  },
  {
    id: "06",
    tag: "Travel Technology · Car Rental",
    title: "Onroadz",
    capabilities: "Vehicle selection, rental bookings, trip scheduling.",
    description:
      "A self-drive car rental application that simplifies vehicle selection, location-based bookings, pickup and drop-off scheduling, and customer support.",
    ctaText: "View Project",
    ctaLink: "#contact",
    mockup: {
      badge: "ONROADZ",
      appName: "Self-Drive Rental",
      tagline: "Instant Booking",
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

  // Triple array to guarantee a seamless, infinite loop
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
          // Add gap (gap-6 = 24px)
          width += 24;
        }
        singleWidthRef.current = width;
        // Start offset at one full period so cards already emerge from behind the badge
        if (posRef.current === 0 && width > 0) {
          posRef.current = width;
          track.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
        }
      }
    };

    computeWidth();
    window.addEventListener("resize", computeWidth);

    // Continuous infinite scroll loop matching landing page speed
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

  // Controls for manual next / prev buttons
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
    <section id="projects" className="relative w-full bg-[#fcf8f2] text-neutral-900 py-20 sm:py-28 overflow-hidden select-none">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Header Row with Exact H2 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#1c1b18] leading-[1.2]">
              Projects Showcasing Our Application Development Expertise
            </h2>
          </div>

          {/* Navigation Slider Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              type="button"
              aria-label="Previous Project"
              className="w-12 h-12 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 hover:bg-neutral-50 text-neutral-600 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              type="button"
              aria-label="Next Project"
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
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing p-3"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {/* Left Floating Trust Badge Card with Frame 109.svg (Exact size from landing page) */}
          <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-[345px] xl:w-[385px] h-[430px] xl:h-[445px] z-20 select-none pointer-events-none group">
            <img
              src="/images/Frame 109.svg"
              alt="2.5K+ Solution Delivered - 15+ Years of Trust"
              className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow-[12px_0_28px_rgba(255,94,0,0.3)]"
              draggable={false}
            />

            {/* Overlaid Badge Typography & Avatars */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-7 xl:p-8 text-white">
              <div>
                <div className="flex items-center gap-1.5 text-white text-lg sm:text-xl">
                  {"★★★★★"}
                </div>
                <p className="text-white font-bold text-lg sm:text-xl xl:text-[22px] tracking-tight mt-2 drop-shadow-sm">
                  2.5K+ Solution Delivered
                </p>
              </div>

              <div className="flex items-end gap-2.5 sm:gap-3 xl:gap-3.5">
                <div className="flex items-center -space-x-2.5 sm:-space-x-3 mb-6 sm:mb-7 flex-shrink-0 z-10">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
                    alt="Team 1"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover shadow-md"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                    alt="Team 2"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover shadow-md"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                    alt="Team 3"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover shadow-md"
                  />
                </div>

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
                    Years of Trust
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Infinite Scrolling Slider Track (Exact alignment with landing page) */}
          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex items-center gap-6 will-change-transform lg:pl-[330px] xl:pl-[370px]"
              style={{ width: "max-content" }}
            >
              {displayItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="w-[320px] sm:w-[350px] md:w-[370px] h-[400px] rounded-[24px] bg-white border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between flex-shrink-0 group"
                >
                  {/* Top Tablet/Screen UI Mockup Preview (Fixed h-[175px]) */}
                  <div className="w-full h-[175px] rounded-[18px] bg-gradient-to-br from-[#fcf2e8] via-[#faeae0] to-[#f7dfd0] relative overflow-hidden flex items-center justify-center p-3 border border-orange-500/10 shadow-inner">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                      <div className="w-48 h-48 rounded-full border border-orange-400/25" />
                      <div className="w-32 h-32 rounded-full border border-orange-400/35" />
                    </div>

                    <div className="w-[92%] h-[90%] rounded-[12px] bg-neutral-900 p-1.5 shadow-xl border border-neutral-700/60 transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500 flex flex-col justify-between">
                      <div className="w-full bg-neutral-800/90 rounded-t-[8px] px-2.5 py-1.5 flex items-center justify-between border-b border-neutral-700/50">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#ff5e00]" />
                          <span className="text-[9px] font-bold tracking-wider text-white uppercase">{item.mockup.badge}</span>
                        </div>
                        <span className="text-[8px] font-medium text-neutral-400">{item.mockup.rating}</span>
                      </div>

                      <div className="flex-1 bg-neutral-950 p-2 flex flex-col justify-between rounded-b-[8px]">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-bold text-white tracking-tight">{item.mockup.appName}</p>
                            <p className="text-[8px] text-neutral-400">{item.mockup.tagline}</p>
                          </div>
                          <span className="text-[9px] font-bold text-[#ff5e00]">Production Ready</span>
                        </div>

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

                        <div className="w-full bg-[#ff5e00] text-white text-[8px] font-semibold py-1 rounded-[4px] text-center shadow-sm">
                          {item.ctaText}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle Text Details (Single-line tag, title, capabilities, and 2-line description for exact baseline alignment) */}
                  <div className="flex-1 flex flex-col justify-center my-2">
                    <span className="text-[#ff5e00] font-bold text-[11px] sm:text-xs uppercase tracking-wider block truncate">
                      {item.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mt-0.5 truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-neutral-800 mt-0.5 truncate">
                      {item.capabilities}
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed mt-1.5 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action Row (Fixed border and aligned button) */}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900">
                      {item.ctaText}
                    </span>
                    <a
                      href={item.ctaLink}
                      className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer"
                    >
                      <img
                        src="/images/arrow.svg"
                        alt="View details"
                        className="w-full h-full object-contain"
                        draggable={false}
                      />
                    </a>
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
