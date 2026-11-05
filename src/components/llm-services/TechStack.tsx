"use client";

import React from "react";
import { Cpu, Network, Database, Terminal, CheckCircle2 } from "lucide-react";

interface TechCategory {
  title: string;
  categoryTag: string;
  technologies: string[];
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Foundation Models & Open Weights",
    categoryTag: "CORE INTELLIGENCE",
    description: "Multi-modal foundation engines and private sovereign open weights tuned for enterprise workloads.",
    technologies: [
      "Meta Llama 3.3",
      "Mistral Large",
      "DeepSeek-V3",
      "Qwen 2.5",
      "Phi-4",
      "Claude 3.5 Sonnet",
      "GPT-4o",
    ],
    icon: Cpu,
  },
  {
    title: "Model Orchestration & Agent Frameworks",
    categoryTag: "AGENTIC WORKFLOWS",
    description: "Multi-agent runtime environments, structured outputs, and dynamic prompt optimization compilers.",
    technologies: [
      "LangChain",
      "LlamaIndex",
      "AutoGen",
      "CrewAI",
      "DSPy",
      "Semantic Kernel",
      "Outlines",
    ],
    icon: Network,
  },
  {
    title: "Vector Databases & Search Engines",
    categoryTag: "KNOWLEDGE RETRIEVAL",
    description: "Ultra-fast semantic search, hybrid sparse-dense indexing, and sub-millisecond similarity recall.",
    technologies: [
      "Pinecone",
      "Milvus",
      "Qdrant",
      "Weaviate",
      "pgvector",
      "Elasticsearch",
      "ChromaDB",
    ],
    icon: Database,
  },
  {
    title: "Inference Optimization & LLMOps",
    categoryTag: "PRODUCTION SERVING",
    description: "High-throughput model serving engines, continuous RAG benchmarking, and containerized orchestration.",
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
    icon: Terminal,
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative w-full py-20 sm:py-28 bg-[#100602] text-white overflow-hidden selection:bg-[#ff5e00] selection:text-white">
      {/* Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, #200d04 0%, #110602 60%, #0a0301 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/15 border border-[#ff5e00]/30 text-[#ff8935] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            PRODUCTION TOOLING
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Technology Behind Your Custom AI System
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            We use proven, production-grade frameworks and open-source models that avoid single-vendor lock-in and keep operational costs strictly controlled.
          </p>
        </div>

        {/* 4 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#ff7230]/40 transition-all duration-300 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.2)] group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#ff7230]/15 border border-[#ff7230]/30 flex items-center justify-center text-[#ff7230] group-hover:bg-[#ff7230] group-hover:text-white transition-all duration-300 shadow-sm">
                    <cat.icon className="w-5 h-5 text-current transition-colors" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#ff8935] bg-[#ff5e00]/15 border border-[#ff5e00]/25 px-2.5 py-1 rounded-md">
                    {cat.categoryTag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff8935] transition-colors mb-2 leading-snug">
                  {cat.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Technologies Chips */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {cat.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-neutral-200 border border-white/10 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff7230]" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
