"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  "Requirement Discovery",
  "AI Architecture Planning",
  "Prototyping & Validation",
  "AI Development",
  "Integration & Testing",
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

  // Phase 1 (0 -> 0.25): enlarge card to full-bleed & move tablet bottom-left
  const expand = ease(clamp(progress / 0.25));
  // Phase 2 (0.25 -> 1): cycle through steps
  const stepProgress = clamp((progress - 0.25) / 0.75);
  const activeIndex = Math.min(
    STEPS.length - 1,
    Math.floor(stepProgress * STEPS.length)
  );

  const inset = 1 - expand; // 1 = inset card, 0 = full
  const radius = 44 * inset;

  return (
    <div
      ref={wrapRef}
      className="relative w-full bg-[#fdfaf6]"
      style={{ height: "500vh" }}
    >
      <section
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center select-none"
        style={{
          paddingInline: `${inset * 16}vw`,
          paddingBlock: `${inset * 11}vh`,
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
                "linear-gradient(180deg, rgba(20,8,3,0.55) 0%, #F14C0C,#FDC6AE)",
              opacity: 0.85,
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
          <div className="absolute top-0 inset-x-0 text-center pt-10 sm:pt-14 px-6 z-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#fff1e6] tracking-tight leading-[1.15]">
              Our AI Development Process
            </h2>
            <p className="text-[#e2d7ce] text-sm sm:text-base font-normal tracking-wide mt-2">
              From Strategy to Deployment
            </p>
          </div>

          {/* Tablet - centered initially, moves to bottom-left on scroll */}
          <div
            className="absolute bottom-0 z-10 pointer-events-none"
            style={{
              width: `${84 + (expand - 8) * 1}%`,
              maxWidth: "none",
              left: `${38  * (1 - expand)}%`,
              transform: `translateX(${-50 * (1 - expand)}%)`,
              willChange: "transform, left, width",
            }}
          >
            <img
              src="/images/tab.png"
              alt="Our AI Development Process - From Strategy to Deployment"
              className="w-full h-auto object-contain object-left-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
              draggable={false}
            />
          </div>

          {/* Steps list */}
          <div
            className="absolute right-[5%] lg:right-[7%] top-[52%] -translate-y-1/2 z-20 hidden md:flex items-center gap-6"
            style={{
              opacity: clamp((expand - 0.6) / 0.4),
              visibility: expand < 0.6 ? "hidden" : "visible",
            }}
          >
            <ul className="flex flex-col items-center gap-4">
              {STEPS.map((s, i) => {
                const d = Math.abs(i - activeIndex);
                const active = d === 0;
                return (
                  <li
                    key={s}
                    className={`px-8 py-3 rounded-full text-xl lg:text-2xl font-medium whitespace-nowrap transition-all duration-500 ${active
                        ? "text-white bg-white/15 border border-white/30 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.15)] scale-105"
                        : "text-white/60 border border-transparent"
                      }`}
                    style={{
                      opacity: active ? 1 : Math.max(0.2, 0.7 - d * 0.2),
                    }}
                  >
                    {s}
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-2">
              {STEPS.map((s, i) => (
                <span
                  key={s}
                  className={`block w-1.5 rounded-full transition-all duration-500 ${i === activeIndex
                      ? "h-3 bg-white"
                      : "h-1.5 bg-white/40"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile current step */}
          <div
            className="md:hidden absolute bottom-[14%] inset-x-0 z-20 text-center"
            style={{ opacity: expand }}
          >
            <span className="inline-block px-6 py-2 rounded-full text-lg font-medium text-white bg-white/15 border border-white/30 backdrop-blur-md">
              {STEPS[activeIndex]}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
