//==================== MENU SHOW Y HIDDEN ====================
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

//========== MENU SHOW ==========
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

//========== MENU HIDDEN ==========
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

//========== REMOVE MENU MOBILE ==========
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach((link) => link.addEventListener('click', linkAction));

//==================== TYPEIT LIBRARY FOR THE HOME SUBTITLE ====================
const typeItSubtitleHome = document.addEventListener(
  'DOMContentLoaded',
  function () {
    new TypeIt('#home-subtitle', {
      loop: true,
      speed: 120,
    })
      .pause(600)
      .delete(18, { delay: 600 })
      .type('Data Analyst')
      .pause(600)
      .go();
  }
);

//==================== ACCORDION SKILLS ====================
const skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

//==================== MIXITUP FILTER PORTFOLIO ====================
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card',
  },
  animation: {
    duration: 300,
  },
});

// LINK ACTIVE WORK
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linkWork.forEach((link) => link.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach((list) => list.addEventListener('click', activeWork));

//==================== TYPEIT LIBRARY FOR THE FOOTER SUBTITLE ====================
const typeItSubtitleFooter = document.addEventListener(
  'DOMContentLoaded',
  function () {
    new TypeIt('#footer-subtitle', {
      loop: true,
      speed: 120,
    })
      .pause(600)
      .delete(18, { delay: 600 })
      .type('Data Analyst')
      .pause(600)
      .go();
  }
);

//==================== SCROLL SECTIONS ACTIVE LINK ====================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

//==================== CHANGE BACKGROUND HEADER ====================
function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

//==================== SCROLL UP ====================
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 560) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);

//==================== DARK/LIGHT THEME ====================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon);
});

//==================== SCROLL REVEAL ANIMATION ====================
const sr = ScrollReveal({
  distance: '80px',
  duration: 2200,
});
sr.reveal(`.home__data`, { origin: 'top', delay: 10 });
sr.reveal(`.home__social`, { origin: 'top', delay: 10 });
sr.reveal(`.home__img`, { origin: 'top', delay: 50 });
sr.reveal(`.home__scroll`, { origin: 'top', delay: 100 });
sr.reveal(`.section`, { origin: 'top', delay: 10 });
