let button = document.querySelector(".menu_button");
let menu = document.querySelector(".menu");
let elements = {
    index: document.getElementById("index"),
    indexPanel: document.getElementById("index_panel")
};


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