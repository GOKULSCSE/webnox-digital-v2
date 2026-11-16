"use client";

import React from "react";
import FolderFloat from "@/components/ui/FolderFloat";
import MobileTechStack, { MobileTechCategory } from "@/components/ui/MobileTechStack";

interface TechCategory extends MobileTechCategory {
  title: string;
  technologies: string[];
  rawTechnologies: string;
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "AI and LLMs",
    technologies: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "DeepSeek",
      "Qwen",
      "Llama",
      "Mistral",
    ],
    rawTechnologies:
      "OpenAI, Anthropic Claude, Google Gemini, DeepSeek, Qwen, Llama, Mistral",
  },
  {
    title: "AI Agent Engineering",
    technologies: ["Google ADK", "CrewAI", "N8N", "MCP"],
    rawTechnologies: "Google ADK, CrewAI, N8N, MCP",
  },
  {
    title: "Generative AI",
    technologies: ["LLMs", "Multimodal AI", "AI Assistants", "AI Agents"],
    rawTechnologies: "LLMs, Multimodal AI, AI Assistants, AI Agents",
  },
  {
    title: "RAG and Knowledge Systems",
    technologies: [
      "LlamaIndex",
      "Qdrant",
      "ChromaDB",
      "BM25",
      "RRF",
      "BGE Embeddings",
    ],
    rawTechnologies:
      "LlamaIndex, Qdrant, ChromaDB, BM25, RRF, BGE Embeddings",
  },
  {
    title: "AI and Machine Learning",
    technologies: [
      "PyTorch",
      "Hugging Face",
      "Transformers",
      "Ollama",
      "vLLM",
    ],
    rawTechnologies: "PyTorch, Hugging Face, Transformers, Ollama, vLLM",
  },
  {
    title: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI"],
    rawTechnologies: "React, Next.js, TypeScript, Tailwind CSS, MUI",
  },
  {
    title: "Mobile Development",
    technologies: ["React Native", "Expo", "Flutter"],
    rawTechnologies: "React Native, Expo, Flutter",
  },
  {
    title: "Backend",
    technologies: ["Node.js", "NestJS", "Express", "Python", "FastAPI"],
    rawTechnologies: "Node.js, NestJS, Express, Python, FastAPI",
  },
  {
    title: "Databases",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    rawTechnologies: "PostgreSQL, MySQL, MongoDB, Redis",
  },
  {
    title: "Cloud Infrastructure",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "On-Premises"],
    rawTechnologies: "AWS, Microsoft Azure, Google Cloud, On-Premises",
  },
  {
    title: "DevOps and Deployment",
    technologies: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Nginx",
      "Cloudflare",
      "Linux",
    ],
    rawTechnologies:
      "Docker, GitHub Actions, CI/CD, Nginx, Cloudflare, Linux",
  },
  {
    title: "APIs and Integration",
    technologies: ["REST APIs", "GraphQL", "Webhooks", "OAuth", "MCP"],
    rawTechnologies: "REST APIs, GraphQL, Webhooks, OAuth, MCP",
  },
  {
    title: "Observability and Evaluation",
    technologies: ["OpenTelemetry", "Prometheus", "Grafana", "Sentry"],
    rawTechnologies: "OpenTelemetry, Prometheus, Grafana, Sentry",
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a]">
            Technologies Powering Our AI Development Services
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Our technology stack combines modern AI frameworks, language models, software engineering tools and cloud infrastructure to develop intelligent applications and digital products.
          </p>
        </div>

        {/* Mobile Tech Stack Explorer (visible below md) */}
        <MobileTechStack
          categories={TECH_CATEGORIES}
          sectionTitle="Technologies Powering Our AI Development Services"
        />

        {/* Desktop 13 Technology Categories Grid with FolderFloat (visible on md and up) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-24 sm:gap-y-32 pt-16 sm:pt-24 pb-8 sm:pb-12">
          {TECH_CATEGORIES.map((cat, idx) => (
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

        {/* Semantic Category | Technologies Table for SEO & Accessibility */}
        <table className="sr-only">
          <thead>
            <tr>
              <th>Category</th>
              <th>Technologies</th>
            </tr>
          </thead>
          <tbody>
            {TECH_CATEGORIES.map((row) => (
              <tr key={row.title}>
                <td>{row.title}</td>
                <td>{row.rawTechnologies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
