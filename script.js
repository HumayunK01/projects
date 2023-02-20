// =========================== VARIABLES ===========================
const projectsEl = document.getElementById("projects");
const filterEls = document.querySelectorAll("#filters li");

// =========================== FILTERS ===========================
for (let i = 0; i < filterEls.length; i++) {
  filterEls[i].addEventListener("click", function (e) {
    document.querySelector("#filters li.active").classList.remove("active");
    filterEls[i].classList.add("active");
    let tag = e.target.id;
    renderProjects(tag);
  });
}

// =========================== PROJECTS ===========================
const projects = [
  {
    name: "Favourite Food App",
    img: "1.png",
    codeUrl: "https://github.com/HumayunK01/foodapp",
    liveUrl: "https://humayunk01.github.io/foodapp/",
    tags: ["html"]
  },
  {
    name: "EdYoda Stories",
    img: "2.png",
    codeUrl: "https://github.com/HumayunK01/edyodastories2.0",
    liveUrl: "https://humayunk01.github.io/edyodastories2.0/",
    tags: ["html"]
  },
  {
    name: "Stunning Landing Page",
    img: "3.png",
    codeUrl: "https://github.com/HumayunK01/stunninglandingpage",
    liveUrl: "https://humayunk01.github.io/stunninglandingpage/",
    tags: ["css"]
  },
  {
    name: "NuuK WebApp",
    img: "8.png",
    codeUrl: "https://github.com/HumayunK01/nuuk",
    liveUrl: "https://humayunk01.github.io/nuuk/",
    tags: ["css"]
  },
  {
    name: "Shoplane Website",
    img: "shoplane.png",
    codeUrl: "https://github.com/HumayunK01/shopane",
    liveUrl: "https://humayunk01.github.io/shopane/",
    tags: ["html","css","js"]
  },
  {
    name: "Calculator",
    img: "calculator.png",
    codeUrl: "https://github.com/HumayunK01/calculator",
    liveUrl: "https://humayunk01.github.io/calculator/",
    tags: ["html","css","js"]
  },
  {
    name: "Digital Clock",
    img: "10.png",
    codeUrl: "https://github.com/HumayunK01/clock",
    liveUrl: "https://humayunk01.github.io/clock/",
    tags: ["html","css","js"]
  },
  {
    name: "Analog Clock",
    img: "analogclock.png",
    codeUrl: "https://github.com/HumayunK01/analogclock",
    liveUrl: "https://humayunk01.github.io/analogclock/",
    tags: ["html","css","js"]
  },
  {
    name: "Themes Switcher",
    img: "4.png",
    codeUrl: "https://github.com/HumayunK01/jsassignment1",
    liveUrl: "https://humayunk01.github.io/jsassignment1/",
    tags: ["js"]
  },
  {
    name: "Dark to Light Mode",
    img: "5.png",
    codeUrl: "https://github.com/HumayunK01/jshomework2",
    liveUrl: "https://humayunk01.github.io/jshomework2/",
    tags: ["js"]
  },
  {
    name: "Color Generator",
    img: "6.png",
    codeUrl: "https://github.com/HumayunK01/colorgenerator",
    liveUrl: "https://humayunk01.github.io/colorgenerator/",
    tags: ["js"]
  },
  {
    name: "Table Generator",
    img: "7.png",
    codeUrl: "https://github.com/HumayunK01/tablegenerator",
    liveUrl: "https://humayunk01.github.io/tablegenerator/",
    tags: ["js"]
  },
  {
    name: "JavaScript Functions",
    img: "9.png",
    codeUrl: "https://github.com/HumayunK01/jsquiz1",
    liveUrl: "https://humayunk01.github.io/jsquiz1/",
    tags: ["js"]
  },
]; 

function renderProjects(tag) {
  let output = "";
  for (let i = 0; i < projects.length; i++) {
    if (tag == "all" || projects[i].tags.includes(tag)) {
      output += `<div class="project">
    <img src="assets/img/${projects[i].img}" alt="Calculator Project Image">
    <div class="content flex">
      <p>${projects[i].name}</p>
      <p class="flex">
        <a href="${projects[i].codeUrl}" target="_blank"><i class="icon ri-github-fill"></i></a>
        <a href="${projects[i].liveUrl}" target="_blank"><i class="icon ri-external-link-line"></i></a>
      </p>
    </div>
  </div> `;
    }
  }
  projectsEl.innerHTML = output;
}
renderProjects("all");
