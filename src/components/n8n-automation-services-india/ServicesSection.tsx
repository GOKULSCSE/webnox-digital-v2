"use client";

import React from "react";
import {
  Workflow,
  Bot,
  Brain,
  MessageSquare,
  Network,
  Server,
} from "lucide-react";

interface ServiceDetail {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  specs: {
    label: string;
    value: string;
  }[];
}

const N8N_SERVICES: ServiceDetail[] = [
  {
    number: "01",
    title: "1. Custom n8n Workflow Development",
    description:
      "Our n8n workflow development services help Indian businesses automate repetitive processes across departments and applications. We develop custom workflows using conditional logic, triggers, data transformation and application integrations.",
    icon: <Workflow className="w-5 h-5 text-[#FF7230]" />,
    specs: [
      {
        label: "Integrations",
        value:
          "CRM platforms, ERP systems, Tally Prime, spreadsheets, databases and third-party applications.",
      },
      {
        label: "Development",
        value:
          "Custom workflow logic, webhook triggers, JavaScript and Python processing, conditional branches and reusable sub-workflows.",
      },
      {
        label: "Deliverables",
        value:
          "Custom n8n workflows, JSON exports, integration documentation and workflow testing.",
      },
    ],
  },
  {
    number: "02",
    title: "2. n8n AI Agent Development",
    description:
      "Our n8n AI agent development services connect AI models with business applications to automate information processing, task execution and decision-support workflows.",
    icon: <Bot className="w-5 h-5 text-[#FF7230]" />,
    specs: [
      {
        label: "Integrations",
        value:
          "OpenAI, Anthropic Claude, Google Gemini, vector databases, internal knowledge bases and business APIs.",
      },
      {
        label: "Development",
        value:
          "AI agent orchestration, tool calling, structured outputs, Retrieval-Augmented Generation (RAG) and human approval workflows.",
      },
      {
        label: "Deliverables",
        value:
          "AI-powered n8n workflows, agent configurations, output validation and execution monitoring.",
      },
    ],
  },
  {
    number: "03",
    title: "3. n8n OpenAI and LLM Integration",
    description:
      "Our n8n OpenAI integration and LLM integration services connect large language models with existing business applications and workflows. These integrations support automated content processing, information extraction, document classification and AI-assisted business operations.",
    icon: <Brain className="w-5 h-5 text-[#FF7230]" />,
    specs: [
      {
        label: "Integrations",
        value:
          "OpenAI GPT models, Anthropic Claude, Google Gemini and compatible self-hosted language models.",
      },
      {
        label: "Development",
        value:
          "API configuration, prompt engineering, model selection, structured JSON responses and fallback handling.",
      },
      {
        label: "Deliverables",
        value:
          "LLM-integrated workflows, reusable prompt configurations, model connections and integration testing.",
      },
    ],
  },
  {
    number: "04",
    title: "4. n8n Chatbot and WhatsApp Automation",
    description:
      "Our n8n chatbot integration services connect messaging platforms and conversational interfaces with business applications. We develop automated communication workflows to manage customer enquiries, route messages and support customer service operations.",
    icon: <MessageSquare className="w-5 h-5 text-[#FF7230]" />,
    specs: [
      {
        label: "Integrations",
        value:
          "WhatsApp Business Platform, Telegram, website chat, Slack and Microsoft Teams.",
      },
      {
        label: "Development",
        value:
          "Automated query routing, customer data retrieval, conversation management, message triggers and human handover.",
      },
      {
        label: "Deliverables",
        value:
          "Chatbot integrations, WhatsApp automation workflows, notification systems and CRM connectivity.",
      },
    ],
  },
  {
    number: "05",
    title: "5. n8n API and Business Software Integration",
    description:
      "Our n8n API integration services in India connect business applications, databases and third-party platforms to support automated data exchange. We configure integrations based on the APIs and connectivity options available within your existing software environment.",
    icon: <Network className="w-5 h-5 text-[#FF7230]" />,
    specs: [
      {
        label: "Integrations",
        value:
          "Salesforce, HubSpot, Zoho CRM, Shopify, Razorpay, Tally Prime, Odoo and SAP.",
      },
      {
        label: "Development",
        value:
          "REST API and webhook integrations, authentication, data mapping, pagination, synchronization and error handling.",
      },
      {
        label: "Deliverables",
        value:
          "Custom API workflows, connector configurations, integration documentation and data validation.",
      },
    ],
  },
  {
    number: "06",
    title: "6. n8n Self-Hosted Setup and Deployment",
    description:
      "Our n8n self-hosted setup and deployment services help Indian businesses run automation workflows on their preferred cloud or on-premises infrastructure. We configure the deployment environment to support workflow execution, infrastructure management and operational requirements.",
    icon: <Server className="w-5 h-5 text-[#FF7230]" />,
    specs: [
      {
        label: "Platforms",
        value:
          "AWS, Microsoft Azure, Google Cloud, DigitalOcean and on-premises Linux servers.",
      },
      {
        label: "Deployment",
        value:
          "Docker installation, PostgreSQL configuration, Redis Queue Mode, worker management and environment setup where required.",
      },
      {
        label: "Deliverables",
        value:
          "n8n deployment configuration, infrastructure setup, backup procedures, security configurations and technical documentation.",
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-[#FF7230]/[0.05] blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            n8n Development Services for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              Indian Businesses
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Webnox Digital provides n8n development services in India to help businesses automate operations, integrate AI models and connect existing software applications. Our services cover custom workflow development, AI agent development, API integration, chatbot automation and self-hosted deployment.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {N8N_SERVICES.map((service) => (
            <div
              key={service.number}
              className="rounded-[26px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-white/10">
                {service.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3.5"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF7230] mb-1">
                      {spec.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

