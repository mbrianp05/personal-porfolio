const projectNames = [
  "dpoo-final-project",
  "final-ip-project",
  "dip-web-design",
];
const projectStars = document.querySelectorAll(".stars");

projectNames.forEach(async (projectName, index) => {
  const response = await fetch(
    `https://api.github.com/repos/mbrianp05/${projectName}`
  );
  const data = await response.json();

  projectStars[index].textContent += data.stargazers_count;
});
