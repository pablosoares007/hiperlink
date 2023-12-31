/* icone do menu (navbar) */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/* linha de indicador de link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
      };
    });

//controlador da nav bar.  
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/* remover icone de menu quando o usuário clicar no link */
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

}

/* swriper */
var swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 /* modo escuro e claro */ 

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bxs-sun');
    document.body.classList.toggle('dark-mode');
};

/* scroll reveal / movimento  */
ScrollReveal({ 
    /* reset: true, */
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); /* movimento nos texto */
ScrollReveal().reveal('.home-img img, .services-container, .testimonial-wrapper', { origin: 'bottom' }); /* movimento nas imagens, cards e feedback */
/* movimento do sobre mim */
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' }); 
ScrollReveal().reveal('.home-content h3, .home-content p, .about-conteiner', { origin: 'right' }); 

/* carrossel atomatico */
let carouselSlide = document.querySelector(".carousel-slide");
let images = document.querySelectorAll(".carousel-slide img");

// Configuração do carrossel
let slideIndex = 0;
const autoPlayDelay = 1000; // Tempo de exibição de cada imagem em milissegundos

function nextSlide() {
  if (slideIndex >= images.length - 1) {
    carouselSlide.style.transition = "none";
    slideIndex = images.length - 1;
    carouselSlide.style.transform = `translateX(-${slideIndex * 20}%)`;
    setTimeout(function () {
      carouselSlide.style.transition = "transform 0.5s ease-in-out";
      slideIndex--;
      carouselSlide.style.transform = `translateX(-${slideIndex * 20}%)`;
    }, 0);
  } else {
    slideIndex++;
    carouselSlide.style.transform = `translateX(-${slideIndex * 20}%)`;
  }
}

// Iniciar o carrossel automático

let slideInterval = setInterval(nextSlide, autoPlayDelay);

// Pausar o carrossel ao passar o mouse por cima
carouselSlide.addEventListener("mouseenter", function () {
  clearInterval(slideInterval);
});

// Retomar o carrossel ao retirar o mouse
carouselSlide.addEventListener("mouseleave", function () {
  slideInterval = setInterval(nextSlide, autoPlayDelay);
});

/* carrossel atomatico */