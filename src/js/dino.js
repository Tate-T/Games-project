const dino = document.querySelector(".dino__dino");
const cactus = document.querySelector(".dino__cactus");
let isJumping = false;
let isGameOver = false;

// Додаємо слухач натискання клавіші для стрибка
document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !isJumping && !isGameOver) {
        e.preventDefault();
        jump();
    }
});

function jump() {
    isJumping = true;
    dino.classList.add("jump");
    
    setTimeout(() => {
        dino.classList.remove("jump");
        isJumping = false;
    }, 1000); // Час має співпадати з анімацією в CSS
}

function checkCollision() {
    const gameLoop = setInterval(() => {
        const dinoRect = dino.getBoundingClientRect();
        const cactusRect = cactus.getBoundingClientRect();

        if (
            dinoRect.right > cactusRect.left &&
            dinoRect.left < cactusRect.right &&
            dinoRect.bottom > cactusRect.top
        ) {
            isGameOver = true;
            alert("Гру закінчено! Оновіть сторінку, щоб почати заново.");
            clearInterval(gameLoop);
            cactus.style.animationPlayState = "paused";
        }
    }, 10);
}

checkCollision();
