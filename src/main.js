import './style.scss';
import { gsap } from "gsap";

const burgerBtn = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
let menuOpen = false;


//code for navigaion

//menu-toggle
function menuToggle() {

  console.log('hello');
  
  if (!menuOpen) {
    // navLinks.style.display = 'block';
    burgerBtn.classList.add('open');
    //gsap.to('.mobile-menu', { duration: 0.5, left: '0' });
    gsap.to(".nav-links", { right: 0, duration: 0.5 })
    menuOpen = true;
  } else {
    //gsap.to('.mobile-menu', { duration: 0.5, left: '1000px', onComplete: hideMenu });
    // navLinks.style.display = 'none';
    burgerBtn.classList.remove('open');
    gsap.to(".nav-links", { right: -2000, duration: 0 })
    menuOpen = false;
  }
}

burgerBtn.addEventListener('click', menuToggle);

// textanimations

const animateParagraph = document.querySelectorAll('.slide-in');
const animateParagraph2 = document.querySelectorAll('.slide-in2');

const textObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to('.slide-in', { opacity: 1, duration: 4})
      console.log('hurra')
    }
  });
});

const textObserver2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to('.slide-in2', { opacity: 1, duration: 4})
      console.log('hurra')
    }
  });
});

animateParagraph.forEach((element) => {
  textObserver.observe(element);
})

animateParagraph2.forEach((element) => {
  textObserver2.observe(element);
})