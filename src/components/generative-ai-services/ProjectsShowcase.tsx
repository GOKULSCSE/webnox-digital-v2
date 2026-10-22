"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProjectItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "01",
    tag: "Customer Experience",
    title: "AI Assistants",
    description:
      "Answer customer questions using your products, services, policies, and business knowledge.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "02",
    tag: "Knowledge & Operations",
    title: "Enterprise Knowledge Assistants",
    description:
      "Allow employees to ask questions across internal documents and business knowledge.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "03",
    tag: "Knowledge & Operations",
    title: "Document Intelligence",
    description:
      "Extract, summarize, classify, compare, and transform information from business documents.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "04",
    tag: "Software & Products",
    title: "AI Copilots",
    description:
      "Assist users inside existing software.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "05",
    tag: "Automation",
    title: "AI Workflow Automation",
    description:
      "Connect AI with business systems to automate knowledge-heavy processes.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "06",
    tag: "Automation",
    title: "AI Agents",
    description:
      "Allow AI systems to retrieve information, use tools, execute tasks, and hand work back to people when approval is required.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
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
          width += 24;
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
    if (singleWidthRef.current > 0 && posRef.current - cardStep <= 0) {
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
    const diff = (startXRef.current - e.clientX) * 1.2;
    posRef.current = dragPosRef.current + diff;

    if (singleWidthRef.current > 0) {
      if (posRef.current >= singleWidthRef.current * 2) {
        posRef.current -= singleWidthRef.current;
        dragPosRef.current -= singleWidthRef.current;
      } else if (posRef.current <= 0) {
        posRef.current += singleWidthRef.current;
        dragPosRef.current += singleWidthRef.current;
      }
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
    }
  };

  const onPointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section id="projects" className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#1c1b18] leading-[1.2]">
              What Can You Build with Generative AI?
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Generative AI can become a capability inside almost any digital product or business workflow.
            </p>
          </div>

          {/* Navigation Slider Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              type="button"
              aria-label="Previous"
              className="w-12 h-12 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 hover:bg-neutral-50 text-neutral-600 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              type="button"
              aria-label="Next"
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
          {/* Left Floating Trust Badge Card with Frame 109.svg */}
          <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-[345px] xl:w-[385px] h-[430px] xl:h-[445px] z-20 select-none pointer-events-none group">
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
                  2.5K+ Solution Delivered
                </p>
              </div>

              <div className="flex items-end gap-2.5 sm:gap-3 xl:gap-3.5">
                <div className="flex items-center -space-x-2.5 sm:-space-x-3 mb-6 sm:mb-7 flex-shrink-0 z-10">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
                    alt=""
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover shadow-md"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                    alt=""
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover shadow-md"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                    alt=""
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
                  className="w-[320px] sm:w-[350px] md:w-[370px] h-[380px] rounded-[24px] bg-white border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 p-6 flex flex-col justify-between flex-shrink-0 group"
                >
                  {/* Top Preview Card */}
                  <div className="w-full h-[155px] rounded-[18px] bg-gradient-to-br from-[#fcf2e8] via-[#faeae0] to-[#f7dfd0] relative overflow-hidden flex items-center justify-center p-3 border border-orange-500/10 shadow-inner">
                    <div className="w-[92%] h-[90%] rounded-[12px] bg-neutral-900 p-2.5 shadow-xl border border-neutral-700/60 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500/80" />
                          <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                          <span className="w-2 h-2 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#FF7230]">
                          {item.id}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white tracking-tight block">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          {item.tag}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-to-r from-[#FF7230] to-[#FF8935] rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Middle Content */}
                  <div className="flex flex-col mt-2 flex-1 justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-[#FF7230] tracking-wide block mb-1">
                        {item.tag}
                      </span>
                      <h3 className="text-lg font-bold text-[#1c1b18] tracking-tight group-hover:text-[#FF7230] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-600 line-clamp-2 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between mt-2">
                      <a
                        href={item.ctaLink}
                        className="text-xs font-semibold text-neutral-800 group-hover:text-[#ff5e00] transition-colors flex items-center gap-1"
                      >
                        <span>{item.ctaText}</span>
                        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
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
