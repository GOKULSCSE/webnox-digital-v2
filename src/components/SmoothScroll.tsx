"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with autoResize and smooth parameters
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      autoResize: true,
      anchors: true,
    });

    lenisRef.current = lenis;

    // Expose instance globally for programmatic scrolls (e.g. CTA buttons)
    if (typeof window !== "undefined") {
      (window as any).__lenis = lenis;
    }

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Sync Lenis with ScrollTrigger's height calculations
    const onScrollTriggerRefresh = () => {
      lenis.resize();
    };
    ScrollTrigger.addEventListener("refresh", onScrollTriggerRefresh);

    // Continuous tick synchronization with GSAP ticker
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // CRITICAL: Watch body and documentElement mutations so dynamic content (images, 3D canvases, steppers)
    // continuously updates Lenis's internal scroll limit and never locks the scrollbar
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });

    if (typeof document !== "undefined") {
      if (document.body) resizeObserver.observe(document.body);
      if (document.documentElement) resizeObserver.observe(document.documentElement);
    }

    const onWindowLoad = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", onWindowLoad);

    // Staggered resizes to catch asynchronous fonts, 3D models, and images settling
    const timers = [100, 300, 600, 1000, 2000, 3500].map((ms) =>
      setTimeout(() => {
        lenis.resize();
        ScrollTrigger.refresh();
      }, ms)
    );

    return () => {
      timers.forEach(clearTimeout);
      resizeObserver.disconnect();
      window.removeEventListener("load", onWindowLoad);
      ScrollTrigger.removeEventListener("refresh", onScrollTriggerRefresh);
      gsap.ticker.remove(tickerUpdate);
      if (typeof window !== "undefined") {
        delete (window as any).__lenis;
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
