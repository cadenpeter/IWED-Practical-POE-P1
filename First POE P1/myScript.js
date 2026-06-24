const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");

/* Mobile drawer toggle */
menuBtn.addEventListener("click", () => {
    if(drawer.style.display == "block"){
        drawer.style.display = "none";
    }else{
        drawer.style.display = "block";
    }
});
