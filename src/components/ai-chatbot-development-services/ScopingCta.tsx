"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";
import PatternWaves from "@/components/PatternWaves";

export default function ScopingCta() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#160a04] text-white overflow-hidden py-16 sm:py-24 selection:bg-[#ff5e00] selection:text-white"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 82% 50%, #2e1307 0%, #1a0b04 45%, #130702 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute right-0 lg:right-[-4%] top-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.35) 0%, rgba(255, 94, 0, 0.16) 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="mb-6">
              <Image
                src="/images/Webnox logo White.svg"
                alt="Webnox"
                width={140}
                height={28}
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.14]">
              Ready to Build a Custom{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF6A2F] to-[#FF8935]">
                AI Chatbot for Your Business?
              </span>
            </h3>

            <p className="mt-4 sm:mt-6 text-neutral-200/90 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl">
              Talk with our senior engineering team to see whether a custom RAG chatbot or a lightweight SaaS widget fits your workflow best. In a 30-minute scoping call, we review your channels, inspect sample support logs or documents, discuss realistic build and monthly token costs, and map a clear architecture plan.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6 mt-7 sm:mt-10 w-full sm:w-auto">
              <a
                href="mailto:contact@webnox.in?subject=AI%20Chatbot%20Architecture%20Call"
                className="group inline-flex items-center justify-center gap-3.5 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-sm sm:text-base pl-6 pr-2 py-2.5 sm:py-2 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,114,48,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Schedule an AI Chatbot Architecture Call</span>
                <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF5E00] to-[#FF8935] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:rotate-12 flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white fill-white" />
                </span>
              </a>

              <a
                href="tel:+919786557739"
                className="inline-flex items-center justify-center gap-1.5 text-white hover:text-[#FF7230] font-semibold text-sm sm:text-base transition-colors duration-200 group cursor-pointer text-center"
              >
                <span>Request a Chatbot Sandbox PoC</span>
                <ArrowUpRight className="w-4 h-4 text-white/90 group-hover:text-[#FF7230] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[520px]">
              <div className="absolute inset-0 pointer-events-none opacity-80">
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
              <Image
                src="/images/startyouraiproject.png"
                alt="Schedule an AI Chatbot Architecture Call"
                width={800}
                height={533}
                className="relative z-10 w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

