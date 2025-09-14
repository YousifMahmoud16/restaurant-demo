// script.js — navbar toggle, scroll background, simple UX helpers
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navLinks.classList.toggle('open');
            navToggle.classList.toggle('open');
        });
    }

    // close menu when a link clicked (mobile)
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // add background to navbar after scroll
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    // accessibility: close menu on ESC
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // simple UX on contact form submit: show a small alert (non-blocking)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            // Let the form submit to Formspree normally; also show a brief message
            const msg = document.createElement('div');
            msg.className = 'inline-msg';
            msg.textContent = 'Sending message…';
            msg.style.cssText = 'position:fixed; right:18px; bottom:18px; background:#0f172a; color:#fff; padding:10px 14px; border-radius:8px; box-shadow:0 6px 18px rgba(2,6,23,0.2); z-index:1500';
            document.body.appendChild(msg);
            setTimeout(() => msg.remove(), 2500);
        });
    }
});
