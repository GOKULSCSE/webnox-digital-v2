"use client";

import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type LenisHandle = { resize: () => void };

function syncScrollLayout() {
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
    (window as unknown as { __webnoxLenis?: LenisHandle }).__webnoxLenis?.resize();
  });
}

export default function LabsSectionGate({ children }: { children: ReactNode }) {
  useEffect(() => {
    const onSync = () => {
      syncScrollLayout();
    };

    window.addEventListener("webnox:labs-unlocked", onSync);
    window.addEventListener("webnox:labs-locked", onSync);
    return () => {
      window.removeEventListener("webnox:labs-unlocked", onSync);
      window.removeEventListener("webnox:labs-locked", onSync);
    };
  }, []);

  return <div>{children}</div>;
}
