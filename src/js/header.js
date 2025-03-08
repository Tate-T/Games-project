const themeChanger = document.querySelector(".header__theme-changer");

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

themeChanger.addEventListener("click", toggleTheme);

const nun1 = document.getElementById("nunn1");

nun1.addEventListener("click", () => {
  document.getElementById("game").classList.replace("game", "none");
  document.getElementById("dino").classList.replace("dino", "none");
  document.getElementById("socker").classList.replace("socker", "none");
  document.getElementById("acquaintance").classList.replace("team", "none");
  document.getElementById("science").classList.replace("science", "none");
});

const nuj2 = document.getElementById("nuj2");

nuj2.addEventListener("click", () => {
  document.getElementById("dino").classList.replace("game", "none");
  document.getElementById("science").classList.replace("science", "none");
  document.getElementById("acquaintance").classList.replace("team", "none");
  document.getElementById("calc").classList.replace("calc", "none");
  document.getElementById("hero").classList.replace("hero", "none");
  document.getElementById("time").classList.replace("time", "none");
  document.getElementById("number").classList.replace("numbers", "none");
});

const nul3 = document.getElementById("nul3");

nul3.addEventListener("click", () => {
  document.getElementById("dino").classList.replace("game", "none");
  document.getElementById("calc").classList.replace("calc", "none");
  document.getElementById("hero").classList.replace("hero", "none");
  document.getElementById("time").classList.replace("time", "none");
  document.getElementById("number").classList.replace("numbers", "none");
  document.getElementById("game").classList.replace("game", "none");
  document.getElementById("dino").classList.replace("dino", "none");
  document.getElementById("socker").classList.replace("socker", "none");
});
