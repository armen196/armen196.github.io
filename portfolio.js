let backgrounds = document.querySelectorAll(".background");
let imageIndex = 0;
function swap() {
    backgrounds[imageIndex].classList.remove("showing");
    imageIndex = (imageIndex+1) % 4;
    backgrounds[imageIndex].classList.add("showing");
}
var navBar = document.getElementById("navBar");
var stick = navBar.offsetTop;

window.onscroll = function () {
    if (window.scrollY > stick) {
        navBar.classList.add("sticky")
    } else {
        navBar.classList.remove("sticky");
    }
}
setInterval(swap, 6000);
