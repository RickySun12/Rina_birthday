const buttons = document.querySelectorAll('.flame');
const extraSection = document.querySelector('.Memories');

let clickCount = 0;

buttons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    button.style.backgroundColor = 'transparent';

    // Increment the click count
    clickCount++;

    // Check if all four buttons have been clicked
    if (clickCount === 4) {
      // Show the extra section
      extraSection.style.display = 'block';
    }
  });
});
