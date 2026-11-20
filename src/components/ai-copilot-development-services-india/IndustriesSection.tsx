"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Headset,
  Landmark,
  Truck,
  Stethoscope,
  Code2,
  Check,
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: TrendingUp,
    title: "1. Sales & CRM AI Copilots",
    description:
      "Our sales copilots analyze customer conversations, update Zoho deals, draft proposals and help close deals faster.",
    useCases: [
      "Automated CRM deal updates",
      "Custom sales quotation drafting",
      "Instant WhatsApp lead qualification",
    ],
  },
  {
    icon: Headset,
    title: "2. Customer Support & BPO Copilots",
    description:
      "Our support copilots resolve customer tickets, check live inventory, process refunds and guide human support agents.",
    useCases: [
      "Fast Tier-1 ticket resolution",
      "Multilingual Hindi/English chat support",
      "Live agent response suggestions",
    ],
  },
  {
    icon: Landmark,
    title: "3. Accounting, GST & Finance Copilots",
    description:
      "Our finance copilots reconcile bank ledgers, create GST invoices in Tally and simplify monthly audit reporting.",
    useCases: [
      "Automated Tally GST billing",
      "Bank ledger reconciliation",
      "Vendor payment follow-up reminders",
    ],
  },
  {
    icon: Truck,
    title: "4. ERP, Supply Chain & Logistics Copilots",
    description:
      "Our operational logistics copilots monitor warehouse stock, track deliveries, generate e-way bills and streamline supply chains.",
    useCases: [
      "Automated e-way bill generation",
      "Real-time warehouse inventory checks",
      "Supplier purchase order drafting",
    ],
  },
  {
    icon: Stethoscope,
    title: "5. Healthcare & Clinical Workflow Copilots",
    description:
      "Our healthcare copilots summarize patient histories, review clinical guidelines and draft visit notes for licensed doctors.",
    useCases: [
      "Patient medical history summaries",
      "Clinical guideline verification",
      "Doctor visit note drafting",
    ],
  },
  {
    icon: Code2,
    title: "6. Software Engineering & Code Copilots",
    description:
      "Our software engineering copilots search internal codebases, write unit tests and explain complex legacy enterprise systems.",
    useCases: [
      "Private codebase semantic search",
      "Automated test script generation",
      "Legacy system code documentation",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="relative overflow-hidden bg-[#080503] py-24 sm:py-32 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[#FF532B]/12 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF945E] mb-3">
            Domain-Tuned Execution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5">
            Custom Domain Copilots Tailored to Indian Industries
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            As an AI copilot development company in India, Webnox Digital engineers domain-specific
            enterprise AI copilot solutions tailored to critical business sectors:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7230]/50 hover:bg-white/[0.06]"
              >
                <div>
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7230]/20 to-[#FF532B]/20 text-[#FF7230]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {industry.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF945E] mb-3">
                    Top Use Cases:
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-200">
                    {industry.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF7230]" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
