<?php

// Exclude weekends from date selection
function excludeWeekends($date) {
  return ($date->format('N') !== '6' && $date->format('N') !== '7');
}

// Set minimum and maximum dates for date input
$currentDate = new DateTime();
$minDate = new DateTime($currentDate->format('Y-m-d'));
$minDate->modify('+2 days');
$maxDate = new DateTime($currentDate->format('Y-m-d'));
$maxDate->modify('+21 days');

echo '<script>';
echo 'document.getElementById("date").min = "' . $minDate->format('Y-m-d') . '";';
echo 'document.getElementById("date").max = "' . $maxDate->format('Y-m-d') . '";';
echo 'document.getElementById("date").addEventListener("input", function() {';
echo 'var selectedDate = new Date(this.value);';
echo 'if (!excludeWeekends(selectedDate)) {';
echo 'this.value = "";';
echo 'alert("Weekends are not allowed. Please select a valid date.");';
echo '}';
echo '});';
echo '</script>';

// Apply event listeners and validation on form submission
echo '<script>';
echo 'document.querySelector("form").addEventListener("submit", function (event) {';
echo 'event.preventDefault();';

// Check if all required fields are filled
echo 'var requiredFields = document.querySelectorAll("input[required], select[required], textarea[required]");';
echo 'var isFormValid = true;';
echo 'for (var i = 0; i < requiredFields.length; i++) {';
echo 'if (!requiredFields[i].value) {';
echo 'isFormValid = false;';
echo 'requiredFields[i].classList.add("error");';
echo '} else {';
echo 'requiredFields[i].classList.remove("error");';
echo '}';
echo '}';

// Display notification message based on form submission
echo 'if (isFormValid) {';
echo 'alert("Thank you for submitting. Our dispatcher will call you within the next three days to confirm your schedule.");';
echo 'document.querySelector("form").reset();';
echo '} else {';
echo 'alert("Please fill out all required fields.");';
echo '}';
echo '});';
echo '</script>';

?>
