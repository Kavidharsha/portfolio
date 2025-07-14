// Sample project data
const projects = [
    {
      title: "Weather App",
      description: "Fetches live weather data using an API and displays it beautifully.",
    },
    {
      title: "To-Do List",
      description: "A simple task manager with add, delete, and complete options.",
    },
    {
      title: "Portfolio Website",
      description: "This portfolio itself! Built with HTML, CSS, and JavaScript.",
    }
  ];
  
  // Target the project list container
  const projectList = document.querySelector(".project-list");
  
  // Loop through each project and add it to the DOM
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    projectList.appendChild(card);
  });
const roles = ["Kavi", "a Web Developer", "a Designer", "a Coder"];
  let currentRole = 0;
  let charIndex = 0;
  const typeSpeed = 100;
  const typewriterElement = document.querySelector(".typewriter");
  
  function typeEffect() {
    if (charIndex < roles[currentRole].length) {
      typewriterElement.textContent += roles[currentRole].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, typeSpeed);
    } else {
      setTimeout(eraseEffect, 1000);
    }
  }
  
  function eraseEffect() {
    if (charIndex > 0) {
      typewriterElement.textContent = roles[currentRole].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      currentRole = (currentRole + 1) % roles.length;
      setTimeout(typeEffect, 200);
    }
  }
  
  typeEffect();
    
  const backToTop = document.getElementById("backToTop");

  window.onscroll = () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  };
  
  backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
  