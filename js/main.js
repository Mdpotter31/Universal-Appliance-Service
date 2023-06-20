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


//Testimonials
const quoteContent = document.querySelector('.quote-content');
const quoteNumber = document.querySelector('.quote-number-value');
const quoteName = document.querySelector('.quote-name');
const leftArrow = document.querySelector('.quote-arrow-left');
const rightArrow = document.querySelector('.quote-arrow-right');

let testimonialIndex = 0;

const testimonials = [
  {
    text: "This is an example testimonial from a customer. This is number one.",
    name: "Person One"
  },
  {
    text: "This is an example testimonial from a customer. This is number two.",
    name: "Person Two"
  },
  {
    text: "This is an example testimonial from a customer. This is number three.",
    name: "Person Three"
  },
  {
    text: "This is an example testimonial from a customer. This is number four.",
    name: "Person Four"
  }
];

function updateTestimonial() {
  quoteContent.querySelector('.quote-text').textContent = testimonials[testimonialIndex].text;
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
