const openBtn = document.querySelector(".open__button");
const closeBtn = document.querySelector(".close__button");
const backdrop = document.querySelector(".backdrop");
const getBody = document.querySelector("body");

openBtn.addEventListener("click", () => {
  backdrop.style.display = "flex";
  getBody.classList.add("show-modal");
});

closeBtn.addEventListener("click", () => {
  backdrop.style.display = "none"; 
  getBody.classList.remove("show-modal");
});

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    backdrop.style.display = "none";
    getBody.classList.remove("show-modal");
  }
});
