// Reference to DOM Elements
const book = document.querySelector("#book");
const papers = [
    document.querySelector("#p1"),
    document.querySelector("#p2"),
    document.querySelector("#p3"),
    document.querySelector("#p4"),
    document.querySelector("#p5"),
    document.querySelector("#p6"),
    document.querySelector("#p7"),
];

let currentLocation = 1;
let numOfPapers = papers.length;
let maxLocation = numOfPapers + 1;

document.addEventListener("visibilitychange", function() {
    let music = document.getElementById("bg-music");

    if (document.hidden) {
        music.pause();  // Pause when tab is hidden
    } else {
        music.play();   // Resume when tab is active
    }
});


function openBook() {
    book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    book.style.transform = isAtBeginning ? "translateX(0%)" : "translateX(50%)";
}

function createEmojiEffect() {
    const emojiContainer = document.getElementById("emoji-container");

    // Romantic emojis array
    const emojis = ["❤️", "😘", "💋", "💞", "😍", "💕", "💖"];

    for (let i = 0; i < 7; i++) {  // Creates 7 emojis at random positions
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        // Random position around the center
        emoji.style.left = `${Math.random() * 200}px`;
        emoji.style.top = `${Math.random() * 200}px`;

        emojiContainer.appendChild(emoji);

        // Remove after animation
        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }
}

// Function to turn to the next page using switch case
function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                papers[0].classList.add("flipped");
                papers[0].style.zIndex = 1;
                break;
            case 2:
                papers[1].classList.add("flipped");
                papers[1].style.zIndex = 2;
                break;
            case 3:
                papers[2].classList.add("flipped");
                papers[2].style.zIndex = 3;
                break;
            case 4:
                papers[3].classList.add("flipped");
                papers[3].style.zIndex = 4;
                break;
            case 5:
                papers[4].classList.add("flipped");
                papers[4].style.zIndex = 5;
                break;
            case 6:
                papers[5].classList.add("flipped");
                papers[5].style.zIndex = 6;
                break;
            case 7:
                papers[6].classList.add("flipped");
                papers[6].style.zIndex = 7;
                closeBook(false);
                break;
        }
        createEmojiEffect();
        currentLocation++;
    }
}

// Function to turn to the previous page using switch case
function goPrevPage() {
    if (currentLocation > 1) {
        currentLocation--;
        switch (currentLocation) {
            case 1:
                closeBook(true);
                papers[0].classList.remove("flipped");
                papers[0].style.zIndex = 7;
                break;
            case 2:
                openBook();
                papers[1].classList.remove("flipped");
                papers[1].style.zIndex = 6;
                break;
            case 3:
                papers[2].classList.remove("flipped");
                papers[2].style.zIndex = 5;
                break;
            case 4:
                papers[3].classList.remove("flipped");
                papers[3].style.zIndex = 4;
                break;
            case 5:
                papers[4].classList.remove("flipped");
                papers[4].style.zIndex = 3;
                break;
            case 6:
                papers[5].classList.remove("flipped");
                papers[5].style.zIndex = 2;
                break;
            case 7:
                papers[6].classList.remove("flipped");
                papers[6].style.zIndex = 1;
                break;
        }
    }
}

// Click event to turn pages
book.addEventListener("click", (event) => {
    const bookRect = book.getBoundingClientRect();
    const clickX = event.clientX - bookRect.left;
    const bookWidth = bookRect.width;

    if (clickX < bookWidth / 2) {
        goPrevPage();
    } else {
        goNextPage();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    
    // Try to play the music after user interaction
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        }
    });
});

// 🎈 Generate More Floating Hearts (More Frequent & Last Longer)
function createFloatingHeart() {
    const heartContainer = document.querySelector(".floating-hearts-container");

    for (let i = 0; i < 3; i++) { // 💖 Increase number of hearts per interval
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️"; // Heart emoji

        // Randomize position, speed, and size
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 4 + 6 + "s"; // Slower & longer floating
        heart.style.fontSize = Math.random() * 20 + 20 + "px"; // Different sizes

        heartContainer.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, 10000); // Lasts longer
    }
}

// 🎈 Create Floating Hearts Every 0.3 Seconds (Faster Spawning)
setInterval(createFloatingHeart, 300);

document.onkeydown = function(e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
      return false;
    }
  };
