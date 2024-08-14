window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 2000); // 2 seconds delay
});



const body = document.body;
const toggleIcon = document.getElementById('toggle-icon');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

// Load theme from localStorage
const currentTheme = localStorage.getItem('theme') || 'light-theme';
body.classList.add(currentTheme);

// Set the correct icon based on the theme
if (currentTheme === 'dark-theme') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
} else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
}

toggleIcon.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
});

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});





// SLIDER JS CODE


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let slideInterval;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Automatic slide change every 2 seconds
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 2000);
}

// Stop automatic sliding when a control button is clicked
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Start the automatic sliding
startAutoSlide();

// Event listeners for manual control
document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
});





const words = ["Reliability", "Trustworthy", "Transparency"];
let index = 0;

function changeText() {
    const textElement = document.getElementById('transition-text');
    textElement.textContent = words[index];
    index = (index + 1) % words.length;
}

// Change text every 4 seconds to match the animation duration
setInterval(changeText, 4000);
