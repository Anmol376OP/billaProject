const rightbox = document.querySelector('.rightbox');
const slides = rightbox.querySelectorAll('.slide');
let currentIndex = 0;

const colors = ['red', 'green', 'blue']; // Replace with your color values

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const slideIndex = Array.from(slides).indexOf(entry.target);
            if (slideIndex > -1) {
                currentIndex = slideIndex;
                rightbox.style.backgroundColor = colors[currentIndex];
                console.log(currentIndex)
                slides[currentIndex].scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}, { threshold: 0.1 });

// Observe all the slides
slides.forEach((slide) => {
    observer.observe(slide);
});

// Set the initial background color
rightbox.style.backgroundColor = colors[currentIndex];

// Detect scroll direction
let scrollDirection = null;

window.addEventListener('scroll', () => {
    const newScrollDirection = window.scrollY > scrollDirection ? 'down' : 'up';

    if (scrollDirection !== newScrollDirection) {
        scrollDirection = newScrollDirection;
        if (scrollDirection === 'up') {
            currentIndex = Math.max(0, currentIndex - 1);
        } else if (scrollDirection === 'down') {
            currentIndex = Math.min(colors.length - 1, currentIndex + 1);
        }
        rightbox.style.backgroundColor = colors[currentIndex];
        console.log(currentIndex)

    }
});
