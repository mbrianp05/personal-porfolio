const projectNames = [
  "dpoo-final-project",
  "final-ip-project",
  "dip-web-design",
];
const projectStars = document.querySelectorAll(".stars");
const starIconTemplate = document.querySelector("#star-svg-icon");

projectNames.forEach(async (projectName, index) => {
  const starClone = starIconTemplate.content.cloneNode(true);

  try {
    const response = await fetch(
      `https://api.github.com/repos/mbrianp05/${projectName}`
    );

    const { stargazers_count } = await response.json();

    if (stargazers_count !== undefined) {
      projectStars[index].textContent = stargazers_count;
    } else projectStars[index].remove();
  } finally {
    projectStars[index].prepend(starClone);
  }
});
