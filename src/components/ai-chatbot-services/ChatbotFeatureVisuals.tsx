"use client";

import React from "react";
import { Bot, User, FileCheck2, MessageCircle, Database, Cloud, Webhook, Sparkles } from "lucide-react";

/**
 * Clean, minimal-text 60fps Animated Visuals for the 6 Intelligent AI Chatbot Bento Cards.
 * Sized to fit comfortably inside MagicBento's visual slot without overlapping labels or titles.
 */

const SharedStyles: React.FC = () => null;

/* 1. Natural Language Understanding (Wide 2-col, compact height) */
export const NluIntentVisual: React.FC = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center px-2 sm:px-4 select-none pointer-events-none">
      <SharedStyles />
      <div className="w-full max-w-[440px] flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Minimal Chat Input Skeleton */}
        <div
          className="w-[40%] sm:w-[38%] rounded-2xl bg-white border border-neutral-200/90 shadow-xs p-2.5 sm:p-3 space-y-2"
          style={{ animation: "cbFloatSoft 4s ease-in-out infinite" }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5e00]" />
            <div className="h-1.5 w-16 rounded-full bg-neutral-200" />
          </div>
          <div className="h-2 w-full rounded-full bg-neutral-100" />
          <div className="h-2 w-3/4 rounded-full bg-[#ff5e00]/25" />
        </div>

        {/* Center: Animated Signal Stream */}
        <div className="flex-1 flex items-center">
          <div className="w-full h-1 rounded-full bg-neutral-200/80 relative overflow-hidden">
            <div
              className="w-10 h-full bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent"
              style={{ animation: "cbBeamFlow 2s linear infinite" }}
            />
          </div>
        </div>

        {/* Right: 3 Clean Extracted Entity Nodes */}
        <div className="w-[38%] flex flex-col gap-2">
          <div className="flex items-center gap-2 rounded-xl bg-white border border-[#ff5e00]/30 px-3 py-1.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#ff5e00] animate-pulse" />
            <div className="h-2 w-14 rounded-full bg-neutral-800/80" />
            <div className="ml-auto h-2 w-6 rounded-full bg-emerald-500/30" />
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-[#fff7f2] border border-[#ff5e00]/25 px-3 py-1.5 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#ff5e00]" />
            <div className="h-2 w-20 rounded-full bg-[#ff5e00]/40" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Context-Aware AI Chatbot Conversations (Compact h-24 on mobile, Tall h-44 on lg) */
export const ContextMemoryVisual: React.FC = () => {
  return (
    <div className="w-full h-24 lg:h-44 flex items-center justify-center px-3 sm:px-4 overflow-hidden select-none pointer-events-none">
      <SharedStyles />
      <div className="w-full max-w-[240px] rounded-2xl bg-white border border-neutral-200/90 shadow-sm p-2.5 lg:p-3.5 flex flex-col gap-1.5 lg:gap-3 relative">
        {/* Subtle vertical memory thread */}
        <div className="hidden lg:block absolute left-6 top-7 bottom-9 w-px border-l border-dashed border-[#ff5e00]/35" />

        {/* Turn 1: User */}
        <div className="self-end w-[72%] rounded-xl rounded-tr-sm bg-neutral-900 p-1.5 lg:p-2.5 space-y-1 lg:space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-white/80" />
          <div className="hidden lg:block h-1.5 w-2/3 rounded-full bg-white/40" />
        </div>

        {/* Turn 2: Bot */}
        <div className="self-start w-[78%] rounded-xl rounded-tl-sm bg-[#fff7f2] border border-[#ff5e00]/25 p-1.5 lg:p-2.5 space-y-1 lg:space-y-1.5 relative z-10">
          <div className="h-1.5 w-full rounded-full bg-[#ff5e00]/45" />
          <div className="hidden lg:block h-1.5 w-4/5 rounded-full bg-neutral-300" />
        </div>

        {/* Turn 3: User (desktop tall card only) */}
        <div className="hidden lg:block self-end w-[62%] rounded-xl rounded-tr-sm bg-neutral-900 p-2.5">
          <div className="h-1.5 w-full rounded-full bg-[#ff8935]" />
        </div>

        {/* Turn 4: Bot Typing */}
        <div
          className="self-start inline-flex items-center gap-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 px-2.5 py-1 lg:px-3 lg:py-1.5 relative z-10"
          style={{ animation: "cbFloatSoft 3.5s ease-in-out infinite" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]"
            style={{ animation: "cbTypingDot 1.3s infinite 0ms" }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]"
            style={{ animation: "cbTypingDot 1.3s infinite 200ms" }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]"
            style={{ animation: "cbTypingDot 1.3s infinite 400ms" }}
          />
        </div>
      </div>
    </div>
  );
};

/* 3. Enterprise RAG & Knowledge Base Integration (1x1, compact h-24) */
export const RagKnowledgeVisual: React.FC = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center px-3 select-none pointer-events-none">
      <SharedStyles />
      <div className="relative w-36 h-20 flex items-center justify-center">
        {/* Back Document Card */}
        <div className="absolute w-24 h-16 rounded-xl bg-neutral-100 border border-neutral-200/80 -rotate-6 -translate-x-3 translate-y-1" />

        {/* Front Scanning Document Card */}
        <div className="relative w-28 h-16 rounded-xl bg-white border border-neutral-200/90 shadow-sm p-2.5 flex flex-col justify-between overflow-hidden">
          {/* Glowing Scan Line */}
          <div
            className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent shadow-[0_0_8px_#ff5e00]"
            style={{ animation: "cbScanSweep 2.8s ease-in-out infinite" }}
          />
          <div className="h-1.5 w-12 rounded-full bg-neutral-300" />
          <div className="h-1.5 w-full rounded-full bg-neutral-200" />
          <div className="h-1.5 w-4/5 rounded-full bg-[#ff5e00]/35" />
        </div>

        {/* Floating Verified Badge */}
        <div
          className="absolute -right-1 -top-1 w-7 h-7 rounded-full bg-white border border-[#ff5e00]/35 shadow-sm flex items-center justify-center text-[#ff5e00]"
          style={{ animation: "cbNodeGlow 2.4s ease-in-out infinite" }}
        >
          <FileCheck2 className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

/* 4. Multilingual & Indic AI Chatbot Support (1x1, compact h-24) */
export const IndicMultilingualVisual: React.FC = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center px-3 select-none pointer-events-none">
      <SharedStyles />
      <div className="flex items-center gap-2.5">
        {[
          { glyph: "En", active: false },
          { glyph: "हि", active: true },
          { glyph: "த", active: false },
          { glyph: "తె", active: true },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-bold border transition-all ${
              item.active
                ? "bg-[#fff7f2] border-[#ff5e00]/45 text-[#ff5e00] shadow-xs"
                : "bg-white border-neutral-200/90 text-neutral-600"
            }`}
            style={{
              animation: `cbFloatSoft ${3.2 + idx * 0.4}s ease-in-out ${idx * 0.25}s infinite`,
            }}
          >
            {item.glyph}
          </div>
        ))}
      </div>
    </div>
  );
};

/* 5. CRM, ERP & WhatsApp Chatbot Integration (1x1, compact h-24) */
export const OmnichannelSyncVisual: React.FC = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center px-2 sm:px-3 select-none pointer-events-none">
      <SharedStyles />
      <div className="relative flex items-center justify-center gap-2 sm:gap-4">
        {/* Left Icons */}
        <div className="flex flex-col gap-2">
          <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-emerald-600">
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
          <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-neutral-600">
            <Database className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* SVG Animated Connecting Lines */}
        <svg className="w-12 h-14 overflow-visible" viewBox="0 0 48 56" fill="none">
          <path
            d="M0 12 C 18 12, 24 28, 48 28"
            stroke="#ff5e00"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            style={{ animation: "cbDashFlow 1.6s linear infinite" }}
          />
          <path
            d="M0 44 C 18 44, 24 28, 48 28"
            stroke="#ff5e00"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            style={{ animation: "cbDashFlow 1.6s linear infinite" }}
          />
        </svg>

        {/* Central Bot Core */}
        <div
          className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white shadow-md flex items-center justify-center"
          style={{ animation: "cbNodeGlow 2.4s ease-in-out infinite" }}
        >
          <Bot className="w-5 h-5" />
        </div>

        {/* SVG Animated Connecting Lines Right */}
        <svg className="w-12 h-14 overflow-visible" viewBox="0 0 48 56" fill="none">
          <path
            d="M0 28 C 24 28, 30 12, 48 12"
            stroke="#ff5e00"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            style={{ animation: "cbDashFlow 1.6s linear infinite" }}
          />
          <path
            d="M0 28 C 24 28, 30 44, 48 44"
            stroke="#ff5e00"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            style={{ animation: "cbDashFlow 1.6s linear infinite" }}
          />
        </svg>

        {/* Right Icons */}
        <div className="flex flex-col gap-2">
          <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-[#ff5e00]">
            <Cloud className="w-3.5 h-3.5" />
          </div>
          <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-neutral-600">
            <Webhook className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* 6. Real-Time AI Analytics & Human Agent Handoff (Wide 2-col, compact height) */
export const AnalyticsHandoffVisual: React.FC = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center px-2 sm:px-4 select-none pointer-events-none">
      <SharedStyles />
      <div className="w-full max-w-[440px] flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Animated Equalizer Bars */}
        <div className="w-[42%] h-16 rounded-2xl bg-white border border-neutral-200/90 shadow-xs px-3.5 py-2.5 flex items-end gap-1.5">
          {[45, 78, 55, 92, 65, 85, 50, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-[#ff5e00] to-[#ff9852] origin-bottom"
              style={{
                height: `${h}%`,
                animation: `cbBarDance ${1.3 + (i % 4) * 0.25}s ease-in-out ${i * 0.1}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Center: Signal Pulse */}
        <div className="flex-1 h-1 rounded-full bg-neutral-200/80 relative overflow-hidden">
          <div
            className="w-10 h-full bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent"
            style={{ animation: "cbBeamFlow 2.2s linear infinite" }}
          />
        </div>

        {/* Right: Bot -> Human Agent Handoff Nodes */}
        <div className="w-[42%] h-16 rounded-2xl bg-[#fff7f2] border border-[#ff5e00]/30 shadow-xs px-3 flex items-center justify-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#ff5e00] shadow-xs">
            <Bot className="w-4 h-4" />
          </div>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]/60 animate-pulse" />
          </div>
          <div
            className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs"
            style={{ animation: "cbNodeGlow 2.4s ease-in-out infinite" }}
          >
            <User className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
