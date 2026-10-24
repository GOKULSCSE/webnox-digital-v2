"use client";

import React from "react";

/**
 * Minimalist, abstract, high-tech animated visuals for all 10 AI Solution Bento Cards.
 * Truly dynamic 60fps continuous animations:
 *
 * 1. Customer Support Applications -> Undulating Harmonic Wave with Streaming Token Packets
 * 2. Intelligent Document Processing -> Active OCR Laser Scanning Beam & Dynamic Data Bars
 * 3. AI Workflow Automation -> Continuous Sequential Circuit Packet Flow
 * 4. Enterprise Knowledge -> Animated Semantic Constellation & Orbital Connection Pulses
 * 5. Business Analytics -> Dynamic Forecast Wave with Traveling Trajectory Beacon
 * 6. AI Assistants & Copilots -> Multi-Ring Rotating Gyroscopic Energy Core
 * 7. Semantic Search Applications -> 360-degree Rotating Radar Scanner with Target Pings
 * 8. AI Agent Applications -> Dual-Orbit Satellite Loops with Trail Dynamics
 * 9. AI-Enabled SaaS -> Continuous Inter-Tier Vertical Data Laser Pulses
 * 10. Multimodal AI -> Dynamic Harmonic Equalizer Oscillating Spectrum
 */

const AiStyleTag: React.FC = () => (
  <style>{`
    @keyframes aiWaveDash {
      to { stroke-dashoffset: -36; }
    }
    @keyframes aiLaserScan {
      0% { top: 6%; opacity: 0; }
      15% { opacity: 1; }
      85% { opacity: 1; }
      100% { top: 90%; opacity: 0; }
    }
    @keyframes eqBarBounce {
      0%, 100% { transform: scaleY(0.35); }
      50% { transform: scaleY(1); }
    }
    @keyframes verticalLaser {
      0% { transform: translateY(-100%); opacity: 0; }
      30% { opacity: 1; }
      70% { opacity: 1; }
      100% { transform: translateY(100%); opacity: 0; }
    }
    @keyframes constellationDash {
      to { stroke-dashoffset: -24; }
    }
    @keyframes floatGentle {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-4px); }
    }
  `}</style>
);

/* 1. Customer Support Applications: Minimalist Harmonic Pulse Wave with Streaming Packets */
export const CustomerSupportVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <AiStyleTag />
      {/* Ambient background glow */}
      <div className="absolute w-28 h-28 rounded-full bg-[#ff5e00]/10 blur-xl animate-pulse" />

      {/* Harmonic Waveform Lines */}
      <svg className="w-full max-w-[260px] h-16" viewBox="0 0 260 60" fill="none">
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5e00" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#ff5e00" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff7230" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff7230" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#ff9a3d" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff5e00" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Primary undulation wave with active moving dash flow */}
        <path
          id="supportWavePath1"
          d="M10 30 Q 40 10, 75 30 T 140 30 T 205 30 T 250 30"
          stroke="url(#waveGrad1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="6 3"
          style={{ animation: "aiWaveDash 4s linear infinite" }}
        />

        {/* Secondary out-of-phase harmonic wave */}
        <path
          d="M10 30 Q 45 46, 80 30 T 145 30 T 210 30 T 250 30"
          stroke="url(#waveGrad2)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="4 4"
          style={{ animation: "aiWaveDash 5s linear infinite reverse" }}
        />

        {/* Traveling Voice/Token Packets along the Wave */}
        <circle r="3" fill="#ff5e00">
          <animateMotion
            path="M 10 30 Q 40 10, 75 30 T 140 30 T 205 30 T 250 30"
            dur="2.8s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0; 1; 1; 0" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle r="2.5" fill="#ffffff">
          <animateMotion
            path="M 10 30 Q 40 10, 75 30 T 140 30 T 205 30 T 250 30"
            dur="2.8s"
            begin="1.4s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0; 1; 1; 0" dur="2.8s" begin="1.4s" repeatCount="indefinite" />
        </circle>

        {/* Central glowing energy beacon */}
        <circle cx="140" cy="30" r="12" fill="#ff5e00" fillOpacity="0.2" className="animate-ping" />
        <circle cx="140" cy="30" r="4.5" fill="#ff5e00" />
        <circle cx="140" cy="30" r="2" fill="#ffffff" />
      </svg>
    </div>
  );
};

