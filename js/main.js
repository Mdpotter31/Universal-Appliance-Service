let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});



// Form
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

  // Additional validation to prevent selecting weekends
  var selectedDate = new Date(document.getElementById('date').value);
  var dayOfWeek = selectedDate.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) { // Sunday (0) and Saturday (6)
    isFormValid = false;
    document.getElementById('date').classList.add('error');
  } else {
    document.getElementById('date').classList.remove('error');
  }

  // Display notification message based on form submission
  if (isFormValid) {
    alert('Thank you for submitting. Our dispatcher will call you within the next three days to confirm your schedule.');
    document.querySelector('form').reset();
  } else {
    alert('Please fill out all required fields and select a valid weekday date.');
  }
});





//Testimonials
const quoteContent = document.querySelector('.quote-content');
const quoteNumber = document.querySelector('.quote-number-value');
const quoteName = document.querySelector('.quote-name');
const leftArrow = document.querySelector('.quote-arrow-left');
const rightArrow = document.querySelector('.quote-arrow-right');

let testimonialIndex = 0;

const testimonials = [
  {
    text: "Universal Appliance came to the rescue and approached this job with some concern regarding the logistics of the repair , but all the readiness to do the job you could ask for. CJ even bought me a lunch…!!!",
    name: "Patrick Holyfield"
  },
  {
    text: "Repaired within 24 hours of call. Arrived on time . Tech diagnosed and repaired within an hour. Ryan was our tech and we definitely recommend and will call again.",
    name: "Bonnie Hutcherson"
  },
  {
    text: "I’ve been dealing with an issue for a month with Lowes Warranty. Universal Appliance has done everything in their power to repair my washer. The washer is tired and refuses to work. CJ, Shelby, & Jennifer are ALL excellent, they have worked with us every step of the way to get the washer repaired. Eric, technician is very knowledgeable, prompt, courteous, & professional.",
    name: "Kimberly Kieth"
  },
  {
    text: "Every person I spoke to was efficient, friendly, and quick - from Jen in the office, Marik in parts, and Justin for our service calls.",
    name: "Brooke Burnette"
  }
];

function updateTestimonial() {
  const testimonialText = testimonials[testimonialIndex].text;
  const quotedText = `"${testimonialText}"`; // Add quotes around the testimonial text
  quoteContent.querySelector('.quote-text').textContent = quotedText;
  quoteNumber.textContent = testimonialIndex + 1;
  quoteName.textContent = testimonials[testimonialIndex].name;
}


function navigateTestimonials(direction) {
  if (direction === 'left') {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  } else if (direction === 'right') {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  }
  updateTestimonial();
}

leftArrow.addEventListener('click', () => navigateTestimonials('left'));
rightArrow.addEventListener('click', () => navigateTestimonials('right'));

// Initial testimonial display
updateTestimonial();




// Scroll to footer when the Contact Us button is clicked
document.querySelector('.contact-us').addEventListener('click', function() {
  const footer = document.querySelector('.footer');
  footer.scrollIntoView({ behavior: 'smooth' });
});
