let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});



// Exclude weekends from date selection
function excludeWeekends(date) {
  return (date.getDay() !== 0 && date.getDay() !== 6);
}

// Set minimum and maximum dates for date input
var currentDate = new Date();
var minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2);
var maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 21);

document.getElementById('date').min = minDate.toISOString().split('T')[0];
document.getElementById('date').max = maxDate.toISOString().split('T')[0];

// Apply event listeners and validation on form submission
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  // Check if all required fields are filled
  var requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
  var isFormValid = true;
  
  for (var i = 0; i < requiredFields.length; i++) {
    if (!requiredFields[i].value) {
      isFormValid = false;
      requiredFields[i].classList.add('error');
    } else {
      requiredFields[i].classList.remove('error');
    }
  }
  
  // Display notification message based on form submission
  if (isFormValid) {
    alert('Thank you for submitting. Our dispatcher will call you within the next three days to confirm your schedule.');
    document.querySelector('form').reset();
  } else {
    alert('Please fill out all required fields.');
  }
});
