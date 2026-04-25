/* =========================
   WHATSAPP ORDER SYSTEM
========================= */

const phoneNumber = "234XXXXXXXXXX"; // <-- PUT YOUR NUMBER HERE

function orderNow(product) {
  const message = `Hello, I'm interested in ${product}. Please send me full details, pricing, and how I can get it.`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}


/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* =========================
   HERO PARALLAX EFFECT
========================= */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  if (heroImage) {
    heroImage.style.transform = `translateY(${scrollY * 0.2}px) scale(1.1)`;
  }
});


/* =========================
   FADE-IN ON SCROLL
========================= */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});


/* =========================
   BUTTON CLICK RIPPLE EFFECT
========================= */

document.querySelectorAll(".primary-btn, .secondary-btn, .footer-cta").forEach(button => {
  button.addEventListener("click", function (e) {
    let ripple = document.createElement("span");

    ripple.classList.add("ripple");

    let rect = this.getBoundingClientRect();

    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});


/* =========================
   SCROLL HEADER EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
