"use client";

import React, { useState } from "react";
import {
  Rocket,
  Bot,
  RefreshCw,
  Cpu,
  TrendingUp,
  Building,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  Plus,
  SlidersHorizontal,
} from "lucide-react";

interface SolutionOption {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  scopeHighlight: string;
}

const SOLUTION_OPTIONS: SolutionOption[] = [
  {
    id: "new-product",
    number: "01",
    title: "I'm starting a new product",
    description: "I have an idea but need a website, app, SaaS product, or AI solution.",
    icon: Rocket,
    tags: ["Web & Mobile Apps", "SaaS MVPs", "Custom Platforms"],
    scopeHighlight: "Architecture & MVP Roadmap",
  },
  {
    id: "build-ai",
    number: "02",
    title: "I want to build with AI",
    description: "I need AI agents, chatbots, LLM applications, or generative AI.",
    icon: Bot,
    tags: ["Autonomous Agents", "Custom LLMs", "Enterprise RAG"],
    scopeHighlight: "Frontier AI Models & Agents",
  },
  {
    id: "repetitive-work",
    number: "03",
    title: "My team has repetitive work",
    description: "I want to automate operations, approvals, customer support, or workflows.",
    icon: RefreshCw,
    tags: ["Workflow Automation", "Triage Bots", "Approval Pipelines"],
    scopeHighlight: "Zero-Error Workflows",
  },
  {
    id: "ai-existing-software",
    number: "04",
    title: "I need AI in existing software",
    description: "I want to connect AI with my applications, APIs, databases, or ERP.",
    icon: Cpu,
    tags: ["Database & ERP Sync", "API Connectors", "Sovereign AI"],
    scopeHighlight: "VPC & Legacy Integration",
  },
  {
    id: "digital-growth",
    number: "05",
    title: "I need more digital growth",
    description: "I want to improve SEO, AI search visibility, advertising, and lead generation.",
    icon: TrendingUp,
    tags: ["AI Search (GEO)", "Google & Meta Ads", "Conversion SEO"],
    scopeHighlight: "Customer Acquisition & ROAS",
  },
  {
    id: "custom-business-system",
    number: "06",
    title: "I need a custom business system",
    description: "I need enterprise software, an internal platform, or a connected business solution.",
    icon: Building,
    tags: ["ERP & CRM Architecture", "Internal Platforms", "Cloud Backends"],
    scopeHighlight: "Scalable Enterprise Stack",
  },
];

