window.addEventListener('DOMContentLoaded', (event) => {
    const navbarLinks = document.querySelectorAll('nav ul li a');
    navbarLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  
    const sectionButtons = document.querySelectorAll('.section-button');
    sectionButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const targetUrl = button.getAttribute('href');
        window.open(targetUrl, '_blank');
      });
    });
  });

  
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }

  let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
