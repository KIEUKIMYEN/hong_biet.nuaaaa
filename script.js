function checkPassword() {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    const square = document.getElementById("square");
    const birthdayImage = document.getElementById("birthdayImage");

    if (password === "8683") {
        message.style.display = "block"; // Hiển thị message
        square.style.display = "block";  // Hiển thị hình vuông
        birthdayImage.style.display = "block";  // Hiển thị hình ảnh sinh nhật
    } else {
        alert("Sai mật khẩu!");
    }
}
