import React from "react";
import { useAccessibility } from "../components/AccessibilityContext";

export default function AccessibilityMenu({ closeMenu }) {
  const {
    increaseFontSize,
    decreaseFontSize,
    toggleDarkMode,
    toggleHighContrast,
    toggleTextSpacing,
    toggleLinkHighlight,
    togglePauseAnimations,
    toggleHideImages,
    toggleDyslexiaFont,
    toggleLargeCursor,
  } = useAccessibility();

  return (
    <div className="accessibility-menu">
      <button className="close-btn" onClick={closeMenu}>✖ Close</button>
      <button onClick={increaseFontSize}>Increase Font Size</button>
      <button onClick={decreaseFontSize}>Decrease Font Size</button>
      <button onClick={toggleDarkMode}>Enable Dark Mode</button>
      <button onClick={toggleHighContrast}>Enable High Contrast</button>
      <button onClick={toggleTextSpacing}>Increase Text Spacing</button>
      <button onClick={toggleLinkHighlight}>Highlight Links</button>
      <button onClick={togglePauseAnimations}>Pause Animations</button>
      <button onClick={toggleHideImages}>Hide Images</button>
      <button onClick={toggleDyslexiaFont}>Dyslexia-Friendly Font</button>
      <button onClick={toggleLargeCursor}>Large Cursor</button>
    </div>
  );
}
