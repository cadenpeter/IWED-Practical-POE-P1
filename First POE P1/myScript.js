const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");

console.log(menuBtn);
console.log(drawer);

menuBtn.addEventListener("click", function () {
    drawer.classList.toggle("show");
});

