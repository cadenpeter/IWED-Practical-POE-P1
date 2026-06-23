const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const datetime = document.getElementById("datetime")

let isOpen = false;

/*Mobile drawer toggle */
menuBtn.addEventListener("click", () => {
    if(drawer.style.display == "block"){
        drawer.style.display = "none";
    }else{
        drawer.style.display = "block";
    }
});

/* Live date and time */
function updateTime() {
    const now = new Date ();
    datetime.textContent = now.toLocaleString();
}

setInterval(updateTime, 1000);
updateTime();