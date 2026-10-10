'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from './Header';
import LightRays from './LightRays';

// Exact Figma Our Orange gradient color stops for stroke interpolation:
// 0%: #FF7230, 26%: #FF6A2F, 44%: #FF7631, 63%: #FF8935, 100%: #FF532B
const FIGMA_STOPS = [
  { p: 0.00, r: 0xFF, g: 0x72, b: 0x30 },
  { p: 0.26, r: 0xFF, g: 0x6A, b: 0x2F },
  { p: 0.44, r: 0xFF, g: 0x76, b: 0x31 },
  { p: 0.63, r: 0xFF, g: 0x89, b: 0x35 },
  { p: 1.00, r: 0xFF, g: 0x53, b: 0x2B },
];

function getGradientColor(pos) {
  const p = Math.max(0, Math.min(1, pos));
  let s1 = FIGMA_STOPS[0];
  let s2 = FIGMA_STOPS[FIGMA_STOPS.length - 1];
  for (let i = 0; i < FIGMA_STOPS.length - 1; i++) {
    if (p >= FIGMA_STOPS[i].p && p <= FIGMA_STOPS[i + 1].p) {
      s1 = FIGMA_STOPS[i];
      s2 = FIGMA_STOPS[i + 1];
      break;
    }
  }
  const factor = (p - s1.p) / (s2.p - s1.p || 1);
  const r = Math.round(s1.r + (s2.r - s1.r) * factor);
  const g = Math.round(s1.g + (s2.g - s1.g) * factor);
  const b = Math.round(s1.b + (s2.b - s1.b) * factor);
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Hero({ onOpenContact, onOpenMenu }) {
  const [waveKey, setWaveKey] = useState(0);

  const handleReplayWave = () => {
    setWaveKey((prev) => prev + 1);
  };

  // Helper to render words split into staggered wavy characters with individual gradient strokes
  const renderWavyWord = (word, startIdx, totalCount, isAccent = false) => {
    return (
      <span className="wavy-word" key={`${word}-${startIdx}`}>
        {word.split('').map((char, i) => {
          const globalIdx = startIdx + i;
          const pos = globalIdx / Math.max(totalCount - 1, 1);
          const charStroke = '#ffc582ff';
          const delay = pos * 1.0;
          return (
            <span
              key={i}
              className={`wavy-char ${isAccent ? 'accent-orange' : ''}`}
              style={{
                '--char-stroke': charStroke,
                animationDelay: `${delay.toFixed(3)}s`,
              }}
            >
              {char}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <section className="hero-section" aria-label="Webnox AI Native Hero">
      {/* Ambient warm sky and atmospheric horizon glow */}
      <div className="hero-sky-ambient" aria-hidden="true" />
      <div className="hero-horizon-glow" aria-hidden="true" />

      {/* Volumetric Interactive LightRays Effect */}
      <div className="hero-light-rays" aria-hidden="true">
        <LightRays
          raysOrigin="top-left"
          raysColor="#ffa843"
          raysSpeed={1.2}
          lightSpread={1.5}
          rayLength={2.2}
          intensity={2.4}
          pulsating={false}
          fadeDistance={1.2}
          saturation={1.15}
          followMouse={true}
          mouseInfluence={0.12}
          noiseAmount={0.04}
          distortion={0.03}
          lightMode={false}
        />
      </div>

      {/* Orange Field Landscape Background */}
      <div className="hero-field-container" aria-hidden="true">
        <Image
          src="/assets/Orange Filed.png"
          alt="Webnox AI Landscape - Orange Field"
          fill
          priority
          sizes="100vw"
          className="hero-field-img"
        />
      </div>

      {/* Header Navigation */}
      <Header onOpenMenu={onOpenMenu} onOpenContact={onOpenContact} />

      <div className="hero-content">
        {/* Trusted by Many Pill Badge */}
        <div className="trusted-badge-container">
          <div className="trusted-badge" role="status">
            <div className="trusted-avatars" aria-hidden="true">
              <span className="avatar-wrapper">
                <Image
                  src="/assets/Frame 5.png"
                  alt="Partner logo 1"
                  width={28}
                  height={28}
                  className="avatar-icon"
                />
              </span>
              <span className="avatar-wrapper">
                <Image
                  src="/assets/Frame 6.png"
                  alt="Partner logo 2"
                  width={28}
                  height={28}
                  className="avatar-icon"
                />
              </span>
              <span className="avatar-wrapper">
                <Image
                  src="/assets/Frame 7.png"
                  alt="Partner logo 3"
                  width={28}
                  height={28}
                  className="avatar-icon"
                />
              </span>
              <span className="avatar-wrapper">
                <Image
                  src="/assets/Frame 8.png"
                  alt="Partner logo 4"
                  width={28}
                  height={28}
                  className="avatar-icon"
                />
              </span>
            </div>
            <span className="trusted-text">Trusted by Many</span>
          </div>
        </div>

        {/* Hero Title with Gradient Stroke Fade In followed by 1s Wavy Fill */}
        <h1
          className="hero-title"
          key={waveKey}
          onMouseEnter={handleReplayWave}
          aria-label="AI Native Company Building AI Solutions"
        >
          <div className="title-row first-row" aria-hidden="true">
            {renderWavyWord('AI', 0, 15, true)}{' '}
            {renderWavyWord('Native', 2, 15)}{' '}
            {renderWavyWord('Company', 8, 15)}
          </div>
          <div className="title-row second-row" aria-hidden="true">
            {renderWavyWord('Building', 0, 20)}
            <div
              className="creation-capsule"
              aria-label="Human and AI collaboration symbol"
              style={{ animationDelay: '0.43s' }}
            >
              <div className="capsule-hand human-hand">
                <Image
                  src="/assets/Human hand.png"
                  alt="Human hand"
                  width={97}
                  height={82}
                  className="hand-asset"
                  priority
                />
              </div>
              <div className="capsule-center-logo">
                <Image
                  src="/assets/Logo glow 1.1.png"
                  alt="Webnox infinity emblem"
                  width={132}
                  height={89}
                  className="logo-glow-asset"
                  priority
                />
              </div>
              <div className="capsule-hand robo-hand">
                <Image
                  src="/assets/Robo hand.png"
                  alt="Robotic hand"
                  width={114}
                  height={85}
                  className="hand-asset"
                  priority
                />
              </div>
            </div>
            {renderWavyWord('AI', 9, 20)}{' '}
            {renderWavyWord('Solutions', 11, 20)}
          </div>
        </h1>

        {/* Hero Subtitle Description */}
        <p className="hero-description">
          Build software, AI agents, applications and digital products with Webnox. We provide<br className="hero-desc-br" />
          AI development services that turn business ideas into production-ready AI solutions.
        </p>

        {/* Primary Action Button */}
        <div className="hero-action-group">
          <button
            type="button"
            className="cta-pill-button"
            onClick={onOpenContact}
            id="build-ai-solution-cta"
          >
            Build Your AI Solution
          </button>
        </div>
      </div>
    </section>
  );
}
