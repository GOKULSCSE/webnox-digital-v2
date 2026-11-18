"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "Overview", href: "#overview" },
        { label: "Services", href: "#services" },
        { label: "Why Us", href: "#why-us" },
      ]}
      rightLinks={[
        { label: "Industries", href: "#industries" },
        { label: "Tech Stack", href: "#tech-stack" },
        { label: "Process", href: "#process" },
      ]}
    />
  );
}
