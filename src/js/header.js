
const themeChanger = document.querySelector(".header__theme-changer");

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

themeChanger.addEventListener('click', toggleTheme);