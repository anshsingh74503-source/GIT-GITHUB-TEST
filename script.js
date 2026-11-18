// Display the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the navigation link for the section currently being viewed.
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = link.getAttribute("href") === `#${current}` ? "#65d6c5" : "#e8edf8";
  });
});
