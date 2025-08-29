// Array of skill objects (image path + name)
const skills = [
  { src: "assets/icons/html.png", name: "HTML" },
  { src: "assets/icons/css.png", name: "CSS" },
  { src: "assets/icons/js.png", name: "JavaScript" },
  { src: "assets/icons/java.png", name: "Java" },
  { src: "assets/icons/swift.png", name: "Swift" },
  { src: "assets/icons/wordpress.png", name: "WordPress" },
  { src: "assets/icons/mysql.png", name: "MySQL" },
  { src: "assets/icons/php.png", name: "PHP" },
  { src: "assets/icons/angular.png", name: "Angular" },
  { src: "assets/icons/linux.png", name: "Linux" },
  { src: "assets/icons/react.png", name: "React" },
  { src: "assets/icons/photoshop.png", name: "Photoshop" },
  { src: "assets/icons/illsutrator.png", name: "Illustrator" },
  { src: "assets/icons/xd.png", name: "Adobe XD" },
  { src: "assets/icons/gitHub.png", name: "GitHub" },
  { src: "assets/icons/android-studio.png", name: "Android Studio" },
  { src: "assets/icons/vscode.png", name: "VS Code" },
  { src: "assets/icons/xcode.png", name: "Xcode" }
];



const projects = [
  {
    name: "Event Calculator App",
    img: "assets/images/Event Calc BKG.png",
    link: "https://nai-2024.github.io/Event_Calculator"
  },
  {
    name: "Apex Builders - iOS App",
    img: "assets/images/const.jpg",
    link: "https://apex-builders-iosapp.netlify.app"
  },
  {
    name: "Nai Motors - Android App",
    img: "assets/images/nai-motors.png",
    link: "https://nai-motors.netlify.app/"
  },
  {
    name: "Nai Resturant - WordPress",
    img: "assets/images/naiResturant.png",
    link: "https://nairesturant.wordpress.com/"
  },
  {
    name: "Nai Mart - Web App",
    img: "assets/images/nai-mart.png",
    link: "https://nai-mart.netlify.app/"
  }
];



// Function to display skills
function renderSkills(skillsArray, containerSelector) {
  const container = document.querySelector(containerSelector);
  skillsArray.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${skill.src}" alt="${skill.name} logo" class="thumbnail" />
        </div>
        <div class="flip-card-back">
          <p>${skill.name}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Function to display projects
function renderProjects(projectsArray, containerSelector) {
  const container = document.querySelector(containerSelector);
  projectsArray.forEach((project) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <a href="${project.link}" target="_blank">
        <img src="${project.img}" alt="${project.name}">
        <h2>${project.name}</h2>
      </a>
    `;
    container.appendChild(div);
  });
}

// Call the functions
renderSkills(skills, ".thumbnail-container");
renderProjects(projects, "#projects");