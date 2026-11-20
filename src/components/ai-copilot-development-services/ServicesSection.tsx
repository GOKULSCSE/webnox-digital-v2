"use client";

import React from "react";
import {
  Sparkles,
  Building2,
  Briefcase,
  Plug,
  Bot,
  BookOpen,
  Terminal,
  Database,
  Monitor,
  Lock,
  Zap,
  Cloud,
  ArrowRight,
} from "lucide-react";

const CORE_SERVICES = [
  {
    title: "01. Custom AI Copilot Development",
    description:
      "Our custom AI copilot development services in India connect directly to your daily business software, helping employees finish repetitive tasks faster without switching between multiple apps or tabs.",
    icon: <Sparkles className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "02. Enterprise AI Copilot Solutions",
    description:
      "Our enterprise AI copilot solutions in India search private company files, spreadsheets, and databases, delivering fast, truthful answers while following your team's existing employee document access permission rules.",
    icon: <Building2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "03. Domain-Specific AI Copilots",
    description:
      "We build domain specific AI copilots for sales, legal, engineering, and customer support, trained on your unique industry words, company guidelines, and approved daily enterprise operational manuals.",
    icon: <Briefcase className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "04. AI Copilot Integration Services",
    description:
      "Through expert AI copilot integration services in India, we connect custom assistants directly into Salesforce, HubSpot, SAP, Zendesk, Slack, Teams, and internal business databases using secure software APIs.",
    icon: <Plug className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "05. Agentic AI Copilot Development",
    description:
      "Through agentic AI copilot development India, we build smart assistants that break tough jobs into smaller steps, call external software tools, and update database records safely always.",
    icon: <Bot className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "06. Internal Knowledge AI Copilot",
    description:
      "Our internal knowledge AI copilot indexes company policies, training guides, and technical handbooks, helping new hires and senior staff find operational answers without asking busy managers.",
    icon: <BookOpen className="w-5 h-5 text-[#FF7230]" />,
  },
];

const ADVANCED_FRAMEWORKS = [
  {
    title: "01. Autonomous API Tool-Calling & Action Execution",
    description:
      "Our custom AI copilot development executes real work by calling external software APIs, updating sales records, creating customer invoices, and running daily tasks safely with human approval checks.",
    icon: <Terminal className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "02. Hallucination-Free RAG Search Grounding",
    description:
      "With RAG-powered AI copilot development, we anchor your assistant in verified company records, ensuring every answer comes directly from approved business files with zero guessing or made-up facts.",
    icon: <Database className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "03. Screen-Aware & Multimodal Workspace Context",
    description:
      "Our multimodal enterprise AI copilot solutions see on-screen software fields, open files and user actions, giving workers clear, step-by-step help based on what they are actively doing today.",
    icon: <Monitor className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "04. Identity-Governed Role-Based Access Controls",
    description:
      "Our secure enterprise AI copilot connects to company logins, making sure workers only search files they are cleared to view, keeping confidential payroll and executive records private always.",
    icon: <Lock className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "05. Smart Memory Caching & Cost Optimization",
    description:
      "Using smart memory caching and AI copilot cost optimization, we store repeated answers, giving your team instant replies under one second while cutting your ongoing monthly cloud bills.",
    icon: <Zap className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "06. Sovereign Private Cloud Copilot Hosting",
    description:
      "We provide private cloud AI copilot hosting inside your accounts on AWS, Azure, or Google Cloud, keeping your business records safe and never sharing data with public AI.",
    icon: <Cloud className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Core AI Copilot Development Services We Engineer
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            As a full lifecycle AI copilot development company in India, Webnox Digital delivers custom copilot solutions engineered to automate complex workplace tasks safely:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-[24px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mid-Section SaaS Alternative Callout */}
        <div className="my-16 sm:my-24 rounded-[28px] bg-[#160a04] text-white p-8 sm:p-10 lg:p-12 border border-[#FF7230]/25 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Stop Paying Monthly SaaS Fees: Build Your Custom AI Copilot
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Webnox Digital is an enterprise AI copilot development company. We connect smart AI directly into your daily software, helping your team get more work done in less time.
            </p>
            <p className="mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Our custom AI copilot development stops repetitive manual work. Using smart tool-calling and strict safety rules, we keep your business workflows fast, truthful and completely private.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_24px_rgba(255,114,48,0.28)]"
              style={{
                background:
                  "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
              }}
            >
              <span>Build Your Custom AI Copilot</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-neutral-200 hover:text-white text-sm font-medium px-6 py-3 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <span>Schedule an Architecture Call</span>
            </a>
          </div>
        </div>

        {/* Advanced Frameworks Sub-Section */}
        <div id="frameworks">
          <div className="max-w-4xl mb-10 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#12141a] leading-tight">
              Advanced Frameworks Powering Our AI Copilots
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ADVANCED_FRAMEWORKS.map((fw) => (
              <div
                key={fw.title}
                className="bg-white rounded-[24px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                  {fw.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#12141a] mb-3">
                  {fw.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {fw.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
