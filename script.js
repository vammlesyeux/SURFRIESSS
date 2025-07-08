function login() {
  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (username === "kinnette dainne".toLowerCase() && password === "070603") {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("message-screen").style.display = "block";
  } else {
    errorMsg.textContent = "Incorrect username or password.";
  }
}

function toggleMessage() {
  const box = document.getElementById("message-box");
  box.style.display = box.style.display === "none" ? "block" : "none";
}
