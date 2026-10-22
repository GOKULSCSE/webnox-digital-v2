"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";

function HalftoneDotBand({
  className = "",
  style = {},
  columns = 70,
  rows = 9,
  spacing = 20,
}: {
  className?: string;
  style?: React.CSSProperties;
  columns?: number;
  rows?: number;
  spacing?: number;
}) {
  const width = columns * spacing;
  const height = rows * spacing;
  const centerRow = (rows - 1) / 2;

  const circles = [];
  for (let r = 0; r < rows; r++) {
    const distFromCenter = Math.abs(r - centerRow) / centerRow;
    const radius = 4.8 - distFromCenter * 2.8;
    const opacity = Math.max(0.12, 0.95 - distFromCenter * 0.82);

    for (let c = 0; c < columns; c++) {
      circles.push(
        <circle
          key={`${r}-${c}`}
          cx={c * spacing + spacing / 2}
          cy={r * spacing + spacing / 2}
          r={Math.max(1.3, radius)}
          fill="#FFA84A"
          fillOpacity={opacity}
        />
      );
    }
  }

  return (
    <div
      className={`absolute pointer-events-none select-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        {circles}
      </svg>
    </div>
  );
}

export default function ConversionCta() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).__lenis) {
      (window as any).__lenis.scrollTo("#contact", { duration: 1.2 });
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#160a04] text-white overflow-hidden py-20 sm:py-24 md:py-32 selection:bg-[#ff5e00] selection:text-white"
    >
      {/* Deep Background Gradient Base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 82% 50%, #2e1307 0%, #1a0b04 45%, #130702 100%)",
        }}
        aria-hidden="true"
      />

      {/* Ambient Orange Glow behind the 3D sculpture */}
      <div
        className="absolute right-0 lg:right-[-5%] top-1/2 -translate-y-1/2 w-[550px] lg:w-[700px] h-[550px] lg:h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 94, 0, 0.28) 0%, rgba(255, 114, 48, 0.12) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Top-Left Warm Vignette */}
      <div
        className="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Halftone Dot Band 1: Bottom-Left to Center-Right */}
      <HalftoneDotBand
        columns={75}
        rows={9}
        spacing={20}
        className="bottom-[-40px] left-[-250px] sm:left-[-150px] lg:left-[-100px] origin-left rotate-[-20deg] opacity-75 sm:opacity-85"
      />

      {/* Halftone Dot Band 2: Upper-Right behind 3D Sculpture */}
      <HalftoneDotBand
        columns={60}
        rows={10}
        spacing={20}
        className="top-[-60px] sm:top-[-20px] right-[-200px] sm:right-[-100px] lg:right-[-50px] origin-center rotate-[-20deg] opacity-60 sm:opacity-75"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Logo, Heading, Description, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            {/* Webnox Logo */}
            <div className="mb-8 sm:mb-10">
              <Image
                src="/images/Webnox logo White.svg"
                alt="Webnox"
                width={140}
                height={28}
                className="h-6 sm:h-7 w-auto object-contain"
                priority
              />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.12]">
              Build an AI Solution That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF6A2F] to-[#FF8935]">
                Fits Your Business
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-neutral-200 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl">
              Have an AI idea, an existing application that needs intelligent capabilities, or a business process that could benefit from automation?
            </p>

            {/* Subtext */}
            <p className="mt-3 text-neutral-400 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl">
              Talk to Webnox about your requirements and determine the right AI development approach for your product, software, or business workflow.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 mt-8 sm:mt-10">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="group inline-flex items-center gap-3.5 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-sm sm:text-base pl-6 pr-2 py-2 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,114,48,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Build Your AI Solution</span>
                <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF5E00] to-[#FF8935] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:rotate-12">
                  <Sparkles className="w-4 h-4 text-white fill-white" />
                </span>
              </a>

              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-1.5 text-white hover:text-[#FF7230] font-semibold text-sm sm:text-base transition-colors duration-200 group cursor-pointer"
              >
                <span>Talk to Our AI Experts</span>
                <ArrowUpRight className="w-4 h-4 text-white/90 group-hover:text-[#FF7230] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Infinity Sculpture & Pedestal */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end z-10 mt-4 lg:mt-0">
            <div className="relative w-full max-w-[460px] lg:max-w-none">
              <Image
                src="/images/startyouraiproject.png"
                alt="Webnox AI Solutions"
                width={800}
                height={533}
                className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)] scale-100 lg:scale-105 xl:scale-110 transform transition-transform duration-500 hover:scale-[1.12]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
