"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";
import PatternWaves from "@/components/PatternWaves";

function HalftoneDotBand({
  className = "",
  style = {},
  columns = 160,
  rows = 7,
  spacing = 24,
}: {
  className?: string;
  style?: React.CSSProperties;
  columns?: number;
  rows?: number;
  spacing?: number;
}) {
  const width = columns * spacing;
  const height = rows * spacing;

  return (
    <div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ...style,
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <PatternWaves
          preset="silk"
          pattern="dot"
          wave="silk"
          characters=".:-=+*#%@"
          shadowColor="#442508"
          color="#c06b2e"
          accentColor="#f69653"
          highlightColor="#ffb87a"
          backgroundColor="transparent"
          spacing={15}
          markSize={0.96}
          depth={0.42}
          light={0}
          shine={0.85}
          contrast={1.05}
          speed={0.35}
          scale={1.2}
          direction={20}
          fade="none"
          fadeSize={0}
          opacity={1}
          interactive={true}
          cursorSize={100}
          cursorStrength={1.0}
          intro={false}
          paused={false}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default function ConversionCta() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#160a04] text-white overflow-hidden py-16 sm:py-20 lg:py-24 xl:py-28 selection:bg-[#ff5e00] selection:text-white"
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
        className="absolute right-0 lg:right-[-4%] top-[52%] sm:top-[55%] lg:top-[57%] -translate-y-1/2 w-[750px] lg:w-[1100px] h-[750px] lg:h-[1100px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.48) 0%, rgba(255, 94, 0, 0.24) 36%, transparent 70%)",
          filter: "blur(70px)",
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

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Logo, Heading, Description, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-20">
            {/* Webnox Logo */}
            <div className="mb-6 sm:mb-9">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[54px] font-bold tracking-tight text-white leading-[1.12]">
              Build Your Next AI Product with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF6A2F] to-[#FF8935]">
                Webnox Digital
              </span>
            </h2>

            {/* Description Paragraph 1 */}
            <p className="mt-4 sm:mt-6 text-neutral-200/90 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl">
              Have an AI product idea, an existing application that needs intelligent features or a business workflow ready for automation? Webnox Digital brings AI development, software engineering and digital product experience together to help turn your requirements into working solutions.
            </p>

            {/* Description Paragraph 2 */}
            <p className="mt-3 text-neutral-300/80 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl">
              From AI consultation and custom development to application integration, testing and deployment, our team can support your project throughout its development lifecycle.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6 mt-7 sm:mt-10 w-full sm:w-auto">
              <a
                href="mailto:contact@webnox.in?subject=Start%20Your%20AI%20Project"
                className="group inline-flex items-center justify-center gap-3.5 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-sm sm:text-base pl-6 pr-2 py-2.5 sm:py-2 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,114,48,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Start Your AI Project</span>
                <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF5E00] to-[#FF8935] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:rotate-12 flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white fill-white" />
                </span>
              </a>

              <a
                href="tel:+919786557739"
                className="inline-flex items-center justify-center gap-1.5 text-white hover:text-[#FF7230] font-semibold text-sm sm:text-base transition-colors duration-200 group cursor-pointer text-center"
              >
                <span>Talk to Our AI Experts</span>
                <ArrowUpRight className="w-4 h-4 text-white/90 group-hover:text-[#FF7230] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Infinity Sculpture & Pedestal with locked Halftone Dot Band */}
          <div className="lg:col-span-5 relative flex items-center lg:items-end justify-center lg:justify-end z-10 mt-6 lg:mt-0">
            <div className="relative w-full max-w-[440px] sm:max-w-[620px] lg:max-w-[920px] xl:max-w-[1020px] 2xl:max-w-[1120px] lg:translate-x-6 xl:translate-x-12 translate-y-4 sm:translate-y-12 lg:translate-y-24">
              <HalftoneDotBand
                columns={160}
                rows={7}
                spacing={24}
                className="opacity-85 sm:opacity-95 z-0"
                style={{
                  left: "50%",
                  top: "84.95%",
                  transform: "translate(-50%, -100%) rotate(-8.494deg)",
                  transformOrigin: "50% 100%",
                }}
              />

              <Image
                src="/images/startyouraiproject.png"
                alt="Build Your Next AI Product with Webnox Digital"
                width={800}
                height={533}
                style={{
                  clipPath:
                    "polygon(-10% -10%, 110% -10%, 110% 71.5%, -10% 98.4%)",
                  WebkitClipPath:
                    "polygon(-10% -10%, 110% -10%, 110% 71.5%, -10% 98.4%)",
                  transformOrigin: "50% 84.95%",
                }}
                className="relative z-10 w-full h-auto object-contain scale-145 sm:scale-155 lg:scale-170 xl:scale-185 2xl:scale-195 transform transition-transform duration-500 hover:brightness-110"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
