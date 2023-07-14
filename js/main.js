let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
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