/* 2. Intelligent Document Processing: Continuous Holographic Laser Grid */
export const DocumentProcessingVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <AiStyleTag />
      <div className="relative w-48 h-22 rounded-xl bg-orange-50/50 border border-orange-200/70 flex flex-col justify-around p-3 overflow-hidden shadow-sm">
        {/* Animated Continuous Laser Scanning Beam */}
        <div
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent shadow-[0_0_10px_#ff5e00] z-10"
          style={{ animation: "aiLaserScan 2.6s ease-in-out infinite" }}
        />

        {/* Minimalist Dynamic Data Structure Bars */}
        <div className="w-2/3 h-2 rounded-full bg-orange-200/80 animate-pulse" />
        <div className="w-full h-1.5 rounded-full bg-neutral-200/80 overflow-hidden">
          <div className="w-3/4 h-full bg-[#ff5e00]/70 rounded-full animate-pulse" />
        </div>
        <div className="w-4/5 h-1.5 rounded-full bg-neutral-200/70" />
        <div className="w-1/2 h-1.5 rounded-full bg-orange-300/80" />
      </div>
    </div>
  );
};

/* 3. AI Workflow Automation: Sequential Node Pipeline with Traveling Packets */
export const WorkflowAutomationVisual: React.FC = () => {
  return (
    <div className="w-full h-28 sm:h-36 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <AiStyleTag />
      <svg className="w-full max-w-[280px] h-20" viewBox="0 0 280 60" fill="none">
        {/* Connecting circuit lines with animated flow */}
        <line
          x1="40" y1="30" x2="245" y2="30"
          stroke="#fed7aa"
          strokeWidth="2"
          strokeDasharray="4 3"
          style={{ animation: "aiWaveDash 5s linear infinite" }}
        />

        {/* Traveling Data Packet along the Pipeline */}
        <circle r="3.5" fill="#ff5e00">
          <animateMotion path="M 40 30 L 245 30" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 1; 1; 0" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle r="2.5" fill="#ff8935">
          <animateMotion path="M 40 30 L 245 30" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 1; 1; 0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
        </circle>

        {/* Node 1 */}
        <circle cx="40" cy="30" r="9" fill="#fff" stroke="#ff5e00" strokeWidth="2" />
        <circle cx="40" cy="30" r="4" fill="#ff5e00" />

        {/* Node 2 - Active Pulsing Node */}
        <circle cx="110" cy="30" r="16" fill="#ff5e00" fillOpacity="0.18" className="animate-ping" />
        <circle cx="110" cy="30" r="10" fill="#fff" stroke="#ff5e00" strokeWidth="2.5" />
        <circle cx="110" cy="30" r="4.5" fill="#ff5e00" />

        {/* Node 3 */}
        <circle cx="180" cy="30" r="9" fill="#fff" stroke="#ff8935" strokeWidth="2" />
        <circle cx="180" cy="30" r="4" fill="#ff8935" />

        {/* Node 4 - End Target */}
        <circle cx="245" cy="30" r="12" fill="#ff5e00" fillOpacity="0.15" className="animate-ping" />
        <circle cx="245" cy="30" r="9" fill="#fff" stroke="#ff5e00" strokeWidth="2" />
        <circle cx="245" cy="30" r="4" fill="#ff5e00" />
      </svg>
    </div>
  );
};

