'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Hero';
import GradientSvgBackground from './GradientSvgBackground';
import './ScrollZoomSection.css';

// Dynamically import Three.js canvas without SSR
const MonitorCanvas = dynamic(() => import('./MonitorCanvas'), {
  ssr: false,
});

export default function ScrollZoomSection({ onOpenContact, onOpenMenu, onExploreStudio }) {
  const trackRef = useRef(null);
  const pinRef = useRef(null);
  const heroOverlayRef = useRef(null);
  const darkCardRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const pin = pinRef.current;
    if (!track || !pin) return;

    const ctx = gsap.context(() => {
      // Create master timeline pinned to viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: track,
          start: 'top top',
          end: 'bottom bottom',
          pin: pin,
          scrub: 1.0, // Buttery smooth scrub damping
          anticipatePin: 1,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
          },
        },
      });

      // 1. Fade out DOM Hero overlay smoothly (t: 0 -> 0.12)
      tl.to(
        heroOverlayRef.current,
        {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.12,
          ease: 'power1.out',
        },
        0
      );

      // 2. Dark Card transition:
      // Holds fullscreen across Stage 1 & 2 (t: 0 -> 0.38) matching Shot 1 & 2
      // Then smoothly scales into the rounded card (t: 0.38 -> 0.85) matching Shot 3
      tl.fromTo(
        darkCardRef.current,
        {
          borderRadius: '0px',
          width: '100vw',
          height: '100vh',
          boxShadow: 'none',
        },
        {
          borderRadius: 'clamp(36px, 3.8vw, 60px)',
          width: 'min(92vw, 1380px)',
          height: 'min(86vh, 820px)',
          boxShadow: '0 30px 90px -20px rgba(0, 0, 0, 0.55), 0 0 70px rgba(241, 76, 12, 0.16)',
          duration: 0.47,
          ease: 'power2.inOut',
        },
        0.38
      );
    }, track);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="scroll-zoom-track" ref={trackRef} aria-label="Webnox Scroll Experience">
      <div className="scroll-zoom-pin" ref={pinRef}>
        {/* Warm cream page background revealed around the card in Shot 3 */}
        <div className="pin-page-bg" aria-hidden="true" />

        {/* Master Dark Card framing the 3D Monitor */}
        <div className="zoom-dark-card" ref={darkCardRef}>
          {/* Exact Background Gradient SVG from Figma asset */}
          <div className="card-svg-bg-container" aria-hidden="true">
            <GradientSvgBackground />
          </div>
        </div>

        {/* Three.js Canvas Layer covering viewport */}
        <div className="monitor-canvas-layer" aria-hidden="true">
          <MonitorCanvas progress={scrollProgress} />
        </div>

        {/* Live DOM Hero Section Overlay (Shot 1) */}
        <div className="hero-dom-overlay" ref={heroOverlayRef}>
          <Hero
            onOpenContact={onOpenContact}
            onOpenMenu={onOpenMenu}
            onExploreStudio={onExploreStudio}
          />
        </div>
      </div>
    </section>
  );
}
