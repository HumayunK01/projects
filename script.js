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
    tags: ["html", "css"]
  },
  {
    name: "EdYoda Stories",
    img: "2.png",
    codeUrl: "https://github.com/HumayunK01/edyodastories2.0",
    liveUrl: "https://humayunk01.github.io/edyodastories2.0/",
    tags: ["css"]
  },
  {
    name: "Stunning Landing Page",
    img: "3.png",
    codeUrl: "https://github.com/HumayunK01/stunninglandingpage",
    liveUrl: "https://humayunk01.github.io/stunninglandingpage/",
    tags: ["css"]
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
