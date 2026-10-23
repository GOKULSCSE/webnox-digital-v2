"use client";

import React from "react";

/**
 * 100% Original, Abstract Animated Visuals for the 6 LLM Solution Bento Cards.
 * Strictly minimal: NO text, NO mock forms, NO mock chat lines.
 * Zero repetition from the AI service page — fresh, bespoke LLM architectures:
 *
 * 1. Enterprise Knowledge & RAG -> Isometric Vector Point Cloud & Planar Slice
 * 2. Intelligent Document Processing -> 3D Cascading Sheets & Neural Matrix Blocks
 * 3. AI Customer Support -> Conversational Dual-Helix with Alternating Token Rungs
 * 4. AI-Powered SaaS Products -> Hexagonal Neural Engine & Modular Tool Connectors
 * 5. AI Research & Synthesis -> Semantic Prism Refraction Beam
 * 6. Business Workflow Automation -> Multi-Lane Branching Logic Bus & Decision Mesh
 */

/* 1. Enterprise Knowledge Assistants: Isometric Vector Point Cloud & Planar Cosine Slice */
export const EnterpriseRagVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <svg className="w-full max-w-[280px] h-20" viewBox="0 0 280 80" fill="none">
        <defs>
          <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5e00" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#ff8935" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ff5e00" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5e00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff7230" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Isometric Bounding Box Frame (Dashed) */}
        <path
          d="M 140 12 L 205 30 L 140 48 L 75 30 Z"
          stroke="#fed7aa"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <path
          d="M 140 48 L 205 66 L 140 84 L 75 66 Z"
          stroke="#fed7aa"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.5"
        />
        <line x1="75" y1="30" x2="75" y2="66" stroke="#fed7aa" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="205" y1="30" x2="205" y2="66" stroke="#fed7aa" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <line x1="140" y1="48" x2="140" y2="84" stroke="#fed7aa" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

        {/* Sweeping Translucent Hyper-Plane (Cosine Similarity Scan) */}
        <polygon
          points="105,22 175,22 175,58 105,58"
          fill="url(#planeGrad)"
          stroke="#ff5e00"
          strokeWidth="1"
          strokeOpacity="0.4"
          className="animate-[pulse_3s_ease-in-out_infinite]"
        />

        {/* High-Dimensional Vector Nodes in 3D Space */}
        <circle cx="100" cy="28" r="3.5" fill="#ff7230" />
        <circle cx="160" cy="24" r="3" fill="#fdba74" />
        <circle cx="120" cy="38" r="4.5" fill="#ff5e00" className="animate-pulse" />
        <circle cx="120" cy="38" r="2" fill="#ffffff" />
        <circle cx="170" cy="42" r="3" fill="#ff8935" />
        <circle cx="85" cy="46" r="3" fill="#fdba74" />
        <circle cx="140" cy="48" r="5" fill="#ff5e00" />
        <circle cx="140" cy="48" r="2.5" fill="#ffffff" />
        <circle cx="110" cy="60" r="3.5" fill="#ff7230" />
        <circle cx="155" cy="58" r="4" fill="#ff5e00" />
        <circle cx="185" cy="52" r="3" fill="#fdba74" />

        {/* Coordinate Intersect Crosshairs */}
        <line x1="130" y1="48" x2="150" y2="48" stroke="#ff5e00" strokeWidth="1" />
        <line x1="140" y1="38" x2="140" y2="58" stroke="#ff5e00" strokeWidth="1" />
      </svg>
    </div>
  );
};

