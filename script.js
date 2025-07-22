const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
});
let current = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[index].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});
