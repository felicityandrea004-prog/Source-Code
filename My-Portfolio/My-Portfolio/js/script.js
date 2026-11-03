// Displays the current year in the footer.
document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Close the mobile navigation after a section link is selected.
  const navLinks = document.querySelectorAll("#portfolioNav .nav-link");
  const navMenu = document.getElementById("portfolioNav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && navMenu.classList.contains("show")) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        collapse.hide();
      }
    });
  });
});
