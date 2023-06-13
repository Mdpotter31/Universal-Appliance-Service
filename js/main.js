let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});


// Calculate the minimum and maximum dates for scheduling
var today = new Date();
var minDate = new Date();
minDate.setDate(today.getDate() + 2); // Next two days are not available for scheduling
var maxDate = new Date();
maxDate.setDate(today.getDate() + 21); // 3 weeks from today

// Format the dates for setting the min and max attributes of the date input field
var minDateString = minDate.toISOString().split('T')[0];
var maxDateString = maxDate.toISOString().split('T')[0];

// Set the min and max attributes of the date input field
document.getElementById("appointment-date").setAttribute("min", minDateString);
document.getElementById("appointment-date").setAttribute("max", maxDateString);
