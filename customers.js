document.addEventListener('DOMContentLoaded', function () {
  // Add event listener for each toggle slider
  var vegetarianToggle = document.getElementById('vegetarianToggle');
  var vegetarianCheckbox = document.getElementById('vegetarian');

  var glutenToggle = document.getElementById('glutenToggle');
  var glutenCheckbox = document.getElementById('glutenFree');

  var organicToggle = document.getElementById('organicToggle');
  var organicCheckbox = document.getElementById('organic');

  vegetarianToggle.addEventListener('click', function () {
    vegetarianCheckbox.checked = !vegetarianCheckbox.checked;
    updateSliderStyles(vegetarianCheckbox, vegetarianToggle.querySelector('.slider'));
  });

  glutenToggle.addEventListener('click', function () {
    glutenCheckbox.checked = !glutenCheckbox.checked;
    updateSliderStyles(glutenCheckbox, glutenToggle.querySelector('.slider'));
  });

  organicToggle.addEventListener('click', function () {
    organicCheckbox.checked = !organicCheckbox.checked;
    updateSliderStyles(organicCheckbox, organicToggle.querySelector('.slider'));
  });

  // Initial styles update
  updateSliderStyles(vegetarianCheckbox, vegetarianToggle.querySelector('.slider'));
  updateSliderStyles(glutenCheckbox, glutenToggle.querySelector('.slider'));
  updateSliderStyles(organicCheckbox, organicToggle.querySelector('.slider'));
  // Similar initial styles update for other toggles
});

function updateSliderStyles(checkbox, slider) {
  if (checkbox.checked) {
    slider.style.backgroundColor = '#4CAF50'; // Green color
  } else {
    slider.style.backgroundColor = '#ccc'; // Default color
    slider.style.transform = 'translateX(0)';
  }
}
