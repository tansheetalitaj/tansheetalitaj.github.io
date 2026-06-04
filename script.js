const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backToTop = document.getElementById("backToTop");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile menu
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Back to top button
if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Project filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category") || "";

      if (filter === "all" || category.includes(filter)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

// Copy email button
const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyMessage = document.getElementById("copyMessage");

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("tansheetalitaj@gmail.com");

      if (copyMessage) {
        copyMessage.classList.add("show");

        setTimeout(() => {
          copyMessage.classList.remove("show");
        }, 2000);
      }
    } catch (error) {
      window.location.href = "mailto:tansheetalitaj@gmail.com";
    }
  });
}