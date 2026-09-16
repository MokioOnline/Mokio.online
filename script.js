// ======================
// CONFIG – fill these two in
// ======================
const SUPABASE_URL = 'https://YOUR-PROJECT-ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR-ANON-PUBLIC-KEY';

// ======================
// Mobile menu
// ======================
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ======================
// Turnstile + Waitlist → Supabase
// ======================
let turnstileToken = null;

// Called by Cloudflare Turnstile when the user passes the check
window.onTurnstileSuccess = function (token) {
  turnstileToken = token;
};

const form = document.getElementById('waitlistForm');
const successMessage = document.getElementById('successMessage');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[name="email"]');
    const email = emailInput.value.trim().toLowerCase();
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!email) return;

    // Require the bot check
    if (!turnstileToken) {
      alert('Please complete the security check first.');
      return;
    }

    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Joining...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok || response.status === 201) {
        form.hidden = true;
        successMessage.hidden = false;
      } else if (response.status === 409) {
        // Email already exists
        form.hidden = true;
        successMessage.hidden = false;
        successMessage.querySelector('h3').textContent = "You're already on the list!";
        successMessage.querySelector('p').textContent = "We'll be in touch when Mokio is ready.";
      } else {
        console.error('Supabase error:', response.status);
        alert('Something went wrong. Please try again.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        if (window.turnstile) {
          window.turnstile.reset();
          turnstileToken = null;
        }
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again.');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      if (window.turnstile) {
        window.turnstile.reset();
        turnstileToken = null;
      }
    }
  });
}
