let input = document.getElementById("input");
let send = document.getElementById("send_button");
let conclusion = document.getElementById("message_window");
let index = document.getElementById("path_to_main");
let menu = document.getElementById("path_to_menu");

send.addEventListener("click", () => {
  let text = input.value;
  let message = document.createElement("p");
  message.textContent = text;
  conclusion.appendChild(message);
  input.value = "";
});

index.addEventListener("click", function () {
  window.location.href = "index.html";
});

menu.addEventListener("click", function () {
  window.location.href = "menu.html";
});
