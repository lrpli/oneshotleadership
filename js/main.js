// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const nav    = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  // Close nav when a link is clicked on mobile
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Smooth active-link detection
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPath) a.classList.add('active');
});

// Contact form — basic client-side validation feedback
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    const requiredFields = form.querySelectorAll('[required]');
    let valid = true;
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = '#c0392b';
      } else {
        field.style.borderColor = '';
      }
    });
    if (!valid) {
      e.preventDefault();
      alert('Please fill in all required fields before submitting.');
    }
  });
}
