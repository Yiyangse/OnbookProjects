document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const cards = document.querySelectorAll('.card');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const offset = -currentIndex * (cardWidth + 40); // 40 is the total horizontal margin
        carousel.style.transform = `translateX(${offset}px)`;
    }

    function showCard(index) {
        currentIndex = Math.max(0, Math.min(index, cards.length - 1));
        updateCarousel();
    }

    arrowLeft.addEventListener('click', () => {
        showCard(currentIndex - 1);
    });

    arrowRight.addEventListener('click', () => {
        showCard(currentIndex + 1);
    });

    // Initialize carousel
    updateCarousel();

    // Add touch support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            showCard(currentIndex + 1);
        }
        if (touchEndX > touchStartX) {
            showCard(currentIndex - 1);
        }
    }
});