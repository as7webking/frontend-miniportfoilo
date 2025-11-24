function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  // Toggles the 'active' class which is handled by the CSS media query
  navMenu.classList.toggle("active");
}

// Close menu when a link is clicked (Mobile behavior)
document.querySelectorAll(".nav-center a").forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.getElementById("navMenu");
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  });
});

// Ensure the menu is visible on desktop if the window is resized from mobile
window.addEventListener("resize", () => {
  const navMenu = document.getElementById("navMenu");
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active");
  }
});
