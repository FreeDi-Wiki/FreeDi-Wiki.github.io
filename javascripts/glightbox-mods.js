// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (C) 2026 AGENT-047185 (JD)

// GlightBox config for Zensical

document.addEventListener("DOMContentLoaded", () => {

  GLightbox({
    selector: '.glightbox',
    skin: 'clean',

    slideEffect: 'slide',
    openEffect: 'zoom',
    closeEffect: 'fade',

    zoomable: true,
    draggable: true,
    touchNavigation: true,

    autoplayVideos: true,
    preload: true,
    loop: true
  });

});
