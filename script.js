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

/* -------------------------------------------------------
   4. TYPEWRITER EFFECT
   Cycles through an array of role strings, typing and
   deleting each one with a realistic delay.
------------------------------------------------------- */
const typewriterEl = document.getElementById('typewriter');
const roles = [
  'B.Tech CS (Data Science) Student',
  'Freelance Web Developer',
  'Data Science & ML Enthusiast',
  'NLP Researcher — Hinglish AI',
];

let roleIndex   = 0;   // which role are we on
let charIndex   = 0;   // which character are we on
let isDeleting  = false;
let typingSpeed = 80;  // ms between characters

function typeWriter() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    // Add one character
    typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 80;

    if (charIndex === currentRole.length) {
      // Finished typing — pause 1.8s then start deleting
      typingSpeed = 1800;
      isDeleting  = true;
    }
  } else {
    // Remove one character
    typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 45;   // deleting is slightly faster

    if (charIndex === 0) {
      // Finished deleting — move to next role
      isDeleting = false;
      roleIndex  = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // pause before typing next
    }
  }

  setTimeout(typeWriter, typingSpeed);
}

// Start after a short page-load delay
setTimeout(typeWriter, 800);

/* -------------------------------------------------------
   5. PARTICLE CANVAS BACKGROUND
   Draws a grid of small dots that gently drift and are
   connected with lines when close to the mouse cursor.
------------------------------------------------------- */
const canvas = document.getElementById('particleCanvas');
const ctx    = canvas.getContext('2d');

// Make canvas fill the hero section
function resizeCanvas() {
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Mouse position relative to canvas
let canvasMouseX = -1000;
let canvasMouseY = -1000;

canvas.addEventListener('mousemove', (e) => {
  const rect   = canvas.getBoundingClientRect();
  canvasMouseX = e.clientX - rect.left;
  canvasMouseY = e.clientY - rect.top;
});

// Create an array of particle objects
const PARTICLE_COUNT = 70;
const particles = [];

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x    = Math.random() * canvas.width;
    this.y    = Math.random() * canvas.height;
    this.vx   = (Math.random() - 0.5) * 0.4;   // slow drift velocity
    this.vy   = (Math.random() - 0.5) * 0.4;
    this.size = Math.random() * 1.8 + 0.5;
    this.alpha = Math.random() * 0.25 + 0.08;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    // Wrap around edges instead of bouncing
    if (this.x < 0)            this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0)            this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // Colour based on position — amber on left, teal on right
    const t   = this.x / canvas.width;
    const r1  = 232, g1 = 154, b1 = 60;   // --amber
    const r2  =  60, g2 = 166, b2 = 166;  // --teal
    const r   = Math.round(r1 + (r2 - r1) * t);
    const g   = Math.round(g1 + (g2 - g1) * t);
    const b   = Math.round(b1 + (b2 - b1) * t);
    ctx.fillStyle = `rgba(${r},${g},${b},${this.alpha})`;
    ctx.fill();
  }
}

// Initialise particles
for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push(new Particle());
}

// Draw connections (lines) between nearby particles
function drawConnections() {
  const MAX_DIST        = 120;  // max distance to draw a line between two particles
  const MOUSE_DIST      = 160;  // extra radius around mouse

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx   = particles[i].x - particles[j].x;
      const dy   = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MAX_DIST) {
        const alpha = (1 - dist / MAX_DIST) * 0.15;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(232,154,60,${alpha})`;
        ctx.lineWidth   = 0.8;
        ctx.stroke();
      }
    }

    // Connect particle to mouse cursor
    const dx   = particles[i].x - canvasMouseX;
    const dy   = particles[i].y - canvasMouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < MOUSE_DIST) {
      const alpha = (1 - dist / MOUSE_DIST) * 0.35;
      ctx.beginPath();
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(canvasMouseX, canvasMouseY);
      ctx.strokeStyle = `rgba(255,107,74,${alpha})`;  // coral lines to mouse
      ctx.lineWidth   = 1;
      ctx.stroke();
    }
  }
}



