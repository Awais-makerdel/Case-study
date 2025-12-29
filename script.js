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
