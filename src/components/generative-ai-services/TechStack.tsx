"use client";

import React from "react";
import FolderFloat from "@/components/ui/FolderFloat";

interface TechCategory {
  title: string;
  technologies: string[];
}

const GENAI_TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Foundation Model Technologies",
    technologies: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "Meta Llama",
      "Mistral",
    ],
  },
  {
    title: "Generative AI Technologies",
    technologies: [
      "LLMs",
      "RAG",
      "AI Agents",
      "Embeddings",
      "Vector Databases",
      "Multimodal AI",
      "Tool Calling",
    ],
  },
  {
    title: "AI Development Technologies",
    technologies: [
      "Python",
      "LangChain",
      "LlamaIndex",
      "FastAPI",
      "AI SDKs",
      "REST APIs",
    ],
  },
  {
    title: "AI Data Technologies",
    technologies: [
      "Vector Search",
      "Knowledge Bases",
      "Document Processing",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "AI Infrastructure Technologies",
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "AI Optimization Technologies",
    technologies: [
      "Model Routing",
      "Fine-tuning",
      "Structured Outputs",
      "Prompt Engineering",
      "Context Engineering",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            Interactive Stack Explorer
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Technologies Behind Generative AI Development
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We architect foundation models, retrieval pipelines, vector stores, and orchestration frameworks into resilient, high-speed production systems.
          </p>
        </div>

        {/* 6 Technology Categories Grid with FolderFloat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-32 pt-24 pb-12">
          {GENAI_TECH_CATEGORIES.map((cat, idx) => (
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
      </div>
    </section>
  );
}
