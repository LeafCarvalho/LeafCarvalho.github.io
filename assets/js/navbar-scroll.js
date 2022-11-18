let nav_icon = document.querySelector('.nav_icon');
let line = document.querySelector('.line');
let nav_menu = document.querySelector('.nav_menu');
let nav_links = document.querySelectorAll('.nav_list');
let nav_length = nav_links.length;
nav_icon.addEventListener('click', () => {
  line.classList.toggle('active');
  nav_menu.classList.toggle('active');
  nav_links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `linkFadeIn 0.5s ease forwards ${
        index / nav_length + 0.2
      }s`;
    }
  });
});
let header = document.querySelector('.header');
let hero = document.querySelector('.hero');
let header_height = header.getBoundingClientRect().height;

let sticky = (entries) => {
  let [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};
let hero_observer = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${header_height}px`,
});
hero_observer.observe(hero);
// Active nav-start
const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    console.log(sectionId);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('li a[href*="' + sectionId + '"]')
        .classList.add('active');
    } else {
      document
        .querySelector('li a[href*="' + sectionId + '"]')
        .classList.remove('active');
    }
  });
});
// Active nav-end