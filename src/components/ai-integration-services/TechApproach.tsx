"use client";

import React from "react";
import FolderFloat from "@/components/ui/FolderFloat";
import MobileTechStack, { MobileTechCategory } from "@/components/ui/MobileTechStack";
import { CheckCircle2 } from "lucide-react";

const TECH_ITEMS = [
  {
    lead: "Large Language Models (LLMs):",
    body: "Integrating language models for text understanding, generation and conversational applications.",
    shortTitle: "Large Language Models (LLMs)",
    folderItems: [
      "Text Understanding",
      "Content Generation",
      "Conversational AI",
      "Contextual Reasoning",
    ],
  },
  {
    lead: "AI APIs:",
    body: "Connecting AI services with existing applications and software platforms.",
    shortTitle: "AI APIs",
    folderItems: [
      "REST & GraphQL APIs",
      "Secure Gateways",
      "Service Connectors",
      "Real-Time Webhooks",
    ],
  },
  {
    lead: "Retrieval-Augmented Generation (RAG):",
    body: "Connecting language models with relevant business knowledge sources to provide context-based responses.",
    shortTitle: "Retrieval-Augmented Generation (RAG)",
    folderItems: [
      "Vector Embeddings",
      "Knowledge Retrieval",
      "Semantic Search",
      "Context Grounding",
    ],
  },
  {
    lead: "Machine Learning Models:",
    body: "Integrating predictive and classification capabilities into business applications.",
    shortTitle: "Machine Learning Models",
    folderItems: [
      "Predictive Models",
      "Data Classification",
      "Pattern Recognition",
      "Inference Pipelines",
    ],
  },
  {
    lead: "Data Integration:",
    body: "Connecting relevant data sources to support AI-powered processing and retrieval.",
    shortTitle: "Data Integration",
    folderItems: [
      "Database Connectors",
      "Data Pipelines",
      "Structured & Unstructured",
      "Real-Time Sync",
    ],
  },
  {
    lead: "Cloud and Application Integration:",
    body: "Connecting AI functionality with supported cloud environments and software applications.",
    shortTitle: "Cloud and Application Integration",
    folderItems: [
      "AWS & Azure & GCP",
      "Enterprise Software",
      "SaaS Platforms",
      "Hybrid Environments",
    ],
  },
];

const MOBILE_CATEGORIES: MobileTechCategory[] = TECH_ITEMS.map((item) => ({
  title: item.shortTitle,
  technologies: item.folderItems,
}));

export default function TechApproach() {
  return (
    <section
      id="technologies"
      className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a]">
            Technologies Behind Our AI Integration Services
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Successful AI integration requires more than connecting an AI model to an application. It involves selecting suitable technologies, establishing reliable communication and ensuring that integrated capabilities work within the existing business environment.
          </p>
          <p className="mt-5 text-[#12141a] font-bold text-sm sm:text-base md:text-lg">
            Our AI integration approach can involve:
          </p>
        </div>

        {/* Mobile Tech Stack Explorer (visible below md) */}
        <MobileTechStack
          categories={MOBILE_CATEGORIES}
          sectionTitle="Technologies Behind Our AI Integration Services"
        />

        {/* Desktop 6 Technology Categories Grid with FolderFloat (visible on md and up) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-24 sm:gap-y-32 pt-16 sm:pt-24 pb-12 sm:pb-16">
          {TECH_ITEMS.map((cat, idx) => (
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

        {/* Semantic Unordered List (<ul> / <li>) of the 6 Technology Approaches */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0 mt-6">
          {TECH_ITEMS.map((item) => (
            <li
              key={item.lead}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 hover:border-[#FF7230]/50 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-[#FF532B] shrink-0 mt-0.5" />
              <span className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                <strong className="font-bold text-neutral-900">
                  {item.lead}
                </strong>{" "}
                {item.body}
              </span>
            </li>
          ))}
        </ul>

        {/* Closing Note */}
        <div className="mt-10 bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-sm">
          <p className="text-neutral-700 text-sm sm:text-base font-medium leading-relaxed">
            Technology selection depends on the project&apos;s requirements, existing infrastructure, data availability and integration objectives.
          </p>
        </div>
      </div>
    </section>
  );
}
