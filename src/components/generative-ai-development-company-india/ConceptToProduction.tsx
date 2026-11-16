"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const PROGRESSION_STAGES = [
  "Business Requirement",
  "AI Use Case",
  "Technical Architecture",
  "Proof of Concept",
  "Application Development",
  "Production Deployment",
  "Continuous Optimisation",
];

export default function ConceptToProduction() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#080503] text-white overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.06] blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            From Generative AI Concept to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              Production-Ready Application
            </span>
          </h2>
          <p className="mt-5 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Building a successful AI application starts with identifying the right business problem. You do not need to begin with a large-scale AI transformation.
          </p>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Start with a specific use case, validate its technical feasibility and expand the solution based on actual business requirements.
          </p>
        </div>

        {/* Progression Pipeline */}
        <div className="mt-10 sm:mt-12 rounded-[26px] bg-[#120b07] border border-white/10 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF7230] mb-5">
            Webnox Digital helps you progress through:
          </p>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {PROGRESSION_STAGES.map((stage, idx) => (
              <React.Fragment key={stage}>
                <span className="px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-semibold text-white">
                  {stage}
                </span>
                {idx < PROGRESSION_STAGES.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#FF7230] flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="mt-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-light max-w-4xl">
            Whether you need a custom LLM application, enterprise RAG system, AI chatbot, AI copilot, autonomous agent or multimodal AI solution, our team can help define and implement the right approach.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-7">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              style={{
                background:
                  "linear-gradient(90deg, #FF7230 0%, #FF6A2F 26%, #FF7631 44%, #FF8935 63%, #FF532B 100%)",
              }}
            >
              <span>Start Your Generative AI Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center text-neutral-300 hover:text-white text-sm sm:text-base font-medium px-6 py-3.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-pointer text-center"
            >
              <span>Talk to Our AI Experts</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

