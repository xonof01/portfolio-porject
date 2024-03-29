const projects = [
  {
    title: "Tabiatga sayoxat",
    githubLink: "https://github.com/xonof01/Tabiatga-sayoxat",
    vercelLink: "https://tabiatga-sayoxat.vercel.app/",
  },
  {
    title: "Pixar",
    githubLink: "https://github.com/xonof01/Pixar",
    vercelLink: "https://pixar-eight.vercel.app/",
  },
  {
    title: "uzbekiston",
    githubLink: "https://github.com/xonof01/Uzbekiston1",
    vercelLink: "https://uzbekiston1.vercel.app/",
  },
  {
    title: "2-figma",
    githubLink: "https://github.com/xonof01/2-figma",
    vercelLink: "https://2-figma-mocha.vercel.app/",
  },
  {
    title: "o'zim xaqida",
    githubLink: "https://github.com/xonof01/1-figma",
    vercelLink: "https://1-figma-jet.vercel.app/",
  },
  {
    title: "Ansormed",
    githubLink: "https://github.com/xonof01/ansormed",
    vercelLink: "https://ansormed-mu.vercel.app/",
  },
  {
    title: "akademnashr",
    githubLink: "https://github.com/xonof01/akademnashr",
    vercelLink: "https://akademnashr-rose.vercel.app/",
  },
  {
    title: "3-dars__2-ish",
    githubLink: "https://github.com/xonof01/2-ish",
    vercelLink: "https://2-ish.vercel.app/",
  },
  {
    title: "3-dars__3-ish",
    githubLink: "https://github.com/xonof01/3-chi",
    vercelLink: "https://3-chi-livid.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
