"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

const DISCUSSION_STEPS = [
  {
    number: "01",
    title: "Understand Your Business Requirements",
    description:
      "Discuss your business objectives, existing applications, target users and expected AI capabilities.",
  },
  {
    number: "02",
    title: "Evaluate the Technical Approach",
    description:
      "Identify suitable models, RAG requirements, agent workflows, integration methods and deployment options.",
  },
  {
    number: "03",
    title: "Define the Development Scope",
    description:
      "Discuss the proposed architecture, implementation stages, technical dependencies and estimated development effort.",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    phone: "",
    industry: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-[#160a04] text-white overflow-hidden selection:bg-[#ff5e00] selection:text-white"
    >
      {/* Deep Background Gradient Base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 82% 50%, #2e1307 0%, #1a0b04 45%, #130702 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Expectations + Direct Engineering Contact */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FF7230] mb-3">
                Let&apos;s Build Your Generative AI Solution
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.15]">
                Turn Your Business Requirements into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF6A2F] to-[#FF8935]">
                  Intelligent Applications
                </span>
              </h2>
              <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                Whether you are planning to develop an AI-powered product, integrate LLMs into an existing platform or automate complex business workflows, Webnox Digital can help you define the right technical approach. Connect with our team to discuss your use case, evaluate technical feasibility and plan your Generative AI development project.
              </p>
            </div>

            {/* What to Expect */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                What to Expect from Your Initial Technical Discussion
              </h3>
              <div className="space-y-3.5">
                {DISCUSSION_STEPS.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 flex items-start gap-4"
                  >
                    <span className="text-xs font-bold text-[#FF7230] bg-[#FF7230]/15 border border-[#FF7230]/30 rounded-lg px-2.5 py-1 flex-shrink-0 mt-0.5">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Engineering Contact */}
            <div className="rounded-2xl bg-[#1c1009] border border-white/10 p-5 sm:p-6 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#FF7230]">
                Direct Engineering Contact
              </h3>
              <div className="space-y-2.5 text-sm text-neutral-200">
                <a
                  href="mailto:contact@webnoxdigital.com"
                  className="flex items-center gap-3 hover:text-[#FF7230] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FF7230]" />
                  <span>contact@webnoxdigital.com</span>
                </a>
                <a
                  href="tel:+919786557739"
                  className="flex items-center gap-3 hover:text-[#FF7230] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FF7230]" />
                  <span>+91 97865 57739</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FF7230] flex-shrink-0 mt-0.5" />
                  <span>
                    Coimbatore, Tamil Nadu, India — Serving businesses across India and global markets.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] bg-[#1c1009]/95 border border-white/15 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Discuss Your Generative AI Project
              </h3>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#FF7230]/20 text-[#FF7230] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Technical Consultation Scheduled
                  </h4>
                  <p className="text-sm text-neutral-300 max-w-md mb-6">
                    Thank you, {formData.fullName || "there"}. Our engineering team will reach out to{" "}
                    <span className="text-white font-medium">{formData.workEmail}</span>{" "}
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        workEmail: "",
                        companyName: "",
                        phone: "",
                        industry: "",
                        requirements: "",
                      });
                    }}
                    className="text-sm font-semibold text-[#FF7230] hover:text-[#FF8935] underline underline-offset-4 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="genai-full-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="genai-full-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Your full name"
                        className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF7230] transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="genai-work-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                      >
                        Work Email *
                      </label>
                      <input
                        id="genai-work-email"
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, workEmail: e.target.value })
                        }
                        placeholder="name@company.com"
                        className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF7230] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="genai-company"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                      >
                        Company Name *
                      </label>
                      <input
                        id="genai-company"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyName: e.target.value,
                          })
                        }
                        placeholder="Company name"
                        className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF7230] transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="genai-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="genai-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF7230] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="genai-industry"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Industry
                    </label>
                    <input
                      id="genai-industry"
                      type="text"
                      value={formData.industry}
                      onChange={(e) =>
                        setFormData({ ...formData, industry: e.target.value })
                      }
                      placeholder="e.g., BFSI, Healthcare, Manufacturing, Retail, SaaS"
                      className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF7230] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="genai-requirements"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Describe Your Generative AI Requirements *
                    </label>
                    <textarea
                      id="genai-requirements"
                      rows={4}
                      required
                      value={formData.requirements}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requirements: e.target.value,
                        })
                      }
                      placeholder="Tell us about your use case, data sources, integrations, or deployment preferences..."
                      className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF7230] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-3.5 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,114,48,0.35)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <span>Schedule a Technical Consultation</span>
                    <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FF5E00] to-[#FF8935] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:rotate-12 flex-shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-white fill-white" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

