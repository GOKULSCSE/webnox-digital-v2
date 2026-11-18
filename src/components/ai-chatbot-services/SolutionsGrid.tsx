"use client";

import React from "react";
import MagicBento, { MagicBentoItem } from "@/components/ui/MagicBento";
import {
  BrainCircuit,
  MessageSquareText,
  Database,
  Languages,
  Workflow,
  Headset,
} from "lucide-react";
import {
  NluIntentVisual,
  ContextMemoryVisual,
  RagKnowledgeVisual,
  IndicMultilingualVisual,
  OmnichannelSyncVisual,
  AnalyticsHandoffVisual,
} from "./ChatbotFeatureVisuals";

const BENTO_CHATBOT_FEATURES: MagicBentoItem[] = [
  {
    id: "nlu-intent",
    label: "Intent & Entity Parsing",
    icon: <BrainCircuit className="w-4 h-4 text-[#ff5e00]" />,
    title: "01. Natural Language Understanding",
    description:
      "Our chatbots accurately interpret customer intent, identify key details like order numbers, and filter out common typos. This ensures your customers get fast, accurate answers even when their questions are incomplete or casual.",
    visual: <NluIntentVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "context-aware",
    label: "Multi-Turn Memory",
    icon: <MessageSquareText className="w-4 h-4 text-[#ff5e00]" />,
    title: "02. Context-Aware AI Chatbot Conversations",
    description:
      "The bot remembers past interactions and follows multi-step dialogues without losing track of user context. Customers can ask natural follow up questions and explore complex topics without ever having to repeat their previous answers.",
    visual: <ContextMemoryVisual />,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "enterprise-rag",
    label: "Cited Knowledge Base",
    icon: <Database className="w-4 h-4 text-[#ff5e00]" />,
    title: "03. Enterprise RAG & Knowledge Base Integration",
    description:
      "Your chatbot connects securely to internal company files, product manuals, cloud documents, and private relational databases. It dynamically pulls verified information and adds clear document citations so users can trust every single answer.",
    visual: <RagKnowledgeVisual />,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "multilingual-indic",
    label: "Indic & Hinglish Fluency",
    icon: <Languages className="w-4 h-4 text-[#ff5e00]" />,
    title: "04. Multilingual & Indic AI Chatbot Support",
    description:
      "Our conversational bots understand and respond fluently in English, Hindi, Tamil, Telugu, and mixed conversational Hinglish. This allows your business to deliver personal, accessible customer self-service to regional buyers across India completely effortlessly.",
    visual: <IndicMultilingualVisual />,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "crm-erp-whatsapp",
    label: "Omnichannel Sync",
    icon: <Workflow className="w-4 h-4 text-[#ff5e00]" />,
    title: "05. CRM, ERP & WhatsApp Chatbot Integration",
    description:
      "We integrate your chatbot into daily tools like WhatsApp, Zoho CRM, Salesforce, LeadSquared, and internal ERP systems. Your bot can update records, create support tickets, and check inventory without any manual human intervention.",
    visual: <OmnichannelSyncVisual />,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "analytics-handoff",
    label: "Sentiment & Escalation",
    icon: <Headset className="w-4 h-4 text-[#ff5e00]" />,
    title: "06. Real-Time AI Analytics & Human Agent Handoff",
    description:
      "Our system tracks conversation quality, sentiment, and user satisfaction while detecting when customer frustration occurs in real time. The chatbot instantly routes tricky threads to human agents, providing a full summary and context.",
    visual: <AnalyticsHandoffVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
];

export default function SolutionsGrid() {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      {/* Scoped Keyframes for Visual Animations */}
      <style>{`
        @keyframes laserScan {
          0%, 100% { top: 4%; opacity: 0.9; }
          50% { top: 88%; opacity: 1; }
        }
        @keyframes streamPulse {
          0% { transform: translateX(-100%); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateX(350%); opacity: 0; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            CORE CONVERSATIONAL CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Intelligent AI Chatbot Features Built to Automate Business Workflows
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Every custom AI chatbot we engineer combines natural language understanding, verified knowledge retrieval, Indic language fluency, and real-time CRM orchestration.
          </p>
        </div>

        {/* Dynamic Bento Grid with Asymmetrical Card Sizes (columns=3) */}
        <MagicBento
          items={BENTO_CHATBOT_FEATURES}
          columns={3}
          rowHeight={340}
          gap={22}
          radius={24}
          theme="light"
          glowColor="#ff5e00"
          enableBorderGlow={true}
          enableSpotlight={true}
          spotlightRadius={340}
          enableStars={false}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          textAutoHide={false}
          intro={true}
        />
      </div>
    </section>
  );
}
