"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "AI Services", href: "#services" },
        { label: "Case Studies", href: "#case-studies" },
        { label: "Architecture", href: "#architecture" },
      ]}
      rightLinks={[
        { label: "Process", href: "#process" },
        { label: "Industries", href: "#industries" },
        { label: "FAQ", href: "#faq" },
      ]}
    />
  );
}
