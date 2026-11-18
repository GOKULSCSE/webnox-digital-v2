"use client";

import React from "react";
import {
  Workflow,
  Sparkles,
  CheckCircle2,
  Bot,
  Database,
  Search,
  Terminal,
  FileCheck2,
  Server,
  Lock,
  ShieldCheck,
  Globe,
  MessageCircle,
  Smartphone,
  Users,
  Gauge,
} from "lucide-react";

/**
 * Custom 60fps Animated Visuals for the 6 Applied AI Consulting Bento Cards.
 * Uses keyframes from globals.css (no inline <style> tags) and mobile-safe heights.
 */

/* 1. AI Transformation Consulting (Wide 2-col, h-24) */
export const TransformationVisual: React.FC = () => (
  <div className="w-full h-24 flex items-center justify-center px-2 sm:px-4 overflow-hidden select-none pointer-events-none">
    <div className="w-full max-w-[440px] flex items-center justify-between gap-2 sm:gap-3">
      {/* Legacy Process */}
      <div className="w-11 h-11 rounded-2xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-neutral-500 flex-shrink-0">
        <Workflow className="w-5 h-5" />
      </div>

      {/* Beam 1 */}
      <div className="flex-1 h-1 rounded-full bg-neutral-200/80 relative overflow-hidden">
        <div
          className="w-10 h-full bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent"
          style={{ animation: "cbBeamFlow 2s linear infinite" }}
        />
      </div>

      {/* AI Transformation Core */}
      <div
        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white shadow-md flex items-center justify-center flex-shrink-0"
        style={{ animation: "cbNodeGlow 2.4s ease-in-out infinite" }}
      >
        <Sparkles className="w-5 h-5" />
      </div>

      {/* Beam 2 */}
      <div className="flex-1 h-1 rounded-full bg-neutral-200/80 relative overflow-hidden">
        <div
          className="w-10 h-full bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent"
          style={{ animation: "cbBeamFlow 2s linear 0.6s infinite" }}
        />
      </div>

      {/* Modernized Outcome */}
      <div className="w-11 h-11 rounded-2xl bg-[#fff7f2] border border-[#ff5e00]/35 shadow-xs flex items-center justify-center text-emerald-600 flex-shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>
    </div>
  </div>
);

