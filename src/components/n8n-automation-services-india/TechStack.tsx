"use client";

import React from "react";
import FolderFloat from "@/components/ui/FolderFloat";
import MobileTechStack, {
  MobileTechCategory,
} from "@/components/ui/MobileTechStack";

const TECH_CATEGORIES = [
  {
    shortTitle: "Automation Platforms",
    body: "n8n, Zapier, Make",
    folderItems: ["n8n", "Zapier", "Make"],
  },
  {
    shortTitle: "Programming & Development",
    body: "JavaScript, Python, Node.js",
    folderItems: ["JavaScript", "Python", "Node.js"],
  },
  {
    shortTitle: "AI & LLM Integration",
    body: "OpenAI, Claude, Google Gemini, LangChain",
    folderItems: ["OpenAI", "Claude", "Google Gemini", "LangChain"],
  },
  {
    shortTitle: "Databases",
    body: "PostgreSQL, MySQL, MongoDB, Redis",
    folderItems: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    shortTitle: "Cloud & Deployment",
    body: "AWS, Azure, Google Cloud, Docker",
    folderItems: ["AWS", "Azure", "Google Cloud", "Docker"],
  },
  {
    shortTitle: "Business Application Integration",
    body: "Zoho, Salesforce, HubSpot, Tally Prime, SAP, Shopify, Razorpay",
    folderItems: [
      "Zoho & Salesforce",
      "HubSpot",
      "Tally Prime & SAP",
      "Shopify & Razorpay",
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Technology Stack for n8n Workflow Automation Services
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We use modern automation, development, AI and cloud technologies to deliver n8n automation services in India, including custom workflow development, AI agent integration, API connectivity and self-hosted deployment.
          </p>
        </div>

        {/* Mobile Tech Stack Explorer (visible below md) */}
        <MobileTechStack
          categories={MOBILE_CATEGORIES}
          sectionTitle="Technology Stack for n8n Workflow Automation Services"
        />

        {/* Desktop 6 Technology Categories Grid with FolderFloat (visible on md and up) */}
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

