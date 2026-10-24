"use client";

import React from "react";
import FolderFloat from "@/components/ui/FolderFloat";

interface TechCategory {
  title: string;
  technologies: string[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "LLM Providers and Models",
    technologies: [
      "OpenAI GPT",
      "Anthropic Claude",
      "Google Gemini",
      "Meta Llama",
      "Mistral",
    ],
  },
  {
    title: "Retrieval and Knowledge Systems",
    technologies: [
      "Embedding Models",
      "Vector Databases",
      "Hybrid Search",
      "Reranking",
      "RAG Pipelines",
    ],
  },
  {
    title: "Application Engineering",
    technologies: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Backend Frameworks",
      "Next.js / Web Tech",
    ],
  },
  {
    title: "Orchestration and Tool Use",
    technologies: [
      "Structured Outputs",
      "Function Calling",
      "Multi-Step Workflows",
      "Tool Integration",
      "Agent Frameworks",
    ],
  },
  {
    title: "Evaluation and Observability",
    technologies: [
      "Test Datasets",
      "Automated Evaluations",
      "Tracing & Logging",
      "Latency Monitoring",
      "Usage-Cost Analysis",
    ],
  },
  {
    title: "Infrastructure and Deployment",
    technologies: [
      "Cloud Services",
      "Containerized Envs",
      "Managed Model APIs",
      "Private Deployments",
      "Docker & K8s",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            LLM Development Technology Stack
          </h3>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            We select technologies based on the application, data requirements, operating environment, and expected scale rather than forcing every project into the same stack. Hover or tap any category folder to reveal the underlying technologies.
          </p>
        </div>

        {/* 6 Technology Categories Grid with FolderFloat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-32 pt-24 pb-12">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-end group z-10 hover:z-30 transition-[z-index]"
            >
              {/* Category H4 Header */}
              <h4 className="sr-only">{cat.title}</h4>

              {/* FolderFloat Interactive Component */}
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

        {/* Bottom architecture disclosure note */}
        <div className="mt-20 pt-8 border-t border-neutral-200/80 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-neutral-500 font-medium">
            * The final stack is determined during technical discovery and architecture planning.
          </p>
        </div>
      </div>
    </section>
  );
}
