---
trigger: always_on
---

# Mandatory Workflow Rule: Always Consult Skills Before Writing Code

Before starting any design, component, page, or styling work in this repository:
1. Always read and reference the workspace skill at `.agents/skills/webnox-design-system/SKILL.md`.
2. Strictly adhere to Webnox brand design tokens:
   - Solar Orange gradients (`#FF7230` to `#FF532B`).
   - Dual-theme backgrounds: Warm Cream (`#fdfaf6` / `#fcf8f2`) and Obsidian (`#030303` / `#0a0806`).
   - Standard container widths (`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12`) and section vertical rhythms (`py-24 sm:py-32`).
3. Comply with GSAP ScrollTrigger + Lenis scroll synchronization rules (`anticipatePin: 1`, ticker integration, `resize={{ offsetSize: true, scroll: false }}` on 3D canvases).
4. Reuse existing UI components from `@/components/ui/` (`NotchNavbar`, `LiquidButton`, `MagicBento`, `CardSwap`, `FolderFloat`, `Stepper`, `FeatureCarousel`).
