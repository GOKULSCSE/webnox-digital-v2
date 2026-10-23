"use client";

import React from "react";

/**
 * 100% Original, Abstract Animated Visuals for the 6 LLM Solution Bento Cards.
 * Truly dynamic, continuous 60fps animations:
 *
 * 1. Enterprise Knowledge & RAG -> Continuous 3D Isometric Plane Scanner & Floating Vector Particles
 * 2. Intelligent Document Processing -> Active OCR Laser Beam Scanner & Sequential Neural Token Matrix
 * 3. AI Customer Support -> Conversational Token Flow Streams & Multi-Ring Nexus Pulse
 * 4. AI-Powered SaaS Products -> Hexagonal Energy Core with Inbound Connector Particle Flow
 * 5. AI Research & Synthesis -> Tri-Stream Laser Ingress & High-Velocity Prism Refraction Beam
 * 6. Business Workflow Automation -> Multi-Lane Packet Routing with Divergent Decision Branches
 */

// Embedded shared styles for fluid keyframe animations
const StyleTag: React.FC = () => (
  <style>{`
    @keyframes ragScanSweep {
      0% { transform: translateY(-8px); opacity: 0.85; }
      50% { transform: translateY(22px); opacity: 0.35; }
      100% { transform: translateY(-8px); opacity: 0.85; }
    }
    @keyframes ocrBeamSweep {
      0% { top: 8%; opacity: 0; }
      15% { opacity: 1; }
      85% { opacity: 1; }
      100% { top: 88%; opacity: 0; }
    }
    @keyframes tokenPacketRight {
      0% { transform: translateX(0px); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translateX(85px); opacity: 0; }
    }
    @keyframes tokenPacketLeft {
      0% { transform: translateX(0px); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translateX(-85px); opacity: 0; }
    }
    @keyframes nexusRing {
      0% { r: 5px; opacity: 0.8; }
      100% { r: 24px; opacity: 0; }
    }
    @keyframes dashCycle {
      to { stroke-dashoffset: -32; }
    }
    @keyframes dashCycleReverse {
      to { stroke-dashoffset: 32; }
    }
    @keyframes hexCorePulse {
      0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(255,94,0,0.3)); }
      50% { transform: scale(1.12); filter: drop-shadow(0 0 14px rgba(255,94,0,0.8)); }
    }
    @keyframes floatSlight {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-4px); }
    }
    @keyframes floatSlightRotate {
      0%, 100% { transform: translateY(0px) rotate(-6deg); }
      50% { transform: translateY(-3px) rotate(-4deg); }
    }
    @keyframes laserPulseShot {
      0% { transform: translateX(0px); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translateX(85px); opacity: 0; }
    }
    @keyframes busFlow {
      0% { transform: translateX(0px); opacity: 0; }
      15% { opacity: 1; }
      85% { opacity: 1; }
      100% { transform: translateX(270px); opacity: 0; }
    }
    @keyframes upperBranchFlow {
      0% { transform: translate(0px, 0px); opacity: 0; }
      15% { opacity: 1; }
      50% { transform: translate(75px, -15px); opacity: 1; }
      85% { opacity: 1; }
      100% { transform: translate(160px, 0px); opacity: 0; }
    }
    @keyframes lowerBranchFlow {
      0% { transform: translate(0px, 0px); opacity: 0; }
      15% { opacity: 1; }
      50% { transform: translate(70px, 15px); opacity: 1; }
      85% { opacity: 1; }
      100% { transform: translate(150px, 0px); opacity: 0; }
    }
    @keyframes confidenceFill {
      0% { width: 32%; }
      50% { width: 92%; }
      100% { width: 32%; }
    }
    @keyframes matrixCell1 {
      0%, 100% { background-color: rgba(255, 94, 0, 0.15); }
      50% { background-color: #ff5e00; box-shadow: 0 0 8px rgba(255, 94, 0, 0.7); }
    }
    @keyframes matrixCell2 {
      0%, 100% { background-color: #ff5e00; box-shadow: 0 0 8px rgba(255, 94, 0, 0.7); }
      50% { background-color: rgba(255, 94, 0, 0.15); }
    }
  `}</style>
);

