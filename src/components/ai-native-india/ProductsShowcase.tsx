"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProductSliderItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const SLIDER_PRODUCTS: ProductSliderItem[] = [
  {
    id: "01",
    title: "Bull Machine – AI-Powered Procurement and Inventory Automation",
    description:
      "Bull Machine uses AI-native workflows to simplify procurement and inventory operations. It automates purchase-order processes, vendor communication, stock monitoring and follow-up activities.",
    image: "/images/projects/bull-machine.jpg",
  },
  {
    id: "02",
    title: "SEO Copilot – AI-Powered SEO Workflow Automation",
    description:
      "SEO Copilot connects multiple SEO activities through an AI-native workflow, covering keyword research, content generation, optimisation, deployment, task management and ongoing execution.",
    image: "/images/projects/seo-copilot.jpg",
  },
  {
    id: "03",
    title: "Rathz AI HRMS – Agentic HR Management",
    description:
      "Rathz AI HRMS is designed to bring intelligent agents into human resource management and business operations. It connects HR data, employee requests, approvals and administrative workflows.",
    image: "/images/projects/easy-field.jpg",
  },
  {
    id: "04",
    title: "AI-Native ERP – Intelligent Business Operations",
    description:
      "Our AI-native ERP initiative connects inventory, CRM and field service management through intelligent agents and automated business processes.",
    image: "/images/projects/amaramba.jpg",
  },
  {
    id: "05",
    title: "AI Marketing – Agentic Marketing Operations",
    description:
      "Our AI marketing initiative connects research, strategy, content creation, SEO, campaign execution, publishing and performance analysis through specialised AI agents.",
    image: "/images/projects/make-u-easy.jpg",
  },
];

const OUTCOME_PRODUCTS = [
  {
    title: "Bull Machine – AI-Powered Procurement and Inventory Automation",
    description:
      "Bull Machine uses AI-native workflows to simplify procurement and inventory operations. It automates purchase-order processes, vendor communication, stock monitoring and follow-up activities.",
    outcomeLabel: "Key outcome:",
    outcomes: [
      "Up to 70% reduction in manual procurement workflow",
      "Automated vendor communication and follow-ups",
      "Improved stock visibility",
      "Reduced manual coordination",
    ],
    image: "/images/projects/bull-machine.jpg",
  },
  {
    title: "SEO Copilot – AI-Powered SEO Workflow Automation",
    description:
      "SEO Copilot connects multiple SEO activities through an AI-native workflow, covering keyword research, content generation, optimisation, deployment, task management and ongoing execution.",
    outcomeLabel: "Key outcome:",
    outcomes: [
      "Up to 200× faster workflow execution",
      "Automated SEO activities from research to deployment",
      "Reduced repetitive coordination",
      "Connected SEO execution workflows",
    ],
    image: "/images/projects/seo-copilot.jpg",
  },
  {
    title: "Rathz AI HRMS – Agentic HR Management",
    description:
      "Rathz AI HRMS is designed to bring intelligent agents into human resource management and business operations. It connects HR data, employee requests, approvals and administrative workflows.",
    outcomeLabel: "Key outcome:",
    outcomes: [
      "Up to 80% reduction in repetitive workflow effort",
      "AI-assisted HR operations",
      "Agent-driven workflow execution",
      "Reduced manual administrative activities",
    ],
    image: "/images/projects/easy-field.jpg",
  },
];

const INITIATIVE_PRODUCTS = [
  {
    title: "AI-Native ERP – Intelligent Business Operations",
    paragraphs: [
      "Our AI-native ERP initiative connects inventory, CRM and field service management through intelligent agents and automated business processes.",
      "The system is designed to help businesses coordinate information, retrieve operational data, trigger actions and manage workflows across connected business functions.",
    ],
    image: "/images/projects/amaramba.jpg",
  },
  {
    title: "AI Marketing – Agentic Marketing Operations",
    paragraphs: [
      "Our AI marketing initiative connects research, strategy, content creation, SEO, campaign execution, publishing and performance analysis through specialised AI agents.",
      "It aims to reduce repetitive marketing activities and coordinate different stages of the marketing lifecycle.",
    ],
    image: "/images/projects/make-u-easy.jpg",
  },
];

