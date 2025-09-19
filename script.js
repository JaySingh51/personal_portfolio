document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thanks for reaching out! (Form is non-functional)";
});