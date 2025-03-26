"use client"; // 👈 This file is now a Client Component

import { useState } from "react";
import { AccessibilityProvider } from "@/components/AccessibilityContext";
import AccessibilityButton from "@/components/AccessibilityButton";
import AccessibilityMenu from "@/components/AccessibilityMenu";

export default function AccessibilityWrapper({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AccessibilityProvider>
      {children}

      {/* Accessibility Button */}
      <AccessibilityButton onClick={() => setMenuOpen(true)} />

      {/* Accessibility Menu (Shown when button is clicked) */}
      {menuOpen && <AccessibilityMenu closeMenu={() => setMenuOpen(false)} />}
    </AccessibilityProvider>
  );
}
