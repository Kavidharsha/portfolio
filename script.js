window.onscroll = () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
};

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Dark mode toggle functionality
const darkToggleBtn = document.getElementById("darkModeToggle");
const toggleIcon = document.getElementById("toggleIcon");

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  
  // Default to light mode if no theme is saved
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleIcon.textContent = "☀️"; // Sun icon for dark mode (click to go light)
  } else {
    document.body.classList.remove("dark-mode");
    toggleIcon.textContent = "🌙"; // Moon icon for light mode (click to go dark)
  }
});

// Toggle dark mode on click
darkToggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  
  if (isDark) {
    localStorage.setItem("theme", "dark");
    toggleIcon.textContent = "☀️"; // Sun icon (click to go back to light)
  } else {
    localStorage.setItem("theme", "light");
    toggleIcon.textContent = "🌙"; // Moon icon (click to go to dark)
  }
});