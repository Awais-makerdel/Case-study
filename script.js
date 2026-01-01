<script>
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Smooth scroll to section
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
</script>



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
