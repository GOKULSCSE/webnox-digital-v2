'use client';

import React from 'react';

const CAPABILITIES = [
  {
    num: '01 / AGENTS',
    title: 'Autonomous AI Agents & Workflows',
    desc: 'Self-governing reasoning agents built with multi-step tool execution, memory graphs, and fail-safe human-in-the-loop controls.',
  },
  {
    num: '02 / PLATFORMS',
    title: 'Custom LLM Applications & RAG',
    desc: 'Domain-adapted retrieval-augmented architectures and fine-tuned embeddings that anchor intelligence in your proprietary company knowledge.',
  },
  {
    num: '03 / PRODUCTION',
    title: 'Enterprise-Grade AI Architecture',
    desc: 'Ultra-low latency inference, observable tracing, robust rate limiting, and turnkey cloud deployment designed for venture scale.',
  },
];

export default function StudioShowcase({ onStartProject }) {
  return (
    <section className="showcase-section" id="studio-capabilities" aria-label="Webnox AI Capabilities">
      <div className="showcase-inner">
        <div className="showcase-header">
          <span className="section-pill">Our Capabilities</span>
          <h2>Engineered for intelligence, speed, and production reliability</h2>
          <p className="showcase-subtitle">
            We partner with visionary enterprises to transform complex intelligence workflows into polished, market-leading software.
          </p>
        </div>

        <div className="showcase-grid">
          {CAPABILITIES.map((cap) => (
            <div key={cap.num} className="capability-card">
              <div className="card-badge">{cap.num}</div>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="showcase-banner">
          <div>
            <div className="banner-tag">Production Guarantee</div>
            <p className="banner-text">
              Every system is delivered with end-to-end evaluation metrics, monitoring dashboards, and clean handoff documentation.
            </p>
          </div>
          <button className="cta-pill-button" onClick={onStartProject}>
            Schedule an AI Architecture Call →
          </button>
        </div>
      </div>
    </section>
  );
}
