"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Rocket,
  BrainCircuit,
  Cog,
  SquareTerminal,
  ChartNoAxesCombined,
  Database,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SolutionOption {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SOLUTION_OPTIONS: SolutionOption[] = [
  {
    id: "new-product",
    number: "01",
    title: "I'm starting a new product",
    description:
      "I have an idea but need a website, app, SaaS product, or AI solution.",
    icon: Rocket,
  },
  {
    id: "build-ai",
    number: "02",
    title: "I want to build with AI",
    description:
      "I need AI agents, chatbots, LLM applications, or generative AI.",
    icon: BrainCircuit,
  },
  {
    id: "repetitive-work",
    number: "03",
    title: "My team has repetitive work",
    description:
      "I want to automate operations, approvals, customer support, or workflows.",
    icon: Cog,
  },
  {
    id: "ai-existing-software",
    number: "04",
    title: "I need AI in existing software",
    description:
      "I want to connect AI with my applications, APIs, databases, or ERP.",
    icon: SquareTerminal,
  },
  {
    id: "digital-growth",
    number: "05",
    title: "I need more digital growth",
    description:
      "I want to improve SEO, AI search visibility, advertising, and lead generation.",
    icon: ChartNoAxesCombined,
  },
  {
    id: "custom-business-system",
    number: "06",
    title: "I need a custom business system",
    description:
      "I need enterprise software, an internal platform, or a connected business solution.",
    icon: Database,
  },
];

interface AwardBadge {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const AWARD_BADGES: AwardBadge[] = [
  {
    src: "/images/contact/1.png",
    alt: "Top SEO Service Companies India — Software Suggest 2020",
    width: 556,
    height: 370,
  },
  {
    src: "/images/contact/2.png",
    alt: "iTRate.co Top Digital Marketing Company Recognition",
    width: 556,
    height: 372,
  },
  {
    src: "/images/contact/3.png",
    alt: "Top Developers Clutch India 2022 Recognition",
    width: 556,
    height: 372,
  },
  {
    src: "/images/contact/4.png",
    alt: "Featured on Mobile App Daily Top Mobile App Marketing Agencies 2021",
    width: 544,
    height: 370,
  },
  {
    src: "/images/contact/5.png",
    alt: "MobileAppDaily Top Mobile App Marketing Companies in India 2026",
    width: 556,
    height: 372,
  },
  {
    src: "/images/contact/6.png",
    alt: "GoodFirms Top Digital Marketing Company Recognition",
    width: 556,
    height: 370,
  },
  {
    src: "/images/contact/7.png",
    alt: "Top Web Development Companies Recognition",
    width: 582,
    height: 370,
  },
];

export default function ArchitectSolution() {
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([
    "build-ai",
  ]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    requirements: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [awardIndex, setAwardIndex] = useState(0);
  const [awardsPerView, setAwardsPerView] = useState(5);
  const [isAwardSliderPaused, setIsAwardSliderPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const updatePerView = () => {
      const next =
        window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 3 : 2;
      setAwardsPerView(next);
      setAwardIndex((prev) =>
        Math.min(prev, Math.max(0, AWARD_BADGES.length - next))
      );
    };
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxAwardIndex = Math.max(0, AWARD_BADGES.length - awardsPerView);

  useEffect(() => {
    if (isAwardSliderPaused || maxAwardIndex === 0) return;
    const timer = setInterval(() => {
      setAwardIndex((prev) => (prev >= maxAwardIndex ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [isAwardSliderPaused, maxAwardIndex]);

  const handlePrevAward = () => {
    setAwardIndex((prev) => (prev <= 0 ? maxAwardIndex : prev - 1));
  };

  const handleNextAward = () => {
    setAwardIndex((prev) => (prev >= maxAwardIndex ? 0 : prev + 1));
  };

  const toggleSolution = (id: string) => {
    setSelectedSolutions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      requirements: "",
    });
    setIsSubmitted(false);
  };

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=No+721%2F2+Venky+complex+cross-cut+road+Seth+Narang+Das+Layout+Coimbatore+641012";

  return (
    <div className="relative w-full">
      {/* Top Hero Section */}
      <section className="relative w-full pt-32 pb-48 sm:pb-56 md:pt-40 overflow-hidden bg-[#160a04] text-white">
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
            Let&apos;s Architect Your Next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              AI or Web Solution
            </span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light mb-8">
            Share your technical requirements, product concept or automation
            challenge. Our engineering team reviews every inquiry and delivers a
            structured feasibility assessment within 24 hours.
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

        {/* Smooth Perceptual Dark-to-Cream Dissolve (#160a04 -> #fdfaf6) */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 sm:h-52 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(253, 250, 246, 0) 0%, rgba(195, 165, 140, 0.025) 12%, rgba(205, 175, 150, 0.065) 24%, rgba(214, 186, 162, 0.135) 36%, rgba(222, 198, 176, 0.24) 48%, rgba(232, 212, 194, 0.39) 60%, rgba(241, 226, 212, 0.58) 72%, rgba(247, 237, 226, 0.76) 82%, rgba(251, 245, 238, 0.90) 90%, rgba(252, 248, 243, 0.965) 95%, #fdfaf6 100%)",
          }}
          aria-hidden="true"
        />
      </section>

      {/* Main Interactive Assessment & Form Section (Light Warm Cream + Webnox Solar Orange) */}
      <section className="relative w-full -mt-px pt-4 sm:pt-8 pb-20 sm:pb-24 bg-[#fdfaf6] text-neutral-900 overflow-x-clip">
        {/* Subtle Warm Solar Orange Ambient Glow behind Assessment Header */}
        <div
          className="absolute left-1/2 top-4 sm:top-6 -translate-x-1/2 w-[780px] h-[340px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 114, 48, 0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Centered Assessment Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/[0.08] border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-[0.16em] mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse" />
              <span>Interactive Assessment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#12141a] leading-[1.15] mb-4">
              Find the Right AI Solution{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
                for Your Business
              </span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
              Tell us where your business is today. We&apos;ll help you
              identify the right combination of AI, software, automation, and
              digital growth services.
            </p>
          </div>

          {/* Two-Zone Horizontal Split: 2x3 Option Boxes (Left) + Contact Form Card (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] xl:grid-cols-[1.6fr_1fr] gap-6 items-stretch">
            {/* Left Zone: 2x3 Grid of 6 Selectable Solution Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4 sm:gap-5">
              {SOLUTION_OPTIONS.map((option) => {
                const isSelected = selectedSolutions.includes(option.id);
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => toggleSolution(option.id)}
                    className={`group relative rounded-2xl px-6 py-7 sm:px-6 sm:py-8 border text-center flex flex-col items-center justify-center transition-all duration-300 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00] ${
                      isSelected
                        ? "bg-gradient-to-b from-[#fffaf6] via-[#fff5ee] to-[#ffede0] border-[#ff5e00] shadow-[0_14px_32px_rgba(255,114,48,0.16),0_0_0_1px_rgba(255,94,0,0.15)]"
                        : "bg-white border-neutral-200/90 shadow-[0_4px_20px_rgba(18,20,26,0.03)] hover:border-[#ff5e00]/45 hover:bg-[#fffaf5] hover:shadow-[0_12px_28px_rgba(255,114,48,0.1)]"
                    }`}
                  >
                    {/* Active Top-Right Checkmark Circle */}
                    {isSelected && (
                      <span
                        className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(255,94,0,0.35)]"
                        aria-hidden="true"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}

                    {/* Top Center Icon */}
                    <div
                      className={`mb-3.5 transition-all duration-300 ${
                        isSelected
                          ? "text-[#ff5e00] scale-105"
                          : "text-neutral-500 group-hover:text-[#ff5e00]"
                      }`}
                    >
                      <option.icon className="w-8 h-8 stroke-[1.5]" />
                    </div>

                    {/* Title with Number Prefix */}
                    <h3 className="text-[15px] sm:text-base font-bold text-[#12141a] leading-snug mb-2">
                      <span
                        className={`font-mono mr-1.5 transition-colors ${
                          isSelected
                            ? "text-[#ff5e00]"
                            : "text-neutral-400 group-hover:text-[#ff5e00]"
                        }`}
                      >
                        {option.number}.
                      </span>
                      <span>{option.title}</span>
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed max-w-[270px]">
                      {option.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Zone: Your Contact & Project Info Form Card */}
            <div className="relative rounded-2xl p-6 sm:p-7 border border-[#ff7230]/25 bg-white shadow-[0_16px_44px_rgba(18,20,26,0.06),0_4px_20px_rgba(255,114,48,0.08)] flex flex-col justify-between overflow-hidden">
              {/* Subtle Ambient Corner Glow */}
              <div
                className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-[#ff7230]/[0.08] blur-[65px] pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="mb-5">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#12141a]">
                      Tell us about your requirement
                    </h3>
                    {selectedSolutions.length > 0 && (
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#ff5e00]/[0.08] border border-[#ff5e00]/25 text-[#ff5e00] whitespace-nowrap">
                        {selectedSolutions.length} selected
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                    Share as much or as little detail as you have. You
                    don&apos;t need a fully defined project to get started.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="flex-1 p-6 rounded-xl bg-[#fcf8f2] border border-[#ff7230]/25 text-center flex flex-col items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white flex items-center justify-center mb-4 shadow-[0_8px_24px_rgba(255,94,0,0.3)]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#12141a] mb-2">
                      Blueprint Request Received!
                    </h4>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-5">
                      Thank you. Our senior engineering team is reviewing your
                      requirements and will deliver your tailored AI solution
                      blueprint within 24 hours.
                    </p>

                    {selectedSolutions.length > 0 && (
                      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6">
                        {selectedSolutions.map((id) => {
                          const opt = SOLUTION_OPTIONS.find((s) => s.id === id);
                          return opt ? (
                            <span
                              key={id}
                              className="px-2.5 py-1 rounded-md bg-[#ff5e00]/[0.08] border border-[#ff5e00]/25 text-[#ff5e00] text-[11px] font-medium"
                            >
                              {opt.number}. {opt.title}
                            </span>
                          ) : null;
                        })}
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs font-semibold text-[#ff5e00] underline underline-offset-4 hover:text-[#12141a] transition-colors cursor-pointer"
                    >
                      Submit another requirement
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex-1 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="contact-full-name"
                          className="block text-xs font-semibold text-neutral-700 mb-1.5"
                        >
                          Full Name
                        </label>
                        <input
                          id="contact-full-name"
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#fdfaf6] border border-neutral-200/90 text-[#12141a] placeholder:text-neutral-400 text-sm focus:bg-white focus:border-[#ff5e00] focus:ring-2 focus:ring-[#ff5e00]/15 outline-none transition-all"
                        />
                      </div>

                      {/* Work Email */}
                      <div>
                        <label
                          htmlFor="contact-work-email"
                          className="block text-xs font-semibold text-neutral-700 mb-1.5"
                        >
                          Work Email
                        </label>
                        <input
                          id="contact-work-email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#fdfaf6] border border-neutral-200/90 text-[#12141a] placeholder:text-neutral-400 text-sm focus:bg-white focus:border-[#ff5e00] focus:ring-2 focus:ring-[#ff5e00]/15 outline-none transition-all"
                        />
                      </div>

                      {/* Phone / WhatsApp */}
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold text-neutral-700 mb-1.5"
                        >
                          Phone / WhatsApp
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#fdfaf6] border border-neutral-200/90 text-[#12141a] placeholder:text-neutral-400 text-sm focus:bg-white focus:border-[#ff5e00] focus:ring-2 focus:ring-[#ff5e00]/15 outline-none transition-all"
                        />
                      </div>

                      {/* Project Requirements */}
                      <div>
                        <label
                          htmlFor="contact-requirements"
                          className="block text-xs font-semibold text-neutral-700 mb-1.5"
                        >
                          Project Requirements
                        </label>
                        <textarea
                          id="contact-requirements"
                          rows={3}
                          placeholder="Outline your goal, existing tech stack, or challenges..."
                          value={formData.requirements}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              requirements: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#fdfaf6] border border-neutral-200/90 text-[#12141a] placeholder:text-neutral-400 text-sm focus:bg-white focus:border-[#ff5e00] focus:ring-2 focus:ring-[#ff5e00]/15 outline-none transition-all resize-y"
                        />
                      </div>
                    </div>

                    <div className="pt-2 space-y-3">
                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935] text-white font-semibold text-sm shadow-[0_8px_24px_rgba(255,94,0,0.28)] hover:shadow-[0_12px_32px_rgba(255,94,0,0.42)] hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <span>Preparing Your Blueprint...</span>
                        ) : (
                          <>
                            <span>Get Your AI Solution Blueprint</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      {/* Confidentiality Trust Note */}
                      <p className="text-xs text-neutral-500 flex items-center justify-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-[#ff5e00]" />
                        <span>24-hr response • NDA protected</span>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Awards Banner Slider Section */}
      <section className="relative w-full py-20 sm:py-24 bg-[#fcf8f2] text-neutral-900 border-t border-neutral-200/70 overflow-hidden">
        {/* Subtle Warm Solar Orange Ambient Glow */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[680px] h-[260px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 114, 48, 0.08) 0%, transparent 72%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/[0.08] border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-[0.16em] mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse" />
              <span>Excellence in Every Milestone</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#12141a]">
              Recognized for Excellence,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
                Chosen for Impact
              </span>
            </h2>
          </div>

          <div
            className="relative flex items-center gap-2 sm:gap-4"
            onMouseEnter={() => setIsAwardSliderPaused(true)}
            onMouseLeave={() => setIsAwardSliderPaused(false)}
            onFocusCapture={() => setIsAwardSliderPaused(true)}
            onBlurCapture={() => setIsAwardSliderPaused(false)}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const diff = touchStartX.current - e.changedTouches[0].clientX;
              touchStartX.current = null;
              if (Math.abs(diff) > 40) {
                if (diff > 0) handleNextAward();
                else handlePrevAward();
              }
            }}
          >
            {/* Previous Slide Button */}
            <button
              type="button"
              onClick={handlePrevAward}
              aria-label="Previous recognition badges"
              className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-200/90 shadow-sm text-neutral-700 hover:text-[#ff5e00] hover:border-[#ff5e00]/45 hover:bg-[#ff5e00]/[0.06] hover:shadow-[0_6px_20px_rgba(255,114,48,0.16)] flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slider Track Viewport (Shows 5 items on desktop initially) */}
            <div className="flex-1 min-w-0 overflow-hidden py-2">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${
                    awardIndex * (100 / awardsPerView)
                  }%)`,
                }}
              >
                {AWARD_BADGES.map((badge, idx) => (
                  <div
                    key={badge.src}
                    className="w-1/2 sm:w-1/3 lg:w-1/5 flex-shrink-0 px-1.5 sm:px-2.5"
                  >
                    <div className="group relative aspect-[220/276] w-full flex items-center justify-center px-3 pt-3 pb-7 drop-shadow-[0_4px_12px_rgba(18,20,26,0.05)] hover:drop-shadow-[0_12px_24px_rgba(255,114,48,0.14)] transition-all duration-300 hover:-translate-y-1.5">
                      <svg
                        viewBox="0 0 220 276"
                        preserveAspectRatio="none"
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient
                            id={`award-shield-grad-${idx}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="55%" stopColor="#fffaf5" />
                            <stop offset="100%" stopColor="#ffe8d9" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 16 1 H 204 Q 219 1 219 16 V 222 Q 219 233 208 238 L 116 273 Q 110 275 104 273 L 12 238 Q 1 233 1 222 V 16 Q 1 1 16 1 Z"
                          fill={`url(#award-shield-grad-${idx})`}
                          stroke="#f0dfd3"
                          strokeWidth="1"
                          vectorEffect="nonScalingStroke"
                        />
                      </svg>
                      <Image
                        src={badge.src}
                        alt={badge.alt}
                        width={badge.width}
                        height={badge.height}
                        sizes="(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 220px"
                        className="relative z-10 w-full h-auto max-h-[75%] object-contain select-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Slide Button */}
            <button
              type="button"
              onClick={handleNextAward}
              aria-label="Next recognition badges"
              className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-200/90 shadow-sm text-neutral-700 hover:text-[#ff5e00] hover:border-[#ff5e00]/45 hover:bg-[#ff5e00]/[0.06] hover:shadow-[0_6px_20px_rgba(255,114,48,0.16)] flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination Dots */}
          {maxAwardIndex > 0 && (
            <div className="mt-7 flex items-center justify-center gap-2">
              {Array.from({ length: maxAwardIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setAwardIndex(idx)}
                  aria-label={`Show recognition slide ${idx + 1}`}
                  aria-current={awardIndex === idx ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    awardIndex === idx
                      ? "w-7 bg-gradient-to-r from-[#FF7230] to-[#FF532B] shadow-[0_2px_8px_rgba(255,114,48,0.35)]"
                      : "w-2 bg-neutral-300 hover:bg-[#ff7230]/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Direct Access & Office Location 3-Column Row */}
      <section className="relative w-full py-16 sm:py-20 bg-[#fdfaf6] text-neutral-900 border-t border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Start a Conversation */}
            <div className="bg-[#160a04] text-white rounded-3xl p-7 sm:p-8 border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.16)] relative overflow-hidden flex flex-col justify-between">
              <div
                className="absolute right-0 top-0 w-56 h-56 bg-[#ff5e00]/15 rounded-full blur-[60px] pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[#ff8935] text-xs font-semibold uppercase tracking-wider mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
                  DIRECT ACCESS
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  Have a project in mind or need expert assistance? Our team is
                  ready to understand your requirements, answer your questions,
                  and help you find the right solutions. Get in touch with us
                  today.
                </p>
              </div>

              <a
                href="https://wa.me/919786557739"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs sm:text-sm transition-all"
              >
                <span>Instant Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#ff7230]" />
              </a>
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

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                  No 721/2, Venky complex, Second floor, cross-cut road,
                  <br />
                  Seth Narang Das Layout,
                  <br />
                  Coimbatore – 641 012.
                </p>
              </div>

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
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/90 shadow-sm flex flex-col justify-between gap-6 md:col-span-2 lg:col-span-1">
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
      </section>
    </div>
  );
}
