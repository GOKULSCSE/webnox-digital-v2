"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Final fan-out layout of the 5 cards (index order = left to right)
const FAN = [
  { x: -320, y: 50, rotation: -24 },
  { x: -170, y: 10, rotation: -12 },
  { x: 0, y: 0, rotation: 0 },
  { x: 170, y: 10, rotation: 12 },
  { x: 320, y: 50, rotation: 24 },
];
const CARD_SIZES = [200, 300, 340, 300, 200];
const IMAGES = [
  { src: "/images/services/20bd32e73df7a0088851915baca229308343d545.png", alt: "Product 1" },
  { src: "/images/services/3c9f5242ffe941cc07c5c01c35ea3ca9ce43ee6f.png", alt: "Product 2" },
  { src: "/images/services/5c5109ad77337b400a40d746be9f026f99d6bb32.png", alt: "Main Product" },
  { src: "/images/services/5fb6df87413f2f231bd935e66ec6f9b3d0ae01d3.png", alt: "Product 4" },
  { src: "/images/services/943f6de44b68321b88fc1a40f45f9562c5a6b958.png", alt: "Product 5" },
];

// 3D orbit layout (elliptical ring that spreads across the whole viewport)
const ORBIT_TARGET_SIZE = 280;
const ORBIT_COUNT = 5;
const FOCUS_SIZE = 320; // size of the focused card
const DIM_SIZE = 220; // size of the other cards while one is focused
const FOCUS_DURATION = 4; // seconds each card stays focused before auto-advancing
const FOCUS_PUSH = 80; // how far the focused card moves toward the viewer
const FOCUS_SHADOW = "0 22px 64px rgba(0,0,0,0.55), 0 0 40px rgba(255,94,0,0.25)";
const ORBIT_PERSPECTIVE = 1400;

function computeLayout(W: number, H: number) {
  const rx = Math.min(W * 0.4, 820); // horizontal radius -> fills the screen width
  const rz = 400; // depth radius
  const yFactors = [-0.26, 0.2, -0.16, 0.27, -0.22];
  const pos = [0, 1, 2, 3, 4].map((i) => {
    const a = (i / ORBIT_COUNT) * Math.PI * 2;
    return { x: Math.sin(a) * rx, y: yFactors[i] * H, z: Math.cos(a) * rz };
  });
  return { pos, rx, rz };
}

