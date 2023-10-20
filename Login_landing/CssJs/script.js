const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    root: null, // Use the viewport as the viewport.
    rootMargin: '-50px 0px -50px 0px', // Center the observed area within the viewport.
    threshold: 0.5, // Your desired threshold value.
});

const hiddenCards = document.querySelectorAll('.hidden');
hiddenCards.forEach((el) => observer.observe(el));
const navbar = document.querySelector('.navs');


function makeOpeque() {
    navbar.classList.toggle('bgwhite');
}

const elements = document.querySelectorAll('.img');
let currentIndex = 0;

function rotateElements() {
    elements[currentIndex].classList.remove('Login_show');
    currentIndex = (currentIndex + 1) % elements.length;
    elements[currentIndex].classList.add('Login_show');
}

setInterval(rotateElements, 2500);
