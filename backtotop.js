
// Get a reference to the back-to-top button
var backToTopButton = document.getElementById('backToTopBtn');

// Add a scroll event listener
window.addEventListener('scroll', function() {
  // If the user has scrolled down 200 pixels or more, show the button
  if (window.pageYOffset > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Add a click event listener to scroll to the top when the button is clicked
backToTopButton.addEventListener('click', function() {
  // Scroll to the top of the page smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
});





function flipCard(card) {
card.classList.toggle('is-flipped');
}
