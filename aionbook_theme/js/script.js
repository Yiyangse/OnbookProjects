document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const carousel = document.querySelector('.carousel-inner');
    const cards = document.querySelectorAll('.card');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let currentIndex = 0;

    if (carousel && cards.length) {  // Carousel 요소가 있을 때만 실행
        function updateCarousel() {
            const cardWidth = cards[0].offsetWidth;
            const offset = -currentIndex * (cardWidth + 40);
            carousel.style.transform = `translateX(${offset}px)`;
        }

        function showCard(index) {
            currentIndex = Math.max(0, Math.min(index, cards.length - 1));
            updateCarousel();
        }

        arrowLeft?.addEventListener('click', () => {
            showCard(currentIndex - 1);
        });

        arrowRight?.addEventListener('click', () => {
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
    }

    // Signup page functionality
    const allCheckButton = document.querySelector('.check-all');
    const checkButtons = document.querySelectorAll('.check-button');
    const nextButton = document.querySelector('.mainsignup1_btn');

    if (checkButtons.length) {  // 체크버튼이 있을 때만 실행
        // 개별 체크버튼 기능
        checkButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();  // 이벤트 버블링 방지
                this.classList.toggle('checked');
                if (nextButton) updateNextButton();  // nextButton이 있을 때만 실행
            });
        });

        // 전체동의 기능
        if (allCheckButton) {
            function updateNextButton() {
                const requiredChecks = Array.from(document.querySelectorAll('.check-required'));
                const allRequired = requiredChecks.every(check => check.classList.contains('checked'));
                if (allRequired) {
                    nextButton.classList.add('active');
                } else {
                    nextButton.classList.remove('active');
                }
            }

            allCheckButton.addEventListener('click', function() {
                const isChecked = !this.classList.contains('checked');
                checkButtons.forEach(button => {
                    if (isChecked) {
                        button.classList.add('checked');
                    } else {
                        button.classList.remove('checked');
                    }
                });
                if (nextButton) updateNextButton();
            });
        }
    }
});