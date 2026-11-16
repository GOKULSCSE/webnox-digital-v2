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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      stopInertiaOnNavigate: true,
      prevent: (node) =>
        node instanceof HTMLTextAreaElement &&
        node.scrollHeight > node.clientHeight,
    });

    lenisRef.current = lenis;
    (window as unknown as { __webnoxLenis?: Lenis }).__webnoxLenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    // Sync Lenis with ScrollTrigger's height calculations (especially for pin spacers)
    const handleScrollTriggerRefresh = () => {
      lenis.resize();
    };
    ScrollTrigger.addEventListener("refresh", handleScrollTriggerRefresh);

    const handleTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(handleTick);
    gsap.ticker.lagSmoothing(0);

    let lastScrollHeight = document.documentElement.scrollHeight;
    let resizeRafId: number | null = null;
    let isDisposed = false;

    const syncDimensions = () => {
      if (isDisposed) return;
      const currentScrollHeight = document.documentElement.scrollHeight;
      if (currentScrollHeight !== lastScrollHeight) {
        lastScrollHeight = currentScrollHeight;
        if (lenis.isScrolling === "smooth") {
          lenis.dimensions.resize();
        } else {
          lenis.resize();
        }
      } else {
        lenis.dimensions.resize();
      }
    };

    const scheduleResize = () => {
      if (isDisposed || resizeRafId !== null) return;
      resizeRafId = window.requestAnimationFrame(() => {
        resizeRafId = null;
        syncDimensions();
      });
    };

    const resizeObserver = new ResizeObserver(scheduleResize);
    resizeObserver.observe(document.documentElement);
    resizeObserver.observe(document.body);

    window.addEventListener("load", scheduleResize);
    document.fonts?.ready.then(scheduleResize).catch(() => {});

    // Ensure initial dimensions match settled layout on mount / route change
    const initialRafId = window.requestAnimationFrame(() => {
      if (!isDisposed) {
        lenis.resize();
        lastScrollHeight = document.documentElement.scrollHeight;
      }
    });

    return () => {
      isDisposed = true;
      window.cancelAnimationFrame(initialRafId);
      if (resizeRafId !== null) {
        window.cancelAnimationFrame(resizeRafId);
      }
      resizeObserver.disconnect();
      window.removeEventListener("load", scheduleResize);
      ScrollTrigger.removeEventListener("refresh", handleScrollTriggerRefresh);
      gsap.ticker.remove(handleTick);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { __webnoxLenis?: Lenis }).__webnoxLenis;
    };
  }, []);

  return <>{children}</>;
}
