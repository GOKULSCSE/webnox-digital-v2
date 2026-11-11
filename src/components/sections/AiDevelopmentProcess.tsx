"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understand the Requirement",
    description:
      "We define the business objective, target users, product requirements, existing technology, workflows, data, and growth goals to establish what the solution needs to achieve.",
  },
  {
    number: "02",
    title: "Plan the Solution",
    description:
      "We determine the right combination of AI, software, automation, marketing, integrations, technology, and delivery resources based on the requirement, technical environment, and expected business outcome.",
  },
  {
    number: "03",
    title: "Build the Product",
    description:
      "We develop the required website, software, AI application, AI agent, SaaS product, digital platform, automation workflow, or marketing system using the technologies suited to the project.",
  },
  {
    number: "04",
    title: "Integrate the Technology",
    description:
      "We connect applications with relevant APIs, databases, SaaS platforms, AI models, cloud infrastructure, business systems, and third-party tools to make the solution work within the existing technology environment.",
  },
  {
    number: "05",
    title: "Test and Validate",
    description:
      "We test functionality, AI outputs, integrations, user workflows, performance, and reliability to identify issues and validate that the solution works as intended before launch.",
  },
  {
    number: "06",
    title: "Launch and Market",
    description:
      "We prepare the solution for launch and, where required, support its market entry through SEO, AEO, GEO, content marketing, Google Ads, social media, and performance marketing to build visibility and attract users.",
  },
  {
    number: "07",
    title: "Optimise and Grow",
    description:
      "We use performance data, user feedback, testing, analytics, and AI-assisted insights to improve the product, technology, automation, and marketing performance as business requirements evolve.",
  },
];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export default function AiDevelopmentProcess() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      setProgress(clamp(-rect.top / Math.max(total, 1)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Phase 1 (0 -> 0.22): enlarge card to full-bleed & move tablet bottom-left
  const expand = ease(clamp(progress / 0.22));
  // Phase 2 (0.22 -> 1): cycle through 7 steps
  const stepProgress = clamp((progress - 0.22) / 0.78);
  const activeIndex = Math.min(
    PROCESS_STEPS.length - 1,
    Math.floor(stepProgress * PROCESS_STEPS.length)
  );

  const inset = 1 - expand; // 1 = inset card, 0 = full
  const radius = 44 * inset;

  const scrollToContact = () => {
    const contactEl =
      document.getElementById("contact") ||
      document.querySelector("section:last-of-type");
    contactEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={wrapRef}
      className="relative w-full bg-[#fdfaf6]"
      style={{ height: "600vh" }}
    >
      <section
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center select-none"
        style={{
          paddingInline: `${inset * 14}vw`,
          paddingBlock: `${inset * 9}vh`,
        }}
      >
        <div
          className="relative w-full h-full overflow-hidden bg-[#140803]"
          style={{ borderRadius: `${radius}px` }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('/images/tabbg.png')" }}
          />
          {/* Gradient overlays */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,8,3,0.7) 0%, #F14C0C 55%, #FDC6AE 100%)",
              opacity: 0.88,
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[28%] pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(253,250,246,0) 0%, rgba(253,250,246,0.85) 75%, #fdfaf6 100%)",
              opacity: expand,
            }}
          />

          {/* Header */}
          <div className="absolute top-0 inset-x-0 text-center pt-8 sm:pt-12 px-6 z-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold uppercase tracking-wider mb-2.5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Delivery Methodology
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#fff1e6] tracking-tight leading-[1.16]">
              From Business Requirement to Delivery: Our Process
            </h2>
            <p className="text-[#f5e6dc] text-xs sm:text-sm md:text-[15px] font-light tracking-wide mt-2 max-w-2xl mx-auto leading-relaxed opacity-90 line-clamp-2 sm:line-clamp-none">
              We start with the business requirement and determine where AI, software, automation, digital marketing, or a combination of these can create the most value. Our process connects strategy, development, integration, launch, marketing, and continuous optimisation.
            </p>
          </div>

          {/* Tablet - centered initially, moves to bottom-left on scroll */}
          <div
            className="absolute bottom-0 z-10 pointer-events-none"
            style={{
              width: `${82 + (expand - 8) * 1}%`,
              maxWidth: "none",
              left: `${36 * (1 - expand)}%`,
              transform: `translateX(${-50 * (1 - expand)}%)`,
              willChange: "transform, left, width",
            }}
          >
            <img
              src="/images/tab.png"
              alt="From Business Requirement to Delivery"
              className="w-full h-auto object-contain object-left-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
              draggable={false}
            />
          </div>

          {/* Desktop Right Side: Active Step Card + Steps List */}
          <div
            className="absolute right-[4%] lg:right-[6%] top-[54%] -translate-y-1/2 z-20 hidden md:flex flex-col items-end gap-5 max-w-[440px] lg:max-w-[480px]"
            style={{
              opacity: clamp((expand - 0.4) / 0.5),
              visibility: expand < 0.4 ? "hidden" : "visible",
            }}
          >
            {/* Active Step Details Glass Card */}
            <div className="w-full bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.4)] text-white">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#ff8d4d] tracking-widest uppercase">
                  STEP {PROCESS_STEPS[activeIndex].number}
                </span>
                <span className="text-xs text-white/60">
                  {activeIndex + 1} of {PROCESS_STEPS.length}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5">
                {PROCESS_STEPS[activeIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200/90 leading-relaxed font-light mb-5">
                {PROCESS_STEPS[activeIndex].description}
              </p>
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#ff8d4d] hover:text-white transition-colors cursor-pointer group"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stepper Dots & Compact Pills */}
            <div className="flex items-center gap-2 w-full justify-between px-1">
              <div className="flex items-center gap-1.5">
                {PROCESS_STEPS.map((s, i) => (
                  <span
                    key={s.number}
                    className={`block rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-7 h-2 bg-white shadow-[0_0_10px_white]"
                        : "w-2 h-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={scrollToContact}
                className="bg-white text-neutral-950 font-bold px-4 py-1.5 rounded-full text-xs hover:bg-[#ff5e00] hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Discuss Your Requirement →
              </button>
            </div>
          </div>

          {/* Mobile Current Step Card */}
          <div
            className="md:hidden absolute bottom-[10%] inset-x-5 z-20 text-center"
            style={{ opacity: expand }}
          >
            <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white text-left shadow-lg">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#ff8d4d] mb-1">
                <span>STEP {PROCESS_STEPS[activeIndex].number}</span>
                <span>{activeIndex + 1}/{PROCESS_STEPS.length}</span>
              </div>
              <h4 className="text-base font-bold text-white leading-tight mb-1">
                {PROCESS_STEPS[activeIndex].title}
              </h4>
              <p className="text-xs text-neutral-200 line-clamp-2 leading-relaxed">
                {PROCESS_STEPS[activeIndex].description}
              </p>
              <button
                type="button"
                onClick={scrollToContact}
                className="mt-2.5 text-xs text-[#ff8d4d] font-semibold flex items-center gap-1"
              >
                Discuss Your Requirement →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
