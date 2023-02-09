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
    name: 'Calculator App',
    img: '4.png',
    codeUrl: 'https://github.com/justdecodeme/js-practice-01-change-bg',
    liveUrl: 'https://justdecodeme.github.io/js-practice-01-change-bg/'
  },
]

let output = '';

for (let i = 0; i < projects.length; i++) {
  output += `<div class="project">
  <img src="assets/img/${projects[i].img}" alt="Calculator Project Image">
  <div class="content flex">
    <p>${projects[i].name}</p>
    <p class="flex">
      <a href="${projects[i].codeUrl}" target="_blank"><i class="icon ri-github-fill"></i></a>
      <a href="${projects[i].liveUrl}" target="_blank"><i class="icon ri-link"></i></a>
    </p>
  </div>
</div> `
}

projectsEl.innerHTML = output;