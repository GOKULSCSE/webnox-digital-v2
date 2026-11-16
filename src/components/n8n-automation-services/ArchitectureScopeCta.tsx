"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function ArchitectureScopeCta() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#160a04] text-white overflow-hidden py-20 sm:py-28 lg:py-32 selection:bg-[#ff5e00] selection:text-white"
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

      {/* Ambient Orange Glow */}
      <div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.25) 0%, rgba(255, 94, 0, 0.1) 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Logo, Heading, Description */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="mb-6 sm:mb-8">
              <Image
                src="/images/Webnox logo White.svg"
                alt="Webnox"
                width={140}
                height={28}
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.14]">
              Scope Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF6A2F] to-[#FF8935]">
                n8n Automation Architecture
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 text-neutral-200/90 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
              Book a 30-minute technical session with a Webnox Digital automation engineer. We assess your existing workflows, review n8n Cloud and self-hosted options, and outline an implementation plan.
            </p>
          </div>

          {/* Right Column: Scoping Form */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] bg-[#1c1009]/95 border border-white/15 p-6 sm:p-8 shadow-2xl">
              {submitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#FF7230]/20 text-[#FF7230] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Architecture Session Requested
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 max-w-md mb-6">
                    Thank you, {formData.fullName || "there"}. Our automation engineering team will reach out to{" "}
                    <span className="text-white font-medium">{formData.workEmail}</span>{" "}
                    shortly to schedule your 30-minute session.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        workEmail: "",
                        phone: "",
                        requirements: "",
                      });
                    }}
                    className="text-sm font-semibold text-[#FF7230] hover:text-[#FF8935] underline underline-offset-4 cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="n8n-full-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="n8n-full-name"
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
                        htmlFor="n8n-work-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                      >
                        Work Email
                      </label>
                      <input
                        id="n8n-work-email"
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

                  <div>
                    <label
                      htmlFor="n8n-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      id="n8n-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF7230] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="n8n-requirements"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5"
                    >
                      Automation Requirements
                    </label>
                    <textarea
                      id="n8n-requirements"
                      rows={3}
                      required
                      value={formData.requirements}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requirements: e.target.value,
                        })
                      }
                      placeholder="Describe the systems, workflows, or self-hosted setup you need..."
                      className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF7230] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-3.5 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,114,48,0.35)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <span>Book Your Architecture Session</span>
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

