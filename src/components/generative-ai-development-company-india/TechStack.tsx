"use client";

import React from "react";
import FolderFloat from "@/components/ui/FolderFloat";
import MobileTechStack, {
  MobileTechCategory,
} from "@/components/ui/MobileTechStack";

const TECH_CATEGORIES = [
  {
    shortTitle: "Foundation Models",
    body: "OpenAI GPT · Anthropic Claude · Google Gemini · Meta Llama · Mistral · DeepSeek",
    folderItems: [
      "OpenAI GPT",
      "Anthropic Claude",
      "Google Gemini",
      "Meta Llama & Mistral",
    ],
  },
  {
    shortTitle: "Generative AI Frameworks",
    body: "LangChain · LangGraph · LlamaIndex · Hugging Face · AI SDKs",
    folderItems: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "Hugging Face & AI SDKs",
    ],
  },
  {
    shortTitle: "LLM and Model Development",
    body: "Python · PyTorch · Transformers · LoRA · QLoRA · Fine-Tuning · Prompt Engineering",
    folderItems: [
      "Python & PyTorch",
      "Transformers",
      "LoRA & QLoRA",
      "Fine-Tuning & Prompts",
    ],
  },
  {
    shortTitle: "RAG and Vector Databases",
    body: "Qdrant · Pinecone · Milvus · pgvector · PostgreSQL · Embeddings · Hybrid Search",
    folderItems: [
      "Qdrant & Pinecone",
      "Milvus & pgvector",
      "PostgreSQL",
      "Hybrid Search",
    ],
  },
  {
    shortTitle: "Application Development & Integration",
    body: "FastAPI · REST APIs · Node.js · Redis · Celery · WebSockets",
    folderItems: [
      "FastAPI & REST APIs",
      "Node.js",
      "Redis & Celery",
      "WebSockets",
    ],
  },
  {
    shortTitle: "Cloud and Infrastructure",
    body: "AWS · Microsoft Azure · Google Cloud · Docker · Kubernetes · Private Cloud · On-Premises Infrastructure",
    folderItems: [
      "AWS & Azure & GCP",
      "Docker & Kubernetes",
      "Private Cloud",
      "On-Premises",
    ],
  },
  {
    shortTitle: "AI Evaluation and Optimisation",
    body: "RAGAS · DeepEval · Model Evaluation · Structured Outputs · Model Routing · Guardrails · Observability",
    folderItems: [
      "RAGAS & DeepEval",
      "Model Routing",
      "Guardrails",
      "Observability",
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
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-8 sm:mb-14">
          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Technologies We Use for Generative AI Development
          </h4>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We select technologies based on the application architecture, model requirements, integration needs, security and deployment environment.
          </p>
        </div>

        {/* Mobile Tech Stack Explorer */}
        <MobileTechStack
          categories={MOBILE_CATEGORIES}
          sectionTitle="Technologies We Use for Generative AI Development"
        />

        {/* Desktop 7 Technology Categories Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-24 sm:gap-y-28 pt-16 sm:pt-20 pb-8">
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
              <h5 className="mt-4 text-sm font-bold text-[#12141a] text-center">
                {cat.shortTitle}
              </h5>
              <p className="mt-1 text-center text-xs sm:text-sm text-neutral-600 max-w-xs">
                {cat.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs sm:text-sm text-neutral-500 max-w-2xl mx-auto">
          Technology selection is based on the specific use case and is not restricted to a fixed technology stack.
        </p>
      </div>
    </section>
  );
}

