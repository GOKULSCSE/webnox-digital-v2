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
  { src: "/images/services/20bd32e73df7a0088851915baca229308343d545.png", alt: "Product 1", title: "Impuls der Zeit 2023", desc: "Geschäfts- und Nachhaltigkeitsbericht" },
  { src: "/images/services/3c9f5242ffe941cc07c5c01c35ea3ca9ce43ee6f.png", alt: "Product 2", title: "GESCO AG 2017/2018", desc: "Geschäftsbericht Wuppertal" },
  { src: "/images/services/5c5109ad77337b400a40d746be9f026f99d6bb32.png", alt: "Main Product", title: "virtuos Magazin", desc: "Mitgliedermagazin der GEMA" },
  { src: "/images/services/5fb6df87413f2f231bd935e66ec6f9b3d0ae01d3.png", alt: "Product 4", title: "heureka GmbH", desc: "Creative Director Gorden Koschel" },
  { src: "/images/services/943f6de44b68321b88fc1a40f45f9562c5a6b958.png", alt: "Product 5", title: "Red Dot Award", desc: "Best of the Best 2025" },
];

// 3D orbit layout (elliptical ring that spreads across the whole viewport)
const ORBIT_TARGET_SIZE = 280;
const ORBIT_COUNT = 5;
const FOCUS_SIZE = 300; // refined, balanced focused card size
const DIM_SIZE = 240; // size of the other cards while one is focused
const FOCUS_DURATION = 4; // seconds each card stays focused in gallery slider
const FOCUS_PUSH = 20; // gentle subtle depth push
const Z_FOCUS = 200; // refined depth position for the focused card to float directly at center
const FOCUS_SHADOW = "0 0 25px rgba(255,94,0,0.45), 0 15px 35px rgba(0,0,0,0.7)";
const DIM_SHADOW = "0 10px 25px rgba(0,0,0,0.7)";
const IDLE_SHADOW = "0 0 15px rgba(255,94,0,0.15), 0 10px 25px rgba(0,0,0,0.6)";
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
const PIN_SCROLL_LENGTH = 5500; // px of scrolling spent inside the pinned section (circle expand + horizontal card scroll)
const CIRCLE_BASE = 132;

