---
name: webnox-design-system
description: >-
  Provides design tokens, layout conventions, kinetic animation patterns, and UI component standards for Webnox Digital v2.
  Use this skill whenever building, modifying, or styling pages, sections, or components in the Webnox codebase to ensure strict adherence to brand aesthetics, color gradients, and GSAP/Lenis integration rules.
---

# Webnox Digital Design System & Component Guidelines

This skill guides the creation and modification of web pages, sections, and UI components within the **Webnox Digital v2** project. Follow these guidelines to maintain visual excellence, kinetic quality, and architectural consistency.

---

## 1. Brand Color & Gradient Tokens

Never use generic or default Tailwind colors (e.g., plain `bg-orange-500`, `bg-blue-600`). Always use the curated Webnox brand palette:

### Signature Solar Orange Gradients
```css
/* Primary Feature & Banner Gradient */
linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)

/* Horizontal Pill & Button Gradient */
linear-gradient(90deg, #FF7230 0%, #FF6A2F 26%, #FF7631 44%, #FF8935 63%, #FF532B 100%)

/* Diagonal Ambient Glow */
linear-gradient(135deg, #FF7230 0%, #FF8935 50%, #FF532B 100%)
```

### Solid Tokens & Ambient Shadows
- **Brand Solid**: `#FF7230`
- **Brand Deep Accent**: `#FF532B`
- **Vibrant Accent**: `#ff5e00`
- **Brand Glow Shadow**: `rgba(255, 114, 48, 0.38)` or `shadow-[0_4px_24px_rgba(255,114,48,0.22)]`
- **Text Selection**: `background: #ff5e00; color: #ffffff;`

### Dual-Universe Backgrounds
- **Light Warm Cream (Default)**: `#fdfaf6` (primary surface) or `#fcf8f2` (secondary section surface)
- **Deep Obsidian (Dark Contrast)**: `#030303` (pure dark hero), `#0a0806` (warm obsidian), `#080503` (deep charcoal)
- **Dark Brown Metallic**: `linear-gradient(152.18deg, #60290B -16.91%, #140B06 99.34%)`

---

## 2. Layout, Padding & Margin Conventions

### Container Widths
- **Standard Content Sections**:
  ```tsx
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
  ```
- **Wide Interactive Sliders & Tracks**:
  ```tsx
  <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
  ```
- **Focused Text / FAQ Tracks**:
  ```tsx
  <div className="max-w-4xl mx-auto px-6 sm:px-8">
  ```

### Vertical Padding Rhythms
- **Standard Sections**: `py-24 sm:py-32` (96px to 128px)
- **Hero & High-Impact Sections**: `py-28 sm:py-36` or `pt-32 pb-16 md:pt-40 md:pb-24`
- **Compact / Metric Sections**: `py-20 sm:py-28`
- **Header-to-Content Margins**: `mb-12 sm:mb-16` or `mb-16 sm:mb-20`

---

## 3. Kinetic Animation & Scroll Rules

### GSAP + Lenis Integration
Always wrap page contents with `<SmoothScroll>` from `@/components/SmoothScroll`.

When adding GSAP `ScrollTrigger` instances:
1. Always register the plugin: `gsap.registerPlugin(ScrollTrigger);`
2. Wrap animations in `gsap.context(() => { ... }, containerRef);` for proper unmount cleanup.
3. For pinned animations, use `anticipatePin: 1` and `scrub: true`.
4. Call `ScrollTrigger.refresh()` after dynamic heights or 3D scenes mount.

### Three.js / R3F Canvas Rules
When embedding a 3D scene that scales or moves with GSAP:
- Configure the Canvas with `resize={{ offsetSize: true, scroll: false }}` to prevent GSAP CSS transforms from corrupting canvas sizing or causing model drift.
- Use `gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}`.

---

## 4. Reusable Component Catalog

When implementing features, leverage existing specialized components from `@/components/ui/`:

- **NotchNavbar (`@/components/ui/NotchNavbar`)**: Fixed top-center dynamic-island navbar. Expands with Framer Motion spring physics on hover or tap.
- **LiquidButton (`@/components/ui/button`)**: Realistic fluid glass button with specular reflections and SVG displacement distortion.
- **MagicBento (`@/components/ui/MagicBento`)**: High-tech bento grid with cursor-following spotlight glow, borders, and particle star effects.
- **FolderFloat (`@/components/ui/FolderFloat`)**: Interactive folder that spawns Matter.js physics bodies where badges float and react to gravity.
- **CardSwap (`@/components/ui/CardSwap`)**: 3D perspective deck with smooth continuous card cycle transitions.
- **Stepper (`@/components/ui/Stepper`)**: Framed stage progress tracker for linear workflows.
- **FeatureCarousel (`@/components/ui/feature-carousel`)**: Full-width tabbed carousel with auto-advance and liquid button CTAs.

---

## 5. Checklist for Creating New Pages

When scaffolding a new page in `src/app/<route>/page.tsx`:
1. Include descriptive Next.js `metadata` with title and OpenGraph tags.
2. Wrap the root element in `<SmoothScroll>`.
3. Include `<Navbar />` (NotchNavbar) at the top.
4. Alternate section backgrounds between light cream (`#fdfaf6` / `#fcf8f2`) and dark obsidian (`#030303` / `#0a0806`) for dramatic visual pacing.
5. End with a high-impact conversion CTA banner and the branded `<Footer />`.
