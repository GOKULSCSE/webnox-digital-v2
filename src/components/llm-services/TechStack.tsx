"use client";

import React from "react";
import FolderFloat from "@/components/ui/FolderFloat";
import MobileTechStack, { MobileTechCategory } from "@/components/ui/MobileTechStack";

interface TechCategory extends MobileTechCategory {
  title: string;
  technologies: string[];
  shortTitle?: string;
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Foundation Models & Open Weights",
    shortTitle: "Foundation Models",
    technologies: [
      "Meta Llama 3.3",
      "Mistral Large",
      "DeepSeek-V3",
      "Qwen 2.5",
      "Phi-4",
      "Claude 3.5 Sonnet",
      "GPT-4o",
    ],
  },
  {
    title: "Model Orchestration & Agent Frameworks",
    shortTitle: "Agentic Workflows",
    technologies: [
      "LangChain",
      "LlamaIndex",
      "AutoGen",
      "CrewAI",
      "DSPy",
      "Semantic Kernel",
      "Outlines",
    ],
  },
  {
    title: "Vector Databases & Search Engines",
    shortTitle: "Vector & Search",
    technologies: [
      "Pinecone",
      "Milvus",
      "Qdrant",
      "Weaviate",
      "pgvector",
      "Elasticsearch",
      "ChromaDB",
    ],
  },
  {
    title: "Inference Optimization & LLMOps",
    shortTitle: "Serving & LLMOps",
    technologies: [
      "vLLM",
      "TensorRT-LLM",
      "Hugging Face TGI",
      "DeepEval",
      "RAGAS",
      "MLflow",
      "Docker",
      "Kubernetes",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative w-full py-14 sm:py-20 lg:py-28 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-8 sm:mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            Interactive Stack Explorer
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a]">
            Technology Behind Your Custom AI System
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            We use proven, production-grade frameworks and open-source models that avoid single-vendor lock-in and keep operational costs strictly controlled. Hover or tap any category folder to reveal the underlying technologies.
          </p>
        </div>

        {/* Mobile Tech Stack Explorer (visible below md) */}
        <MobileTechStack
          categories={TECH_CATEGORIES}
          sectionTitle="Technology Behind Your Custom AI System"
        />

        {/* Desktop 4 Technology Categories Grid with FolderFloat (visible on md and up) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-10 gap-y-24 sm:gap-y-32 pt-16 sm:pt-24 pb-8 sm:pb-12">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-end group z-10 hover:z-30 transition-[z-index]"
            >
              <div className="w-full flex justify-center">
                <FolderFloat
                  items={cat.technologies}
                  label={cat.shortTitle || cat.title}
                  trigger="hover"
                  physics={true}
                  drift={0.6}
                  folderColor="#D34B16"
                  frontColor="#FF6A2F"
                  paperColor="#FFFFFF"
                  itemColor="#FFFFFF"
                  itemTextColor="#12141A"
                  labelColor="#FFFFFF"
                  width={240}
                  height={160}
                  radius={18}
                  spread={140}
                  lift={32}
                  openDuration={480}
                  stagger={40}
                  className="mx-auto"
                />
              </div>
              <h3 className="mt-5 text-center text-sm font-bold text-[#12141a] leading-snug max-w-[240px]">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
