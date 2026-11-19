"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "Overview", href: "#overview" },
        { label: "Why Us", href: "#why-us" },
        { label: "Solutions", href: "#solutions" },
      ]}
      rightLinks={[
        { label: "Industries", href: "#industries" },
        { label: "Process", href: "#process" },
        { label: "FAQ", href: "#faq" },
      ]}
    />
  );
}
