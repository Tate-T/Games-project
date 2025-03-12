const openBtn = document.querySelector(".open__button");
const closeBtn = document.querySelector(".modal__close");
const backdrop = document.querySelector(".backdrop");
const emailInput = document.querySelector(".footer__mail");
const form = document.querySelector("#subscribeForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const emailValue = emailInput.value.trim();

  if (emailValue.includes("@")) {
    backdrop.classList.add("backdrop--visible");
    document.body.classList.add("no-scroll");
    form.reset(); 
  }
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.remove("backdrop--visible");
  document.body.classList.remove("no-scroll");
});

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    backdrop.classList.remove("backdrop--visible");
    document.body.classList.remove("no-scroll");
  }
});