export default function ProductsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragPosRef = useRef(0);
  const singleWidthRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  const displayItems = [
    ...SLIDER_PRODUCTS,
    ...SLIDER_PRODUCTS,
    ...SLIDER_PRODUCTS,
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const computeWidth = () => {
      const firstSetLength = SLIDER_PRODUCTS.length;
      const children = Array.from(track.children) as HTMLElement[];
      if (children.length >= firstSetLength) {
        let width = 0;
        for (let i = 0; i < firstSetLength; i++) {
          width += children[i].offsetWidth + 24;
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
        if (
          singleWidthRef.current > 0 &&
          posRef.current >= singleWidthRef.current * 2
        ) {
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
    const cardStep =
      singleWidthRef.current > 0
        ? singleWidthRef.current / SLIDER_PRODUCTS.length
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
        ? singleWidthRef.current / SLIDER_PRODUCTS.length
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
      while (nextPos >= singleWidthRef.current * 2)
        nextPos -= singleWidthRef.current;
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
      id="products"
      className="relative w-full bg-[#fcf8f2] text-neutral-900 py-16 sm:py-24 lg:py-28 border-t border-neutral-200/80 overflow-hidden select-none"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-16">
        {/* Top Header Row with Exact H2 & Intro Paragraph */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 sm:mb-16">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#1c1b18] leading-[1.2]">
              AI-Native Products Developed by Webnox Digital
            </h2>
            <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
              We apply our software engineering and AI expertise to develop our own digital products alongside client projects. This gives our team practical experience in product planning, application development, AI integration, automation, deployment and continuous improvement.
            </p>
          </div>

          {/* Navigation Slider Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              type="button"
              aria-label="Previous Product"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 hover:bg-neutral-50 text-neutral-600 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              type="button"
              aria-label="Next Product"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ff5e00] hover:bg-[#e65500] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Area with Left Floating Trust Badge (Frame 109.svg) */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing px-1 py-3 sm:p-3 mb-16 sm:mb-20"
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
          }}
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
                      background:
                        "linear-gradient(180deg, #FFFFFF 25%, rgba(255, 255, 255, 0.75) 55%, rgba(255, 255, 255, 0.05) 92%, rgba(255, 255, 255, 0) 100%)",
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
                  className="w-[280px] sm:w-[340px] md:w-[370px] h-[390px] sm:h-[400px] rounded-[24px] bg-white border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 p-4 sm:p-6 flex flex-col justify-between flex-shrink-0 group"
                >
                  {/* Top Tablet/Screen UI Mockup Preview */}
                  <div className="w-full h-[175px] rounded-[18px] bg-gradient-to-br from-[#fcf2e8] via-[#faeae0] to-[#f7dfd0] relative overflow-hidden flex items-center justify-center p-2.5 border border-orange-500/10 shadow-inner">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                      <div className="w-48 h-48 rounded-full border border-orange-400/25" />
                      <div className="w-32 h-32 rounded-full border border-orange-400/35" />
                    </div>

                    <div className="relative w-full max-w-[244px] aspect-[1260/862] transform rotate-[-2deg] group-hover:rotate-0 group-hover:scale-[1.03] transition-all duration-500 drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
                      <div className="absolute top-[5.2%] bottom-[5.2%] left-[3.6%] right-[3.6%] rounded-[4px] overflow-hidden bg-neutral-950 z-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
                      </div>

                      <img
                        src="/images/Transparent Landscape Tablet Mockup.png"
                        alt="Tablet Mockup Frame"
                        className="absolute inset-0 w-full h-full object-fill pointer-events-none z-10 select-none"
                        draggable={false}
                      />
                    </div>
                  </div>

                  {/* Middle Text Details */}
                  <div className="flex-1 flex flex-col justify-center my-2">
                    <div className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mt-0.5 line-clamp-2">
                      {item.title}
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed mt-2 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900">
                      Explore Our Digital Products
                    </span>
                    <a
                      href="#contact"
                      className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer"
                    >
                      <img
                        src="/images/arrow.svg"
                        alt="Explore Our Digital Products"
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

        {/* Full Product Details Cards with Key Outcomes (<ul> / <li>) */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {OUTCOME_PRODUCTS.map((product) => (
              <div
                key={product.title}
                className="group bg-white rounded-[28px] p-7 sm:p-8 border border-neutral-200/90 hover:border-[#FF7230]/50 shadow-[0_12px_36px_rgba(20,10,4,0.05)] hover:shadow-[0_18px_44px_rgba(255,114,48,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-[#FF532B] transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-3.5 text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-200/80">
                  <p className="text-sm font-bold text-neutral-900 mb-3">
                    {product.outcomeLabel}
                  </p>
                  <ul className="space-y-2.5 list-none p-0 m-0">
                    {product.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 text-sm text-neutral-700 leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FF532B] shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* 2 Initiative Products */}
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-7">
            {INITIATIVE_PRODUCTS.map((product) => (
              <div
                key={product.title}
                className="group relative rounded-[28px] p-8 sm:p-9 text-white overflow-hidden border border-[#FF7230]/30 shadow-[0_16px_42px_rgba(20,10,4,0.12)] transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(152.18deg, #60290B -16.91%, #140B06 99.34%)",
                }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {product.title}
                </h3>
                {product.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="mt-3.5 text-neutral-200 text-sm sm:text-base leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7230] to-[#FF532B] hover:from-[#ff8144] hover:to-[#ff633f] text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-[0_8px_28px_rgba(255,114,48,0.3)] hover:shadow-[0_12px_34px_rgba(255,114,48,0.45)] transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>Explore Our Digital Products</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
