// Counter System for my carousel(at bottom left corner of the carousel) 

const carousel = document.querySelector('#carouselExample');
const currentSlide = document.getElementById('currentSlide');
const totalSlides = document.getElementById('totalSlides');

// count total slides automatically
const items = carousel.querySelectorAll('.carousel-item');
totalSlides.textContent = items.length;

// update number when slide changes
carousel.addEventListener('slid.bs.carousel', function (e) {
    currentSlide.textContent = e.to + 1;
});

// ======= carousel counter ends ======== // 



// Js for that progress bar on next-icon
 
// ✅ circle setup
const progressBar = document.querySelector('.progress-bar');
const total = items.length;
const circumference = 2 * Math.PI * 20; // r = 20

// function to update progress
function updateProgress(index){
    const progress = (index + 1) / total;
    const offset = circumference * (1 - progress);
    progressBar.style.strokeDashoffset = offset;
}

// initial state
updateProgress(0);

// on slide change
carousel.addEventListener('slid.bs.carousel', function (e) {
    let index = e.to;

    currentSlide.textContent = index + 1;

    // ✅ update ring
    updateProgress(index);
});





// HAMBURGER
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-mid-content");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});



