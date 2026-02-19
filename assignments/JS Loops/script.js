const bubbleContainer = document.getElementById("bubbles");

let bubbleInterval;

const makeBubbles = () => {
    for (let i = 0; i < 3; i++) {
        const b = document.createElement("div");
        b.className = "bubble";

        b.style.left = Math.random() * 280 + "px";

        bubbleContainer.appendChild(b);
    }
};

bubbleInterval = setInterval(() => {
    makeBubbles();
}, 500);