"use client";

import React from "react";
import FolderFloat from "@/components/ui/FolderFloat";

interface TechCategory {
  title: string;
  technologies: string[];
}

const AI_TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Foundation Models & LLMs",
    technologies: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "Llama",
      "Mistral",
      "DeepSeek",
      "Qwen",
    ],
  },
  {
    title: "AI & Machine Learning",
    technologies: [
      "PyTorch",
      "Hugging Face",
      "Transformers",
      "Ollama",
      "vLLM",
      "llama.cpp",
    ],
  },
  {
    title: "AI Agents & Orchestration",
    technologies: [
      "Google ADK",
      "CrewAI",
      "n8n",
      "MCP",
    ],
  },
  {
    title: "RAG & Knowledge Systems",
    technologies: [
      "LlamaIndex",
      "Qdrant",
      "ChromaDB",
      "BM25",
      "RRF",
      "Embeddings",
      "Reranking",
    ],
  },
  {
    title: "Application Engineering",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Python",
      "FastAPI",
    ],
  },
  {
    title: "Mobile Development",
    technologies: [
      "React Native",
      "Expo",
      "Flutter",
    ],
  },
  {
    title: "Data & Databases",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Linux",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Integration",
    technologies: [
      "REST APIs",
      "GraphQL",
      "Webhooks",
      "OAuth",
      "MCP",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            Interactive Stack Explorer
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            AI Development Technologies We Work With
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Our AI development stack can be selected according to the requirements of each project rather than forcing every solution into the same technology stack.
          </p>
        </div>

        {/* 9 Technology Categories Grid with FolderFloat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-32 pt-24 pb-12">
          {AI_TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-end group z-10 hover:z-30 transition-[z-index]"
            >
              <div className="w-full flex justify-center">
                <FolderFloat
                  items={cat.technologies}
                  label={cat.title}
                  trigger="hover"
                  physics={true}
                  drift={0.6}
                  folderColor="#D34B16"
                  frontColor="#FF6A2F"
                  paperColor="#FFFFFF"
                  itemColor="#FFFFFF"
                  itemTextColor="#12141A"
                  labelColor="#FFFFFF"
                  width={250}
                  height={165}
                  radius={18}
                  spread={145}
                  lift={32}
                  openDuration={480}
                  stagger={40}
                  className="mx-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-20 pt-6 border-t border-neutral-200/80 text-center">
          <p className="text-xs sm:text-sm text-neutral-500 font-medium max-w-3xl mx-auto">
            Technology selection depends on the project&apos;s requirements, existing environment, security considerations and data
          </p>
        </div>
      </div>
    </section>
  );
}
