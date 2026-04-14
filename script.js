const revealElements = document.querySelectorAll('.reveal-up');
const staggerBlocks = document.querySelectorAll('[data-stagger]');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const staggerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const pills = entry.target.querySelectorAll('.skill-pill');
      pills.forEach((pill, index) => {
        setTimeout(() => {
          pill.classList.add('in-view');
        }, index * 120);
      });

      staggerObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.25 }
);

staggerBlocks.forEach((block) => staggerObserver.observe(block));

const canvas = document.getElementById('tech-bg');
const ctx = canvas.getContext('2d');

const particles = [];
const particleCount = 55;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles.length = 0;
  for (let i = 0; i < particleCount; i += 1) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.9 + 0.7
    });
  }
}

function drawBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i += 1) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(49, 208, 170, 0.45)';
    ctx.fill();
  }

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const p1 = particles[i];
      const p2 = particles[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        const alpha = 0.13 - dist / 1000;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(243, 186, 47, ${Math.max(alpha, 0.02)})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawBackground);
}

resizeCanvas();
createParticles();
drawBackground();
window.addEventListener('resize', () => {
  resizeCanvas();
  createParticles();
});