export default function ArchitectSolution() {
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>(["build-ai", "new-product"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    timeline: "within-month",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleSolution = (id: string) => {
    setSelectedSolutions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedSolutions(SOLUTION_OPTIONS.map((s) => s.id));
  };

  const clearAll = () => {
    setSelectedSolutions([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=No+721%2F2+Venky+complex+cross-cut+road+Seth+Narang+Das+Layout+Coimbatore+641012";

  return (
    <div className="relative w-full">
      {/* Top Hero Section */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-[#160a04] text-white">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 82% 35%, #2a1105 0%, #170b04 45%, #100602 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute right-[-5%] top-[25%] -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 94, 0, 0.22) 0%, transparent 65%)",
            filter: "blur(75px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-[#ff5e00]/40 backdrop-blur-md mb-6 shadow-[0_0_24px_rgba(255,94,0,0.18)]">
            <span className="w-2 h-2 rounded-full bg-[#ff7230] shadow-[0_0_8px_#ff7230]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-200">
              FEASIBILITY ASSESSMENT IN 24 HOURS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14] mb-6">
            Let’s Architect Your Next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              AI or Web Solution
            </span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light mb-8">
            Share your technical requirements, product concept or automation challenge. Our engineering team reviews every inquiry and delivers a structured feasibility assessment within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#ff7230]" />
              <span>24h Turnaround</span>
            </div>
            <span className="text-neutral-600">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ff7230]" />
              <span>NDA &amp; Strict Confidentiality</span>
            </div>
            <span className="text-neutral-600">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff7230]" />
              <span>Senior Practitioner Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Solution Selector & Form Section */}
      <section className="relative w-full py-20 sm:py-28 bg-[#fdfaf6] text-neutral-900 border-t border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Enhanced Solution Selector Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
                SELECT YOUR FOCUS
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight mb-3">
                Find the Right AI Solution for Your Business
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Tell us where your business is today. We&apos;ll help you identify the right combination of AI, software, automation, and digital growth services.
              </p>
            </div>

            {/* Quick Actions (Select All / Clear) */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={selectAll}
                className="text-xs font-semibold text-neutral-600 hover:text-[#ff5e00] px-3.5 py-2 rounded-xl bg-white border border-neutral-200 shadow-sm transition-colors cursor-pointer"
              >
                Select All
              </button>
              <button
                type="button"
                onClick={clearAll}
                className="text-xs font-semibold text-neutral-500 hover:text-neutral-800 px-3.5 py-2 rounded-xl bg-white border border-neutral-200 shadow-sm transition-colors cursor-pointer"
              >
                Clear
              </button>
            </div>
          </div>

          {/* 6 Enhanced Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-12">
            {SOLUTION_OPTIONS.map((option) => {
              const isSelected = selectedSolutions.includes(option.id);
              return (
                <div
                  key={option.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleSolution(option.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleSolution(option.id);
                    }
                  }}
                  className={`group text-left rounded-3xl p-7 sm:p-8 border transition-all duration-300 relative flex flex-col justify-between cursor-pointer select-none outline-none ${
                    isSelected
                      ? "bg-gradient-to-b from-white via-white to-[#fff8f3] border-[#ff5e00] shadow-[0_16px_36px_rgba(255,114,48,0.16)] ring-2 ring-[#ff5e00]/25 -translate-y-1"
                      : "bg-white/95 border-neutral-200/90 hover:border-neutral-300 hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  }`}
                >
                  <div>
                    {/* Top Row: Icon + Number & Interactive Selection Pill */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                            isSelected
                              ? "bg-[#ff7230] text-white shadow-[#ff7230]/30 shadow-md"
                              : "bg-[#ff7230]/10 text-[#ff7230] group-hover:bg-[#ff7230]/15"
                          }`}
                        >
                          <option.icon className="w-5 h-5 text-current transition-colors" />
                        </div>
                        <span className="font-mono text-xs font-bold text-neutral-400 tracking-wider">
                          {option.number}
                        </span>
                      </div>

                      {/* Interactive Selection Pill */}
                      <div>
                        {isSelected ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5e00] text-white text-xs font-semibold shadow-sm transition-all scale-105">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                            <span>Selected</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 group-hover:bg-[#ff5e00]/10 text-neutral-500 group-hover:text-[#ff5e00] text-xs font-semibold transition-colors">
                            <Plus className="w-3.5 h-3.5" />
                            <span>Select</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#ff5e00] transition-colors mb-2.5 leading-snug">
                      {option.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                      {option.description}
                    </p>

                    {/* Capabilities Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {option.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-md border transition-colors ${
                            isSelected
                              ? "bg-white text-neutral-800 border-[#ff5e00]/25 shadow-xs"
                              : "bg-neutral-50 group-hover:bg-white text-neutral-600 border-neutral-200/70"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Scope Status Line */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                      {option.scopeHighlight}
                    </span>
                    {isSelected ? (
                      <span className="text-[#ff5e00] font-semibold text-xs flex items-center gap-1">
                        In Scope ✓
                      </span>
                    ) : (
                      <span className="text-neutral-400 text-xs group-hover:text-neutral-600 transition-colors">
                        Click to add +
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Scope Summary Banner */}
          {selectedSolutions.length > 0 && (
            <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-white border border-[#ff5e00]/30 shadow-[0_8px_24px_rgba(255,94,0,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#ff7230]/10 flex items-center justify-center text-[#ff7230] flex-shrink-0">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    {selectedSolutions.length} Focus Area{selectedSolutions.length > 1 ? "s" : ""} Attached to Your Inquiry
                  </h4>
                  <p className="text-xs text-neutral-500 font-normal">
                    Our senior engineers will prepare dedicated architecture blueprints covering all selected capabilities.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {selectedSolutions.map((id) => {
                  const opt = SOLUTION_OPTIONS.find((s) => s.id === id);
                  return opt ? (
                    <span
                      key={id}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#ff5e00]/10 text-[#ff5e00] text-xs font-semibold border border-[#ff5e00]/20"
                    >
                      <span>{opt.number}. {opt.title}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSolution(id);
                        }}
                        className="hover:text-neutral-900 ml-1 cursor-pointer"
                        title="Remove"
                      >
                        ×
                      </button>
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Step 2: Form & Sidebar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-neutral-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
                  YOUR REQUIREMENTS
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
                  Tell us about your requirement
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Share as much or as little detail as you have. You don&apos;t need a fully defined project to get started.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-emerald-950 mb-2">
                    Inquiry Received!
                  </h4>
                  <p className="text-emerald-800 text-xs sm:text-sm max-w-md leading-relaxed mb-6 font-normal">
                    Thank you. Our senior engineering team is reviewing your requirements. We will prepare your structured feasibility assessment and contact you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900 cursor-pointer"
                  >
                    Submit another requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:border-[#ff5e00] focus:ring-2 focus:ring-[#ff5e00]/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Company or Project Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Health or Early Stage"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:border-[#ff5e00] focus:ring-2 focus:ring-[#ff5e00]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="david@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:border-[#ff5e00] focus:ring-2 focus:ring-[#ff5e00]/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:border-[#ff5e00] focus:ring-2 focus:ring-[#ff5e00]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Timeline Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Target Launch Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { id: "urgent", label: "Immediate" },
                        { id: "within-month", label: "Within 1 Month" },
                        { id: "1-3-months", label: "1 to 3 Months" },
                        { id: "exploring", label: "Research / POC" },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: t.id })}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                            formData.timeline === t.id
                              ? "bg-[#ff5e00] border-[#ff5e00] text-white shadow-sm"
                              : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Textarea */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Tell us about your requirement or concept
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Outline your goal, existing tech stack (if any), workflows to automate, or challenges you are looking to solve..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:border-[#ff5e00] focus:ring-2 focus:ring-[#ff5e00]/20 outline-none transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#FF7230] to-[#FF532B] text-white font-medium text-sm sm:text-base shadow-[0_4px_28px_rgba(255,94,0,0.35)] hover:shadow-[0_8px_36px_rgba(255,94,0,0.5)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Analyzing Requirements...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Architecture Feasibility Review →</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center font-normal">
                    Delivered to senior practitioners. Zero spam, 100% confidential under strict non-disclosure.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Direct Office & Contact Info (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Card 1: Start a Conversation */}
              <div className="bg-[#160a04] text-white rounded-3xl p-7 sm:p-9 border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.2)] relative overflow-hidden">
                <div
                  className="absolute right-0 top-0 w-64 h-64 bg-[#ff5e00]/15 rounded-full blur-[60px] pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[#ff8935] text-xs font-semibold uppercase tracking-wider mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
                    DIRECT ACCESS
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Let&apos;s Start a Conversation
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    Have a project in mind or need expert assistance? Our team is ready to understand your requirements, answer your questions, and help you find the right solutions. Get in touch with us today.
                  </p>

                  <a
                    href="https://wa.me/919786557739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs sm:text-sm transition-all"
                  >
                    <span>Instant Chat on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-[#ff7230]" />
                  </a>
                </div>
              </div>

              {/* Card 2: Office Location & Interlinked Map */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ff7230]/10 flex items-center justify-center text-[#ff7230]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-neutral-900">
                        Office Location
                      </h4>
                      <span className="text-[11px] font-mono uppercase text-neutral-400">
                        Coimbatore Headquarters
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-5">
                    No 721/2, Venky complex, Second floor, cross-cut road,<br />
                    Seth Narang Das Layout,<br />
                    Coimbatore – 641 012.
                  </p>
                </div>

                {/* Interlinked Google Map CTA */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-neutral-100 hover:bg-[#ff5e00] text-neutral-800 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-300 border border-neutral-200 hover:border-[#ff5e00] group"
                >
                  <span>Visit Our Office (Open in Google Maps)</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Card 3: Send a Message & Make a Phone Call */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/90 shadow-sm flex flex-col gap-6">
                {/* Send a Message */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-[#ff7230]/10 flex items-center justify-center text-[#ff7230]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                      Send a Message
                    </span>
                  </div>
                  <a
                    href="mailto:info@webnoxdigital.com"
                    className="text-sm font-semibold text-[#ff5e00] hover:underline pl-12 block"
                  >
                    info@webnoxdigital.com
                  </a>
                </div>

                <div className="h-[1px] w-full bg-neutral-100" />

                {/* Make a Phone Call */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#ff7230]/10 flex items-center justify-center text-[#ff7230]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                      Make a Phone Call
                    </span>
                  </div>
                  <div className="pl-12 flex flex-col gap-2">
                    <a
                      href="tel:+919786557739"
                      className="text-xs sm:text-sm font-medium text-neutral-700 hover:text-[#ff5e00] transition-colors"
                    >
                      +91 97865 57739
                    </a>
                    <a
                      href="tel:+919585125566"
                      className="text-xs sm:text-sm font-medium text-neutral-700 hover:text-[#ff5e00] transition-colors"
                    >
                      +91 95851 25566
                    </a>
                    <a
                      href="tel:+916380072252"
                      className="text-xs sm:text-sm font-medium text-neutral-700 hover:text-[#ff5e00] transition-colors"
                    >
                      +91 63800 72252
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
