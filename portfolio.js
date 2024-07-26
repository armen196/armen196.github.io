let backgrounds = document.querySelectorAll(".background");
let imageIndex = 0;
function swap() {
    backgrounds[imageIndex].classList.remove("showing");
    imageIndex = (imageIndex+1) % 4;
    backgrounds[imageIndex].classList.add("showing");
}
var navBar = document.getElementById("navBar");
var descBoxes = document.querySelectorAll('.about-me-box');
var descBoxPos = 0;
var stick = navBar.offsetTop;


window.onscroll = function () {
    if (window.scrollY > stick) {
        navBar.classList.add("sticky")
    } else {
        navBar.classList.remove("sticky");
    }
    descBoxes.forEach(box => {
        descBoxPos = box.offsetTop;
        if (window.scrollY > descBoxPos - 800) {
            if (box.classList.contains("right")) {
                box.classList.add("show-l");
            }
            else {
                if (box.classList.contains("left")) {
                    box.classList.add("show-r");
                }
            }
        }
        else {
            box.classList.remove("show-l");
            box.classList.remove("show-r");
        }
    });
}
function scrollToTarget(target) {
    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
}
setInterval(swap, 6000);