/* 2. Intelligent Document Processing: 3D Cascading Sheets & Neural Matrix Blocks (Tall Card) */
export const DocumentProcessingVisual: React.FC = () => {
  return (
    <div className="w-full h-44 sm:h-56 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <div className="relative w-44 h-40 sm:h-48 flex items-center justify-center">
        {/* Layer 3: Back Document Sheet (Angled Offset) */}
        <div className="absolute top-2 left-6 w-32 h-34 rounded-xl bg-orange-100/40 border border-orange-200/40 -rotate-6 transform transition-transform" />

        {/* Layer 2: Middle Document Sheet */}
        <div className="absolute top-5 left-8 w-32 h-34 rounded-xl bg-orange-50/60 border border-orange-200/60 rotate-2 shadow-xs flex flex-col p-3 gap-2">
          <div className="w-10 h-1.5 rounded-full bg-neutral-200" />
          <div className="w-20 h-1.5 rounded-full bg-neutral-200" />
        </div>

        {/* Layer 1: Front Active Sheet with Neural Matrix Blocks */}
        <div className="relative z-10 w-34 h-36 rounded-xl bg-white border border-orange-300/80 shadow-md p-3.5 flex flex-col justify-between">
          {/* Header Pip */}
          <div className="flex items-center justify-between pb-2 border-b border-orange-100">
            <div className="w-12 h-2 rounded-full bg-[#ff5e00]/70" />
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* 3x3 Neural Token Matrix Grid (Abstract feature embeddings) */}
          <div className="grid grid-cols-3 gap-1.5 py-1">
            <div className="h-3 rounded bg-orange-100/80 border border-orange-200 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            </div>
            <div className="h-3 rounded bg-neutral-100 border border-neutral-200" />
            <div className="h-3 rounded bg-orange-50 border border-orange-200/60" />

            <div className="h-3 rounded bg-neutral-100 border border-neutral-200" />
            <div className="h-3 rounded bg-orange-500 text-white flex items-center justify-center shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </div>
            <div className="h-3 rounded bg-orange-100/80 border border-orange-200" />

            <div className="h-3 rounded bg-orange-50 border border-orange-200/60" />
            <div className="h-3 rounded bg-neutral-100 border border-neutral-200" />
            <div className="h-3 rounded bg-orange-100/80 border border-orange-200 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            </div>
          </div>

          {/* Bottom Processing Lattice Bar */}
          <div className="flex items-center gap-1.5 pt-1.5 border-t border-orange-100">
            <div className="flex-1 h-1 rounded-full bg-neutral-200 overflow-hidden">
              <div className="w-2/3 h-full bg-[#ff5e00] rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
            </div>
            <div className="w-2 h-2 rounded-full bg-[#ff5e00]" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. AI Customer Support: Conversational Dual-Helix with Alternating Token Rungs */
export const CustomerSupportVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <svg className="w-full max-w-[240px] h-20" viewBox="0 0 240 70" fill="none">
        {/* Central Vertical Spine */}
        <line x1="120" y1="8" x2="120" y2="62" stroke="#fed7aa" strokeWidth="1.5" strokeDasharray="2 2" />

        {/* Alternating Conversational Rungs (User Query <-> Model Response Ping-Pong) */}
        {/* Rung 1: User side */}
        <line x1="80" y1="18" x2="120" y2="18" stroke="#ff8935" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="80" cy="18" r="4" fill="#ff8935" />
        <circle cx="80" cy="18" r="1.5" fill="#ffffff" />

        {/* Rung 2: LLM side */}
        <line x1="120" y1="28" x2="165" y2="28" stroke="#ff5e00" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="165" cy="28" r="4.5" fill="#ff5e00" />
        <circle cx="165" cy="28" r="2" fill="#ffffff" />

        {/* Rung 3: Convergence Nexus (Center Active Pulse) */}
        <line x1="95" y1="38" x2="145" y2="38" stroke="#ff5e00" strokeWidth="3" strokeLinecap="round" />
        <circle cx="120" cy="38" r="10" fill="#ff5e00" fillOpacity="0.18" className="animate-ping opacity-75" />
        <circle cx="120" cy="38" r="5" fill="#ff5e00" />
        <circle cx="120" cy="38" r="2" fill="#ffffff" />

        {/* Rung 4: User confirmation */}
        <line x1="75" y1="48" x2="120" y2="48" stroke="#ff8935" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="75" cy="48" r="4" fill="#ff8935" />
        <circle cx="75" cy="48" r="1.5" fill="#ffffff" />

        {/* Rung 5: Final Resolution */}
        <line x1="120" y1="58" x2="160" y2="58" stroke="#ff5e00" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="160" cy="58" r="4" fill="#ff5e00" />
        <circle cx="160" cy="58" r="1.5" fill="#ffffff" />

        {/* Helical Boundary Curves */}
        <path
          d="M 80 18 Q 120 28, 165 28 T 120 38 T 75 48 T 160 58"
          stroke="#ffedd5"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    </div>
  );
};

