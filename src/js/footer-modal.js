const openBtn = document.querySelector(".open__button");
const closeBtn = document.querySelector(".modal__close");
const backdrop = document.querySelector(".backdrop");

openBtn.addEventListener("click", () => {
  backdrop.classList.add("backdrop--visible");
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.remove("backdrop--visible");
});

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    backdrop.classList.remove("backdrop--visible");
  }
});
