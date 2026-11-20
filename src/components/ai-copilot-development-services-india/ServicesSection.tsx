"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Workflow,
  DatabaseZap,
  ReceiptIndianRupee,
  Bot,
  ShieldAlert,
  Languages,
  Cpu,
  SearchCheck,
  Server,
  KeyRound,
  Gauge,
  MessageSquareCode,
} from "lucide-react";

const CORE_SERVICES = [
  {
    number: "01",
    icon: Workflow,
    title: "01. Custom AI Copilot Development",
    description:
      "Our custom AI copilot development in India connects directly to your daily business software, automating manual workflows without forcing your team to switch between multiple apps.",
  },
  {
    number: "02",
    icon: DatabaseZap,
    title: "02. Enterprise AI Copilot Solutions",
    description:
      "Our enterprise AI copilot solutions in India search private files, spreadsheets and databases, delivering fast, truthful answers while following your team's existing employee document permission rules.",
  },
  {
    number: "03",
    icon: ReceiptIndianRupee,
    title: "03. Tally & Zoho Copilot Integration",
    description:
      "Through expert AI copilot integration services in India, we connect assistants directly with Tally Prime, Zoho Books, Zoho CRM, SAP and WhatsApp to automate accounting tasks.",
  },
  {
    number: "04",
    icon: Bot,
    title: "04. Agentic Tool Calling Copilots",
    description:
      "Through agentic AI copilot development India, we engineer smart assistants that break complex operational tasks into smaller steps, run external software APIs, and update records safely.",
  },
  {
    number: "05",
    icon: ShieldAlert,
    title: "05. DPDP-Compliant Enterprise Copilots",
    description:
      "Our DPDP compliant AI copilot development keeps your data inside India on AWS Mumbai or Azure Pune, protecting customer privacy without sharing records with public AI.",
  },
  {
    number: "06",
    icon: Languages,
    title: "06. Multilingual Indic & Hinglish Copilots",
    description:
      "As a custom AI copilot development company in India, we build assistants that understand English, Hindi, Tamil, Telugu, and natural Hinglish to support your diverse workforce.",
  },
];

const TECHNICAL_FRAMEWORKS = [
  {
    icon: Cpu,
    title: "01. Autonomous API Tool-Calling & Action Execution",
    description:
      "Our custom AI copilot development in India calls software APIs, updates CRM records, generates GST invoices and executes tasks with human approval.",
  },
  {
    icon: SearchCheck,
    title: "02. Hallucination Free Hybrid Vector Grounding",
    description:
      "Through enterprise AI copilot solutions India, we ground your assistant in verified company files using hybrid search, ensuring truthful answers without guessing.",
  },
  {
    icon: Server,
    title: "03. In Country Sovereign Cloud Hosting",
    description:
      "Our DPDP compliant AI copilot development deploys inside your dedicated AWS Mumbai or Azure Pune clouds, keeping sensitive data strictly within India.",
  },
  {
    icon: KeyRound,
    title: "04. Identity Governed Role-Based Access Controls",
    description:
      "Through AI copilot integration services in India, we connect corporate logins, ensuring workers only access authorized documents while keeping confidential records private.",
  },
  {
    icon: Gauge,
    title: "05. Smart Memory Caching & Compute Cost Optimization",
    description:
      "As a custom AI copilot development company in India, we cache frequent queries, delivering instant sub second answers while slashing monthly cloud bills.",
  },
  {
    icon: MessageSquareCode,
    title: "06. WhatsApp Business API Workspace Integration",
    description:
      "Through agentic AI copilot development India, we deploy assistants into WhatsApp Business, enabling field teams and managers to trigger automated workflows instantly.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#fcf8f2] py-24 sm:py-32 text-[#160a04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Core Services Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF532B] mb-3">
            Full-Stack Copilot Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#160a04] mb-5">
            Core AI Copilot Development Services We Engineer in India
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            As a specialized AI copilot development company in India, Webnox Digital delivers custom
            copilot solutions engineered to automate complex workplace tasks safely:
          </p>
        </motion.div>

        {/* Core Services 6-Card Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CORE_SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="group flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7230]/50 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF7230]/12 text-[#FF532B] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[#FF7230] group-hover:to-[#FF532B] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-neutral-400">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#160a04] mb-3">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-[15px]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mid-Section Dark Obsidian SaaS-Ownership Callout */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mt-20 relative overflow-hidden rounded-[2rem] bg-[#160a04] p-9 sm:p-14 text-white shadow-2xl"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FF7230]/20 blur-3xl"
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
                Stop Paying Monthly SaaS Fees: Own Your AI Copilot
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                Commercial copilots charge high monthly per-user fees without giving you code
                control. We build custom copilots that automate daily tasks safely inside your own
                private cloud.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF7230] to-[#FF532B] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
              >
                Build Your Custom AI Copilot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#FF7230]/60 hover:bg-white/10"
              >
                Schedule an Architecture Call
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Advanced Technical Frameworks Sub-section */}
        <div id="frameworks" className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-12"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF532B] mb-2">
              Enterprise Architecture Stack
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#160a04]">
              Advanced Technical Frameworks Powering Our Indian AI Copilots
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNICAL_FRAMEWORKS.map((fw, idx) => {
              const Icon = fw.icon;
              return (
                <motion.div
                  key={fw.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="rounded-3xl border border-neutral-200 bg-white/90 p-7 shadow-sm transition-all duration-300 hover:border-[#FF7230]/50 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#160a04] mb-2.5">{fw.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{fw.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
