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
    title: "AI Models & Engines",
    shortTitle: "AI Models",
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
    shortTitle: "ML Frameworks",
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
    shortTitle: "LLM & RAG",
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
    shortTitle: "Databases",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Vector Databases"],
  },
  {
    title: "Cloud, Deployment & DevOps",
    shortTitle: "Cloud & DevOps",
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
    shortTitle: "Monitoring",
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
    <section className="relative w-full py-14 sm:py-20 lg:py-28 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-8 sm:mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            Interactive Stack Explorer
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a]">
            Technology Stack Behind Our AI Applications
          </h3>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            We select technologies based on your application requirements, data infrastructure,
            integration needs and deployment environment. Hover or tap any category folder to reveal
            the underlying technologies and interactive physics cloud.
          </p>
        </div>

        {/* Mobile Tech Stack Explorer (visible below md) */}
        <MobileTechStack
          categories={TECH_CATEGORIES}
          sectionTitle="Technology Stack Behind Our AI Applications"
        />

        {/* Desktop 6 Technology Categories Grid with FolderFloat (visible on md and up) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-24 sm:gap-y-32 pt-16 sm:pt-24 pb-8 sm:pb-12">
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
