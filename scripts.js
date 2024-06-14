// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-icon').addEventListener('click', function() {
        var navLinks = document.getElementById('nav-links');
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column'; // Asegurarse de que se muestre en columna
        }
    });

    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const navLinks = document.querySelectorAll('.slider-nav a');

    let currentIndex = 0;
    const intervalTime = 3000; // Time in milliseconds
    let autoSlideInterval;

    const updateActiveNavLink = (index) => {
        navLinks.forEach((link, idx) => {
            link.style.opacity = idx === index ? '1' : '.75';
        });
    };

    const scrollToSlide = (index) => {
        slider.scrollTo({
            left: slides[index].offsetLeft,
            behavior: 'smooth'
        });
        updateActiveNavLink(index);
    };

    const autoSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        scrollToSlide(currentIndex);
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(autoSlide, intervalTime);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor link behavior
            stopAutoSlide();
            currentIndex = index;
            scrollToSlide(currentIndex);
            startAutoSlide();
        });
    });

    slider.addEventListener('mouseover', stopAutoSlide);
    slider.addEventListener('mouseout', startAutoSlide);

    startAutoSlide();

});


