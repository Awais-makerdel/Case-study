const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});

// Close menu on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("active");
  });
});


const slides = document.querySelectorAll('.slider-container .slide');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

// Auto-slide every 6 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 6000);

<script>
  // Select all slides
  const slides = document.querySelectorAll('.slide');
  let index = 0; // start with first slide

  // Function to show next slide
  function nextSlide() {
    // Hide current slide
    slides[index].classList.remove('active');

    // Move to next slide (loop back to start)
    index = (index + 1) % slides.length;

    // Show next slide
    slides[index].classList.add('active');
  }

  // Change slide every 4000ms (4 seconds)
  setInterval(nextSlide, 4000);
</script>
