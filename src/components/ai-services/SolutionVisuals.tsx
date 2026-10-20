"use client";

import React from "react";

/**
 * Minimalist, abstract, high-tech animated visuals for all 10 AI Solution Bento Cards.
 * Strictly minimal: NO text, NO mock forms, NO mock chat lines inside the animations.
 * Pure dynamic motion aesthetics in Webnox Solar Orange (#ff5e00) and Obsidian (#161616).
 */

/* 1. Customer Support Applications: Minimalist Harmonic Pulse Wave */
export const CustomerSupportVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      {/* Ambient background glow */}
      <div className="absolute w-28 h-28 rounded-full bg-[#ff5e00]/10 blur-xl animate-pulse" />

      {/* Harmonic Waveform Lines */}
      <svg className="w-full max-w-[260px] h-16" viewBox="0 0 260 60" fill="none">
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5e00" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#ff5e00" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff7230" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff7230" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff9a3d" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff5e00" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Primary undulation wave */}
        <path
          d="M10 30 Q 40 10, 75 30 T 140 30 T 205 30 T 250 30"
          stroke="url(#waveGrad1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-[pulse_3s_ease-in-out_infinite]"
        />

        {/* Secondary out-of-phase harmonic wave */}
        <path
          d="M10 30 Q 45 46, 80 30 T 145 30 T 210 30 T 250 30"
          stroke="url(#waveGrad2)"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="animate-[pulse_2.2s_ease-in-out_infinite]"
        />

        {/* Central glowing energy beacon */}
        <circle cx="130" cy="30" r="4.5" fill="#ff5e00" className="animate-ping opacity-75" />
        <circle cx="130" cy="30" r="3" fill="#ffffff" />
      </svg>
    </div>
  );
};

/* 2. Intelligent Document Processing: Minimal Holographic Laser Grid */
export const DocumentProcessingVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <div className="relative w-44 h-20 rounded-xl bg-orange-50/40 border border-orange-200/50 flex flex-col justify-around p-3 overflow-hidden shadow-sm">
        {/* Animated Laser Scanning Beam */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent animate-[scan_2.5s_ease-in-out_infinite]" />

        {/* Minimalist Data Structure Bars (Abstract, no text) */}
        <div className="w-2/3 h-2 rounded-full bg-orange-200/70" />
        <div className="w-full h-1.5 rounded-full bg-neutral-200/70" />
        <div className="w-4/5 h-1.5 rounded-full bg-neutral-200/60" />
        <div className="w-1/2 h-1.5 rounded-full bg-orange-300/60" />
      </div>
    </div>
  );
};

/* 3. AI Workflow Automation: Minimal Sequential Node Pipeline */
export const WorkflowAutomationVisual: React.FC = () => {
  return (
    <div className="w-full h-28 sm:h-36 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <svg className="w-full max-w-[280px] h-20" viewBox="0 0 280 60" fill="none">
        {/* Connecting circuit lines */}
        <line x1="40" y1="30" x2="110" y2="30" stroke="#fed7aa" strokeWidth="2" strokeDasharray="4 3" />
        <line x1="110" y1="30" x2="180" y2="30" stroke="#fed7aa" strokeWidth="2" strokeDasharray="4 3" />
        <line x1="180" y1="30" x2="245" y2="30" stroke="#fed7aa" strokeWidth="2" strokeDasharray="4 3" />

        {/* Node 1 */}
        <circle cx="40" cy="30" r="9" fill="#fff" stroke="#ff5e00" strokeWidth="2" />
        <circle cx="40" cy="30" r="4" fill="#ff5e00" />

        {/* Node 2 - Active Pulsing Node */}
        <circle cx="110" cy="30" r="14" fill="#ff5e00" fillOpacity="0.15" className="animate-ping opacity-60" />
        <circle cx="110" cy="30" r="10" fill="#fff" stroke="#ff5e00" strokeWidth="2.5" />
        <circle cx="110" cy="30" r="4.5" fill="#ff5e00" />

        {/* Node 3 */}
        <circle cx="180" cy="30" r="9" fill="#fff" stroke="#ff8935" strokeWidth="2" />
        <circle cx="180" cy="30" r="4" fill="#ff8935" />

        {/* Node 4 - End Target */}
        <circle cx="245" cy="30" r="9" fill="#fff" stroke="#fed7aa" strokeWidth="2" />
        <circle cx="245" cy="30" r="3.5" fill="#fdba74" />
      </svg>
    </div>
  );
};

