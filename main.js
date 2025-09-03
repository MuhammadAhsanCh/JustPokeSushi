// Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar   = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
