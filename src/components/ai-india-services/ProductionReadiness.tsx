"use client";

import React from "react";
import {
  Layers,
  CheckCircle,
  Database,
  ShieldAlert,
  ArrowRight,
  Workflow,
  Sparkles,
  Users2,
  CalendarCheck2,
  Lock,
  Cpu,
} from "lucide-react";

export default function ProductionReadiness() {
  const pillars = [
    {
      number: "01",
      title: "Connected to Your Existing Software",
      description:
        "We connect AI models directly to your current websites, mobile apps, CRM, and internal databases so your team can use AI without changing how they work.",
      tag: "Zero Workflow Disruption",
      icon: Database,
      features: [
        "Bi-directional API sync with ERP & CRM",
        "Preserves existing employee authentication",
        "Role-based permission synchronization",
        "Legacy SQL & modern cloud data connectors",
      ],
      badgeColor: "from-[#FF7230]/10 to-[#FF8935]/10 text-[#FF7230] border-[#FF7230]/20",
    },
    {
      number: "02",
      title: "Complete, Ready-to-Use Software",
      description:
        "You get a fully tested, production-ready product with clean user screens, secure logins, and dependable performance from day one, not an unfinished demo.",
      tag: "Production-Grade UI & Security",
      icon: Layers,
      features: [
        "Complete responsive web & mobile UI",
        "Granular access control & audit trails",
        "Load-tested under enterprise concurrency",
        "Automated fallback & fault-tolerance",
      ],
      badgeColor: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-500/20",
    },
    {
      number: "03",
      title: "Engineers Who Work With Your Team",
      description:
        "Our senior developers review your business processes and clean your data first, making sure the AI solves the right problems before writing code.",
      tag: "Domain-First Engineering",
      icon: Users2,
      features: [
        "In-depth workflow & process audits",
        "Data hygiene, normalization & chunking",
        "Model alignment with compliance rules",
        "Dedicated senior architects on calls",
      ],
      badgeColor: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-500/20",
    },
    {
      number: "04",
      title: "Working Software in 4 to 8 Weeks",
      description:
        "Using our AI-assisted development workflow, we build and deploy your custom solution in clear, fixed stages so you see progress every week.",
      tag: "Rapid Fixed-Stage Delivery",
      icon: CalendarCheck2,
      features: [
        "Week-by-week staged demonstrable releases",
        "Iterative client validation loops",
        "Continuous CI/CD automated test suites",
        "Transparent sprint dashboards",
      ],
      badgeColor: "from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-500/20",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            Production Engineering Benchmark
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18]">
            Moving Beyond Simple Demos: We Build AI That Actually Works in Production
          </h2>
          <p className="mt-4 text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Anyone can connect a basic AI chatbot. The real challenge is making AI work
            reliably inside your everyday business systems without crashing, leaking confidential
            data, or slowing down your team.
          </p>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base leading-relaxed font-medium">
            As an established artificial intelligence development company in india, Webnox Digital
            builds production grade software designed to scale:
          </p>
        </div>

        {/* 4 Production Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-7 sm:p-9 border border-neutral-200/80 hover:border-[#FF7230]/40 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(255,114,48,0.1)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Number & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-black tracking-widest text-neutral-400 group-hover:text-[#FF7230] transition-colors">
                      {pillar.number}
                    </span>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${pillar.badgeColor}`}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Icon & H3 Title */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 group-hover:bg-gradient-to-br group-hover:from-[#FF7230] group-hover:to-[#FF532B] flex items-center justify-center text-neutral-700 group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#12141a] tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mt-2">
                    {pillar.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="mt-6 pt-5 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {pillar.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-[#ff5e00] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner comparing Demo vs Production */}
        <div className="mt-12 rounded-2xl bg-neutral-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-[#ff8935] flex-shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Zero Compromise Enterprise Security
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Private cloud or on-prem deployment, zero model training on your private data, and SOC2-compliant guardrails.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-[#FF7230] to-[#FF532B] px-6 py-3 rounded-full hover:shadow-[0_4px_20px_rgba(255,114,48,0.4)] transition-all flex-shrink-0 cursor-pointer"
          >
            <span>Audit Your AI Readiness</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
