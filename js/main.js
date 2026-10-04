// ---------- Floating keyword background ----------
(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  const words = ["Spring", "JWT", "MySQL", "REST", "Java", "@Bean", "GET", "POST", "SELECT", "JPA", "BCrypt", "Docker", "200", "401", "CI/CD"];
  let W, H;
  const particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeParticle(initial) {
    return {
      x: Math.random() * W,
      y: initial ? Math.random() * H : H + 20,
      speed: 0.15 + Math.random() * 0.3,
      alpha: 0.04 + Math.random() * 0.07,
      text: words[Math.floor(Math.random() * words.length)],
      size: 10 + Math.random() * 4,
      color: Math.random() > 0.5 ? "#00e07a" : "#5aa7ff",
    };
  }

  resize();
  window.addEventListener("resize", resize);
  const count = window.innerWidth < 640 ? 18 : 36;
  for (let i = 0; i < count; i++) particles.push(makeParticle(true));

  (function tick() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y -= p.speed;
      if (p.y < -30) particles[i] = makeParticle(false);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.font = `${p.size}px 'JetBrains Mono', monospace`;
      ctx.fillText(p.text, p.x, p.y);
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  })();
})();

// ---------- Fade sections in on scroll ----------
(function () {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
})();

// ---------- Highlight current nav link ----------
(function () {
  const links = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = [...links].map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if (!sections.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s));
})();

// ---------- EMS screenshot switcher ----------
(function () {
  const main = document.getElementById("shot-main");
  const thumbs = document.querySelectorAll(".thumbs button");
  thumbs.forEach((btn) =>
    btn.addEventListener("click", () => {
      main.src = btn.dataset.src;
      main.alt = btn.querySelector("img").alt;
      thumbs.forEach((b) => b.classList.remove("on"));
      btn.classList.add("on");
    })
  );
})();

// ---------- Footer year ----------
document.querySelectorAll(".year").forEach((el) => (el.textContent = new Date().getFullYear()));
