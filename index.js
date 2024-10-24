const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel_item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

/* 슬라이드 이동 함수 */
function updateCarousel() {
    const itemWidth = items[0].clientWidth;
    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

/* 다음 버튼 */
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

/* 이전 버튼 */
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});