"use client";

import React, { useState } from "react";
import {
  Brain,
  Bot,
  Sparkles,
  Layers,
  Cpu,
  Monitor,
  Smartphone,
  Server,
  Database,
  Cloud,
  Terminal,
  Network,
  Radio,
  Activity,
  CheckCircle2,
} from "lucide-react";

interface TechCategory {
  category: string;
  technologies: string[];
  icon: React.ReactNode;
  summary: string;
}

const TECH_DATA: TechCategory[] = [
  {
    category: "AI and LLMs",
    technologies: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "DeepSeek",
      "Qwen",
      "Llama",
      "Mistral",
    ],
    icon: <Brain className="w-5 h-5 text-[#ff5e00]" />,
    summary: "Frontier foundation models & open-weights architectures",
  },
  {
    category: "AI Agent Engineering",
    technologies: ["Google ADK", "CrewAI", "N8N", "MCP"],
    icon: <Bot className="w-5 h-5 text-[#ff5e00]" />,
    summary: "Multi-agent coordination, orchestration, and tool use",
  },
  {
    category: "Generative AI",
    technologies: [
      "LLMs",
      "Multimodal AI",
      "AI Assistants",
      "AI Agents",
      "Structured Generation",
    ],
    icon: <Sparkles className="w-5 h-5 text-[#ff5e00]" />,
    summary: "Synthetic data, function calling, multimodal reasoning",
  },
  {
    category: "RAG and Knowledge Systems",
    technologies: [
      "LlamaIndex",
      "Qdrant",
      "ChromaDB",
      "BM25",
      "RRF",
      "BGE Embeddings",
      "BGE Reranker",
    ],
    icon: <Layers className="w-5 h-5 text-[#ff5e00]" />,
    summary: "Hybrid search, dense retrieval, reranking, and vector databases",
  },
  {
    category: "AI / ML",
    technologies: [
      "PyTorch",
      "Hugging Face",
      "Transformers",
      "Ollama",
      "vLLM",
      "llama.cpp",
    ],
    icon: <Cpu className="w-5 h-5 text-[#ff5e00]" />,
    summary: "High-throughput model inference, quantisation, and fine-tuning",
  },
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI"],
    icon: <Monitor className="w-5 h-5 text-[#ff5e00]" />,
    summary: "Responsive, accessible, and high-performance modern web apps",
  },
  {
    category: "Mobile Development",
    technologies: ["React Native", "Expo", "Flutter"],
    icon: <Smartphone className="w-5 h-5 text-[#ff5e00]" />,
    summary: "Native-grade cross-platform applications for iOS and Android",
  },
  {
    category: "Backend",
    technologies: ["Node.js", "NestJS", "Express", "Python", "FastAPI"],
    icon: <Server className="w-5 h-5 text-[#ff5e00]" />,
    summary: "High-concurrency microservices, async APIs, and event streaming",
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    icon: <Database className="w-5 h-5 text-[#ff5e00]" />,
    summary: "Relational persistence, document storage, and in-memory caches",
  },
  {
    category: "Cloud and Infrastructure",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "On-Premises"],
    icon: <Cloud className="w-5 h-5 text-[#ff5e00]" />,
    summary: "Resilient multi-cloud, hybrid setups, and private VPC clusters",
  },
  {
    category: "DevOps and Deployment",
    technologies: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Nginx",
      "Cloudflare",
      "Linux",
    ],
    icon: <Terminal className="w-5 h-5 text-[#ff5e00]" />,
    summary: "Automated container builds, edge proxies, and secure pipelines",
  },
  {
    category: "APIs and Integration",
    technologies: ["REST APIs", "GraphQL", "Webhooks", "OAuth", "MCP"],
    icon: <Network className="w-5 h-5 text-[#ff5e00]" />,
    summary: "Standardized protocols, real-time webhooks, and tool calling",
  },
  {
    category: "IoT and Connected Systems",
    technologies: ["MQTT", "IoT Platforms", "Device APIs", "Real-Time Data"],
    icon: <Radio className="w-5 h-5 text-[#ff5e00]" />,
    summary: "Sensor telemetry, hardware communication, and edge processing",
  },
  {
    category: "Observability and Evaluation",
    technologies: ["OpenTelemetry", "Prometheus", "Grafana", "Sentry"],
    icon: <Activity className="w-5 h-5 text-[#ff5e00]" />,
    summary: "Zero-latency telemetry, error tracking, and AI output benchmarking",
  },
];

export default function TechStackTable() {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    "AI & Agents",
    "Engineering",
    "Cloud & Data",
  ];

  const filteredData = TECH_DATA.filter((item) => {
    if (filter === "All") return true;
    if (filter === "AI & Agents") {
      return [
        "AI and LLMs",
        "AI Agent Engineering",
        "Generative AI",
        "RAG and Knowledge Systems",
        "AI / ML",
      ].includes(item.category);
    }
    if (filter === "Engineering") {
      return [
        "Frontend",
        "Mobile Development",
        "Backend",
        "APIs and Integration",
        "IoT and Connected Systems",
      ].includes(item.category);
    }
    if (filter === "Cloud & Data") {
      return [
        "Databases",
        "Cloud and Infrastructure",
        "DevOps and Deployment",
        "Observability and Evaluation",
      ].includes(item.category);
    }
    return true;
  });

  return (
    <section
      id="tech-stack"
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse" />
            Full Toolchain
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#140803] leading-[1.18]">
            Technologies Powering Our{" "}
            <span className="text-[#ff5e00]">AI and Software Solutions</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-[17px] leading-relaxed">
            From frontier foundation models and multi-agent frameworks to resilient cloud architecture and real-time observability.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 sm:mb-14">
          <div className="inline-flex items-center p-1.5 bg-[#f0eae1] border border-neutral-300/80 rounded-full shadow-inner gap-1 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? "bg-[#ff5e00] text-white shadow-[0_2px_12px_rgba(255,94,0,0.35)]"
                    : "text-neutral-700 hover:text-neutral-950 hover:bg-white/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Modern Tech Stack Matrix Table / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredData.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl sm:rounded-[22px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#ff5e00]/40 hover:shadow-[0_12px_32px_rgba(255,94,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Header: Icon + Category Name */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#140803] tracking-tight group-hover:text-[#ff5e00] transition-colors">
                        {item.category}
                      </h3>
                      <p className="text-xs text-neutral-500 font-normal mt-0.5">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Chips List */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-neutral-100">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f8f5f0] border border-neutral-200/70 text-xs sm:text-[13px] font-medium text-neutral-800 hover:bg-orange-50 hover:border-orange-200 hover:text-[#ff5e00] transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#ff5e00]/70" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
