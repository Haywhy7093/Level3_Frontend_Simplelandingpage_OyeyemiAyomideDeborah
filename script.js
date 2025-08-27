// Get elements
const menuToggle = document.querySelector('.menu-toggle');
const navCenter = document.querySelector('.nav-center');
const navRight = document.querySelector('.nav-right');

// Toggle menu on click
menuToggle.addEventListener('click', (menuToggle) => {
  navCenter.classList.toggle('active');
  navRight.classList.toggle('active');
});

