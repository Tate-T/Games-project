document.getElementById("checkButton").addEventListener("click", function () {
    const year = parseInt(document.getElementById("heroInput").value);
    const resultText = document.getElementById("result");
    
    resultText.textContent = "";
    
    if (isNaN(year)) {
        resultText.textContent = "Будь ласка, введіть дійсний рік!";

      
        return;
    }
    
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    
    if (isLeap) {
        resultText.textContent = "Ви народилися у високосний рік!";
        resultText.style.color = "green";
    } else {
        resultText.textContent = "Ви народилися не у високосний рік!";
        resultText.style.color = "red";
    }
    
    document.getElementById("heroInput").value = "";
}); 

const randomNumber = Math.floor(Math.random() * 100) + 1;
document.querySelector(".hero__search-comp").addEventListener("click", function () {
    const userGuess = parseInt(document.querySelector(".hero__input-comp").value);
    const resultText = document.querySelector(".hero__check-comp");
    
    if (isNaN(userGuess)) {
        resultText.textContent = "Будь ласка, введіть число!";
     
        return;
    }
    
    if (userGuess === randomNumber) {
        resultText.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
        resultText.style.color = "#039900";
    } else if (userGuess < randomNumber) {
        resultText.textContent = "Загадане число більше!";
        resultText.style.color = "red";
    } else {
        resultText.textContent = "Загадане число менше!";
        resultText.style.color = "red";
    }
    
    document.querySelector(".hero__input-comp").value = "";
});
