"use client";

import React, { useState } from "react";
import {
  Layers,
  Cpu,
  Database,
  Network,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Sparkles,
  Server,
  Code,
  Layout,
  HardDrive,
  Cloud,
} from "lucide-react";

interface ArchLayer {
  number: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const ARCH_LAYERS: ArchLayer[] = [
  {
    number: "1",
    name: "Application Layer",
    description: "Receives user requests through websites, mobile apps, and APIs.",
    icon: Layout,
    accentColor: "from-blue-500 to-cyan-500",
  },
  {
    number: "2",
    name: "AI Model Layer",
    description: "Uses AI models and orchestration to process requests and coordinate tasks.",
    icon: Cpu,
    accentColor: "from-purple-500 to-violet-500",
  },
  {
    number: "3",
    name: "Data and Knowledge Layer",
    description: "Connects RAG, databases, and business documents to provide relevant information.",
    icon: Database,
    accentColor: "from-emerald-500 to-teal-500",
  },
  {
    number: "4",
    name: "Integration Layer",
    description: "Connects AI applications with CRM, ERP, and other business systems through APIs.",
    icon: Network,
    accentColor: "from-amber-500 to-orange-500",
  },
  {
    number: "5",
    name: "Security and Validation Layer",
    description: "Applies access controls, business rules, and output checks to help protect data and manage errors.",
    icon: ShieldCheck,
    accentColor: "from-rose-500 to-red-500",
  },
  {
    number: "6",
    name: "Output and Monitoring Layer",
    description: "Delivers results and monitors performance to support ongoing improvement.",
    icon: Activity,
    accentColor: "from-[#FF7230] to-[#FF532B]",
  },
];

interface TechCategory {
  title: string;
  tools: string[];
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Foundation Models and LLMs",
    tools: ["OpenAI", "Anthropic Claude", "Google Gemini", "Meta Llama", "Mistral", "DeepSeek", "Qwen"],
    icon: Cpu,
    tag: "Core Models",
  },
  {
    title: "AI Agent Frameworks and Orchestration",
    tools: ["LangChain", "LangGraph", "LlamaIndex", "CrewAI", "Google ADK", "n8n", "Model Context Protocol (MCP)"],
    icon: Layers,
    tag: "Agents & Workflows",
  },
  {
    title: "RAG, Retrieval and Vector Databases",
    tools: ["Qdrant", "Pinecone", "Milvus", "Weaviate", "ChromaDB", "pgvector", "BM25 hybrid search"],
    icon: Database,
    tag: "Vector Search",
  },
  {
    title: "Machine Learning and Model Development",
    tools: ["PyTorch", "Hugging Face Transformers", "scikit-learn", "DeepSpeed"],
    icon: Sparkles,
    tag: "ML & Fine-Tuning",
  },
  {
    title: "Model Serving and Inference",
    tools: ["vLLM", "Ollama", "llama.cpp", "ONNX Runtime", "NVIDIA Triton Inference Server", "Ray Serve"],
    icon: Server,
    tag: "Low-Latency Serving",
  },
  {
    title: "Backend Development and APIs",
    tools: ["Python", "FastAPI", "Node.js", "NestJS"],
    icon: Code,
    tag: "Backend & APIs",
  },
  {
    title: "Web and Mobile Application Development",
    tools: ["React", "Next.js", "TypeScript", "Flutter"],
    icon: Layout,
    tag: "Frontend & Mobile",
  },
  {
    title: "Databases and Infrastructure",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker", "Kubernetes"],
    icon: HardDrive,
    tag: "Data & DevOps",
  },
  {
    title: "Cloud AI Platforms",
    tools: ["AWS", "Amazon Bedrock", "Amazon SageMaker", "Microsoft Azure", "Azure AI", "Google Cloud", "Vertex AI"],
    icon: Cloud,
    tag: "Enterprise Cloud",
  },
];

export default function ArchitectureTechStack() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  return (
    <section id="architecture" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3">
            Enterprise Architecture &amp; Stack
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            AI Development Architecture for Businesses in India
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Webnox Digital designs AI development architectures in India that connect AI models,
            business data, and existing software. Our approach combines AI orchestration, RAG, API
            integration, and security controls to build scalable AI applications aligned with business
            needs.
          </p>
        </div>

        {/* 6-Layer Architecture Stack Diagram */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Stack Layers List */}
            <div className="lg:col-span-6 space-y-3">
              {ARCH_LAYERS.map((layer, idx) => {
                const Icon = layer.icon;
                const isSelected = activeLayer === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveLayer(idx)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-white border-[#FF7230] shadow-[0_8px_24px_rgba(255,114,48,0.12)] scale-[1.01]"
                        : "bg-white/60 hover:bg-white border-neutral-200/70 hover:border-neutral-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? "bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white shadow-sm"
                            : "bg-neutral-100 text-neutral-600"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#FF7230]">
                            LAYER {layer.number}
                          </span>
                          <span className="font-bold text-sm sm:text-base text-neutral-900">
                            {layer.name}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 line-clamp-1">
                          {layer.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        isSelected ? "bg-[#FF7230]" : "bg-neutral-200"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Right Column: Active Layer Interactive Schematic Spotlight */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#160a04] to-[#251006] text-white p-8 sm:p-10 rounded-[32px] border border-neutral-800 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-[#ff8935] text-xs font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#ff5e00] animate-pulse" />
                  Active Layer Breakdown
                </div>

                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {ARCH_LAYERS[activeLayer].number}. {ARCH_LAYERS[activeLayer].name}
                </div>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mt-3">
                  {ARCH_LAYERS[activeLayer].description}
                </p>

                {/* Technical highlights for active layer */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <div className="text-xs uppercase tracking-wider font-bold text-neutral-400">
                    Architectural Guarantees
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff8935] flex-shrink-0" />
                      <span>Zero Data Leakage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff8935] flex-shrink-0" />
                      <span>Role-Based Auth &amp; TLS 1.3</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff8935] flex-shrink-0" />
                      <span>Sub-Second Response Pipeline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff8935] flex-shrink-0" />
                      <span>Deterministic Audit Logs</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span>Architecture Pattern: Hybrid Enterprise RAG + Multi-Agent</span>
                  <span className="text-[#ff8935] font-semibold">Production Validated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Technologies and Frameworks We Use (H4) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#ff5e00]">
              Technology Layer &amp; Tools
            </span>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#12141a] mt-2">
              AI Technologies and Frameworks We Use
            </h4>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base">
              A robust, enterprise-tested ecosystem spanning foundation models, agent frameworks, vector retrieval, and secure cloud platforms.
            </p>
          </div>

          {/* 9 Categories Grid with H5 Headings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {TECH_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 hover:border-[#FF7230]/40 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.1)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-gradient-to-br group-hover:from-[#FF7230] group-hover:to-[#FF532B] flex items-center justify-center text-neutral-700 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full">
                        {cat.tag}
                      </span>
                    </div>

                    {/* H5 Heading */}
                    <h5 className="text-base sm:text-lg font-bold text-[#12141a] tracking-tight leading-snug">
                      {cat.title}
                    </h5>

                    {/* Tools Chips */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
                      {cat.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-50 text-neutral-700 border border-neutral-200/70 group-hover:border-orange-200/80 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
