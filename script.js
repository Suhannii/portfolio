/*  ============================================================
    PORTFOLIO JAVASCRIPT
    Sections:
    1. Custom Cursor with coral trail
    2. Navbar — shrink on scroll + active link highlight
    3. Hamburger mobile menu
    4. Typewriter effect for hero roles
    5. Particle canvas background
    6. Scroll Reveal (Intersection Observer)
    7. Skill bar animation
    8. Contact form handling
    9. Smooth scroll for anchor links
    ============================================================ */

/* -------------------------------------------------------
   1. CUSTOM CURSOR
   Moves a small dot (cursor) and a larger ring (trail)
   with the mouse.
------------------------------------------------------- */
const cursor      = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

let mouseX = 0, mouseY = 0;   // actual mouse position
let trailX = 0, trailY = 0;   // lagging trail position

// Update cursor dot instantly
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

// Animate the trail ring smoothly with lerp (linear interpolation)
function animateCursor() {
  // Lerp = move a fraction toward target each frame → smooth lag effect
  trailX += (mouseX - trailX) * 0.12;
  trailY += (mouseY - trailY) * 0.12;
  cursorTrail.style.left = trailX + 'px';
  cursorTrail.style.top  = trailY + 'px';
  requestAnimationFrame(animateCursor);   // keep looping every frame
}
animateCursor();

// Make cursor bigger when hovering clickable elements
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width  = '20px';
    cursor.style.height = '20px';
    cursorTrail.style.width  = '50px';
    cursorTrail.style.height = '50px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width  = '12px';
    cursor.style.height = '12px';
    cursorTrail.style.width  = '30px';
    cursorTrail.style.height = '30px';
  });
});

/* -------------------------------------------------------
   2. NAVBAR
   Adds .scrolled class when page is scrolled down.
   Also highlights the nav link matching current section.
------------------------------------------------------- */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Shrink navbar after 60px scroll
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Highlight active nav link based on which section is in viewport
  let currentSection = '';
  sections.forEach(sec => {
    const top    = sec.offsetTop - 120;
    const bottom = top + sec.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      currentSection = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});

/* -------------------------------------------------------
   3. HAMBURGER MENU (mobile)
------------------------------------------------------- */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  // Change icon ≡ / ✕
  hamburger.innerHTML = mobileMenu.classList.contains('open') ? '&#10005;' : '&#9776;';
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  hamburger.innerHTML = '&#9776;';
}