/* 4. Enterprise Knowledge: Minimal Semantic Constellation Matrix */
export const EnterpriseKnowledgeVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <svg className="w-48 h-20" viewBox="0 0 190 80" fill="none">
        {/* Connecting constellation rays */}
        <line x1="95" y1="40" x2="35" y2="25" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="95" y1="40" x2="155" y2="25" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="95" y1="40" x2="55" y2="65" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="95" y1="40" x2="135" y2="65" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="35" y1="25" x2="55" y2="65" stroke="#ffedd5" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="155" y1="25" x2="135" y2="65" stroke="#ffedd5" strokeWidth="1" strokeDasharray="3 3" />

        {/* Outer Orbit Nodes */}
        <circle cx="35" cy="25" r="4.5" fill="#ff8935" />
        <circle cx="155" cy="25" r="4.5" fill="#ff8935" />
        <circle cx="55" cy="65" r="4" fill="#fdba74" />
        <circle cx="135" cy="65" r="4" fill="#fdba74" />

        {/* Central Core Vector Node */}
        <circle cx="95" cy="40" r="16" fill="#ff5e00" fillOpacity="0.12" className="animate-pulse" />
        <circle cx="95" cy="40" r="8" fill="#ff5e00" />
        <circle cx="95" cy="40" r="3" fill="#ffffff" />
      </svg>
    </div>
  );
};

/* 5. Business Analytics: Minimal Dynamic Trend Curve */
export const BusinessAnalyticsVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <svg className="w-full max-w-[260px] h-20" viewBox="0 0 260 70" fill="none">
        <defs>
          <linearGradient id="analyticsAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff5e00" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ff5e00" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <path
          d="M 15 55 Q 60 52, 100 42 T 180 30 T 245 15 L 245 65 L 15 65 Z"
          fill="url(#analyticsAreaGrad)"
        />

        {/* Glowing bezier trajectory curve */}
        <path
          d="M 15 55 Q 60 52, 100 42 T 180 30 T 245 15"
          stroke="#ff5e00"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Peak Forecast Anchor */}
        <circle cx="245" cy="15" r="6" fill="#ff5e00" fillOpacity="0.2" className="animate-ping" />
        <circle cx="245" cy="15" r="3.5" fill="#ff5e00" />
      </svg>
    </div>
  );
};

/* 6. AI Assistants & Copilots: Minimal Generative Energy Core */
export const AssistantsCopilotsVisual: React.FC = () => {
  return (
    <div className="w-full h-28 sm:h-36 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Concentric rotating ripple rings */}
        <div className="absolute inset-0 rounded-full border border-orange-300/40 animate-ping opacity-30" />
        <div className="absolute w-20 h-20 rounded-full border border-[#ff5e00]/30 animate-[spin_8s_linear_infinite]" />
        <div className="absolute w-14 h-14 rounded-full border border-[#ff7230]/40 animate-[spin_5s_linear_infinite_reverse]" />

        {/* Ambient Center Orb */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff5e00] to-[#ff8935] shadow-[0_0_18px_rgba(255,94,0,0.5)] flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
        </div>
      </div>
    </div>
  );
};

/* 7. Semantic Search Applications: Minimal Dynamic Radar Sweep */
export const SearchApplicationsVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <div className="relative w-24 h-24 rounded-full border border-orange-200/70 flex items-center justify-center">
        {/* Inner concentric range ring */}
        <div className="w-14 h-14 rounded-full border border-orange-200/50" />

        {/* 360-degree rotating radar beam */}
        <div
          className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(255,94,0,0.28) 360deg)",
          }}
        />

        {/* Discovered beacon nodes */}
        <div className="absolute top-4 right-5 w-2 h-2 rounded-full bg-[#ff5e00] animate-ping opacity-75" />
        <div className="absolute top-4 right-5 w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
        <div className="absolute bottom-6 left-5 w-1.5 h-1.5 rounded-full bg-[#ff8935]" />

        {/* Central origin */}
        <div className="w-2 h-2 rounded-full bg-[#ff5e00]" />
      </div>
    </div>
  );
};