/* 4. AI-Powered SaaS Products: Hexagonal Neural Engine & Modular Tool Connectors */
export const SaasCopilotVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <svg className="w-full max-w-[240px] h-20" viewBox="0 0 240 70" fill="none">
        {/* Angled PCB Connectors from Center to Satellites */}
        <line x1="120" y1="35" x2="65" y2="20" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="120" y1="35" x2="65" y2="50" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="120" y1="35" x2="175" y2="20" stroke="#fed7aa" strokeWidth="1.5" />
        <line x1="120" y1="35" x2="175" y2="50" stroke="#fed7aa" strokeWidth="1.5" />

        {/* Satellite Module 1: Top-Left Diamond */}
        <rect
          x="58"
          y="13"
          width="14"
          height="14"
          rx="3"
          transform="rotate(45 65 20)"
          fill="#ffffff"
          stroke="#ff8935"
          strokeWidth="1.8"
        />
        <circle cx="65" cy="20" r="2" fill="#ff8935" />

        {/* Satellite Module 2: Bottom-Left Diamond */}
        <rect
          x="58"
          y="43"
          width="14"
          height="14"
          rx="3"
          transform="rotate(45 65 50)"
          fill="#ffffff"
          stroke="#fdba74"
          strokeWidth="1.5"
        />
        <circle cx="65" cy="50" r="2" fill="#fdba74" />

        {/* Satellite Module 3: Top-Right Diamond */}
        <rect
          x="168"
          y="13"
          width="14"
          height="14"
          rx="3"
          transform="rotate(45 175 20)"
          fill="#ffffff"
          stroke="#ff8935"
          strokeWidth="1.8"
        />
        <circle cx="175" cy="20" r="2" fill="#ff8935" />

        {/* Satellite Module 4: Bottom-Right Diamond */}
        <rect
          x="168"
          y="43"
          width="14"
          height="14"
          rx="3"
          transform="rotate(45 175 50)"
          fill="#ffffff"
          stroke="#fdba74"
          strokeWidth="1.5"
        />
        <circle cx="175" cy="50" r="2" fill="#fdba74" />

        {/* Center Hexagonal Engine Core */}
        <polygon
          points="120,20 133,27 133,43 120,50 107,43 107,27"
          fill="#ffffff"
          stroke="#ff5e00"
          strokeWidth="2.5"
          className="shadow-sm"
        />
        <polygon
          points="120,24 129,29 129,41 120,46 111,41 111,29"
          fill="#ff5e00"
          fillOpacity="0.15"
          className="animate-pulse"
        />
        <circle cx="120" cy="35" r="3.5" fill="#ff5e00" />
        <circle cx="120" cy="35" r="1.5" fill="#ffffff" />
      </svg>
    </div>
  );
};

