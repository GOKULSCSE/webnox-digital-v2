"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const COMPARISON_ROWS = [
  {
    dimension: "Pricing & Licensing",
    webnox: "Zero per-user monthly seat fees. One-time engineering with 100% owned software asset.",
    microsoft: "Expensive monthly seat fee (₹2,500–₹3,000 / $30 per user every month).",
    offshore: "Low upfront cost, but limited functionality and fragile code.",
  },
  {
    dimension: "Action Execution & Tool-Calling",
    webnox:
      "Full bi-directional API execution. Updates CRMs, triggers ERP tasks, and drafts invoices with approvals.",
    microsoft: "Limited to basic Microsoft 365 app commands and surface-level scripts.",
    offshore: "Read-only text replies; cannot trigger actions in external business tools.",
  },
  {
    dimension: "Indian Software Integration",
    webnox: "Native connectors for Tally Prime, Zoho Books/CRM, SAP India, and WhatsApp API.",
    microsoft: "Requires complex Power Automate workarounds; poor Tally integration.",
    offshore: "Basic web chat widget only; no deep ERP or accounting connectors.",
  },
  {
    dimension: "Data Privacy & DPDP Compliance",
    webnox:
      "100% sovereign in-country hosting on AWS Mumbai or Azure India VPCs; full DPDP Act compliance.",
    microsoft: "Data processed across multitenant hyperscaler clouds with vendor telemetry.",
    offshore: "Unclear data retention; frequently routes private data through public APIs.",
  },
  {
    dimension: "Multilingual & Hinglish Support",
    webnox:
      "Custom fine-tuned tokenizers for English, Hindi, Tamil, Telugu, and conversational Hinglish.",
    microsoft: "Standard English support; poor handling of mixed Indic/Hinglish phrasing.",
    offshore: "Basic machine translation; fails on localized industry and trade jargon.",
  },
  {
    dimension: "Code & IP Ownership",
    webnox:
      "100% transfer of all source code, vector indices, model configurations, and pipeline scripts.",
    microsoft: "Zero code ownership; complete vendor lock-in to Microsoft's ecosystem.",
    offshore: "Partial ownership; often dependent on proprietary third-party platforms.",
  },
  {
    dimension: "Internal Database Grounding",
    webnox: "Custom hybrid RAG (Dense vector + BM25 sparse search) connected to SQL, NoSQL, and PDFs.",
    microsoft: "Restricted primarily to SharePoint, OneDrive, and M365 Graph data.",
    offshore: "Simple prompt injection with severe token limits and hallucinations.",
  },
  {
    dimension: "Human-in-the-Loop Safeguards",
    webnox:
      "Configurable approval workflows for high-risk financial, legal, and operational actions.",
    microsoft: "Opaque execution; limited enterprise policy customization.",
    offshore: "No audit logs or role-governed execution boundaries.",
  },
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="bg-[#fcf8f2] py-24 sm:py-32 text-[#160a04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF532B] mb-3">
            Architecture &amp; TCO Benchmark
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#160a04]">
            Comparison: Webnox Custom AI Copilots vs. Microsoft 365 Copilot vs. Basic Indian
            Offshore Chatbots
          </h2>
        </motion.div>

        <div className="overflow-x-auto rounded-3xl border border-neutral-200/90 bg-white shadow-xl">
          <table className="w-full min-w-[820px] border-collapse text-left">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="w-[20%] bg-[#160a04] px-6 py-5 text-sm font-bold uppercase tracking-wider text-neutral-200">
                  Comparison Dimension
                </th>
                <th className="w-[30%] bg-gradient-to-r from-[#FF7230] to-[#FF532B] px-6 py-5 text-sm font-bold uppercase tracking-wider text-white">
                  Webnox Custom AI Copilots (India)
                </th>
                <th className="w-[25%] bg-[#1f120b] px-6 py-5 text-sm font-bold uppercase tracking-wider text-neutral-200">
                  Microsoft 365 Copilot
                </th>
                <th className="w-[25%] bg-[#1f120b] px-6 py-5 text-sm font-bold uppercase tracking-wider text-neutral-200">
                  Basic Indian Offshore Chatbots
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80 text-sm">
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.dimension} className="transition-colors hover:bg-[#fdfaf6]">
                  <td className="px-6 py-5 font-bold text-[#160a04] align-top">
                    {row.dimension}
                  </td>
                  <td className="bg-[#FF7230]/[0.05] px-6 py-5 font-medium text-[#160a04] align-top">
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{row.webnox}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-neutral-600 align-top">
                    <div className="flex items-start gap-2">
                      <Minus className="mt-1 h-3.5 w-3.5 shrink-0 text-neutral-400" />
                      <span>{row.microsoft}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-neutral-600 align-top">
                    <div className="flex items-start gap-2">
                      <Minus className="mt-1 h-3.5 w-3.5 shrink-0 text-neutral-400" />
                      <span>{row.offshore}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
