// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Gallery (justified rows) + Lightbox =====
// Figures are kept in one master array, shuffled on every page load. That
// order drives both the row layout (left to right, then the next row) and the
// lightbox's next/prev sequence, so "next" always means the next photo you see.
(function () {
  const container = document.getElementById("masonry");
  const figures = Array.from(container.querySelectorAll(".print"));

  // Shuffle once per page load (Fisher–Yates), so every visit shows a fresh order.
  for (let i = figures.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [figures[i], figures[j]] = [figures[j], figures[i]];
  }

  Gallery.layout(container, figures);
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => Gallery.layout(container, figures), 150);
  });

  Lightbox.init({ all: figures, getItems: () => figures });
})();
