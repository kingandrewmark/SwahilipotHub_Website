"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Create context for accessibility settings
const AccessibilityContext = createContext({});

export function AccessibilityProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [textSpacing, setTextSpacing] = useState(false);
  const [linkHighlight, setLinkHighlight] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [largeCursor, setLargeCursor] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  // Function to toggle classes on <body>
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("high-contrast", highContrast);
    document.body.classList.toggle("increased-spacing", textSpacing);
    document.body.classList.toggle("highlight-links", linkHighlight);
    document.body.classList.toggle("pause-animations", pauseAnimations);
    document.body.classList.toggle("hide-images", hideImages);
    document.body.classList.toggle("dyslexia-friendly", dyslexiaFont);
    document.body.classList.toggle("large-cursor", largeCursor);
    document.body.style.fontSize = `${fontSize}px`;
  }, [
    darkMode,
    highContrast,
    textSpacing,
    linkHighlight,
    pauseAnimations,
    hideImages,
    dyslexiaFont,
    largeCursor,
    fontSize,
  ]);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        darkMode,
        increaseFontSize: () => setFontSize((size) => Math.min(size + 2, 24)),
        decreaseFontSize: () => setFontSize((size) => Math.max(size - 2, 12)),
        toggleDarkMode: () => setDarkMode((prev) => !prev),
        toggleHighContrast: () => setHighContrast((prev) => !prev),
        toggleTextSpacing: () => setTextSpacing((prev) => !prev),
        toggleLinkHighlight: () => setLinkHighlight((prev) => !prev),
        togglePauseAnimations: () => setPauseAnimations((prev) => !prev),
        toggleHideImages: () => setHideImages((prev) => !prev),
        toggleDyslexiaFont: () => setDyslexiaFont((prev) => !prev),
        toggleLargeCursor: () => setLargeCursor((prev) => !prev),
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

// Hook to use accessibility settings
export function useAccessibility() {
  return useContext(AccessibilityContext);
}
