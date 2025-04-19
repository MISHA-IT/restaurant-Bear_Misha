let main = document.getElementById("group_menu_main");
let healthy = document.getElementById("group_menu_healthy");
let children = document.getElementById("group_menu_children");

main.addEventListener("click", () => {
    window.location.href = "../breakfast/breakfast.html";
});

healthy.addEventListener("click", function() {
    window.location.href = "../healthy.html";
});
children.addEventListener("click", function() {
    window.location.href = "/children/children.html";
});

