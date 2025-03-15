const dayy = document.querySelector("#dayy")
const hour = document.querySelector("#hour")
const min = document.querySelector("#min")
const sec = document.querySelector("#sec")
const ghgh = document.querySelector(".ghgh");

const immp = document.getElementById("immp")
const day = document.getElementById("day")
const dyt = document.getElementById("dut")



dyt.addEventListener("click", () => {
    let totalSeconds = parseInt(immp.value); 

    if (isNaN(totalSeconds) || totalSeconds < 0) {
        ghgh.textContent = "Введіть коректне число";
        ghgh.style.color = "red"
        return;
    } else {
        ghgh.textContent = "Ви перевели секунди";
         ghgh.style.color = "green";
    }

    let days = Math.floor(totalSeconds / 86400); 
    let hours = Math.floor((totalSeconds % 86400) / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60); 
    let seconds = totalSeconds % 60;

    dayy.textContent = days;
    hour.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;
});