//==================== MENU SHOW Y HIDDEN ====================
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//========== MENU SHOW ==========
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//========== MENU HIDDEN ==========
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//========== REMOVE MENU MOBILE ==========
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((link) => link.addEventListener("click", linkAction));

//========== TYPEIT LIBRARY FOR THE HOME SUBTITLE ==========
const typeItSubtitleHome = document.addEventListener(
  "DOMContentLoaded",
  function () {
    new TypeIt("#home-subtitle", {
      loop: true,
      speed: 120,
    })
      .pause(600)
      .delete(18, { delay: 600 })
      .type("Data Analyst")
      .pause(600)
      .go();
  }
);

//==================== ACCORDION SKILLS ====================
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

//==================== MIXITUP FILTER PORTFOLIO ====================
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

// LINK ACTIVE WORK
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((link) => link.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((list) => list.addEventListener("click", activeWork));

//========== TYPEIT LIBRARY FOR THE FOOTER SUBTITLE ==========
const typeItSubtitleFooter = document.addEventListener(
  "DOMContentLoaded",
  function () {
    new TypeIt("#footer-subtitle", {
      loop: true,
      speed: 120,
    })
      .pause(600)
      .delete(18, { delay: 600 })
      .type("Data Analyst")
      .pause(600)
      .go();
  }
);
