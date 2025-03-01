const dino = document.querySelector(".dino__dino");
const gameArea = document.querySelector(".dino__game");
const cactus = document.querySelector(".dino__cactus");
let isJumping = false;
let isGameOver = false;
let isGameStarted = false;
let gameLoop;

function startGame() {
    if (!isGameStarted) {
        isGameStarted = true;
        isGameOver = false;
        cactus.style.animation = "cactusMove 1.3s infinite linear";
        checkCollision();
    }
}

gameArea.addEventListener("click", startGame);

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !isJumping && !isGameOver) {
        e.preventDefault();
        jump();
    }
});

function jump() {
    if (isJumping) return;
    isJumping = true;
    dino.classList.add("jump");
    
    setTimeout(() => {
        dino.classList.remove("jump");
        isJumping = false;
    }, 1000); 
}

function checkCollision() {
    gameLoop = setInterval(() => {
        const dinoRect = dino.getBoundingClientRect();
        const cactusRect = cactus.getBoundingClientRect();

        if (
            dinoRect.right > cactusRect.left &&
            dinoRect.left < cactusRect.right &&
            dinoRect.bottom > cactusRect.top
        ) {
            isGameOver = true;
            isGameStarted = false;
            clearInterval(gameLoop);
            cactus.style.animation = "none";
            alert("Гру закінчено! Оновіть сторінку, щоб почати заново.");
        }
    }, 10);
}