/* 2. Applied AI Consulting & Multi-Agent Systems (Compact h-24 on mobile, Tall h-44 on lg) */
export const MultiAgentGraphVisual: React.FC = () => (
  <div className="w-full h-24 lg:h-44 flex items-center justify-center px-3 sm:px-4 overflow-hidden select-none pointer-events-none">
    {/* Mobile compact horizontal graph */}
    <div className="flex lg:hidden items-center justify-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-neutral-600">
        <Database className="w-4 h-4" />
      </div>
      <svg className="w-8 h-4" viewBox="0 0 32 16" fill="none">
        <path
          d="M0 8 H32"
          stroke="#ff5e00"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          style={{ animation: "cbDashFlow 1.4s linear infinite" }}
        />
      </svg>
      <div
        className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white shadow-md flex items-center justify-center"
        style={{ animation: "cbNodeGlow 2.2s ease-in-out infinite" }}
      >
        <Bot className="w-5 h-5" />
      </div>
      <svg className="w-8 h-4" viewBox="0 0 32 16" fill="none">
        <path
          d="M0 8 H32"
          stroke="#ff5e00"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          style={{ animation: "cbDashFlow 1.4s linear infinite" }}
        />
      </svg>
      <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-[#ff5e00]">
        <Terminal className="w-4 h-4" />
      </div>
    </div>

    {/* Desktop tall LangGraph / MCP DAG */}
    <div className="hidden lg:flex flex-col items-center justify-between w-full max-w-[230px] h-36 relative">
      {/* Supervisor Agent Node */}
      <div
        className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white shadow-lg flex items-center justify-center"
        style={{ animation: "cbNodeGlow 2.4s ease-in-out infinite" }}
      >
        <Bot className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse" />
      </div>

      {/* Animated SVG Branch Connectors */}
      <svg className="w-44 h-12 -my-1 overflow-visible" viewBox="0 0 176 48" fill="none">
        <path
          d="M88 0 C 88 22, 24 18, 24 48"
          stroke="#ff5e00"
          strokeOpacity="0.5"
          strokeWidth="1.7"
          strokeDasharray="4 4"
          style={{ animation: "cbDashFlow 1.6s linear infinite" }}
        />
        <path
          d="M88 0 V48"
          stroke="#ff5e00"
          strokeOpacity="0.6"
          strokeWidth="1.7"
          strokeDasharray="4 4"
          style={{ animation: "cbDashFlow 1.4s linear infinite" }}
        />
        <path
          d="M88 0 C 88 22, 152 18, 152 48"
          stroke="#ff5e00"
          strokeOpacity="0.5"
          strokeWidth="1.7"
          strokeDasharray="4 4"
          style={{ animation: "cbDashFlow 1.6s linear infinite" }}
        />
      </svg>

      {/* 3 Worker Agent Nodes */}
      <div className="w-full flex items-center justify-between px-1 relative z-10">
        <div
          className="w-10 h-10 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-700"
          style={{ animation: "cbFloatSoft 3.6s ease-in-out infinite" }}
        >
          <Database className="w-4 h-4" />
        </div>
        <div
          className="w-10 h-10 rounded-xl bg-[#fff7f2] border border-[#ff5e00]/35 shadow-sm flex items-center justify-center text-[#ff5e00]"
          style={{ animation: "cbFloatSoft 3.6s ease-in-out 0.3s infinite" }}
        >
          <Search className="w-4 h-4" />
        </div>
        <div
          className="w-10 h-10 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-700"
          style={{ animation: "cbFloatSoft 3.6s ease-in-out 0.6s infinite" }}
        >
          <Terminal className="w-4 h-4" />
        </div>
      </div>
    </div>
  </div>
);

/* 3. Enterprise RAG & Semantic Search Architectures (1x1, h-24) */
export const HybridRagVisual: React.FC = () => (
  <div className="w-full h-24 flex items-center justify-center px-3 overflow-hidden select-none pointer-events-none">
    <div className="w-full max-w-[230px] flex items-center justify-between gap-2.5">
      <div className="flex flex-col gap-1.5 w-16">
        <div className="h-2 rounded-full bg-[#ff5e00]/45" />
        <div className="h-2 rounded-full bg-neutral-300" />
        <div className="h-2 rounded-full bg-[#ff5e00]/30" />
      </div>
      <div className="flex-1 h-1 rounded-full bg-neutral-200 relative overflow-hidden">
        <div
          className="w-8 h-full bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent"
          style={{ animation: "cbBeamFlow 1.9s linear infinite" }}
        />
      </div>
      <div
        className="w-11 h-11 rounded-2xl bg-white border border-[#ff5e00]/35 shadow-sm flex items-center justify-center text-[#ff5e00]"
        style={{ animation: "cbNodeGlow 2.4s ease-in-out infinite" }}
      >
        <FileCheck2 className="w-5 h-5" />
      </div>
    </div>
  </div>
);

/* 4. Private Cloud & On-Premises LLM Hosting (1x1, h-24) */
export const PrivateCloudVisual: React.FC = () => (
  <div className="w-full h-24 flex items-center justify-center px-3 overflow-hidden select-none pointer-events-none">
    <div className="relative flex items-center justify-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-neutral-600">
        <Server className="w-4 h-4" />
      </div>
      <div
        className="relative w-12 h-12 rounded-2xl bg-neutral-900 text-white shadow-md flex items-center justify-center border border-[#ff5e00]/40"
        style={{ animation: "cbNodeGlow 2.4s ease-in-out infinite" }}
      >
        <Lock className="w-5 h-5 text-[#ff8935]" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse" />
      </div>
      <div className="w-9 h-9 rounded-xl bg-[#fff7f2] border border-[#ff5e00]/30 shadow-xs flex items-center justify-center text-[#ff5e00]">
        <ShieldCheck className="w-4 h-4" />
      </div>
    </div>
  </div>
);

/* 5. Omnichannel Conversational Agent Deployment (1x1, h-24) */
export const OmnichannelAgentVisual: React.FC = () => (
  <div className="w-full h-24 flex items-center justify-center px-2 overflow-hidden select-none pointer-events-none">
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <div className="flex flex-col gap-1.5">
        <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-neutral-600">
          <Globe className="w-3.5 h-3.5" />
        </div>
        <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-emerald-600">
          <MessageCircle className="w-3.5 h-3.5" />
        </div>
      </div>

      <svg className="w-8 h-10" viewBox="0 0 32 40" fill="none">
        <path
          d="M0 8 C 14 8, 18 20, 32 20"
          stroke="#ff5e00"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          style={{ animation: "cbDashFlow 1.5s linear infinite" }}
        />
        <path
          d="M0 32 C 14 32, 18 20, 32 20"
          stroke="#ff5e00"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          style={{ animation: "cbDashFlow 1.5s linear infinite" }}
        />
      </svg>

      <div
        className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white shadow-md flex items-center justify-center"
        style={{ animation: "cbNodeGlow 2.4s ease-in-out infinite" }}
      >
        <Bot className="w-5 h-5" />
      </div>

      <svg className="w-8 h-10" viewBox="0 0 32 40" fill="none">
        <path
          d="M0 20 C 14 20, 18 8, 32 8"
          stroke="#ff5e00"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          style={{ animation: "cbDashFlow 1.5s linear infinite" }}
        />
        <path
          d="M0 20 C 14 20, 18 32, 32 32"
          stroke="#ff5e00"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          style={{ animation: "cbDashFlow 1.5s linear infinite" }}
        />
      </svg>

      <div className="flex flex-col gap-1.5">
        <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-[#ff5e00]">
          <Smartphone className="w-3.5 h-3.5" />
        </div>
        <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-neutral-600">
          <Users className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  </div>
);

/* 6. Continuous Model Telemetry & Token Optimization (Wide 2-col, h-24) */
export const TelemetryTokenVisual: React.FC = () => (
  <div className="w-full h-24 flex items-center justify-center px-2 sm:px-4 overflow-hidden select-none pointer-events-none">
    <div className="w-full max-w-[440px] flex items-center justify-between gap-2 sm:gap-4">
      {/* Left: Live Latency & Token Telemetry Bars */}
      <div className="w-[42%] h-16 rounded-2xl bg-white border border-neutral-200/90 shadow-xs px-3.5 py-2.5 flex items-end gap-1.5">
        {[50, 82, 60, 95, 70, 88, 55, 92].map((h, i) => (
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

      {/* Center: Semantic Cache Beam */}
      <div className="flex-1 h-1 rounded-full bg-neutral-200/80 relative overflow-hidden">
        <div
          className="w-10 h-full bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent"
          style={{ animation: "cbBeamFlow 2.1s linear infinite" }}
        />
      </div>

      {/* Right: Optimized Token Burn Core */}
      <div className="w-[42%] h-16 rounded-2xl bg-[#fff7f2] border border-[#ff5e00]/30 shadow-xs px-3 flex items-center justify-center gap-3">
        <div
          className="w-9 h-9 rounded-xl bg-white border border-[#ff5e00]/30 flex items-center justify-center text-[#ff5e00] shadow-xs"
          style={{ animation: "cbFloatSoft 3.8s ease-in-out infinite" }}
        >
          <Gauge className="w-4 h-4" />
        </div>
        <div className="flex-1 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-[#ff5e00]/45" />
          <div className="h-1.5 w-2/3 rounded-full bg-emerald-500/50" />
        </div>
      </div>
    </div>
  </div>
);
