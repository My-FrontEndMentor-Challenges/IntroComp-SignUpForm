"use strict";

const form = document.querySelector(".form");

// Validate Email
const emailValidation = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};

// Handle Form Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if any input is empty & add error if true
  const inputs = document.querySelectorAll(".input");
  inputs.forEach((input, i) => {
    let errorIcon = document.querySelector(`.error-icon-${i}`);
    let errorText = document.querySelector(`.error-text-${i}`);

    if (!input.value) {
      input.classList.add("active-error-border");
      errorIcon.classList.add("active-error");
      errorText.classList.add("active-error");
    } else {
      input.classList.remove("active-error-border");
      errorIcon.classList.remove("active-error");
      errorText.classList.remove("active-error");
    }
  });

  // Check if email is valid
  const emailInput = document.querySelector(".input-email");
  let errorIcon = document.querySelector(`.error-icon-2`);
  let errorText = document.querySelector(`.error-text-2`);

  if (!emailValidation(emailInput.value)) {
    errorIcon.classList.add("active-error");
    errorText.classList.add("active-error");
    emailInput.classList.add("active-error-border");
  } else {
    errorIcon.classList.remove("active-error");
    errorText.classList.remove("active-error");
    emailInput.classList.remove("active-error-border");
  }
});
