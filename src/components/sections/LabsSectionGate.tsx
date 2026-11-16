"use client";

import { ReactNode, useEffect, useState } from "react";
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
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const onUnlock = () => {
      setUnlocked(true);
      syncScrollLayout();
    };

    const onLock = () => {
      setUnlocked(false);
      syncScrollLayout();
    };

    window.addEventListener("webnox:labs-unlocked", onUnlock);
    window.addEventListener("webnox:labs-locked", onLock);
    return () => {
      window.removeEventListener("webnox:labs-unlocked", onUnlock);
      window.removeEventListener("webnox:labs-locked", onLock);
    };
  }, []);

  return (
    <div className={unlocked ? undefined : "hidden"} aria-hidden={!unlocked}>
      {children}
    </div>
  );
}