/* 5. AI Research and Content Workflows: Semantic Prism Refraction Beam */
export const ResearchContentVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <svg className="w-full max-w-[240px] h-20" viewBox="0 0 240 70" fill="none">
        <defs>
          <linearGradient id="prismLaser" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5e00" />
            <stop offset="100%" stopColor="#ff8935" />
          </linearGradient>
        </defs>

        {/* 3 Incoming Research Streams (Left side) */}
        <line x1="30" y1="20" x2="105" y2="35" stroke="#fed7aa" strokeWidth="2" strokeDasharray="3 2" />
        <line x1="20" y1="35" x2="105" y2="35" stroke="#ff8935" strokeWidth="2" />
        <line x1="30" y1="50" x2="105" y2="35" stroke="#fed7aa" strokeWidth="2" strokeDasharray="3 2" />

        {/* Input stream origin emitters */}
        <circle cx="30" cy="20" r="3.5" fill="#fdba74" />
        <circle cx="20" cy="35" r="4.5" fill="#ff8935" />
        <circle cx="30" cy="50" r="3.5" fill="#fdba74" />

        {/* Central Geometric Prism (Diamond) */}
        <polygon
          points="115,18 130,35 115,52 100,35"
          fill="#ffffff"
          stroke="#ff5e00"
          strokeWidth="2.5"
          className="shadow-md"
        />
        <circle cx="115" cy="35" r="8" fill="#ff5e00" fillOpacity="0.2" className="animate-ping" />
        <circle cx="115" cy="35" r="3.5" fill="#ff5e00" />

        {/* Refracted Single Concentrated Coherent Beam (Right side) */}
        <line x1="130" y1="35" x2="215" y2="35" stroke="url(#prismLaser)" strokeWidth="3.5" strokeLinecap="round" />

        {/* Refined Synthesis Indicators (Dashes) */}
        <line x1="185" y1="26" x2="205" y2="26" stroke="#fed7aa" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="185" y1="44" x2="210" y2="44" stroke="#fed7aa" strokeWidth="1.8" strokeLinecap="round" />

        {/* Target Focal Point */}
        <circle cx="215" cy="35" r="5" fill="#ff5e00" />
        <circle cx="215" cy="35" r="2" fill="#ffffff" />
      </svg>
    </div>
  );
};

/* 6. Business Workflow Automation: Multi-Lane Branching Logic Bus (Wide Card) */
export const WorkflowAutomationVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <svg className="w-full max-w-[340px] h-20" viewBox="0 0 340 70" fill="none">
        {/* Main Center Bus Lane */}
        <line x1="30" y1="35" x2="310" y2="35" stroke="#fed7aa" strokeWidth="2" strokeDasharray="4 3" />

        {/* Upper Bypass Lane (Branching at 45°) */}
        <path
          d="M 70 35 L 90 20 L 220 20 L 240 35"
          stroke="#ffedd5"
          strokeWidth="1.8"
          fill="none"
        />

        {/* Lower Task Lane (Branching at 45°) */}
        <path
          d="M 120 35 L 140 50 L 260 50 L 280 35"
          stroke="#ffedd5"
          strokeWidth="1.8"
          fill="none"
        />

        {/* Node 1: Ingress Terminal */}
        <circle cx="30" cy="35" r="7" fill="#ffffff" stroke="#ff8935" strokeWidth="2" />
        <circle cx="30" cy="35" r="3" fill="#ff8935" />

        {/* Branch Point 1: Diamond Logic Gate */}
        <rect
          x="65"
          y="30"
          width="10"
          height="10"
          transform="rotate(45 70 35)"
          fill="#ffffff"
          stroke="#ff5e00"
          strokeWidth="2"
        />

        {/* Upper Bypass Satellite Pip */}
        <circle cx="155" cy="20" r="3.5" fill="#fdba74" />

        {/* Active Central Reasoning Core (Node 2) */}
        <circle cx="180" cy="35" r="14" fill="#ff5e00" fillOpacity="0.15" className="animate-ping opacity-60" />
        <circle cx="180" cy="35" r="9" fill="#ffffff" stroke="#ff5e00" strokeWidth="2.5" />
        <circle cx="180" cy="35" r="4" fill="#ff5e00" />

        {/* Lower Task Satellite Pip */}
        <circle cx="200" cy="50" r="3.5" fill="#fdba74" />

        {/* Branch Convergence Gate */}
        <rect
          x="235"
          y="30"
          width="10"
          height="10"
          transform="rotate(45 240 35)"
          fill="#ffffff"
          stroke="#ff5e00"
          strokeWidth="2"
        />

        {/* Final Execution Terminal (Node 3) */}
        <circle cx="310" cy="35" r="8" fill="#ffffff" stroke="#ff5e00" strokeWidth="2.5" />
        <circle cx="310" cy="35" r="4" fill="#ff5e00" />
        <circle cx="310" cy="35" r="1.5" fill="#ffffff" />
      </svg>
    </div>
  );
};
