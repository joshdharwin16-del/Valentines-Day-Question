// Create floating hearts when the button is clicked
function releaseHearts() {
    const heartCount = 15;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️";

        // Random position and size
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = 20 + Math.random() * 20 + "px";

        document.body.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

// Optional: release hearts automatically on page load
window.addEventListener("load", () => {
    setTimeout(releaseHearts, 500);
});
