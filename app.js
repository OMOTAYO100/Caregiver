"use strict" 
 
 const modal = document.querySelector(".projectModal");
  const signUpBtn = document.querySelector(".signUpBtn");
  const closeBtn = document.querySelector(".close-btn");

  // Show modal
  signUpBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Close modal on × button
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Optional: close on background click
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });


 const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    // Toggle hamburger animation
    menuBtn.classList.toggle('active');
    
    // Toggle menu visibility
    mobileMenu.classList.toggle('scale-y-0');
    mobileMenu.classList.toggle('scale-y-100');
});
