const grid = document.getElementById("projectGrid");
const cards = document.querySelectorAll(".project-card");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

const visibleCards = 3; // show 3 cards at a time
let index = 0;
let interval;

/* Show cards based on current index */
function showSlide(currentIndex) {
    cards.forEach((card, i) => {
        if (i >= currentIndex && i < currentIndex + visibleCards) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

/* Next slide */
function nextSlide() {
    index++;
    if (index > cards.length - visibleCards) {
        index = 0; // loop back to first set
    }
    showSlide(index);
}

/* Previous slide */
function prevSlide() {
    index--;
    if (index < 0) {
        index = cards.length - visibleCards; // loop to last set
    }
    showSlide(index);
}

/* Auto slide */
function startAutoSlide() {
    interval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(interval);
}

/* Button events */
nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

/* Pause on hover */
document.querySelector(".project-carousel").addEventListener("mouseenter", stopAutoSlide);
document.querySelector(".project-carousel").addEventListener("mouseleave", startAutoSlide);

/* Init */
showSlide(index);
startAutoSlide();
