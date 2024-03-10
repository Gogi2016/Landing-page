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

setInterval(nextSlide, 2000);

function openPopup() {
    document.getElementById('contactPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('contactPopup').style.display = 'none';
}

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all the form fields before submitting.');
    } else {
        alert('Your message has been sent');
    }
}
