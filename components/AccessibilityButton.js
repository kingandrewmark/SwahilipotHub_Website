import React from "react";
import { FaUniversalAccess } from "react-icons/fa";

export default function AccessibilityButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="accessibility-button fixed bottom-8 right-8 z-1000 p-4 rounded-full shadow-lg"
      aria-label="Open accessibility menu"
    >
      <FaUniversalAccess className="w-6 h-6" />
    </button>
  );
}
