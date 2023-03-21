const nameArea = document.querySelector("#user-name");
const emailArea = document.querySelector("#user-email");

const userData = JSON.parse(window.localStorage.getItem("userData"))

const userName = userData.name;
const userEmail = userData.email;

nameArea.textContent = userName;
emailArea.textContent = userEmail;