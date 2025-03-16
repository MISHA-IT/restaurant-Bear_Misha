let button = document.querySelector(".menu_button");
let menu = document.querySelector(".menu");
let index = document.getElementById("index");
let indexPanel = document.getElementById("index_panel");


button.addEventListener("click", function () {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

index.addEventListener("click", function () {
   alert("Ошибка! На страницу невозможно перейти! Страница пока не готова!");
  });
  
indexPanel.addEventListener("click", function () {
    alert("Ошибка! На страницу невозможно перейти! Страница пока не готова!");
   });

let contentButton = document.getElementById("button_contents");
let content = document.getElementById("content");
let containerTopics = document.getElementById("container_topics");

contentButton.addEventListener("click", function () {
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    containerTopics.style.paddingBottom = "20px";
  } else {
    content.style.display = "none";
    containerTopics.style.paddingBottom = "0px";
  }
});
