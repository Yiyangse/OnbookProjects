document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const cards = document.querySelectorAll('.card');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 320;
        carousel.style.transform = `translateX(${offset}px)`;
        
        cards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
        });
    }

    arrowLeft.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    });

    arrowRight.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, cards.length - 1);
        updateCarousel();
    });

    updateCarousel();
});