/* 4. Enterprise Knowledge: Semantic Constellation with Traveling Pulses */
export const EnterpriseKnowledgeVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <AiStyleTag />
      <svg className="w-48 h-20" viewBox="0 0 190 80" fill="none">
        {/* Connecting constellation rays with animated dash flow */}
        <g style={{ animation: "constellationDash 6s linear infinite" }}>
          <line x1="95" y1="40" x2="35" y2="25" stroke="#fed7aa" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="95" y1="40" x2="155" y2="25" stroke="#fed7aa" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="95" y1="40" x2="55" y2="65" stroke="#fed7aa" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="95" y1="40" x2="135" y2="65" stroke="#fed7aa" strokeWidth="1.5" strokeDasharray="3 2" />
        </g>
        <line x1="35" y1="25" x2="55" y2="65" stroke="#ffedd5" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="155" y1="25" x2="135" y2="65" stroke="#ffedd5" strokeWidth="1" strokeDasharray="3 3" />

        {/* Traveling Node Pulses */}
        <circle r="2.5" fill="#ff5e00">
          <animateMotion path="M 95 40 L 35 25" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="2.5" fill="#ff5e00">
          <animateMotion path="M 95 40 L 155 25" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 1; 0" dur="2.4s" repeatCount="indefinite" />
        </circle>

        {/* Outer Orbit Nodes */}
        <circle cx="35" cy="25" r="4.5" fill="#ff8935" className="animate-pulse" />
        <circle cx="155" cy="25" r="4.5" fill="#ff8935" className="animate-pulse" />
        <circle cx="55" cy="65" r="4" fill="#fdba74" />
        <circle cx="135" cy="65" r="4" fill="#fdba74" />

        {/* Central Core Vector Node */}
        <circle cx="95" cy="40" r="18" fill="#ff5e00" fillOpacity="0.18" className="animate-ping" />
        <circle cx="95" cy="40" r="8" fill="#ff5e00" />
        <circle cx="95" cy="40" r="3" fill="#ffffff" />
      </svg>
    </div>
  );
};

/* 5. Business Analytics: Minimal Dynamic Trend Curve with Traveling Beacon */
export const BusinessAnalyticsVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <AiStyleTag />
      <svg className="w-full max-w-[260px] h-20" viewBox="0 0 260 70" fill="none">
        <defs>
          <linearGradient id="analyticsAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff5e00" stopOpacity="0.3" />
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

        {/* Traveling Forecast Photon */}
        <circle r="3" fill="#ffffff">
          <animateMotion
            path="M 15 55 Q 60 52, 100 42 T 180 30 T 245 15"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0; 1; 1; 0" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* Peak Forecast Anchor */}
        <circle cx="245" cy="15" r="8" fill="#ff5e00" fillOpacity="0.25" className="animate-ping" />
        <circle cx="245" cy="15" r="4" fill="#ff5e00" />
        <circle cx="245" cy="15" r="1.5" fill="#ffffff" />
      </svg>
    </div>
  );
};

/* 6. AI Assistants & Copilots: Continuous Rotating Gyroscopic Energy Core */
export const AssistantsCopilotsVisual: React.FC = () => {
  return (
    <div className="w-full h-28 sm:h-36 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Concentric rotating ripple rings */}
        <div className="absolute inset-0 rounded-full border border-orange-300/40 animate-ping opacity-35" />
        <div className="absolute w-20 h-20 rounded-full border border-dashed border-[#ff5e00]/50 animate-[spin_8s_linear_infinite]" />
        <div className="absolute w-14 h-14 rounded-full border border-[#ff7230]/60 animate-[spin_4s_linear_infinite_reverse]" />

        {/* Ambient Center Orb */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff5e00] to-[#ff8935] shadow-[0_0_18px_rgba(255,94,0,0.6)] flex items-center justify-center animate-pulse">
          <div className="w-2.5 h-2.5 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
};

/* 7. Semantic Search Applications: Rotating Radar Scanner with Target Pings */
export const SearchApplicationsVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <div className="relative w-24 h-24 rounded-full border border-orange-200/80 flex items-center justify-center">
        {/* Inner concentric range ring */}
        <div className="w-14 h-14 rounded-full border border-orange-200/60" />

        {/* 360-degree rotating radar beam */}
        <div
          className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(255,94,0,0.35) 360deg)",
          }}
        />

        {/* Discovered beacon nodes */}
        <div className="absolute top-4 right-5 w-2 h-2 rounded-full bg-[#ff5e00] animate-ping opacity-80" />
        <div className="absolute top-4 right-5 w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
        <div className="absolute bottom-6 left-5 w-1.5 h-1.5 rounded-full bg-[#ff8935] animate-pulse" />

        {/* Central origin */}
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5e00]" />
      </div>
    </div>
  );
};

