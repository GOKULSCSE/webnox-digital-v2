"use client";

import React, { useState } from "react";
import {
  Calendar,
  ShieldAlert,
  KeyRound,
  Lock,
  Users2,
  PlugZap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface WhyChooseItem {
  id: string;
  number: string;
  tabTitle: string;
  heading: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  bullets: string[];
}

const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "stability",
    number: "01",
    tabTitle: "15+ Years of Proven Stability",
    heading: "1. 15+ Years of Proven Stability (Not an Overnight Startup)",
    tag: "PROVEN HERITAGE",
    description:
      "Webnox Digital is an established AI-native company backed by 15+ years of software experience and 2,570+ client deliveries across 20+ countries. You get guaranteed enterprise stability without the risk of unproven AI agencies.",
    icon: Calendar,
    bullets: [
      "Operating continuously since 2011 across tech market shifts",
      "Over 2,570 business software platforms and online stores delivered",
      "Presence and client deployments across 20+ global countries",
      "Zero startup failure risk: senior enterprise engineering stability",
    ],
  },
  {
    id: "reliability",
    number: "02",
    tabTitle: "Real Business AI (Never Crash / Lie)",
    heading: "2. Real Business AI Built to Never Crash or Lie",
    tag: "VERIFIED ACCURACY",
    description:
      "We don’t sell fragile chatbots that freeze up or give false answers. Our custom LLM solutions handle heavy daily traffic with verified accuracy, protecting your brand reputation every single day.",
    icon: ShieldAlert,
    bullets: [
      "Hallucination-free RAG architectures with strict source attribution",
      "Built-in guardrails that politely refuse unverified claims",
      "High-throughput inference engines tuned with vLLM & TensorRT",
      "Automated regression testing against 1,000+ representative queries",
    ],
  },
  {
    id: "ownership",
    number: "03",
    tabTitle: "100% Client Ownership",
    heading: "3. You Own 100% of What We Build",
    tag: "NO VENDOR LOCK-IN",
    description:
      "Everything we build belongs entirely to you. We hand over all files and code with zero monthly rental fees, zero surprise charges, and complete freedom to manage the software yourself.",
    icon: KeyRound,
    bullets: [
      "Full source code repositories and commit histories transferred",
      "Custom LoRA weights and fine-tuned models owned by you",
      "Zero monthly SaaS subscription royalties or licensing fees",
      "Complete autonomy to run and update in your private accounts",
    ],
  },
  {
    id: "compliance",
    number: "04",
    tabTitle: "DPDP Act & GDPR Privacy",
    heading: "4. Data Privacy & India’s DPDP Act Compliance",
    tag: "STRICT COMPLIANCE",
    description:
      "Your company records and customer data never leak or train public AI models. We build private, isolated systems fully compliant with India’s DPDP Act 2023 and global GDPR standards.",
    icon: Lock,
    bullets: [
      "Strict zero-data-retention AI inference pipelines",
      "Self-hosted model deployments inside your own private VPC",
      "Full alignment with India's Digital Personal Data Protection Act 2023",
      "Air-gapped database connectivity and role-based access control",
    ],
  },
  {
    id: "senior-builders",
    number: "05",
    tabTitle: "Talk to Senior AI Builders",
    heading: "5. Talk Directly to Senior AI Builders",
    tag: "DIRECT COLLABORATION",
    description:
      "Speak directly with the engineers building your AIs. You get clear answers, faster project delivery and complete transparency without any communication delays.",
    icon: Users2,
    bullets: [
      "No non-technical account managers slowing down decisions",
      "Direct Slack/Discord access to senior AI architects",
      "Architectural trade-off reviews delivered in plain English",
      "Fast 24-hour turnaround on technical feasibility inquiries",
    ],
  },
  {
    id: "plug-existing-tools",
    number: "06",
    tabTitle: "Plugs into Existing Tools",
    heading: "6. Plugs into Your Existing Tools Without Disruption",
    tag: "SEAMLESS ADOPTION",
    description:
      "You don't need to rebuild your software or retrain your staff. We connect custom AI directly into the CRM, ERP and databases your team already uses every day, making adoption effortless.",
    icon: PlugZap,
    bullets: [
      "Native connectors for Salesforce, Zoho, HubSpot, SAP & custom ERPs",
      "Zero disruption to your daily operational workflows",
      "AI insights and copilots surfaced right inside existing dashboards",
      "Staff adoption in days with intuitive natural language commands",
    ],
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<string>("stability");
  const selectedItem = WHY_CHOOSE_ITEMS.find((item) => item.id === activeTab) || WHY_CHOOSE_ITEMS[0];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#100602] text-white overflow-hidden selection:bg-[#ff5e00] selection:text-white">
      {/* Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, #220d04 0%, #110602 60%, #0a0301 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute right-[-10%] top-[30%] w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 94, 0, 0.14) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/15 border border-[#ff5e00]/30 text-[#ff8935] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            THE WEBNOX ADVANTAGE
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Why Choose Webnox Digital as Your LLM Development Company in India?
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            In an era crowded with experimental wrappers, Webnox Digital combines 15 years of software engineering heritage with production-grade AI.
          </p>
        </div>

        {/* Desktop 2-Column Interactive View (lg and up) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: 6 Tab Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {WHY_CHOOSE_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-white/[0.12] to-white/[0.04] border-[#ff7230]/70 shadow-[0_4px_24px_rgba(255,94,0,0.18)] translate-x-1"
                      : "bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#ff7230] text-white shadow-sm"
                          : "bg-white/10 text-neutral-300"
                      }`}
                    >
                      <item.icon className="w-5 h-5 text-current" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#ff8935] block uppercase font-semibold">
                        {item.tag}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white">
                        {item.tabTitle}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-xs font-bold transition-colors ${
                      isActive ? "text-[#ff7230]" : "text-neutral-500"
                    }`}
                  >
                    {item.number}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Card Display */}
          <div className="lg:col-span-7 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div>
              {/* Top Tag & Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#ff5e00]/15 text-[#ff8935] border border-[#ff5e00]/30 font-semibold">
                  {selectedItem.tag}
                </span>
                <span className="font-mono text-sm font-bold text-neutral-400">
                  {selectedItem.number} / 06
                </span>
              </div>

              {/* H3 Heading */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                {selectedItem.heading}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-8">
                {selectedItem.description}
              </p>

              {/* Bullets */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3 font-semibold">
                  Key Verification Metrics:
                </span>
                {selectedItem.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#ff7230] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Proof Tag */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span className="text-[#ff8935]">100% Sovereign Architecture</span>
              <span>DPDP Act 2023 &amp; GDPR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
