let button = document.getElementById("phone_menu");
let menu = document.querySelector(".hamburger_menu");


button.addEventListener("click", function () {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});