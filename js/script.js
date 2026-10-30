// SKINLY — interaksi sederhana untuk website statis
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const navItems = document.querySelectorAll(".nav-link");

// Buka/tutup menu pada layar kecil.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Setelah salah satu menu dipilih, tutup menu mobile.
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Tandai menu yang sedang dipilih berdasarkan section yang terlihat.
const sections = document.querySelectorAll("main section[id], main section#home");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentId = entry.target.id;
      navItems.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => observer.observe(section));
