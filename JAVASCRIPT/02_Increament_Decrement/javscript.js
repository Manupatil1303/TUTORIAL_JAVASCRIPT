// Select the relevant HTML elements
const num = document.querySelector('.num');
const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');

// Add click event listeners to the buttons
incrementButton.addEventListener('click', () => {
  // Increment the number displayed on the page by 1
  num.innerText = parseInt(num.innerText) + 1;
});

decrementButton.addEventListener('click', () => {
  // Decrement the number displayed on the page by 1, but don't allow it to go below 0
  num.innerText = Math.max(parseInt(num.innerText) - 1, 0);
});
