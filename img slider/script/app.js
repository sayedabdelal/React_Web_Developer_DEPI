let slideIndex = 0;
let slideInterval;
const slideDelay = 2000; // Delay for automatic slideshow in milliseconds

showSlides(slideIndex); // Show the initial slide
startSlideInterval(); // Start automatic slideshow

// Function to change slides by n
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetSlideInterval(); // Restart the automatic slideshow after manual control
}

// Function to set the slide to a specific index
function currentSlide(n) {
  showSlides(slideIndex = n - 1); // Adjust index for zero-based array
  resetSlideInterval(); // Restart the automatic slideshow after manual control
}

// Function to display slides
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Wrap around if slideIndex is greater than the number of slides
    if (n >= slides.length) {
        slideIndex = 0;
    }
    // Wrap around if slideIndex is less than 0
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Function to start automatic slideshow
function startSlideInterval() {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, slideDelay);
}

// Function to reset the automatic slideshow interval
function resetSlideInterval() {
    clearInterval(slideInterval); // Clear the current interval
    startSlideInterval(); // Restart the interval
}
