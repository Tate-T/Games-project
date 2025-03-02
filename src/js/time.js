




const dayy = document.querySelector("#dayy")
const hour = document.querySelector("#hour")
const min = document.querySelector("#min")
const sec = document.querySelector("#sec")


const immp = document.getElementById("immp")
const day = document.getElementById("day")
const dyt = document.getElementById("dut")



dyt.addEventListener("click", () => {
    let totalSeconds = parseInt(immp.value); 

    if (isNaN(totalSeconds) || totalSeconds < 0) {
        alert("Введите корректное число секунд!");
        return;
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
   