/* 8. AI Agent Applications: Minimal Tri-Orbital Loop */
export const AgentApplicationsVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Elliptical Orbital Path */}
        <div className="w-20 h-20 rounded-full border border-dashed border-orange-300/60 animate-[spin_10s_linear_infinite]" />

        {/* Revolving Satellites */}
        <div className="absolute inset-0 animate-[spin_6s_linear_infinite]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5e00] absolute top-0 left-1/2 -translate-x-1/2 shadow-sm" />
        </div>
        <div className="absolute inset-0 animate-[spin_6s_linear_infinite_reverse]">
          <div className="w-2 h-2 rounded-full bg-[#ff8935] absolute bottom-1 right-2" />
        </div>

        {/* Central Core */}
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7230] shadow-[0_0_12px_rgba(255,94,0,0.4)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
};

/* 9. AI-Enabled SaaS: Minimal Tiered Service Plates */
export const SaaSEnabledVisual: React.FC = () => {
  return (
    <div className="w-full h-28 sm:h-36 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <div className="relative w-36 h-24 flex flex-col items-center justify-center gap-2">
        {/* Top Plate */}
        <div className="w-28 h-5 rounded-lg bg-orange-100/70 border border-orange-200/80 shadow-xs flex items-center justify-center">
          <div className="w-8 h-1 rounded-full bg-[#ff5e00]/60" />
        </div>

        {/* Vertical Data Beams */}
        <div className="w-[1px] h-3 bg-gradient-to-b from-[#ff5e00] to-[#ff8935] animate-pulse" />

        {/* Middle Plate (Active Core) */}
        <div className="w-32 h-6 rounded-lg bg-white border border-[#ff5e00]/40 shadow-sm flex items-center justify-between px-3">
          <div className="w-2 h-2 rounded-full bg-[#ff5e00] animate-ping opacity-75" />
          <div className="w-12 h-1.5 rounded-full bg-orange-200" />
          <div className="w-2 h-2 rounded-full bg-[#ff5e00]" />
        </div>

        {/* Vertical Data Beams */}
        <div className="w-[1px] h-3 bg-gradient-to-b from-[#ff8935] to-orange-200" />

        {/* Bottom Plate */}
        <div className="w-28 h-5 rounded-lg bg-orange-50/60 border border-orange-200/60 shadow-xs flex items-center justify-center">
          <div className="w-10 h-1 rounded-full bg-orange-300/60" />
        </div>
      </div>
    </div>
  );
};

/* 10. Multimodal AI: Minimal Dual Waveforms (Visual Spectrum & Audio Sine) */
export const MultimodalAIVisual: React.FC = () => {
  return (
    <div className="w-full h-28 sm:h-36 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      {/* Dynamic Soundwave Equalizer Bars (Pure Minimalist, No text) */}
      <div className="flex items-center gap-1.5 h-16">
        {[20, 36, 52, 28, 44, 58, 38, 22].map((height, i) => (
          <div
            key={i}
            className="w-1.5 rounded-full bg-gradient-to-t from-[#ff5e00] to-[#ff8935] animate-[pulse_1.8s_ease-in-out_infinite]"
            style={{
              height: `${height}px`,
              animationDelay: `${i * 0.16}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