// Beyond Standard Services cards data (revealed as the white circle expands)
const BEYOND_CARDS = [
  {
    title: "AI - Native Services",
    subtitle: "AI development services help businesses build intelligent software",
    bottomHighlight: "And digital products",
    bottomText: "by integrating artificial intelligence into applications, workflows, and business processes.",
    glow: (
      <div className="absolute -top-10 -left-10 w-52 h-52 rounded-full bg-gradient-to-br from-[#ff6a00]/80 via-[#ff9238]/50 to-transparent blur-3xl pointer-events-none" />
    ),
  },
  {
    title: "Digital Engineering",
    subtitle: "Software development services help businesses design, build,",
    bottomHighlight: "And maintain reliable digital products",
    bottomText: "that support operations, customer experiences, and evolving technology requirements.",
    glow: (
      <div className="relative flex items-center justify-center">
        <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-[#ff5e00]/70 via-[#ffa04d]/40 to-transparent blur-2xl pointer-events-none" />
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#ff7722] to-[#ffaa55] opacity-85 blur-lg transform rotate-12" />
      </div>
    ),
  },
  {
    title: "AI Powered Growth",
    subtitle: "AI-powered growth combines artificial intelligence with",
    bottomHighlight: "Search technologies, automation",
    bottomText: "to improve online visibility, user engagement and marketing outcomes.",
    glow: (
      <div className="absolute -right-8 top-6 w-48 h-48 rounded-full bg-gradient-to-tl from-[#ff6e05]/80 via-[#ff9c45]/50 to-transparent blur-3xl pointer-events-none" />
    ),
  },
  {
    title: "Enterprise Cloud Platforms",
    subtitle: "Modern cloud architectures engineered for high resilience,",
    bottomHighlight: "And mission-critical scale",
    bottomText: "delivering zero-downtime performance, security, and continuous cost efficiency.",
    glow: (
      <div className="relative flex items-center justify-center">
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-b from-[#ff5e00]/70 via-[#ffaa66]/40 to-transparent blur-2xl pointer-events-none" />
        <div className="w-28 h-20 rounded-3xl bg-gradient-to-tr from-[#ff6a00] to-[#ffbe7a] opacity-80 blur-xl -rotate-6" />
      </div>
    ),
  },
  {
    title: "Intelligent UI/UX Design",
    subtitle: "Human-centric digital product experiences crafted with",
    bottomHighlight: "Precision interaction design",
    bottomText: "that captivate users, maximize engagement, and elevate brand equity.",
    glow: (
      <div className="absolute -bottom-8 -left-6 w-52 h-52 rounded-full bg-gradient-to-tr from-[#ff6600]/80 via-[#ffa85c]/45 to-transparent blur-3xl pointer-events-none" />
    ),
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const slotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const worldRef = useRef<HTMLDivElement>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [orbitMode, setOrbitMode] = useState(false);
  const orbitModeRef = useRef(false);
  const [isGallery, setIsGallery] = useState(false);
  const isGalleryRef = useRef(false);
  
  // Orbit state: p = blend (0 fan -> 1 orbit), wx/wy = world rotation (deg)
  const orb = useRef({ p: 0, wx: -8, wy: 0, vy: 0, dragging: false, lastX: 0, lastY: 0 });
  const galleryP = useRef({ p: 0 }); // 0 = orbit, 1 = gallery
  const layoutRef = useRef(computeLayout(1440, 640));
  const [stageH, setStageH] = useState(640);

  // Focus mode state
  const timerBarRef = useRef<HTMLDivElement>(null);
  const timerTween = useRef<gsap.core.Tween | null>(null);
  const focusedRef = useRef<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const fw = useRef<number[]>([0, 0, 0, 0, 0]); // per-card focus amount 0..1
  const cardTiltRef = useRef<(HTMLDivElement | null)[]>([]);
  const [sliderProduct, setSliderProduct] = useState(2);
  const sliderProductRef = useRef(2);
  const dragInfo = useRef({ isDown: false, hasDragged: false, startX: 0, startY: 0, pointerId: -1 });
  const lastCardClickTime = useRef(0);

  // Scroll-pinned collapse sequence state
  // c: cards converge into the circle (0..1), k: cards fade out (0..1), rot: scroll rotation offset
  const col = useRef({ c: 0, k: 0, rot: 0 });
  const circleWrapperRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLSpanElement>(null);
  const toggleBtnWrapperRef = useRef<HTMLDivElement>(null);
  const beyondOverlayRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
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
    const g = galleryP.current.p;
    
    // Orbit rotation continues while scrolling and collapsing towards the center circle
    const wx = o.wx * o.p * (1 - c * 0.5) * (1 - g);
    const wy = (o.wy + (col.current.rot || 0)) * o.p * (1 - g);
    world.style.transform = `rotateX(${wx}deg) rotateY(${wy}deg)`;
    
    if (circleWrapperRef.current) {
      circleWrapperRef.current.style.transform = `rotateY(${-wy}deg) rotateX(${-wx}deg)`;
    }
    if (toggleBtnWrapperRef.current) {
      toggleBtnWrapperRef.current.style.transform = `rotateY(${-wy}deg) rotateX(${-wx}deg)`;
    }

    const ry = (wy * Math.PI) / 180;
    const rx = (wx * Math.PI) / 180;
    const layout = layoutRef.current;

    // Mathematical target position inside world coordinates so that when rotated by (wx, wy),
    // this point lands EXACTLY at screen center (0, 0, Z_FOCUS):
    const target_px = -Z_FOCUS * Math.cos(rx) * Math.sin(ry);
    const target_py = Z_FOCUS * Math.sin(rx);
    const target_pz = Z_FOCUS * Math.cos(rx) * Math.cos(ry);

    slotsRef.current.forEach((slot, i) => {
      if (!slot) return;
      const t = layout.pos[i];
      const cl = COLLAGE[i];
      const f = fw.current[i] || 0; // individual focus amount (0..1)
      
      // Orbit base positions:
      const ox = t.x * o.p;
      const oy = t.y * o.p;
      const oz = t.z * o.p;

      // Card i alone glides to screen center if focused. All other cards stay exactly at their orbit position!
      let bx = ox * (1 - f) + target_px * f;
      let by = oy * (1 - f) + target_py * f;
      let bz = oz * (1 - f) + target_pz * f;

      // Gallery base positions (static template with Card 2 at center):
      if (g > 0.001) {
        const d = i - 2;
        const gx = d === 0 ? 0 : Math.sign(d) * (340 + (Math.abs(d) - 1) * 260);
        const gy = 0;
        const gz = d === 0 ? 150 : -50 - Math.abs(d) * 50;
        bx = bx * (1 - g) + gx * g;
        by = by * (1 - g) + gy * g;
        bz = bz * (1 - g) + gz * g;
      }

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
      const dimMult = 1 - g * 0.5;
      slot.style.filter = fade > 0.01 ? `blur(${((1 - depth) * 4 * fade * dimMult).toFixed(2)}px) brightness(${(1 - (1 - depth) * 0.45 * fade * dimMult).toFixed(2)})` : "none";
      slot.style.opacity = String(1 - k);
      
      const fanZ = i === 2 ? 30 : i === 1 || i === 3 ? 20 : 10;
      const orbitZ = depth * 100;
      const isFocusedCard = focusedRef.current === i || f > 0.01;
      slot.style.zIndex = String(
        isFocusedCard ? 300 : Math.round(fanZ * (1 - o.p) + orbitZ * o.p * (1 - c) + cl.z * 20 * c)
      );
    });
  };

  // Recompute the orbit layout from the viewport size
  useEffect(() => {
    const update = () => {
      const H = window.innerHeight;
      layoutRef.current = computeLayout(window.innerWidth, Math.min(H * 0.75, 620));
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
        if (!o.dragging && focusedRef.current === null && col.current.k < 1) {
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

  function startTimer() {
    stopTimer();
    if (!timerBarRef.current) return;
    gsap.set(timerBarRef.current, { scaleX: 0 });
    timerTween.current = gsap.fromTo(
      timerBarRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: FOCUS_DURATION,
        ease: "none",
        onComplete: () => {
          const nextIdx = (sliderProductRef.current + 1) % IMAGES.length;
          sliderProductRef.current = nextIdx;
          setSliderProduct(nextIdx);
          startTimer();
        },
      }
    );
  }

  function focusCard(i: number) {
    const o = orb.current;
    focusedRef.current = i;
    setFocused(i);
    sliderProductRef.current = i;
    setSliderProduct(i);
    stopTimer();
    gsap.killTweensOf(o);

    // Stop rotation completely - world stays at current wy and wx, all other cards remain static in orbit!
    o.vy = 0;

    cardsRef.current.forEach((card, k) => {
      const isF = k === i;
      // Animate card i focus amount to 1, other cards to 0
      gsap.to(fw.current, { [k]: isF ? 1 : 0, duration: 0.7, ease: "power3.inOut", onUpdate: render });
      gsap.to(card, {
        scale: (isF ? FOCUS_SIZE : DIM_SIZE) / CARD_SIZES[k],
        opacity: isF ? 1 : 0.35,
        boxShadow: isF ? FOCUS_SHADOW : DIM_SHADOW,
        duration: 0.7,
        ease: "power3.inOut",
        overwrite: "auto",
      });
    });

    // Start timer to cycle images and content for this focused card
    startTimer();
  }

  function exitFocus() {
    if (focusedRef.current === null) return;
    focusedRef.current = null;
    setFocused(null);
    stopTimer();
    
    // Immediately restart gentle auto-spin orbit animation
    orb.current.vy = 0.18;

    // Reset card tilt if any
    cardTiltRef.current.forEach((c) => {
      if (c) gsap.to(c, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3 });
    });

    cardsRef.current.forEach((card, k) => {
      gsap.to(fw.current, { [k]: 0, duration: 0.7, ease: "power3.inOut", onUpdate: render });
      gsap.to(card, {
        scale: ORBIT_TARGET_SIZE / CARD_SIZES[k],
        opacity: 1,
        boxShadow: IDLE_SHADOW,
        duration: 0.7,
        ease: "power3.inOut",
        overwrite: "auto",
        onComplete: () => { gsap.set(card, { clearProps: "boxShadow" }); },
      });
    });
  }

  const handleCardMouseMove = (idx: number, e: React.PointerEvent) => {
    if (focusedRef.current !== idx) return;
    const card = cardTiltRef.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2); // -1 .. 1
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2); // -1 .. 1
    
    gsap.to(card, {
      rotateY: x * 16,
      rotateX: -y * 16,
      x: x * 8,
      y: y * 8,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleCardMouseLeave = (idx: number) => {
    const card = cardTiltRef.current[idx];
    if (!card) return;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });
  };

  function switchToOrbitView() {
    if (!isGalleryRef.current) return;
    isGalleryRef.current = false;
    setIsGallery(false);
    stopTimer();
    setFocused(null);
    focusedRef.current = null;
    orb.current.vy = 0.18;
    cardsRef.current.forEach((card, k) => {
      gsap.to(card, {
        scale: ORBIT_TARGET_SIZE / CARD_SIZES[k],
        opacity: 1,
        boxShadow: IDLE_SHADOW,
        duration: 1.1,
        ease: "power3.inOut",
        overwrite: "auto",
        onComplete: () => { gsap.set(card, { clearProps: "boxShadow" }); },
      });
    });
    gsap.to(orb.current, { wx: -8, duration: 1.1, ease: "power3.inOut" });
    gsap.to(galleryP.current, {
      p: 0,
      duration: 1.2,
      ease: "power3.inOut",
      onUpdate: render,
    });
  }

  function toggleGallery() {
    const next = !isGalleryRef.current;

    if (next) {
      // Entering static slider mode:
      isGalleryRef.current = true;
      setIsGallery(true);
      stopTimer();
      setFocused(null);
      focusedRef.current = null;
      // Ensure world rotation is facing front for the static gallery
      gsap.to(orb.current, { wy: 0, wx: -4, duration: 1, ease: "power3.inOut", onUpdate: render });

      // Center card 2 is hero, side cards are static dimmed
      cardsRef.current.forEach((card, k) => {
        const isCenter = k === 2;
        gsap.to(card, {
          scale: (isCenter ? FOCUS_SIZE : DIM_SIZE) / CARD_SIZES[k],
          opacity: isCenter ? 1 : 0.5,
          boxShadow: isCenter ? FOCUS_SHADOW : "0 0 0 rgba(0,0,0,0)",
          duration: 1,
          ease: "power3.inOut",
          overwrite: "auto",
        });
      });

      // Start the timer that only updates the center card image and content
      startTimer();
      gsap.to(galleryP.current, {
        p: 1,
        duration: 1.2,
        ease: "power3.inOut",
        onUpdate: render,
      });
    } else {
      switchToOrbitView();
    }
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
    col.current.rot = 0;
    collapsedRef.current = false;
    setCollapsed(false);
    if (circleRef.current) {
      gsap.set(circleRef.current, { clearProps: "scale,backgroundColor" });
    }
    if (circleWrapperRef.current) {
      circleWrapperRef.current.style.zIndex = "75";
    }
    if (hintRef.current) hintRef.current.style.opacity = "";
    if (beyondOverlayRef.current) {
      gsap.set(beyondOverlayRef.current, { opacity: 0, pointerEvents: "none" });
    }
    if (cardsTrackRef.current) {
      gsap.set(cardsTrackRef.current, { x: 0 });
    }
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
        onUpdate: render,
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: `+=${PIN_SCROLL_LENGTH}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress > 0.002 && isGalleryRef.current) {
              switchToOrbitView();
            }
            const cl = self.progress > 0.05;
            if (cl !== collapsedRef.current) {
              collapsedRef.current = cl;
              setCollapsed(cl);
              if (cl) exitFocus();
            }
            if (beyondOverlayRef.current) {
              beyondOverlayRef.current.style.pointerEvents = self.progress > 0.3 ? "auto" : "none";
            }
          },
        },
      });
      pinTl.current = tl;

      // 1) all cards fly into the circle while continuing to orbit/spiral inward
      tl.to(col.current, { c: 1, rot: 360, duration: 1, ease: "power2.inOut" }, 0)
        .to(circle, { scale: 1.25, duration: 1, ease: "power2.inOut" }, 0)
        .to(hintRef.current, { opacity: 0, duration: 0.3 }, 0)
        .set(circleWrapperRef.current, { zIndex: 200 }, 0.05)
        // 2) cards vanish, circle turns cream/white (#fcf8f2)
        .to(col.current, { k: 1, duration: 0.5, ease: "power1.in" }, 1.0)
        .to(circle, { backgroundColor: "#fcf8f2", duration: 0.6 }, 1.0)
        // 3) cream circle expands to cover the screen
        .to(circle, { scale: maxScale, duration: 1.5, ease: "power2.in" }, 1.5);

      if (beyondOverlayRef.current && cardsTrackRef.current) {
        const beyondOverlay = beyondOverlayRef.current;
        const cardsTrack = cardsTrackRef.current;
        const getScrollDistance = () => Math.max(0, cardsTrack.scrollWidth - window.innerWidth + 140);

        // 4) Beyond Standard Services section fades in as the circle expands over the screen
        tl.to(beyondOverlay, { opacity: 1, duration: 0.8, ease: "power2.out" }, 2.4)
          // 5) Cards scroll horizontally as the user continues scrolling down
          .to(cardsTrack, { x: () => -getScrollDistance(), duration: 3.6, ease: "none" }, 3.4)
          // 6) Brief pause at the end of the cards before unpinning to the next section
          .to({}, { duration: 0.4 }, 7.0);
      }
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
    gsap.killTweensOf(fw.current);
    gsap.killTweensOf(cardsRef.current);
    stopTimer();
    focusedRef.current = null;
    setFocused(null);
    fw.current = [0, 0, 0, 0, 0];

    if (next) {
      tlRef.current?.progress(1).pause();
      o.vy = 0;
      cardsRef.current.forEach((card, i) => {
        gsap.to(card, { x: 0, y: 0, rotation: 0, opacity: 1, scale: ORBIT_TARGET_SIZE / CARD_SIZES[i], boxShadow: IDLE_SHADOW, duration: 1.2, ease: "power3.inOut" });
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

  // Switch back to normal orbit view if user starts scrolling while in slider view
  useEffect(() => {
    const onScrollOrWheel = () => {
      if (isGalleryRef.current) {
        switchToOrbitView();
      }
    };
    window.addEventListener("wheel", onScrollOrWheel, { passive: true });
    window.addEventListener("scroll", onScrollOrWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", onScrollOrWheel);
      window.removeEventListener("scroll", onScrollOrWheel);
    };
  }, []);

  function handleCardClick(i: number, e?: React.MouseEvent | React.PointerEvent) {
    if (e) {
      e.stopPropagation();
    }
    const now = performance.now();
    if (now - lastCardClickTime.current < 250) return;
    lastCardClickTime.current = now;

    if (dragInfo.current.hasDragged) return;
    if (col.current.k >= 0.8) return;

    if (isGalleryRef.current) {
      sliderProductRef.current = i;
      setSliderProduct(i);
      startTimer();
      return;
    }

    if (focusedRef.current === i) {
      exitFocus();
    } else {
      focusCard(i);
    }
  }

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (dragInfo.current.hasDragged) return;
    const target = e.target as HTMLElement;
    const clickedCard = target.closest("[data-card]");
    const clickedBtn = target.closest("button");
    if (!clickedCard && !clickedBtn && focusedRef.current !== null) {
      exitFocus();
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (!orbitModeRef.current) return;
    const o = orb.current;
    o.lastX = e.clientX;
    o.lastY = e.clientY;
    dragInfo.current = {
      isDown: true,
      hasDragged: false,
      startX: e.clientX,
      startY: e.clientY,
      pointerId: e.pointerId,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragInfo.current;
    if (!d.isDown) return;
    // When a card is focused, stop/disable dragging to orbit
    if (focusedRef.current !== null) return;

    const o = orb.current;
    if (col.current.k >= 0.8) {
      d.isDown = false;
      return;
    }
    const dist = Math.hypot(e.clientX - d.startX, e.clientY - d.startY);
    if (!d.hasDragged && dist > 14) {
      d.hasDragged = true;
      try {
        (e.currentTarget as HTMLElement).setPointerCapture(d.pointerId);
      } catch {}
    }
    if (!d.hasDragged) return;
    const dx = e.clientX - o.lastX;
    const dy = e.clientY - o.lastY;
    o.lastX = e.clientX;
    o.lastY = e.clientY;
    o.vy = dx * 0.35;
    o.wy += dx * 0.35;
    o.wx = Math.max(-35, Math.min(25, o.wx - dy * 0.2));
    render();
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const d = dragInfo.current;
    if (d.hasDragged) {
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(d.pointerId);
      } catch {}
    } else {
      // If user clicked background empty space outside any card, un-focus
      const target = e.target as HTMLElement;
      const clickedCard = target.closest("[data-card]");
      const clickedBtn = target.closest("button");
      if (!clickedCard && !clickedBtn && focusedRef.current !== null) {
        exitFocus();
      }
    }
    d.isDown = false;
    setTimeout(() => {
      d.hasDragged = false;
    }, 120);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <section
      ref={containerRef}
      onClick={handleBackgroundClick}
      className={`relative w-full overflow-hidden flex flex-col items-center justify-center bg-[#0a0806] transition-[padding,height] duration-700 ${
        orbitMode ? "h-screen min-h-screen py-0" : "py-32"
      }`}
    >
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(140,50,10,0.5)_0%,_rgba(10,8,6,1)_70%)]"></div>
      
      <div className={`relative z-10 w-full ${orbitMode ? "h-full" : "max-w-7xl"} mx-auto flex flex-col items-center justify-center`}>
        
        {/* Top Infinity Logo */}
        <div className={`transition-all duration-700 ${orbitMode ? "absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-20 mb-0" : "relative mb-8"}`}>
          <img src="/images/Vector (1).svg" alt="eo logo" className="h-8 w-auto" />
        </div>
        
        {/* Fanned Cards Carousel -> 3D Orbit on "Explore Labs" */}
        <div
          onClick={handleBackgroundClick}
          className={`relative w-screen max-w-none select-none transition-[height,margin] duration-700 ease-in-out ${
            orbitMode ? "h-full mt-0 mb-0 scale-100" : "mt-4 mb-16 scale-50 sm:scale-75 md:scale-100"
          }`}
          style={{ height: orbitMode ? "100%" : 400, perspective: ORBIT_PERSPECTIVE, touchAction: orbitMode ? "pan-y" : "auto", cursor: orbitMode ? (focused !== null ? "default" : "grab") : "default" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div ref={worldRef} className="absolute inset-0" style={{ transformStyle: "preserve-3d", zIndex: 100 }}>
            {IMAGES.map((img, i) => {
              const isFocused = focused === i;
              const isDimmed = focused !== null && !isFocused;
              
              let cardBorderClass = "border-[#ff5e00]";
              if (orbitMode && !isGallery) {
                if (isFocused) {
                  cardBorderClass = "border-2 border-[#ff5e00] shadow-[0_0_25px_rgba(255,94,0,0.45)]";
                } else if (isDimmed) {
                  cardBorderClass = "border border-[#ff5e00]/20 shadow-none opacity-30";
                } else {
                  cardBorderClass = "border-[1.5px] border-[#ff5e00]/60 shadow-[0_0_15px_rgba(255,94,0,0.15)] hover:border-[#ff5e00] hover:shadow-[0_0_25px_rgba(255,94,0,0.3)]";
                }
              } else if (isGallery) {
                if (i === 2) {
                  cardBorderClass = "border-[2.5px] border-[#ff5e00] shadow-[0_0_60px_rgba(255,94,0,0.4)] ring-2 ring-[#ff5e00]/40";
                } else {
                  cardBorderClass = "border-[1.5px] border-[#ff5e00]/40 shadow-2xl hover:border-[#ff5e00] hover:opacity-80";
                }
              } else {
                cardBorderClass = i === 2 ? "border-[2px] shadow-[0_0_60px_rgba(255,94,0,0.15)]" : "border-[1.5px] shadow-2xl";
              }

              return (
                <div
                  key={i}
                  ref={(el) => { slotsRef.current[i] = el; }}
                  className="absolute left-1/2 top-1/2 w-0 h-0"
                  style={{ zIndex: isFocused ? 300 : (i === 2 ? 30 : i === 1 || i === 3 ? 20 : 10) }}
                >
                  <div
                    data-card={i}
                    ref={(el) => { cardsRef.current[i] = el; }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(i, e);
                    }}
                    onPointerUp={(e) => {
                      e.stopPropagation();
                      if (!dragInfo.current.hasDragged) {
                        handleCardClick(i, e);
                      }
                    }}
                    onPointerMove={(e) => {
                      if (isFocused) {
                        handleCardMouseMove(i, e);
                      }
                    }}
                    onPointerLeave={() => {
                      if (isFocused) {
                        handleCardMouseLeave(i);
                      }
                    }}
                    className={`absolute rounded-[32px] overflow-hidden bg-neutral-900 transition-colors duration-300 cursor-pointer ${cardBorderClass}`}
                    style={{ width: CARD_SIZES[i], height: CARD_SIZES[i], marginLeft: -CARD_SIZES[i] / 2, marginTop: -CARD_SIZES[i] / 2, cursor: "pointer" }}
                  >
                    <div
                      ref={(el) => { cardTiltRef.current[i] = el; }}
                      className="w-full h-full relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {((isFocused) || (i === 2 && isGallery)) ? (
                        <div className="relative w-full h-full">
                          {IMAGES.map((item, idx) => (
                            <img
                              key={idx}
                              src={item.src}
                              alt={item.alt}
                              draggable={false}
                              className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700 ease-in-out ${
                                idx === sliderProduct ? "opacity-100" : "opacity-0"
                              }`}
                            />
                          ))}
                        </div>
                      ) : (
                        <img src={img.src} alt={img.alt} draggable={false} className="w-full h-full object-cover pointer-events-none" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* "Drag to orbit" circle MUST be inside worldRef to share the 3D stacking context */}
            <div
              ref={circleWrapperRef}
              className="absolute left-1/2 top-1/2 w-0 h-0 transition-opacity duration-500"
              style={{
                zIndex: 75,
                display: (focused !== null || isGallery) ? "none" : "block",
                opacity: orbitMode && !isGallery && (focused === null || collapsed) ? 1 : 0,
              }}
            >
              <div
                ref={circleRef}
                className="absolute rounded-full bg-[#ff5e00] text-white flex items-center justify-center text-center font-semibold uppercase tracking-wide text-[15px] leading-tight pointer-events-none"
                style={{ width: CIRCLE_BASE, height: CIRCLE_BASE, marginLeft: -CIRCLE_BASE / 2, marginTop: -CIRCLE_BASE / 2 }}
              >
                <span ref={hintRef}>Drag<br />to<br />Orbit</span>
              </div>
            </div>

            {/* Gallery / Orbit Toggle Button: inside worldRef with zIndex: 75 so foreground cards overlay it */}
            <div
              ref={toggleBtnWrapperRef}
              className="absolute left-1/2 top-1/2 w-0 h-0 transition-opacity duration-500"
              style={{
                zIndex: isGallery || focused !== null ? 350 : 75,
                opacity: orbitMode && !collapsed ? 1 : 0,
                pointerEvents: orbitMode && !collapsed ? "auto" : "none",
              }}
            >
              <button
                onPointerDown={(e) => e.stopPropagation()}
                onClick={toggleGallery}
                className="absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border border-white/20 bg-neutral-900/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/10 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer"
                style={{
                  top: isGallery || focused !== null ? -250 : 100,
                  marginTop: -28,
                  marginLeft: 0,
                }}
                aria-label="Toggle Gallery View"
              >
                {isGallery ? (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.1153 15.3582C16.8446 15.6642 16.5606 15.9665 16.2635 16.2635C11.9678 20.5593 6.58585 22.1422 4.2427 19.7991C2.6363 18.1926 2.8752 15.158 4.56847 12.0242M6.88967 8.72526C7.17138 8.40495 7.46772 8.08875 7.77824 7.77824C12.074 3.48247 17.4559 1.89956 19.7991 4.2427C21.4066 5.85021 21.1662 8.88795 19.4698 12.024M16.2635 7.77824C20.5593 12.074 22.1422 17.4559 19.7991 19.7991C17.4559 22.1422 12.074 20.5593 7.77824 16.2635C3.48247 11.9678 1.89956 6.58585 4.2427 4.2427C6.58585 1.89956 11.9678 3.48247 16.2635 7.77824ZM13.0001 12C13.0001 12.5523 12.5523 13 12.0001 13C11.4478 13 11.0001 12.5523 11.0001 12C11.0001 11.4477 11.4478 11 12.0001 11C12.5523 11 13.0001 11.4477 13.0001 12Z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 10V14M18 10V14M2 8.2L2 15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19L18.8 19C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5L5.2 5C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Focus timer & Text Description */}
          <div
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center transition-all duration-500 pointer-events-none"
            style={{ 
              top: "calc(50% + 215px)", 
              width: "min(350px, 88vw)",
              opacity: isGallery || focused !== null ? 1 : 0, 
              zIndex: 500 
            }}
          >
            {/* Timeline Progress Bar */}
            <div className="w-full h-[3px] bg-white/15 overflow-hidden rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <div
                ref={timerBarRef}
                className="h-full w-full bg-[#ff5e00] origin-left rounded-full shadow-[0_0_12px_rgba(255,94,0,0.8)]"
                style={{ transform: "scaleX(0)" }}
              />
            </div>

            {/* Content Details */}
            <div className="text-white w-full text-center mt-4">
              <p className="font-bold text-base md:text-lg tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] transition-all duration-300">
                {IMAGES[sliderProduct].title}
              </p>
              <p className="text-white/65 font-medium text-xs md:text-sm mt-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] transition-all duration-300">
                {IMAGES[sliderProduct].desc}
              </p>
            </div>
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

      {/* Beyond Standard Services - Revealed when white circle expands, pinned with horizontal card scrolling */}
      <div
        ref={beyondOverlayRef}
        className="absolute inset-0 w-full h-full flex flex-col justify-between items-center py-5 sm:py-7 md:py-8 bg-[#fcf8f2] pointer-events-none opacity-0 z-[250] select-none overflow-hidden"
      >
        {/* Header */}
        <div className="w-full text-center px-4 pt-1 sm:pt-2 flex-shrink-0">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-semibold text-[#1c1b18] tracking-tight leading-snug max-w-3xl mx-auto">
            <span>Beyond standard services. </span>
            <span className="text-[#73716d] font-normal">Custom AI engines, smart platforms, and digital products</span>
          </h2>
        </div>

        {/* Horizontal Scrolling Cards Track */}
        <div className="w-full overflow-hidden flex-1 flex items-center my-auto py-1 sm:py-2">
          <div
            ref={cardsTrackRef}
            className="flex items-center gap-6 sm:gap-8 md:gap-10 px-8 sm:px-14 md:px-20 will-change-transform"
            style={{ width: "max-content" }}
          >
            {BEYOND_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center flex-shrink-0 w-[310px] sm:w-[350px] md:w-[380px]"
              >
                {/* Top Text Header */}
                <div className="text-center mb-2.5 sm:mb-3 h-[38px] sm:h-[42px] flex items-center justify-center px-2">
                  <p className="text-xs sm:text-[13px] md:text-sm leading-snug text-neutral-600 max-w-[340px]">
                    <strong className="font-semibold text-neutral-900">{card.title}. </strong>
                    {card.subtitle}
                  </p>
                </div>

                {/* Card Visual Graphic */}
                <div className="w-full h-[165px] sm:h-[185px] md:h-[205px] rounded-[24px] sm:rounded-[30px] bg-[#f5ede4] border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden flex items-center justify-center p-6 transition-transform duration-300 hover:scale-[1.02]">
                  {card.glow}
                </div>

                {/* Bottom Text Footer */}
                <div className="text-center mt-2.5 sm:mt-3 h-[42px] sm:h-[48px] flex items-center justify-center px-2">
                  <p className="text-xs sm:text-[13px] md:text-sm leading-snug text-neutral-600 max-w-[340px]">
                    <strong className="font-semibold text-neutral-900">{card.bottomHighlight} </strong>
                    {card.bottomText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Button */}
        <div className="w-full flex justify-center pt-2 pb-1 sm:pb-3 flex-shrink-0">
          <button
            onClick={() => {
              const contactEl = document.getElementById("contact") || document.querySelector("section:last-of-type");
              contactEl?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#1c1b18] hover:bg-[#ff5e00] text-white px-7 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            Build Your AI Solution
          </button>
        </div>
      </div>
    </section>
  );
}
