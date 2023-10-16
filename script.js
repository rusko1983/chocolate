`use script`;
const popSign = document.querySelector(`.pop-sign`);
const section1 = document.querySelector(`.section__1`);
const btnLearn = document.querySelector(`.btn-down`);
const btnClosse = document.querySelector(`.btn-closse`);
const btnSign = document.querySelector(`.btn-sign`);

////////////////////////////////////
btnSign.addEventListener(`click`, function () {
  popSign.classList.remove(`hidden-form`);
});
btnClosse.addEventListener(`click`, function () {
  popSign.classList.add(`hidden-form`);
});

//SECTION TAB BUTTONS
const btnAll = document.querySelectorAll(`.btn`);
const tabsColections = document.querySelector(`.btn-colections`);
const midCont = document.querySelectorAll(`.mid-content-hidden `);

tabsColections.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.btn`);
  if (!clicked) return;
  btnAll.forEach((b) => b.classList.remove(`btn-active`));
  midCont.forEach((t) => t.classList.remove(`active-tab`));

  clicked.classList.add(`btn-active`);
  console.log(clicked.dataset.tab);

  document
    .querySelector(`.content--${clicked.dataset.tab}`)
    .classList.add(`active-tab`);
});

//SCROLLING NAVIGATION

const nav = document.querySelector(`.main-nav`);
const scrollNavi = function (entris) {
  const [entry] = entris;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add(`sticky`);
  } else {
    nav.classList.remove(`sticky`);
  }
};
const header = document.querySelector(`.header`);
const navi = new IntersectionObserver(scrollNavi, {
  root: null,
  threshold: 0,
  rootMargin: `-82px`,
});
navi.observe(header);
//REVEAL SECTION
const allSections = document.querySelectorAll(`.section`);
const revealSection = function (entrie, observer) {
  const [entry] = entrie;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove(`section-hidden`);
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add(`section-hidden`);
});

//SECTION TESTIMONI(ALS
const slides = document.querySelectorAll(`.slide`);
const btnLeft = document.querySelector(`.slide__btn--left`);
const btnRight = document.querySelector(`.slide__btn--right`);
let curSlide = 0;
const maxSlide = slides.length;

slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
};
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
};
btnRight.addEventListener(`click`, nextSlide);
btnLeft.addEventListener(`click`, prevSlide);
/* FOOTERPOP UP */
const btnFirstPart5 = document.querySelector(`.btn-first-part5`);

btnFirstPart5.addEventListener(`click`, function () {
  popSign.classList.remove(`hidden-form`);
});
btnClosse.addEventListener(`click`, function () {
  popSign.classList.add(`hidden-form`);
});
/*SMOOTH SCROLLING */

btnLearn.addEventListener(`click`, function () {
  section1.scrollIntoView({ behavior: `smooth` });
});
/////
const navLink = document.querySelectorAll(`.nav-link`);
/*mainLinks.forEach((e) =>
  e.addEventListener(`click`, function (e) {
    e.preventDefault();
    console.log(`hello`);
    const ide = this.getAttribute(`href`);
    console.log(ide);
    document.querySelector(ide).scrollIntoView({ behavior: "smooth" });
  })
);*/
document.querySelector(`.main-links`).addEventListener(`click`, function (e) {
  e.preventDefault();
  if (e.target.classList.contains(`nav-link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});
