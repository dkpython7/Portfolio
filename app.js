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
    strings: ["Md Imran","An AI/ML Engineer", "A Developer","A Teacher", "A Data Analyst","Aspiring Data Scientist"],
    typeSpeed: 120,
    backSpeed: 100,
    loop: true
});

