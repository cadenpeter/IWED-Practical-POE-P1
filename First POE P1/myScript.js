const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const datetime = document.getElementById("datetime")

let isOpen = false;

/*Mobile drawer toggle */
menuBtn.addEventListener("click", () => {
if (!isOpen) {
    drawer.style.display = "block";
    setTimeout (() => {
        drawer.style.width = "250px";
    }, 10);
    isOpen = true;
} else {
    drawer.style.width = "0";
    setTimeout(() =>{
        drawer.style.display = "none";
    }, 400);
}
});