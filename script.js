// ===== LIVE STATUS TICKER RANDOM VIEWERS =====
document.addEventListener("DOMContentLoaded", function () {
  const viewerElements = document.querySelectorAll(".viewer-count");

  function updateViewers() {
    viewerElements.forEach(el => {
      const min = parseInt(el.dataset.min, 10);
      const max = parseInt(el.dataset.max, 10);
      const randomCount = Math.floor(Math.random() * (max - min + 1)) + min;
      el.textContent = randomCount;
    });
  }

  // Initial run
  updateViewers();

  // Refresh every 30 seconds
  setInterval(updateViewers, 30000);
});
