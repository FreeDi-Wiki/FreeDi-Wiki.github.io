// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (C) 2026 AGENT-047185 (JD)

// Addon to open all external websites inside Zensical in a new tab 
// without adding {target=_blank} behind every link

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="http"]');

  links.forEach(link => {
    // Ignore les liens internes à ton site
    if (link.hostname !== window.location.hostname) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
