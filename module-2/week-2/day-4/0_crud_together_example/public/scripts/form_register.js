const iconReveal = document.getElementById("reveal_password");
const iconAvatar = document.getElementById("avatar");
const inputFile = document.getElementById("file_input");
const inputPassword = document.getElementById("password");

iconAvatar.onclick = function displayFileBox() {
  inputFile.click();
};

iconReveal.onclick = function reavealPassword() {
  iconReveal.classList.toggle("fa-eye");
  iconReveal.classList.toggle("fa-eye-slash");
  inputPassword.type = iconReveal.classList.contains("fa-eye-slash")
    ? "text"
    : "password";
};
