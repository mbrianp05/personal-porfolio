const projectNames = [
  "dpoo-final-project",
  "final-ip-project",
  "dip-web-design",
];
const projectStars = document.querySelectorAll(".stars");
const starIconTemplate = document.querySelector("#star-svg-icon");

projectNames.forEach(async (projectName, index) => {
  const starClone = starIconTemplate.content.cloneNode(true);

  projectStars[index].append(starClone);
  projectStars[index].classList.add("loading");

  try {
    const response = await fetch(
      `https://api.github.com/repos/mbrianp05/${projectName}`
    );

    const { stargazers_count } = await response.json();

    if (stargazers_count !== undefined) {
      projectStars[index].append(document.createTextNode(stargazers_count));

      return;
    }

    projectStars[index].remove();
  } finally {
    projectStars[index].classList.remove("loading");
  }
});
