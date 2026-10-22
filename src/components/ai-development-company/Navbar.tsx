"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "Services", href: "#services" },
        { label: "Benefits", href: "#benefits" },
        { label: "Why Us", href: "#why-us" },
      ]}
      rightLinks={[
        { label: "Process", href: "#process" },
        { label: "Technologies", href: "#tech-stack" },
        { label: "Industries", href: "#industries" },
      ]}
    />
  );
}
