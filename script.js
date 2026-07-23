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


