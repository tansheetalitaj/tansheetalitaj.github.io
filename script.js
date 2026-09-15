const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.querySelector("b").textContent = isOpen ? "−" : "+";
  });

  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector("b").textContent = "+";
  }));
}

const filterButtons = document.querySelectorAll(".filter-btn");
const projectRows = document.querySelectorAll(".project-row");

filterButtons.forEach((button) => button.addEventListener("click", () => {
  const filter = button.dataset.filter;
  filterButtons.forEach((candidate) => {
    const isActive = candidate === button;
    candidate.classList.toggle("active", isActive);
    candidate.setAttribute("aria-pressed", String(isActive));
  });
  projectRows.forEach((project) => {
    const categories = project.dataset.category || "";
    project.classList.toggle("hide", filter !== "all" && !categories.includes(filter));
  });
}));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navLinks?.classList.contains("active")) {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector("b").textContent = "+";
    menuToggle.focus();
  }
});
