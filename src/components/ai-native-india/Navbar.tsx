"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "Services", href: "#services" },
        { label: "Products", href: "#products" },
        { label: "Why Us", href: "#why-us" },
      ]}
      rightLinks={[
        { label: "Technologies", href: "#tech-stack" },
        { label: "Industries", href: "#industries" },
        { label: "Process", href: "#process" },
      ]}
    />
  );
}

