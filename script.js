const humburger = document.querySelector('.humburger');
const mainMenu = document.querySelector('.main-menu');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  mainMenu.classList.toggle('active');
});

fetch.