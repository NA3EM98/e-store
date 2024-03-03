var loggedName = document.getElementById("loggedName");
var logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", function () {
  window.location = "../signin.html";
});

loggedName.innerHTML = JSON.parse(localStorage.getItem("loggedName"));
