"use client";

import React from "react";
import {
  Database,
  FileText,
  FileCheck2,
  MessageSquare,
  Sparkles,
  Search,
  Layers,
  Zap,
  Bot,
  Workflow,
  CheckCircle2,
} from "lucide-react";

/**
 * Clean, minimal-text 60fps Animated Visuals for the 6 LLM Solution Bento Cards.
 * Mobile-safe heights (h-24 on 1x1 / wide cards, h-24 lg:h-44 on tall card #2).
 */

const StyleTag: React.FC = () => null;

/* 1. Enterprise Knowledge Assistants (Wide 2-col, h-24) */
export const EnterpriseRagVisual: React.FC = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center px-2 sm:px-4 overflow-hidden select-none pointer-events-none">
      <StyleTag />
      <div className="w-full max-w-[440px] flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Knowledge Base Stack */}
        <div
          className="w-[38%] rounded-2xl bg-white border border-neutral-200/90 shadow-xs p-2.5 sm:p-3 flex items-center gap-2.5"
          style={{ animation: "llmFloatSoft 4s ease-in-out infinite" }}
        >
          <div className="w-8 h-8 rounded-xl bg-[#fff7f2] border border-[#ff5e00]/30 flex items-center justify-center text-[#ff5e00] flex-shrink-0">
            <Database className="w-4 h-4" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-neutral-300" />
            <div className="h-1.5 w-3/4 rounded-full bg-neutral-200" />
          </div>
        </div>

        {/* Center: Retrieval Signal Beam */}
        <div className="flex-1 h-1 rounded-full bg-neutral-200/80 relative overflow-hidden">
          <div
            className="w-10 h-full bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent"
            style={{ animation: "llmBeamFlow 2s linear infinite" }}
          />
        </div>

        {/* Right: Verified Cited Response */}
        <div className="w-[38%] rounded-2xl bg-[#fff7f2] border border-[#ff5e00]/30 shadow-xs p-2.5 sm:p-3 flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-xl bg-white border border-[#ff5e00]/30 flex items-center justify-center text-[#ff5e00] flex-shrink-0"
            style={{ animation: "llmNodeGlow 2.4s ease-in-out infinite" }}
          >
            <FileCheck2 className="w-4 h-4" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-[#ff5e00]/50" />
            <div className="h-1.5 w-2/3 rounded-full bg-emerald-500/40" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Intelligent Document Processing (Compact h-24 on mobile, Tall h-44 on lg) */
export const DocumentProcessingVisual: React.FC = () => {
  return (
    <div className="w-full h-24 lg:h-44 flex items-center justify-center px-3 sm:px-4 overflow-hidden select-none pointer-events-none">
      <StyleTag />
      <div className="relative w-full max-w-[230px] h-20 lg:h-36 rounded-2xl bg-white border border-neutral-200/90 shadow-sm p-3 lg:p-4 flex flex-col justify-between overflow-hidden">
        {/* Sweeping OCR Laser Line */}
        <div
          className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent shadow-[0_0_10px_#ff5e00] z-10"
          style={{ animation: "llmScanSweep 2.8s ease-in-out infinite" }}
        />

        {/* Top Header Skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#ff5e00]" />
            <div className="h-1.5 w-14 rounded-full bg-neutral-300" />
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Middle Matrix Cells */}
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-2.5 lg:h-3.5 rounded-md border border-[#ff5e00]/20"
              style={{
                animation: `llmCellPulse ${2.2 + (i % 3) * 0.4}s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Bottom Extracted Output Bar (visible on lg) */}
        <div className="hidden lg:flex items-center justify-between pt-2 border-t border-neutral-100">
          <div className="h-2 w-24 rounded-full bg-[#ff5e00]/35" />
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
        </div>
      </div>
    </div>
  );
};

/* 3. AI Customer Support Applications (1x1, h-24) */
export const CustomerSupportVisual: React.FC = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center px-3 overflow-hidden select-none pointer-events-none">
      <StyleTag />
      <div className="w-full max-w-[230px] flex flex-col gap-2">
        <div className="self-end w-[70%] rounded-xl rounded-tr-sm bg-neutral-900 px-3 py-2 flex items-center gap-2">
          <div className="h-1.5 w-full rounded-full bg-white/75" />
        </div>
        <div
          className="self-start w-[82%] rounded-xl rounded-tl-sm bg-[#fff7f2] border border-[#ff5e00]/30 px-3 py-2 flex items-center gap-2 shadow-xs"
          style={{ animation: "llmFloatSoft 3.8s ease-in-out infinite" }}
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#ff5e00] flex-shrink-0" />
          <div className="h-1.5 w-full rounded-full bg-[#ff5e00]/45" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

/* 4. AI-Powered SaaS Products (1x1, h-24) */
export const SaasCopilotVisual: React.FC = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center px-2 overflow-hidden select-none pointer-events-none">
      <StyleTag />
      <div className="flex items-center justify-center gap-2.5 sm:gap-3.5">
        <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-neutral-600">
          <Search className="w-3.5 h-3.5" />
        </div>
        <svg className="w-7 h-4" viewBox="0 0 28 16" fill="none">
          <path
            d="M0 8 H28"
            stroke="#ff5e00"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            style={{ animation: "llmDashFlow 1.4s linear infinite" }}
          />
        </svg>
        <div
          className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white shadow-md flex items-center justify-center"
          style={{ animation: "llmNodeGlow 2.4s ease-in-out infinite" }}
        >
          <Sparkles className="w-5 h-5" />
        </div>
        <svg className="w-7 h-4" viewBox="0 0 28 16" fill="none">
          <path
            d="M0 8 H28"
            stroke="#ff5e00"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            style={{ animation: "llmDashFlow 1.4s linear infinite" }}
          />
        </svg>
        <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-[#ff5e00]">
          <Layers className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

/* 5. AI Research and Content Workflows (1x1, h-24) */
export const ResearchContentVisual: React.FC = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center px-3 overflow-hidden select-none pointer-events-none">
      <StyleTag />
      <div className="w-full max-w-[230px] flex items-center justify-between gap-2.5">
        <div className="flex flex-col gap-1.5 w-14">
          <div className="h-2 rounded-full bg-neutral-300" />
          <div className="h-2 rounded-full bg-[#ff5e00]/40" />
          <div className="h-2 rounded-full bg-neutral-300" />
        </div>
        <div className="flex-1 h-1 rounded-full bg-neutral-200 relative overflow-hidden">
          <div
            className="w-8 h-full bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent"
            style={{ animation: "llmBeamFlow 1.9s linear infinite" }}
          />
        </div>
        <div
          className="w-12 h-12 rounded-2xl bg-white border border-[#ff5e00]/35 shadow-sm flex items-center justify-center text-[#ff5e00]"
          style={{ animation: "llmFloatSoft 3.8s ease-in-out infinite" }}
        >
          <Zap className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

/* 6. Business Workflow Automation (Wide 2-col, h-24) */
export const WorkflowAutomationVisual: React.FC = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center px-2 sm:px-4 overflow-hidden select-none pointer-events-none">
      <StyleTag />
      <div className="w-full max-w-[440px] flex items-center justify-between gap-2 sm:gap-3">
        {/* Node 1: Trigger */}
        <div className="w-10 h-10 rounded-2xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-neutral-700 flex-shrink-0">
          <Workflow className="w-4 h-4" />
        </div>

        {/* Stream 1 */}
        <div className="flex-1 h-1 rounded-full bg-neutral-200/80 relative overflow-hidden">
          <div
            className="w-10 h-full bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent"
            style={{ animation: "llmBeamFlow 2s linear infinite" }}
          />
        </div>

        {/* Node 2: Central LLM Agent */}
        <div
          className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white shadow-md flex items-center justify-center flex-shrink-0"
          style={{ animation: "llmNodeGlow 2.4s ease-in-out infinite" }}
        >
          <Bot className="w-5 h-5" />
        </div>

        {/* Stream 2 */}
        <div className="flex-1 h-1 rounded-full bg-neutral-200/80 relative overflow-hidden">
          <div
            className="w-10 h-full bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent"
            style={{ animation: "llmBeamFlow 2s linear 0.6s infinite" }}
          />
        </div>

        {/* Node 3: Completed Task */}
        <div className="w-10 h-10 rounded-2xl bg-[#fff7f2] border border-[#ff5e00]/35 shadow-xs flex items-center justify-center text-emerald-600 flex-shrink-0">
          <CheckCircle2 className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
