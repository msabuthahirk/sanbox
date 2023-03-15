// Initialize the slider and dots
let slideIndex = 1;
showSlides(slideIndex);

// Function to show slides
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  // Reset slide index if it goes out of bounds
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  // Hide all slides and deactivate all dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show current slide and activate corresponding dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Function to go to next slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to go to specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Add event listener for next button click
document.querySelector(".next-button").addEventListener("click", function() {
  plusSlides(1);
});

// Add event listener for skip button click
document.querySelector(".skip-button").addEventListener("click", function() {
  // Redirect to another page
  window.location.href = "https://example.com";
});