// Where each card lands when everything is pulled together into the center circle
const COLLAGE = [
  { x: -26, y: -14, r: -8, z: 1 },
  { x: 24, y: -22, r: 6, z: 2 },
  { x: 0, y: 0, r: 0, z: 5 },
  { x: -6, y: 24, r: -5, z: 3 },
  { x: 28, y: 16, r: 9, z: 4 },
];
const PIN_SCROLL_LENGTH = 2600; // px of scrolling spent inside the pinned section
const CIRCLE_BASE = 132;

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const slotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const worldRef = useRef<HTMLDivElement>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [orbitMode, setOrbitMode] = useState(false);
  const orbitModeRef = useRef(false);
  // Orbit state: p = blend (0 fan -> 1 orbit), wx/wy = world rotation (deg)
  const orb = useRef({ p: 0, wx: -8, wy: 0, vy: 0, dragging: false, lastX: 0, lastY: 0 });
  const layoutRef = useRef(computeLayout(1440, 640));
  const [stageH, setStageH] = useState(640);

  // Focus mode state
  const timerBarRef = useRef<HTMLDivElement>(null);
  const timerTween = useRef<gsap.core.Tween | null>(null);
  const focusedRef = useRef<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const fx = useRef<number[]>([0, 0, 0, 0, 0]); // per-card focus amount 0..1
  const downRef = useRef<{ x: number; y: number; moved: boolean; card: number | null }>({ x: 0, y: 0, moved: false, card: null });

  // Scroll-pinned collapse sequence state
  // c: cards converge into the circle (0..1), k: cards fade out (0..1)
  const col = useRef({ c: 0, k: 0 });
  const circleRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLSpanElement>(null);
  const pinTl = useRef<gsap.core.Timeline | null>(null);
  const pinScroll = useRef<gsap.core.Tween | null>(null);
  const collapsedRef = useRef(false);
  const [collapsed, setCollapsed] = useState(false);

  const render = () => {
    const o = orb.current;
    const world = worldRef.current;
    if (!world) return;
    const c = col.current.c;
    const k = col.current.k;
    const wrap = (a: number) => a - 360 * Math.round(a / 360);
    // world rotation unwinds to 0 as the cards are pulled into the circle
    const wx = o.wx * o.p * (1 - c);
    const wy = (c > 0 ? wrap(o.wy) : o.wy) * o.p * (1 - c);
    world.style.transform = `rotateX(${wx}deg) rotateY(${wy}deg)`;
    const ry = (wy * Math.PI) / 180;
    const rx = (wx * Math.PI) / 180;
    const layout = layoutRef.current;
    slotsRef.current.forEach((slot, i) => {
      if (!slot) return;
      const t = layout.pos[i];
      const cl = COLLAGE[i];
      const f = fx.current[i] || 0; // focus amount of this card
      // focused card levels out vertically and pushes toward the viewer along its radial direction
      const bx = (t.x + (t.x / layout.rx) * FOCUS_PUSH * f) * o.p;
      const by = t.y * o.p * (1 - f);
      const bz = (t.z + (t.z / layout.rz) * FOCUS_PUSH * f) * o.p;
      const px = bx * (1 - c) + cl.x * c;
      const py = by * (1 - c) + cl.y * c;
      const pz = bz * (1 - c);
      const s = 1 - c * 0.78;
      slot.style.transform = `translate3d(${px}px, ${py}px, ${pz}px) rotateY(${-wy}deg) rotateX(${-wx}deg) rotate(${cl.r * c}deg) scale(${s})`;
      // depth (z after world rotation) -> blur & dim for far cards
      const z1 = -px * Math.sin(ry) + pz * Math.cos(ry);
      const z2 = py * Math.sin(rx) + z1 * Math.cos(rx);
      const rawDepth = Math.min(1, Math.max(0, (z2 + layout.rz) / (2 * layout.rz))); // 1 = near
      const depth = Math.max(rawDepth, f);
      const fade = o.p * (1 - c);
      slot.style.filter = fade > 0.01 ? `blur(${((1 - depth) * 4 * fade).toFixed(2)}px) brightness(${(1 - (1 - depth) * 0.45 * fade).toFixed(2)})` : "none";
      slot.style.opacity = String(1 - k);
      slot.style.zIndex = String(Math.round(depth * 100 * (1 - c) + cl.z * 20 * c) + (f > 0.5 ? 200 : 0));
    });
  };

  // Recompute the orbit layout from the viewport size
  useEffect(() => {
    const update = () => {
      const H = Math.round(Math.max(560, Math.min(window.innerHeight * 0.85, 760)));
      layoutRef.current = computeLayout(window.innerWidth, H);
      setStageH(H);
      render();
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Ticker: auto-rotation + inertia while in orbit mode
  useEffect(() => {
    const tick = () => {
      const o = orb.current;
      if (orbitModeRef.current && o.p > 0.99) {
        if (!o.dragging && focusedRef.current === null && col.current.c === 0) {
          o.vy += (0.18 - o.vy) * 0.05; // ease toward gentle auto-spin
          o.wy += o.vy;
        }
        render();
      } else if (o.p > 0 && o.p < 1) {
        render();
      }
    };
    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function stopTimer() {
    timerTween.current?.kill();
    timerTween.current = null;
    if (timerBarRef.current) gsap.set(timerBarRef.current, { scaleX: 0 });
  }

  function focusCard(i: number) {
    const o = orb.current;
    focusedRef.current = i;
    setFocused(i);
    stopTimer();
    gsap.killTweensOf(o);
    gsap.killTweensOf(fx.current);

    // rotate the world so card i faces the viewer (nearest equivalent angle)
    const base = -i * (360 / ORBIT_COUNT);
    const target = base + 360 * Math.round((o.wy - base) / 360);
    o.vy = 0;
    gsap.to(o, { wy: target, wx: -4, duration: 1, ease: "power3.inOut", onUpdate: render });

    cardsRef.current.forEach((card, k) => {
      const isF = k === i;
      gsap.to(fx.current, { [k]: isF ? 1 : 0, duration: 1, ease: "power3.inOut", onUpdate: render });
      gsap.to(card, {
        scale: (isF ? FOCUS_SIZE : DIM_SIZE) / CARD_SIZES[k],
        opacity: isF ? 1 : 0.35,
        boxShadow: isF ? FOCUS_SHADOW : "0 0 0 rgba(0,0,0,0)",
        duration: 1,
        ease: "power3.inOut",
        overwrite: "auto",
      });
    });

    // timer bar fills, then auto-advance to the next card
    if (timerBarRef.current) {
      timerTween.current = gsap.fromTo(
        timerBarRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: FOCUS_DURATION,
          delay: 1,
          ease: "none",
          onComplete: () => focusCard((i + 1) % ORBIT_COUNT),
        }
      );
    }
  }

  function exitFocus() {
    if (focusedRef.current === null) return;
    focusedRef.current = null;
    setFocused(null);
    stopTimer();
    orb.current.vy = 0;
    gsap.killTweensOf(fx.current);
    cardsRef.current.forEach((card, k) => {
      gsap.to(fx.current, { [k]: 0, duration: 0.9, ease: "power3.inOut", onUpdate: render });
      gsap.to(card, {
        scale: ORBIT_TARGET_SIZE / CARD_SIZES[k],
        opacity: 1,
        duration: 0.9,
        ease: "power3.inOut",
        overwrite: "auto",
        onComplete: () => { gsap.set(card, { clearProps: "boxShadow" }); },
      });
    });
  }

  // ---- Pin the section while orbiting; scroll collapses cards -> circle -> white -> expands ----
  function teardownPin() {
    pinScroll.current?.kill();
    pinScroll.current = null;
    const tl = pinTl.current;
    if (tl) {
      tl.scrollTrigger?.kill(true);
      tl.kill();
      pinTl.current = null;
    }
    col.current.c = 0;
    col.current.k = 0;
    collapsedRef.current = false;
    setCollapsed(false);
    if (circleRef.current) {
      gsap.set(circleRef.current, { clearProps: "scale,backgroundColor" });
      circleRef.current.style.zIndex = "400";
    }
    if (hintRef.current) hintRef.current.style.opacity = "";
    render();
  }

  function setupPin() {
    const section = containerRef.current;
    if (!section || !orbitModeRef.current || pinTl.current) return;
    ScrollTrigger.refresh();

    const build = () => {
      if (!orbitModeRef.current || pinTl.current || !circleRef.current) return;
      const circle = circleRef.current;
      const maxScale = () => (Math.hypot(window.innerWidth, window.innerHeight) / CIRCLE_BASE) * 1.15;
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: `+=${PIN_SCROLL_LENGTH}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const cl = self.progress > 0.005;
            if (cl !== collapsedRef.current) {
              collapsedRef.current = cl;
              setCollapsed(cl);
              if (cl) exitFocus();
            }
          },
        },
      });
      pinTl.current = tl;

      // 1) all cards fly into the circle, circle grows a little, hint text fades
      tl.to(col.current, { c: 1, duration: 1, ease: "power2.inOut" }, 0)
        .to(circle, { scale: 1.25, duration: 1, ease: "power2.inOut" }, 0)
        .to(hintRef.current, { opacity: 0, duration: 0.3 }, 0)
        .set(circle, { zIndex: 1 }, 0.05)
        // 2) cards vanish, circle turns white
        .to(col.current, { k: 1, duration: 0.5, ease: "power1.in" }, 1.0)
        .to(circle, { backgroundColor: "#f8f5ff", duration: 0.6 }, 1.0)
        // 3) white circle expands to cover the screen
        .to(circle, { scale: maxScale, duration: 1.6, ease: "power2.in" }, 1.7);
    };

    // bring the section to the center of the viewport first so the pin starts at progress 0
    const rect = section.getBoundingClientRect();
    const target = window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2;
    const proxy = { y: window.scrollY };
    pinScroll.current = gsap.to(proxy, {
      y: target,
      duration: 0.7,
      ease: "power2.inOut",
      onUpdate: () => window.scrollTo(0, proxy.y),
      onComplete: build,
    });
  }

  const toggleOrbit = () => {
    const o = orb.current;
    const next = !orbitModeRef.current;
    orbitModeRef.current = next;
    setOrbitMode(next);
    teardownPin();
    gsap.killTweensOf(o);
    gsap.killTweensOf(fx.current);
    gsap.killTweensOf(cardsRef.current);
    stopTimer();
    focusedRef.current = null;
    setFocused(null);
    fx.current = [0, 0, 0, 0, 0];

    if (next) {
      tlRef.current?.progress(1).pause();
      o.vy = 0;
      cardsRef.current.forEach((card, i) => {
        gsap.to(card, { x: 0, y: 0, rotation: 0, opacity: 1, scale: ORBIT_TARGET_SIZE / CARD_SIZES[i], duration: 1.2, ease: "power3.inOut" });
      });
      gsap.to(o, { p: 1, duration: 1.2, ease: "power3.inOut", onUpdate: render, onComplete: () => { render(); setupPin(); } });
    } else {
      const target = Math.round(o.wy / 360) * 360;
      cardsRef.current.forEach((card, i) => {
        gsap.set(card, { clearProps: "boxShadow" });
        gsap.to(card, { ...FAN[i], opacity: 1, scale: 1, duration: 1.1, ease: "power3.inOut" });
      });
      gsap.to(o, { p: 0, wy: target, wx: -8, duration: 1.1, ease: "power3.inOut", onUpdate: render, onComplete: render });
    }
  };

  // clean up the pin when the component unmounts
  useEffect(() => () => teardownPin(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const onPointerDown = (e: React.PointerEvent) => {
    if (!orbitModeRef.current || orb.current.p < 0.99 || collapsedRef.current) return;
    const o = orb.current;
    o.dragging = true;
    o.lastX = e.clientX;
    o.lastY = e.clientY;
    const el = (e.target as HTMLElement).closest("[data-card]");
    downRef.current = { x: e.clientX, y: e.clientY, moved: false, card: el ? Number(el.getAttribute("data-card")) : null };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const o = orb.current;
    if (!o.dragging) return;
    const d = downRef.current;
    if (!d.moved && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 6) {
      d.moved = true;
      // dragging manually cancels focus mode
      if (focusedRef.current !== null) {
        gsap.killTweensOf(o);
        exitFocus();
      }
    }
    if (!d.moved) return;
    const dx = e.clientX - o.lastX;
    const dy = e.clientY - o.lastY;
    o.lastX = e.clientX;
    o.lastY = e.clientY;
    o.vy = dx * 0.35;
    o.wy += dx * 0.35;
    o.wx = Math.max(-35, Math.min(25, o.wx - dy * 0.2));
    render();
  };
  const onPointerUp = () => {
    const o = orb.current;
    if (!o.dragging) return;
    o.dragging = false;
    const d = downRef.current;
    if (d.moved) return;
    // a click, not a drag
    if (d.card !== null) {
      if (focusedRef.current === d.card) exitFocus();
      else focusCard(d.card);
    } else if (focusedRef.current !== null) {
      exitFocus();
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Set initial states (all stacked in center)
      gsap.set(cardsRef.current, {
        x: 0,
        y: 100, // Slightly lower to slide up
        rotation: 0,
        opacity: 0,
      });

      // Create a paused timeline
      const tl = gsap.timeline({ paused: true });
      tlRef.current = tl;

      // Animate Center Card (index 2)
      tl.to(cardsRef.current[2], {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.5)",
      })
      // Fan out the other cards simultaneously
      .to(cardsRef.current[1], { // Mid Left
        x: -170,
        y: 10,
        rotation: -12,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
      }, "-=0.4")
      .to(cardsRef.current[3], { // Mid Right
        x: 170,
        y: 10,
        rotation: 12,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
      }, "-=0.8")
      .to(cardsRef.current[0], { // Far Left
        x: -320,
        y: 50,
        rotation: -24,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
      }, "-=0.6")
      .to(cardsRef.current[4], { // Far Right
        x: 320,
        y: 50,
        rotation: 24,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
      }, "-=0.8");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (orbitModeRef.current) return; // don't touch cards while in orbit mode
        if (entries[0].isIntersecting) {
          tlRef.current?.play();
        } else {
          // Reverse if scrolling back up out of view
          tlRef.current?.reverse();
        }
      },
      { threshold: 0.4 } // Trigger when 40% of the section is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className={`relative w-full py-32 overflow-hidden flex flex-col items-center justify-center bg-[#0a0806] ${orbitMode ? "min-h-screen" : ""}`}>
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(140,50,10,0.5)_0%,_rgba(10,8,6,1)_70%)]"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Infinity Logo */}
        <div className="mb-8">
          <img src="/images/Vector (1).svg" alt="eo logo" className="h-8 w-auto" />
        </div>
        
        {/* Fanned Cards Carousel -> 3D Orbit on "Explore Labs" */}
        <div
          className={`relative w-screen max-w-none mt-4 select-none transition-[height,margin] duration-700 ease-in-out ${orbitMode ? "mb-0 scale-100" : "mb-16 scale-50 sm:scale-75 md:scale-100"}`}
          style={{ height: orbitMode ? stageH : 400, perspective: ORBIT_PERSPECTIVE, touchAction: orbitMode ? "pan-y" : "auto", cursor: orbitMode ? (focused !== null ? "pointer" : "grab") : "default" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div ref={worldRef} className="absolute inset-0" style={{ transformStyle: "preserve-3d", zIndex: 100 }}>
            {IMAGES.map((img, i) => (
              <div
                key={i}
                ref={(el) => { slotsRef.current[i] = el; }}
                className="absolute left-1/2 top-1/2 w-0 h-0"
                style={{ zIndex: i === 2 ? 30 : i === 1 || i === 3 ? 20 : 10 }}
              >
                <div
                  data-card={i}
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className={`absolute rounded-[32px] overflow-hidden border-[#ff5e00] bg-neutral-900 ${i === 2 ? "border-[2px] shadow-[0_0_60px_rgba(255,94,0,0.15)]" : "border-[1.5px] shadow-2xl"}`}
                  style={{ width: CARD_SIZES[i], height: CARD_SIZES[i], marginLeft: -CARD_SIZES[i] / 2, marginTop: -CARD_SIZES[i] / 2 }}
                >
                  <img src={img.src} alt={img.alt} draggable={false} className="w-full h-full object-cover pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* "Drag to orbit" circle: also the point all cards collapse into, then turns white and expands on scroll */}
          <div
            ref={circleRef}
            className="absolute left-1/2 top-1/2 rounded-full bg-[#ff5e00] text-white flex items-center justify-center text-center font-semibold uppercase tracking-wide text-[15px] leading-tight pointer-events-none transition-opacity duration-500"
            style={{ width: CIRCLE_BASE, height: CIRCLE_BASE, marginLeft: -CIRCLE_BASE / 2, marginTop: -CIRCLE_BASE / 2, opacity: orbitMode && (focused === null || collapsed) ? 1 : 0, zIndex: 400 }}
          >
            <span ref={hintRef}>Drag<br />to<br />Orbit</span>
          </div>

          {/* Same action button, shown below the circle while orbiting */}
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={toggleOrbit}
            tabIndex={orbitMode ? 0 : -1}
            className="absolute left-1/2 -translate-x-1/2 bg-white hover:bg-neutral-100 text-black rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,94,0,0.15)] group"
            style={{
              top: focused !== null ? "calc(100% - 88px)" : "calc(50% + 100px)",
              opacity: orbitMode && !collapsed ? 1 : 0,
              pointerEvents: orbitMode && !collapsed ? "auto" : "none",
              zIndex: 600,
              transition: "top 0.6s ease, opacity 0.5s ease, transform 0.3s ease",
            }}
          >
            <span className="font-semibold text-sm">Close Labs</span>
            <div className="w-10 h-10 rounded-full bg-[#ff5e00] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
              <img src="/images/Vector (2).svg" alt="Binoculars" className="w-5 h-5 object-contain" />
            </div>
          </button>

          {/* Focus timer: fills while a card is focused, then auto-advances to the next one */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-[3px] rounded-full bg-white/15 overflow-hidden transition-opacity duration-500 pointer-events-none"
            style={{ opacity: focused !== null ? 1 : 0, zIndex: 500 }}
          >
            <div ref={timerBarRef} className="h-full w-full bg-[#ff5e00] origin-left" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>

        {/* Heading + button: hidden while the cards are orbiting */}
        <div
          className={`flex flex-col items-center w-full overflow-hidden transition-all duration-700 ease-in-out ${orbitMode ? "max-h-0 opacity-0 pointer-events-none" : "max-h-[500px] opacity-100"}`}
          aria-hidden={orbitMode}
        >
          <h2 className="text-3xl md:text-5xl font-medium text-white text-center mb-10 leading-[1.25] tracking-tight">
            We Don’t Just Build for Clients.<br />
            We Build Our <span className="text-[#ff5e00]">Own Products.</span>
          </h2>

          <button onClick={toggleOrbit} tabIndex={orbitMode ? -1 : 0} className="bg-white hover:bg-neutral-100 text-black rounded-full pl-6 pr-2 py-2 mb-2 flex items-center gap-4 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,94,0,0.15)] group">
            <span className="font-semibold text-sm">Explore Labs</span>
            <div className="w-10 h-10 rounded-full bg-[#ff5e00] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
              <img src="/images/Vector (2).svg" alt="Binoculars" className="w-5 h-5 object-contain" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
