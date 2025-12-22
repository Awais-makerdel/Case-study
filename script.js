<!-- JS -->
  <script src="script.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const OFFSET = document.querySelector(".nav-root")?.offsetHeight || 80;

      // Smooth scroll for in-page links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          const targetId = this.getAttribute("href");
          if (targetId.length > 1) {
            const target = document.querySelector(targetId);
            if (target) {
              e.preventDefault();
              const y = target.getBoundingClientRect().top + window.pageYOffset - OFFSET;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }

          // Close mobile nav after click
          const navLinks = document.getElementById("navLinks");
          if (navLinks) navLinks.classList.remove("open");
          navLinks.style.display = window.innerWidth <= 768 ? "none" : "flex";
        });
      });

      // Mobile nav toggle
      const navToggle = document.getElementById("navToggle");
      const navLinks = document.getElementById("navLinks");
      if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
          navLinks.classList.toggle("open");
          if (navLinks.classList.contains("open")) {
            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "column";
          } else {
            navLinks.style.display = "none";
          }
        });
      }

      // Ensure nav links visible on resize
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          navLinks.style.display = "flex";
          navLinks.style.flexDirection = "row";
        } else if (!navLinks.classList.contains("open")) {
          navLinks.style.display = "none";
        }
      });
    });
  </script>
</body>
</html>
