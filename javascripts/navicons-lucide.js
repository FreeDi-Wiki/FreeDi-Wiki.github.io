// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (C) 2026 AGENT-047185 (JD)

// Addon to integrate + use LUCIDE icons inside Zensical nav sections

document.addEventListener("DOMContentLoaded", () => {

  const iconMap = {
    "Before You Start": "file-text",
    "Easy Installation": "settings",
    "Advanced Installation": "zap",

    "Calibration": "ruler",
    "System checks & Extras": "file-check-corner",
    "Hardware Options": "toolbox",
    "Slicer Setup": "layers",
    "Understanding Your Config": "file-cog",

    "Staying Up to Date": "rss",
    "Klipper Plugins": "puzzle",
    "Advanced Configuration": "sliders",

    "Learn": "graduation-cap",
  };

  const items = document.querySelectorAll(
    ".md-nav__item--nested > .md-nav__link"
  );

  items.forEach((el) => {
    const text = el.textContent.trim();

    const iconName = iconMap[text];
    if (!iconName) return;

    const icon = document.createElement("i");
    icon.setAttribute("data-lucide", iconName);

    icon.style.marginRight = "8px";
    icon.style.width = "16px";
    icon.style.height = "16px";

    el.prepend(icon);
  });

  if (window.lucide) {
    lucide.createIcons();
  }

});
 