/* 1. Enterprise Knowledge Assistants: Isometric Vector Point Cloud & Planar Cosine Slice */
export const EnterpriseRagVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <StyleTag />
      <svg className="w-full max-w-[280px] h-20" viewBox="0 0 280 80" fill="none">
        <defs>
          <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5e00" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#ff8935" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ff5e00" stopOpacity="0.05" />
          </linearGradient>
          <filter id="glowRag" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Isometric Bounding Box Frame (Dashed Animated Cycle) */}
        <g style={{ animation: "dashCycle 14s linear infinite" }}>
          <path
            d="M 140 12 L 205 30 L 140 48 L 75 30 Z"
            stroke="#fdba74"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />
          <path
            d="M 140 48 L 205 66 L 140 84 L 75 66 Z"
            stroke="#fdba74"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            opacity="0.6"
          />
          <line x1="75" y1="30" x2="75" y2="66" stroke="#fdba74" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.6" />
          <line x1="205" y1="30" x2="205" y2="66" stroke="#fdba74" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.6" />
          <line x1="140" y1="48" x2="140" y2="84" stroke="#fdba74" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.6" />
        </g>

        {/* Sweeping Translucent Hyper-Plane (Continuous Cosine Similarity Radar Scan) */}
        <g style={{ animation: "ragScanSweep 3.5s ease-in-out infinite" }}>
          <polygon
            points="95,28 185,28 185,54 95,54"
            fill="url(#planeGrad)"
            stroke="#ff5e00"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
          {/* Glowing laser edge line on scanner plane */}
          <line x1="95" y1="41" x2="185" y2="41" stroke="#ff5e00" strokeWidth="1.5" filter="url(#glowRag)" />
        </g>

        {/* High-Dimensional Vector Nodes in 3D Space */}
        <circle cx="100" cy="28" r="3.5" fill="#ff7230" />
        <circle cx="160" cy="24" r="3" fill="#fdba74" />
        
        {/* Active Retrieved Vector Node (Pulsing Target) */}
        <g transform="translate(120, 38)">
          <circle cx="0" cy="0" r="10" fill="#ff5e00" fillOpacity="0.2" className="animate-ping" />
          <circle cx="0" cy="0" r="5" fill="#ff5e00" />
          <circle cx="0" cy="0" r="2.2" fill="#ffffff" />
        </g>

        <circle cx="170" cy="42" r="3" fill="#ff8935" />
        <circle cx="85" cy="46" r="3" fill="#fdba74" />
        
        {/* Coordinate Intersect Crosshairs with subtle rotation */}
        <g transform="translate(140, 48)">
          <circle cx="0" cy="0" r="5" fill="#ff5e00" />
          <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
          <line x1="-10" y1="0" x2="10" y2="0" stroke="#ff5e00" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="0" y1="-10" x2="0" y2="10" stroke="#ff5e00" strokeWidth="1" strokeDasharray="2 1" />
        </g>

        <circle cx="110" cy="60" r="3.5" fill="#ff7230" />
        <circle cx="155" cy="58" r="4" fill="#ff5e00" />
        <circle cx="185" cy="52" r="3" fill="#fdba74" />

        {/* Orbiting Laser Particle */}
        <circle cx="140" cy="30" r="2" fill="#ff5e00">
          <animateMotion
            path="M 0 0 L 65 18 L 0 36 L -65 18 Z"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

