// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Waitlist form (frontend only for now)
const form = document.getElementById('waitlistForm');
const successMessage = document.getElementById('successMessage');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = form.querySelector('input[name="email"]').value;
    
    // For now just show success. Later you can connect this to a real backend,
    // Formspree, Google Sheets, Supabase, etc.
    console.log('Waitlist email:', email);
    
    form.hidden = true;
    successMessage.hidden = false;
  });
}
