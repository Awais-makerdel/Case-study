<script>
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
</script>


<script>
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".premium-slider-section .slide");
  let index = 0;
  const total = slides.length;
  const intervalTime = 4000;

  function showSlide(i) {
    slides.forEach((s, idx) => {
      s.classList.remove("active");
      if (idx === i) s.classList.add("active");
    });
  }

  // Auto slide
  setInterval(() => {
    index = (index + 1) % total;
    showSlide(index);
  }, intervalTime);

  // Navigation
  const prevBtn = document.querySelector(".premium-slider-section .slider-prev");
  const nextBtn = document.querySelector(".premium-slider-section .slider-next");

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    showSlide(index);
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    showSlide(index);
  });
});
</script>


<script>
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
</script>
