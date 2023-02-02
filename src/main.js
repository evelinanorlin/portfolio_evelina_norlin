import './style.scss';
import { gsap } from "gsap";
import { portfolioItems } from './portfolio_items';

const burgerBtn = document.getElementById('burger');
const navLink = document.querySelectorAll('.nav-link');
const portfolioContainer = document.getElementById('portfolio-container');
let menuOpen = false;


//code for navigaion

//menu-toggle
function menuToggle() {
  
  if (!menuOpen) {
    burgerBtn.classList.add('open');
    gsap.to(".nav-links", { right: 0, duration: 0.5 })
    menuOpen = true;
  } else {
    burgerBtn.classList.remove('open');
    gsap.to(".nav-links", { right: -2000, duration: 0 })
    menuOpen = false;
  }
}


// Closes menu when link is clicked
function linkFunction(link){
  link.addEventListener('click', menuToggle);
}

burgerBtn.addEventListener('click', menuToggle);
navLink.forEach(linkFunction);

//add active class to menu links
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}

// Portfolio

for (let i = 0; i < portfolioItems.length; i++) {
    portfolioContainer.innerHTML += `
    <div class="portfolio-container">
      <div class="img-hover-zoom" id="image${[i]}">
        <img
          src="src/images/${portfolioItems[i].img}"
          alt="picture of a yoga website landing"
          height="200"
          width="250"
          loading="lazy"
        />
          <a href="#">See more</a>
      </div>
    </div>
    `
}

// textanimations

const animateParagraph1 = document.querySelectorAll('.slide-in1');
const animateParagraph2 = document.querySelectorAll('.slide-in2');
const animateParagraph3 = document.querySelectorAll('.slide-in3');
const animateParagraph4 = document.querySelectorAll('.slide-in4');
const animateParagraph5 = document.querySelectorAll('.slide-in5');
const animateParagraph6 = document.querySelectorAll('.slide-in6');
const animateParagraph7 = document.querySelectorAll('.slide-in7');
const animateParagraph8 = document.querySelectorAll('.slide-in8');
const animateParagraph9 = document.querySelectorAll('.slide-in9');
const animateParagraph10 = document.querySelectorAll('.slide-in10');

const textObserver1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to('.slide-in1', { opacity: 1, duration: 4, delay: 0.3});
    }
    else {
      gsap.to('.slide-in1', { opacity: 0, duration: 4, delay: 0.3});
    }
  });
});

const textObserver2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to('.slide-in2', { opacity: 1, duration: 4, delay: 0.3})
    }     else {
      gsap.to('.slide-in2', { opacity: 0, duration: 4, delay: 0.3});
    }
  });
  });

const textObserver3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to('.slide-in3', { opacity: 1, duration: 4, delay: 0.3})
      console.log('hurra')
    }     
    else {
      gsap.to('.slide-in3', { opacity: 0, duration: 4, delay: 0.3});
    }
  });
});

const textObserver4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to('.slide-in4', { opacity: 1, duration: 4, delay: 0.3})
    } 
    else {
      gsap.to('.slide-in4', { opacity: 0, duration: 4, delay: 0.3});
    }
  });
});

const textObserver5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to('.slide-in5', { opacity: 1, duration: 4, delay: 0.3})
    }
    else {
      gsap.to('.slide-in5', { opacity: 0, duration: 4, delay: 0.3});
    }
  });
});

const textObserver6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to('.slide-in6', { opacity: 1, duration: 4, delay: 0.3})
    }
    else {
      gsap.to('.slide-in6', { opacity: 0, duration: 4, delay: 0.3});
    }
  });
});

const textObserver7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to('.slide-in7', { opacity: 1, duration: 4, delay: 0.3})
    }
    else {
      gsap.to('.slide-in7', { opacity: 0, duration: 4, delay: 0.3});
    }
  });
});

const textObserver8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to('.slide-in8', { opacity: 1, duration: 4, delay: 0.3})
    }
    else {
      gsap.to('.slide-in8', { opacity: 0, duration: 4, delay: 0.3});
    }
  });
});

const textObserver9 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to('.slide-in9', { opacity: 1, duration: 4, delay: 0.3})
    }
    else {
      gsap.to('.slide-in9', { opacity: 0, duration: 4, delay: 0.3});
    }
  });
});

const textObserver10 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to('.slide-in10', { opacity: 1, duration: 4, delay: 0.3})
    }
    else {
      gsap.to('.slide-in10', { opacity: 0, duration: 4, delay: 0.3});
    }
  });
});

animateParagraph1.forEach((element) => {
  textObserver1.observe(element);
})

animateParagraph2.forEach((element) => {
  textObserver2.observe(element);
})

animateParagraph3.forEach((element) => {
  textObserver3.observe(element);
})

animateParagraph4.forEach((element) => {
  textObserver4.observe(element);
})
animateParagraph5.forEach((element) => {
  textObserver5.observe(element);
})

animateParagraph6.forEach((element) => {
  textObserver6.observe(element);
})

animateParagraph7.forEach((element) => {
  textObserver7.observe(element);
})

animateParagraph8.forEach((element) => {
  textObserver8.observe(element);
})

animateParagraph9.forEach((element) => {
  textObserver9.observe(element);
})

animateParagraph10.forEach((element) => {
  textObserver10.observe(element);
})