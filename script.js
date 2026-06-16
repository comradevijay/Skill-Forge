// ── Mobile hamburger toggle ───────
const navToggle = document.getElementById('navToggle');
const navUl     = document.querySelector('.nav-ul');

if (navToggle && navUl) {
  navToggle.addEventListener('click', () => {
    navUl.classList.toggle('open');
  });

  navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('open');
    });
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.partner-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(15px)';
    card.style.transition = 'opacity .4s ease, transform .4s ease';
    observer.observe(card);
  });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const subject = formData.get('subject').trim();
  const message = formData.get('message').trim();

  if (!name || !email || !subject || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simple email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  console.log('Form submitted:', { name, email, subject, message });
  alert('Thank you! Your message has been sent.');
  this.reset();
});


document.getElementById('year').textContent = new Date().getFullYear();