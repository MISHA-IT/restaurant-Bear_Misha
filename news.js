// Находим кнопки и все карточки
const cards = document.querySelectorAll(".news-card");
const filters = {
  events: document.getElementById("events"),    // тип 1
  holidays: document.getElementById("holidays"), // тип 2
  stock: document.getElementById("stock"),      // тип 3
  new_items: document.getElementById("new_items") // тип 4
};

// Функция фильтрации
function filterNews(type) {
  cards.forEach(card => {
    // Если тип совпадает с data-types, показываем, иначе скрываем
    if (card.dataset.types === type) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

filters.events.addEventListener("click", () => filterNews("1"));
filters.holidays.addEventListener("click", () => filterNews("2"));
filters.stock.addEventListener("click", () => filterNews("3"));
filters.new_items.addEventListener("click", () => filterNews("4"));


let button = document.querySelector(".menu_button");
let menu = document.querySelector(".menu");

button.addEventListener("click", function () {
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
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