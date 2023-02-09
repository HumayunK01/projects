/* *********** */
/* variables */
/* *********** */
const yearEl = document.getElementById('year');
const projectsEl = document.getElementById('projects');

yearEl.innerHTML = new Date().getFullYear();

/* *********** */
/* projects */
/* *********** */
const projects = [
  {
    name: 'Favourite Food App',
    img: '1.png',
    codeUrl: 'https://github.com/HumayunK01/foodapp',
    liveUrl: 'https://humayunk01.github.io/foodapp/'
  },
  {
    name: 'EdYoda Stories',
    img: '2.png',
    codeUrl: 'https://github.com/HumayunK01/edyodastories2.0',
    liveUrl: 'https://humayunk01.github.io/edyodastories2.0/'
  },
  {
    name: 'Stunning Landing Page',
    img: '3.png',
    codeUrl: 'https://github.com/HumayunK01/stunninglandingpage',
    liveUrl: 'https://humayunk01.github.io/stunninglandingpage/'
  },
  {
    name: 'Themes Switcher',
    img: '4.png',
    codeUrl: 'https://github.com/HumayunK01/jsassignment1',
    liveUrl: 'https://humayunk01.github.io/jsassignment1/'
  },
  {
    name: 'Dark to Light Mode',
    img: '5.png',
    codeUrl: 'https://github.com/HumayunK01/jshomework2',
    liveUrl: 'https://humayunk01.github.io/jshomework2/'
  },
  {
    name: 'Color Generator',
    img: '6.png',
    codeUrl: 'https://github.com/HumayunK01/colorgenerator',
    liveUrl: 'https://humayunk01.github.io/colorgenerator/'
  },
  {
    name: 'Table Generator',
    img: '7.png',
    codeUrl: 'https://github.com/HumayunK01/tablegenerator',
    liveUrl: 'https://humayunk01.github.io/tablegenerator/'
  }
]

let output = '';

for (let i = 0; i < projects.length; i++) {
  output += `<div class="project">
  <img src="assets/img/${projects[i].img}" alt="Calculator Project Image">
  <div class="content flex">
    <p>${projects[i].name}</p>
    <p class="flex">
      <a href="${projects[i].codeUrl}" target="_blank"><i class="icon ri-github-fill"></i></a>
      <a href="${projects[i].liveUrl}" target="_blank"><i class="icon ri-external-link-line"></i></a>
    </p>
  </div>
</div> `
}

projectsEl.innerHTML = output;