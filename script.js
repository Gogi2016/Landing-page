const slider = document.getElementById('image-container');
let slideIndex = 0;

function nextSlide() {
    slideIndex = (slideIndex + 1) % document.querySelectorAll('.slide').length;
    updateSlider();
}

function updateSlider() {
    const translateValue = -slideIndex * 100;
    slider.style.transform = `translateX(${translateValue}%)`;
}

setInterval(nextSlide, 4000); 