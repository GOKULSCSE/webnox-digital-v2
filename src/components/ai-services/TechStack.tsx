"use client";

import React from "react";
import FolderFloat from "@/components/ui/FolderFloat";

interface TechCategory {
  title: string;
  technologies: string[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "AI Models & Engines",
    technologies: [
      "OpenAI GPT",
      "Anthropic Claude",
      "Google Gemini",
      "Meta Llama",
      "Mistral",
    ],
  },
  {
    title: "AI & ML Frameworks",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Keras",
      "Hugging Face Transformers",
    ],
  },
  {
    title: "LLM Engineering & Retrieval",
    technologies: [
      "LLM APIs",
      "Retrieval-Augmented Generation (RAG)",
      "Embeddings",
      "Tool Calling",
      "AI Orchestration",
    ],
  },
  {
    title: "Databases & Vector Search",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Vector Databases"],
  },
  {
    title: "Cloud, Deployment & DevOps",
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    title: "Monitoring & Evaluation",
    technologies: [
      "MLflow",
      "AI Evaluation",
      "Tracing",
      "Performance Monitoring",
      "Cost Tracking",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            Interactive Stack Explorer
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Technology Stack Behind Our AI Applications
          </h3>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            We select technologies based on your application requirements, data infrastructure,
            integration needs and deployment environment. Hover or tap any category folder to reveal
            the underlying technologies and interactive physics cloud.
          </p>
        </div>

        {/* 6 Technology Categories Grid with FolderFloat (Border outline card removed, synced with Webnox orange theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-32 pt-24 pb-12">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-end group z-10 hover:z-30 transition-[z-index]"
            >
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
      </div>
    </section>
  );
}
