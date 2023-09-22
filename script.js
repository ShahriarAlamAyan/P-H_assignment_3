// script.js

document.addEventListener("DOMContentLoaded", function () {
    const carouselContent = document.querySelector('.carousel-content');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const items = document.querySelectorAll('.carousel-item');

    let currentIndex = 0;

    function goToIndex(index) {
        currentIndex = index;
        const translateX = -currentIndex * 100 + '%';
        carouselContent.style.transform = `translateX(${translateX})`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        goToIndex(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        goToIndex(currentIndex);
    });
});