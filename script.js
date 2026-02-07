function goYes() {
    window.location.href = "yes.html";
}

function moveNo() {
    const noBtn = document.querySelector(".no");
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
