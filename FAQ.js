const faqItems = document.querySelectorAll('.faq-item');

  // Function to slide in the FAQ items one at a time
  function slideInQuestions() {
      let delay = 0;

      faqItems.forEach((item, index) => {
          setTimeout(() => {
              item.style.transform = 'translateX(0)';
              item.style.opacity = 1;
          }, delay);
          delay += 1000; // Adjust the delay duration as needed
      });
  }

  // Initially hide all FAQ items
  faqItems.forEach((item) => {
      item.style.transform = 'translateX(-100%)';
      item.style.opacity = 0;
  });

  // Call the function to animate the questions
  slideInQuestions();
document.querySelectorAll('.answer').forEach(answer => {
  answer.style.display = 'none';
});
function toggleAnswer(question) {
  const answer = question.nextElementSibling;
  answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}