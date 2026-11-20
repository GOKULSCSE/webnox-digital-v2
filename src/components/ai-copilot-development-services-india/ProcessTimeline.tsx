"use client";

import { motion } from "framer-motion";
import Stepper, { Step } from "@/components/ui/Stepper";
import { Compass, FlaskConical, ShieldCheck, Rocket, CheckCircle2 } from "lucide-react";

const PHASES = [
  {
    icon: Compass,
    phase: "Phase 01",
    timeline: "Weeks 1",
    title: "Phase 01: Workflow Discovery & Architecture Blueprint (Weeks 1)",
    summary:
      "We review your daily workflows, find manual bottlenecks and design a clear engineering plan for your custom copilot.",
    whatWeDo: "Map software APIs, plan DPDP data security and select the right AI models.",
    whatYouReceive:
      "Complete AI Copilot Architecture Blueprint, API connectivity plan, and cloud cost estimates.",
  },
  {
    icon: FlaskConical,
    phase: "Phase 02",
    timeline: "Weeks 2",
    title: "Phase 02: Working Prototype & Accuracy Testing (Weeks 2)",
    summary:
      "Using custom AI copilot development in India, we build a private working test model connected to a sample of your real business files.",
    whatWeDo:
      "Program API tool-calling, test human approval buttons and benchmark answer accuracy.",
    whatYouReceive:
      "Working test copilot sandbox, automated action test logs and source citation reports.",
  },
  {
    icon: ShieldCheck,
    phase: "Phase 03",
    timeline: "Weeks 3",
    title: "Phase 03: Live System Integration & DPDP Security (Weeks 3)",
    summary:
      "Through expert AI copilot integration services in India, we connect your assistant directly into your live business software.",
    whatWeDo:
      "Connect Tally, Zoho and CRM databases, set employee access rules, and add automated DPDP privacy guards.",
    whatYouReceive:
      "Production ready enterprise AI copilot solutions in India running inside your web apps, ERP and WhatsApp.",
  },
  {
    icon: Rocket,
    phase: "Phase 04",
    timeline: "Ongoing",
    title: "Phase 04: Production Launch, Training & Optimization (Ongoing)",
    summary:
      "We launch your copilot across departments, train your staff and continuously optimize speed and computing costs.",
    whatWeDo:
      "Train your workforce, monitor query speeds, update API connectors and reduce monthly token bills.",
    whatYouReceive:
      "100% full source code ownership, admin operational guides, team training and dedicated support SLAs.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="bg-[#fdfaf6] py-24 sm:py-32 text-[#160a04] border-b border-neutral-200/70"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF532B] mb-3">
            Execution Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#160a04] mb-5">
            Our 4-Phase AI Copilot Engineering Roadmap
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            As a trusted AI copilot development company in India, we follow a simple 4-phase
            roadmap to take your team from slow manual chores to a live, working copilot in 4 weeks:
          </p>
        </motion.div>

        <div className="flex justify-center">
          <Stepper
            initialStep={1}
            theme="light"
            accentColor="#ff5e00"
            width="100%"
            radius={28}
            frame={true}
            linear={false}
            indicator="numbers"
            orientation="horizontal"
            transition="slide"
            backButtonText="Previous Phase"
            nextButtonText="Next Phase"
            completeButtonText="Start Your Copilot Project"
            className="w-full max-w-4xl shadow-xl border border-neutral-200/90 bg-white/95"
            contentClassName="px-4 sm:px-8"
            completedContent={
              <div className="py-10 text-center">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#160a04] mb-2">
                  Ready to Build Your Sovereign AI Copilot?
                </h3>
                <p className="text-neutral-600 max-w-lg mx-auto mb-6">
                  Schedule an architecture session with our senior engineers to map your Tally,
                  Zoho, SAP, or WhatsApp workflows.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FF7230] to-[#FF532B] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  Schedule an Architecture Call
                </a>
              </div>
            }
          >
            {PHASES.map((item) => {
              const Icon = item.icon;
              return (
                <Step key={item.phase} title={`${item.phase} (${item.timeline})`}>
                  <div className="py-4 sm:py-6">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white shadow-md">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-[#FF7230]/12 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF532B]">
                        {item.timeline}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#160a04] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed mb-6">{item.summary}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-neutral-200 bg-[#fdfaf6] p-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#FF532B] mb-2">
                          What We Do
                        </p>
                        <p className="text-sm text-neutral-700 leading-relaxed">{item.whatWeDo}</p>
                      </div>
                      <div className="rounded-2xl border border-[#FF7230]/25 bg-gradient-to-br from-[#FF7230]/[0.07] to-white p-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#160a04] mb-2">
                          What You Receive
                        </p>
                        <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                          {item.whatYouReceive}
                        </p>
                      </div>
                    </div>
                  </div>
                </Step>
              );
            })}
          </Stepper>
        </div>
      </div>
    </section>
  );
}
