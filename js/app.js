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
  {
    title: "4-dars",
    githubLink: "https://github.com/xonof01/tip-calculate",
    vercelLink: "https://tip-calculator-steel-ten.vercel.app/",
  },
  {
    title: "Manzarakar",
    githubLink: "https://github.com/xonof01/DAVLATLAR",
    vercelLink: "https://davlatlar-two.vercel.app/",
  },
  {
    title: "6-costaway",
    githubLink: "https://github.com/xonof01/6-costawy",
    vercelLink: "https://6-costawy.vercel.app/",
  },
    {
    title: "create x",
    githubLink: "https://github.com/xonof01/kreate-x",
    vercelLink: "https://kreate-x.vercel.app/",
  },
  {
    title: "Animations",
    githubLink: "https://github.com/xonof01/Animation",
    vercelLink: "https://animation-taupe-one.vercel.app/",
  }, 
  {
    title: "New cratex ",
    githubLink: "https://github.com/xonof01/Servis",
    vercelLink: "https://servis-liard.vercel.app/",
  },
  {
    title: " crowdfun-11",
    githubLink: "https://github.com/xonof01/crowdfun-11",
    vercelLink: "https://crowdfun-11.vercel.app/",
  },
  {
    title: "mutime",
    githubLink: "https://github.com/xonof01/myteam",
    vercelLink: "https://myteam-rose-ten.vercel.app/about.html",
  },
  {
    title: "desingo",
    githubLink: "https://github.com/xonof01/desingo",
    vercelLink: "https://desingo-six.vercel.app/",
  },
  
  {
    title: "4-oy,2-dars",
    githubLink: "https://github.com/xonof01/4-oy-2-dars--vazifasi",
    vercelLink: "https://4-oy-2-dar.vercel.app/",
  }, 
  {
    title: "4-oy,3-dars",
    githubLink: "https://github.com/xonof01/4-oy-4-dars",
    vercelLink: "https://4-oy-4-dars-henna.vercel.app/",
  }, 
  {
    title: "4-oy,4-dars",
    githubLink: "https://github.com/xonof01/4-oy-3-dars",
    vercelLink: "https://4-oy-3-dars-eight.vercel.app/",
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
