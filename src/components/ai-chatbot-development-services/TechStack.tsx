"use client";

import React from "react";
import FolderFloat from "@/components/ui/FolderFloat";
import MobileTechStack, {
  MobileTechCategory,
} from "@/components/ui/MobileTechStack";

const TECH_CATEGORIES = [
  {
    shortTitle: "Foundation Models & Open Weights",
    body: "Claude 3.5 Sonnet, GPT-4o, Gemini, Meta Llama 3.3, Mistral, Qwen 2.5",
    folderItems: [
      "Claude 3.5 Sonnet",
      "GPT-4o & Gemini",
      "Meta Llama 3.3",
      "Mistral & Qwen 2.5",
    ],
  },
  {
    shortTitle: "Orchestration, Guardrails & Memory",
    body: "LangGraph, LlamaIndex, Model Context Protocol (MCP), Redis, Presidio PII Masking",
    folderItems: [
      "LangGraph & LlamaIndex",
      "Model Context Protocol",
      "Redis State",
      "Presidio PII Masking",
    ],
  },
  {
    shortTitle: "Vector Databases & Search Engines",
    body: "pgvector, Qdrant, Pinecone, Milvus, Weaviate, Elasticsearch",
    folderItems: [
      "pgvector & Qdrant",
      "Pinecone & Milvus",
      "Weaviate",
      "Elasticsearch",
    ],
  },
  {
    shortTitle: "Channels, Testing & Hosting",
    body: "WhatsApp Cloud API, HMAC SHA-256 Webhooks, RAGAS, DeepEval, vLLM, Docker, Kubernetes",
    folderItems: [
      "WhatsApp Cloud API",
      "HMAC SHA-256 Webhooks",
      "RAGAS & DeepEval",
      "vLLM, Docker & K8s",
    ],
  },
];

const MOBILE_CATEGORIES: MobileTechCategory[] = TECH_CATEGORIES.map(
  (cat) => ({
    title: cat.shortTitle,
    technologies: cat.folderItems,
  })
);

export default function TechStack() {
  return (
    <section
      id="technologies"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-8 sm:mb-14">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            AI Chatbot Technologies and Development Stack
          </h3>
        </div>

        <MobileTechStack
          categories={MOBILE_CATEGORIES}
          sectionTitle="AI Chatbot Technologies and Development Stack"
        />

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 pt-16 pb-8">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-end group z-10 hover:z-30 transition-[z-index]"
            >
              <div className="w-full flex justify-center">
                <FolderFloat
                  items={cat.folderItems}
                  label={cat.shortTitle}
                  trigger="hover"
                  physics={true}
                />
              </div>
              <p className="mt-4 text-center text-xs sm:text-sm text-neutral-600 font-medium max-w-xs">
                {cat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

