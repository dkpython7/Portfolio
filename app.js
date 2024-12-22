(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


const imageContainer = document.querySelector('.left-header .image img');
imageContainer.addEventListener('click', function() {
  this.style.border = '5px solid royalblue';
  this.style.transition = 'border 0.4s ease-in-out';
  this.style.transform = 'rotate(5deg)';  // Adds a slight rotation on click
  setTimeout(() => {
    this.style.border = '';
    this.style.transform = ''; // Reset after 1 second
  }, 1000); // Time to reset
});

var typed = new Typed(".name span", {
    strings: ["Md Imran","Aspiring AI/ML Engineer", "A Developer","A Teacher", "A Data Analyst"],
    typeSpeed: 120,
    backSpeed: 100,
    loop: true
});
// Select all progress bars
const progressBars = document.querySelectorAll(".progress-bar");

// Scroll event listener
window.addEventListener("scroll", () => {
    progressBars.forEach((bar) => {
        const barTop = bar.getBoundingClientRect().top; // Get the top position of the bar
        const windowHeight = window.innerHeight; // Get the window's height

        // Check if the bar is within the viewport
        if (barTop < windowHeight - 100) {
            bar.classList.add("animate");
        } else {
            bar.classList.remove("animate");
        }
    });
});

const contact = document.querySelectorAll(".contact-icon1");

// Scroll event listener
window.addEventListener("scroll", () => {
    contact.forEach((bar) => {
        const barTop = bar.getBoundingClientRect().top; // Get the top position of the bar
        const windowHeight = window.innerHeight; // Get the window's height

        // Check if the bar is within the viewport
        if (barTop < windowHeight - 100) {
            bar.classList.add("animate");
        } else {
            bar.classList.remove("animate");
        }
    });
});

const timeline = document.querySelectorAll(".timeline-item");

// Scroll event listener
window.addEventListener("scroll", () => {
    timeline.forEach((bar) => {
        const barTop = bar.getBoundingClientRect().top; // Get the top position of the bar
        const windowHeight = window.innerHeight; // Get the window's height

        // Check if the bar is within the viewport
        if (barTop < windowHeight - 100) {
            bar.classList.add("animate");
        } else {
            bar.classList.remove("animate");
        }
    });
});
const portfolio = document.querySelectorAll(".portfolio-item");

// Scroll event listener
window.addEventListener("scroll", () => {
    portfolio.forEach((bar) => {
        const barTop = bar.getBoundingClientRect().top; // Get the top position of the bar
        const windowHeight = window.innerHeight; // Get the window's height

        // Check if the bar is within the viewport
        if (barTop < windowHeight - 100) {
            bar.classList.add("animate");
        } else {
            bar.classList.remove("animate");
        }
    });
});

const about = document.querySelectorAll(".about-item");

// Scroll event listener
window.addEventListener("scroll", () => {
    about.forEach((bar) => {
        const barTop = bar.getBoundingClientRect().top; // Get the top position of the bar
        const windowHeight = window.innerHeight; // Get the window's height

        // Check if the bar is within the viewport
        if (barTop < windowHeight - 100) {
            bar.classList.add("animate");
        } else {
            bar.classList.remove("animate");
        }
    });
});