/* 2. Intelligent Document Processing: 3D Cascading Sheets & Continuous OCR Laser Scanner */
export const DocumentProcessingVisual: React.FC = () => {
  return (
    <div className="w-full h-44 sm:h-56 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <StyleTag />
      <div className="relative w-44 h-40 sm:h-48 flex items-center justify-center">
        {/* Layer 3: Back Document Sheet (Angled Offset with Float) */}
        <div
          className="absolute top-2 left-6 w-32 h-34 rounded-xl bg-orange-100/50 border border-orange-200/50 shadow-xs"
          style={{ animation: "floatSlightRotate 4s ease-in-out infinite" }}
        />

        {/* Layer 2: Middle Document Sheet */}
        <div
          className="absolute top-5 left-8 w-32 h-34 rounded-xl bg-orange-50/70 border border-orange-200/70 rotate-2 shadow-xs flex flex-col p-3 gap-2"
          style={{ animation: "floatSlight 3.5s ease-in-out infinite 0.5s" }}
        >
          <div className="w-10 h-1.5 rounded-full bg-neutral-200" />
          <div className="w-20 h-1.5 rounded-full bg-neutral-200" />
        </div>

        {/* Layer 1: Front Active Sheet with Continuous OCR Laser Beam Scanner */}
        <div className="relative z-10 w-36 h-38 rounded-xl bg-white border border-orange-300 shadow-md p-3.5 flex flex-col justify-between overflow-hidden">
          {/* Continuous Glowing OCR Laser Scan Line */}
          <div
            className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent shadow-[0_0_10px_#ff5e00] pointer-events-none z-20"
            style={{ animation: "ocrBeamSweep 2.8s ease-in-out infinite" }}
          />

          {/* Header Pip */}
          <div className="flex items-center justify-between pb-2 border-b border-orange-100">
            <div className="w-14 h-2 rounded-full bg-[#ff5e00]/80" />
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
          </div>

          {/* 3x3 Dynamic Neural Token Matrix Grid (Sequentially Illuminating) */}
          <div className="grid grid-cols-3 gap-1.5 py-1">
            <div
              className="h-3 rounded flex items-center justify-center border border-orange-200 transition-colors"
              style={{ animation: "matrixCell1 2s ease-in-out infinite" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            <div className="h-3 rounded bg-neutral-100 border border-neutral-200" />
            <div
              className="h-3 rounded flex items-center justify-center border border-orange-200"
              style={{ animation: "matrixCell2 2.4s ease-in-out infinite 0.4s" }}
            >
              <div className="w-1 h-1 rounded-full bg-[#ff5e00]" />
            </div>

            <div className="h-3 rounded bg-neutral-100 border border-neutral-200" />
            <div
              className="h-3 rounded bg-[#ff5e00] text-white flex items-center justify-center shadow-xs"
              style={{ animation: "matrixCell1 2s ease-in-out infinite 0.8s" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </div>
            <div className="h-3 rounded bg-orange-100/80 border border-orange-200" />

            <div
              className="h-3 rounded flex items-center justify-center border border-orange-200"
              style={{ animation: "matrixCell2 2s ease-in-out infinite 1.2s" }}
            >
              <div className="w-1 h-1 rounded-full bg-[#ff5e00]" />
            </div>
            <div className="h-3 rounded bg-neutral-100 border border-neutral-200" />
            <div
              className="h-3 rounded flex items-center justify-center border border-orange-200"
              style={{ animation: "matrixCell1 2s ease-in-out infinite 1.6s" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          </div>

          {/* Bottom Processing Extraction Bar (Dynamically Expanding) */}
          <div className="flex items-center gap-1.5 pt-1.5 border-t border-orange-100">
            <div className="flex-1 h-1.5 rounded-full bg-neutral-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#ff5e00] to-[#ff8935] rounded-full"
                style={{ animation: "confidenceFill 3s ease-in-out infinite" }}
              />
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5e00] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. AI Customer Support: Conversational Dual-Helix with Continuous Token Packet Flows */
export const CustomerSupportVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <StyleTag />
      <svg className="w-full max-w-[240px] h-20" viewBox="0 0 240 70" fill="none">
        {/* Central Vertical Spine */}
        <line x1="120" y1="8" x2="120" y2="62" stroke="#fed7aa" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Helical Boundary Curves with Animated Flow */}
        <path
          d="M 80 18 Q 120 28, 165 28 T 120 38 T 75 48 T 160 58"
          stroke="#fed7aa"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 3"
          style={{ animation: "dashCycle 8s linear infinite" }}
        />

        {/* Alternating Conversational Rungs */}
        {/* Rung 1: User side */}
        <line x1="80" y1="18" x2="120" y2="18" stroke="#ff8935" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="80" cy="18" r="4" fill="#ff8935" />
        <circle cx="80" cy="18" r="1.5" fill="#ffffff" />

        {/* Rung 2: LLM side */}
        <line x1="120" y1="28" x2="165" y2="28" stroke="#ff5e00" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="165" cy="28" r="4.5" fill="#ff5e00" />
        <circle cx="165" cy="28" r="2" fill="#ffffff" />

        {/* Rung 3: Convergence Nexus (Center Active Pulse with Multi-Ring Ripple) */}
        <line x1="95" y1="38" x2="145" y2="38" stroke="#ff5e00" strokeWidth="3" strokeLinecap="round" />
        
        {/* Expanding Nexus Sonar Waves */}
        <circle cx="120" cy="38" r="14" fill="#ff5e00" fillOpacity="0.2" className="animate-ping" />
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

        {/* Continuous Traveling Token Orbs (User Question -> LLM Answer) */}
        {/* Token traveling from Left to Right along Rung 1 */}
        <g style={{ transformOrigin: "80px 18px" }}>
          <circle cx="80" cy="18" r="2.8" fill="#ff5e00">
            <animate
              attributeName="cx"
              values="80; 120"
              dur="1.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 0"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Token traveling from Right to Left along Rung 2 */}
        <circle cx="165" cy="28" r="2.8" fill="#ff7230">
          <animate
            attributeName="cx"
            values="165; 120"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0; 1; 1; 0"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Token traveling from Center to Right along Rung 5 */}
        <circle cx="120" cy="58" r="2.8" fill="#ff5e00">
          <animate
            attributeName="cx"
            values="120; 160"
            dur="1.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0; 1; 1; 0"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

/* 4. AI-Powered SaaS Products: Hexagonal Neural Engine with Continuous Flow Tracks */
export const SaasCopilotVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <StyleTag />
      <svg className="w-full max-w-[240px] h-20" viewBox="0 0 240 70" fill="none">
        {/* Animated Connector Flow Tracks (Dashed Streams traveling into Core) */}
        <line
          x1="120" y1="35" x2="65" y2="20"
          stroke="#fdba74"
          strokeWidth="1.8"
          strokeDasharray="4 3"
          style={{ animation: "dashCycleReverse 4s linear infinite" }}
        />
        <line
          x1="120" y1="35" x2="65" y2="50"
          stroke="#fdba74"
          strokeWidth="1.8"
          strokeDasharray="4 3"
          style={{ animation: "dashCycleReverse 4s linear infinite" }}
        />
        <line
          x1="120" y1="35" x2="175" y2="20"
          stroke="#fdba74"
          strokeWidth="1.8"
          strokeDasharray="4 3"
          style={{ animation: "dashCycle 4s linear infinite" }}
        />
        <line
          x1="120" y1="35" x2="175" y2="50"
          stroke="#fdba74"
          strokeWidth="1.8"
          strokeDasharray="4 3"
          style={{ animation: "dashCycle 4s linear infinite" }}
        />

        {/* Traveling Energy Packets into the Core */}
        <circle r="2.5" fill="#ff5e00">
          <animateMotion path="M 65 20 L 120 35" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 1; 0" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle r="2.5" fill="#ff5e00">
          <animateMotion path="M 175 20 L 120 35" dur="2.1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 1; 0" dur="2.1s" repeatCount="indefinite" />
        </circle>
        <circle r="2.5" fill="#ff5e00">
          <animateMotion path="M 65 50 L 120 35" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 1; 0" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle r="2.5" fill="#ff5e00">
          <animateMotion path="M 175 50 L 120 35" dur="1.9s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 1; 0" dur="1.9s" repeatCount="indefinite" />
        </circle>

        {/* Satellite Module 1: Top-Left Diamond */}
        <g style={{ animation: "floatSlight 3s ease-in-out infinite" }}>
          <rect
            x="58" y="13" width="14" height="14" rx="3"
            transform="rotate(45 65 20)"
            fill="#ffffff" stroke="#ff8935" strokeWidth="1.8"
          />
          <circle cx="65" cy="20" r="2" fill="#ff8935" />
        </g>

        {/* Satellite Module 2: Bottom-Left Diamond */}
        <g style={{ animation: "floatSlight 3.5s ease-in-out infinite 0.5s" }}>
          <rect
            x="58" y="43" width="14" height="14" rx="3"
            transform="rotate(45 65 50)"
            fill="#ffffff" stroke="#fdba74" strokeWidth="1.5"
          />
          <circle cx="65" cy="50" r="2" fill="#fdba74" />
        </g>

        {/* Satellite Module 3: Top-Right Diamond */}
        <g style={{ animation: "floatSlight 3.2s ease-in-out infinite 0.3s" }}>
          <rect
            x="168" y="13" width="14" height="14" rx="3"
            transform="rotate(45 175 20)"
            fill="#ffffff" stroke="#ff8935" strokeWidth="1.8"
          />
          <circle cx="175" cy="20" r="2" fill="#ff8935" />
        </g>

        {/* Satellite Module 4: Bottom-Right Diamond */}
        <g style={{ animation: "floatSlight 3.8s ease-in-out infinite 0.7s" }}>
          <rect
            x="168" y="43" width="14" height="14" rx="3"
            transform="rotate(45 175 50)"
            fill="#ffffff" stroke="#fdba74" strokeWidth="1.5"
          />
          <circle cx="175" cy="50" r="2" fill="#fdba74" />
        </g>

        {/* Center Hexagonal Engine Core with Dynamic Energetic Pulsing */}
        <g style={{ transformOrigin: "120px 35px", animation: "hexCorePulse 3s ease-in-out infinite" }}>
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
            fillOpacity="0.25"
          />
          <circle cx="120" cy="35" r="4" fill="#ff5e00" />
          <circle cx="120" cy="35" r="1.8" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};

/* 5. AI Research and Content Workflows: Semantic Prism & High-Velocity Laser Refraction */
export const ResearchContentVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <StyleTag />
      <svg className="w-full max-w-[240px] h-20" viewBox="0 0 240 70" fill="none">
        <defs>
          <linearGradient id="prismLaser" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5e00" />
            <stop offset="100%" stopColor="#ff8935" />
          </linearGradient>
        </defs>

        {/* 3 Incoming Research Streams with Animated Traveling Dashes */}
        <line
          x1="30" y1="20" x2="105" y2="35"
          stroke="#fdba74"
          strokeWidth="2"
          strokeDasharray="4 3"
          style={{ animation: "dashCycle 3s linear infinite" }}
        />
        <line
          x1="20" y1="35" x2="105" y2="35"
          stroke="#ff8935"
          strokeWidth="2.2"
          strokeDasharray="4 3"
          style={{ animation: "dashCycle 2.4s linear infinite" }}
        />
        <line
          x1="30" y1="50" x2="105" y2="35"
          stroke="#fdba74"
          strokeWidth="2"
          strokeDasharray="4 3"
          style={{ animation: "dashCycle 3.4s linear infinite" }}
        />

        {/* Input stream origin emitters with pulsing */}
        <circle cx="30" cy="20" r="3.5" fill="#fdba74" className="animate-pulse" />
        <circle cx="20" cy="35" r="4.5" fill="#ff8935" />
        <circle cx="30" cy="50" r="3.5" fill="#fdba74" className="animate-pulse" />

        {/* Central Geometric Prism (Diamond) with Dynamic Internal Flare */}
        <g style={{ transformOrigin: "115px 35px", animation: "floatSlight 3s ease-in-out infinite" }}>
          <polygon
            points="115,18 130,35 115,52 100,35"
            fill="#ffffff"
            stroke="#ff5e00"
            strokeWidth="2.5"
            className="shadow-md"
          />
          <circle cx="115" cy="35" r="9" fill="#ff5e00" fillOpacity="0.25" className="animate-ping" />
          <circle cx="115" cy="35" r="4" fill="#ff5e00" />
          <circle cx="115" cy="35" r="1.8" fill="#ffffff" />
        </g>

        {/* Refracted Single Concentrated Coherent Beam (Right side) */}
        <line
          x1="130" y1="35" x2="215" y2="35"
          stroke="url(#prismLaser)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Continuous High-Velocity Laser Photons Shooting Down the Beam */}
        <circle r="3" fill="#ffffff">
          <animateMotion path="M 130 35 L 215 35" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 1; 0" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle r="2.5" fill="#ffedd5">
          <animateMotion path="M 130 35 L 215 35" dur="1.2s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 1; 0" dur="1.2s" begin="0.6s" repeatCount="indefinite" />
        </circle>

        {/* Refined Synthesis Indicators (Dashes) */}
        <line
          x1="185" y1="26" x2="205" y2="26"
          stroke="#fed7aa"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="3 2"
          style={{ animation: "dashCycle 4s linear infinite" }}
        />
        <line
          x1="185" y1="44" x2="210" y2="44"
          stroke="#fed7aa"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="3 2"
          style={{ animation: "dashCycle 3.5s linear infinite" }}
        />

        {/* Target Focal Point with Receiving Flare */}
        <circle cx="215" cy="35" r="10" fill="#ff5e00" fillOpacity="0.18" className="animate-ping" />
        <circle cx="215" cy="35" r="5" fill="#ff5e00" />
        <circle cx="215" cy="35" r="2" fill="#ffffff" />
      </svg>
    </div>
  );
};

/* 6. Business Workflow Automation: Multi-Lane Branching Logic Bus with Continuous Routing */
export const WorkflowAutomationVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <StyleTag />
      <svg className="w-full max-w-[340px] h-20" viewBox="0 0 340 70" fill="none">
        {/* Main Center Bus Lane with Animated Moving Dash Pipeline */}
        <line
          x1="30" y1="35" x2="310" y2="35"
          stroke="#fed7aa"
          strokeWidth="2"
          strokeDasharray="4 3"
          style={{ animation: "dashCycle 6s linear infinite" }}
        />

        {/* Upper Bypass Lane (Branching at 45°) with Animated Flow */}
        <path
          d="M 70 35 L 90 20 L 220 20 L 240 35"
          stroke="#ffedd5"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 3"
          style={{ animation: "dashCycle 5s linear infinite" }}
        />

        {/* Lower Task Lane (Branching at 45°) with Animated Flow */}
        <path
          d="M 120 35 L 140 50 L 260 50 L 280 35"
          stroke="#ffedd5"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 3"
          style={{ animation: "dashCycle 5.5s linear infinite" }}
        />

        {/* CONTINUOUS TRAVELING WORKFLOW PACKETS */}
        {/* 1. Main Express Packet from Node 1 straight through to Node 3 */}
        <circle r="3.5" fill="#ff5e00">
          <animateMotion path="M 30 35 L 310 35" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 1; 1; 0" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* 2. Divergent Packet Taking the Upper Bypass Lane */}
        <circle r="3" fill="#ff8935">
          <animateMotion path="M 70 35 L 90 20 L 220 20 L 240 35 L 310 35" dur="3.8s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 1; 1; 0" dur="3.8s" begin="0.8s" repeatCount="indefinite" />
        </circle>

        {/* 3. Divergent Packet Taking the Lower Task Lane */}
        <circle r="3" fill="#fdba74">
          <animateMotion path="M 120 35 L 140 50 L 260 50 L 280 35 L 310 35" dur="3.4s" begin="1.7s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 1; 1; 0" dur="3.4s" begin="1.7s" repeatCount="indefinite" />
        </circle>

        {/* Node 1: Ingress Terminal */}
        <circle cx="30" cy="35" r="7" fill="#ffffff" stroke="#ff8935" strokeWidth="2" />
        <circle cx="30" cy="35" r="3" fill="#ff8935" />

        {/* Branch Point 1: Diamond Logic Gate */}
        <rect
          x="65" y="30" width="10" height="10"
          transform="rotate(45 70 35)"
          fill="#ffffff" stroke="#ff5e00" strokeWidth="2"
        />

        {/* Upper Bypass Satellite Pip */}
        <circle cx="155" cy="20" r="3.5" fill="#fdba74" className="animate-pulse" />

        {/* Active Central Reasoning Core (Node 2) with Ripple Sonar Waves */}
        <circle cx="180" cy="35" r="16" fill="#ff5e00" fillOpacity="0.18" className="animate-ping" />
        <circle cx="180" cy="35" r="9" fill="#ffffff" stroke="#ff5e00" strokeWidth="2.5" />
        <circle cx="180" cy="35" r="4" fill="#ff5e00" />

        {/* Lower Task Satellite Pip */}
        <circle cx="200" cy="50" r="3.5" fill="#fdba74" className="animate-pulse" />

        {/* Branch Convergence Gate */}
        <rect
          x="235" y="30" width="10" height="10"
          transform="rotate(45 240 35)"
          fill="#ffffff" stroke="#ff5e00" strokeWidth="2"
        />

        {/* Final Execution Terminal (Node 3) with Continuous Pulse */}
        <circle cx="310" cy="35" r="12" fill="#ff5e00" fillOpacity="0.15" className="animate-ping" />
        <circle cx="310" cy="35" r="8" fill="#ffffff" stroke="#ff5e00" strokeWidth="2.5" />
        <circle cx="310" cy="35" r="4" fill="#ff5e00" />
        <circle cx="310" cy="35" r="1.5" fill="#ffffff" />
      </svg>
    </div>
  );
};
