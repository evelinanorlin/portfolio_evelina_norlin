import './style.scss';

const burgerBtn = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
let menuOpen = false;



//menu-toggle
function menuToggle() {

  console.log('hello');
  
  if (!menuOpen) {
    navLinks.style.display = 'block';
    burgerBtn.classList.add('open');
    //gsap.to('.mobile-menu', { duration: 0.5, left: '0' });
    menuOpen = true;
  } else {
    //gsap.to('.mobile-menu', { duration: 0.5, left: '1000px', onComplete: hideMenu });
    navLinks.style.display = 'none';
    burgerBtn.classList.remove('open');
    menuOpen = false;
  }
}

burgerBtn.addEventListener('click', menuToggle);