/* 8. AI Agent Applications: Dual-Orbital Loops */
export const AgentApplicationsVisual: React.FC = () => {
  return (
    <div className="w-full h-24 sm:h-28 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Elliptical Orbital Path */}
        <div className="w-20 h-20 rounded-full border border-dashed border-orange-300/70 animate-[spin_10s_linear_infinite]" />

        {/* Revolving Satellites */}
        <div className="absolute inset-0 animate-[spin_5s_linear_infinite]">
          <div className="w-3 h-3 rounded-full bg-[#ff5e00] absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_8px_#ff5e00]" />
        </div>
        <div className="absolute inset-0 animate-[spin_5s_linear_infinite_reverse]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff8935] absolute bottom-1 right-2 shadow-[0_0_6px_#ff8935]" />
        </div>

        {/* Central Core */}
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7230] shadow-[0_0_14px_rgba(255,94,0,0.5)] flex items-center justify-center animate-pulse">
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
};

/* 9. AI-Enabled SaaS: Tiered Plates with Active Data Pulses */
export const SaaSEnabledVisual: React.FC = () => {
  return (
    <div className="w-full h-28 sm:h-36 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <div className="relative w-36 h-26 flex flex-col items-center justify-center gap-2">
        {/* Top Plate */}
        <div className="w-28 h-5 rounded-lg bg-orange-100/80 border border-orange-200/90 shadow-xs flex items-center justify-center">
          <div className="w-10 h-1.5 rounded-full bg-[#ff5e00]/70" />
        </div>

        {/* Vertical Data Beams with Active Pulses */}
        <div className="relative w-[2px] h-4 bg-orange-200 overflow-hidden">
          <div className="w-full h-2 bg-[#ff5e00] rounded-full animate-bounce" />
        </div>

        {/* Middle Plate (Active Core) */}
        <div className="w-32 h-6 rounded-lg bg-white border border-[#ff5e00]/50 shadow-sm flex items-center justify-between px-3">
          <div className="w-2 h-2 rounded-full bg-[#ff5e00] animate-ping opacity-85" />
          <div className="w-12 h-1.5 rounded-full bg-orange-200" />
          <div className="w-2 h-2 rounded-full bg-[#ff5e00]" />
        </div>

        {/* Vertical Data Beams */}
        <div className="relative w-[2px] h-4 bg-orange-200 overflow-hidden">
          <div className="w-full h-2 bg-[#ff8935] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>

        {/* Bottom Plate */}
        <div className="w-28 h-5 rounded-lg bg-orange-50/70 border border-orange-200/70 shadow-xs flex items-center justify-center">
          <div className="w-12 h-1.5 rounded-full bg-orange-300/70" />
        </div>
      </div>
    </div>
  );
};

/* 10. Multimodal AI: Dynamic Oscillating Equalizer Spectrum */
export const MultimodalAIVisual: React.FC = () => {
  return (
    <div className="w-full h-28 sm:h-36 flex items-center justify-center relative overflow-hidden pointer-events-none select-none">
      <AiStyleTag />
      {/* Dynamic Soundwave Equalizer Bars (Fluid continuous vertical scale) */}
      <div className="flex items-center gap-1.5 h-16">
        {[24, 40, 56, 32, 48, 62, 42, 28].map((height, i) => (
          <div
            key={i}
            className="w-1.5 rounded-full bg-gradient-to-t from-[#ff5e00] to-[#ff8935] origin-bottom shadow-xs"
            style={{
              height: `${height}px`,
              animation: "eqBarBounce 1.4s ease-in-out infinite",
              animationDelay: `${i * 0.14}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
