function checkPassword() {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    const fireworks = document.getElementById("fireworks");
    const bubbles = document.getElementById("bubbles");
    const birthdayImage = document.getElementById("birthdayImage");

    if (password === "8683") {
        message.style.display = "block";
        birthdayImage.style.display = "block";  // Hiển thị hình ảnh sinh nhật
        showFireworks();
        showBubbles();
    } else {
        alert("Sai mật khẩu!");
    }
}

function showFireworks() {
    const fireworks = document.getElementById("fireworks");
    for (let i = 0; i < 10; i++) {
        let firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.animation = `firework 1s ease-out forwards`;
        fireworks.appendChild(firework);
    }
}

function showBubbles() {
    const bubbles = document.getElementById("bubbles");
    for (let i = 0; i < 20; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animation = `bubble 4s ease-in-out infinite`;
        bubbles.appendChild(bubble);
    }
}
