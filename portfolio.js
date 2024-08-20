let backgrounds = document.querySelectorAll(".background");
let imageIndex = 0;
function swap() {
    backgrounds[imageIndex].classList.remove("showing");
    imageIndex = (imageIndex + 1) % 4;
    backgrounds[imageIndex].classList.add("showing");
}
var navBar = document.getElementById("navBar");
var descBoxes = document.querySelectorAll('.about-me-box');
var descBoxPos = 0;
var stick = navBar.offsetTop;
let options = document.getElementsByClassName("option");
var projectBoxes = document.querySelectorAll('.project-box');
var projContainer = document.getElementsByClassName("projects-container");
var westernImage = document.getElementById("western-image");
var classDescBoxes = document.querySelectorAll('.class-desc-box');
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
    projectBoxes.forEach(box => {
        boxPos = box.offsetTop;
        if (window.scrollY > boxPos - 1500) {
            //projContainer.classList.add("show");
            if (box.id == 'cowboy') {
                setTimeout(() => box.classList.add("show-t"), 100)
            }
            else if (box.id == 'messenger') {
                setTimeout(() => box.classList.add("show-t"), 200)
            }
            else {
                box.classList.add("show-t");
            }
        }
        else {
            box.classList.remove("show-t");
        }
    });
    if (window.scrollY > westernImage.offsetTop - 790) {
        console.log("should pop up");
        westernImage.classList.add("show-western-image");
    } else {
        westernImage.classList.remove("show-western-image");
    }
}

function swayBoxes() {
    const timeToAnimate = 1000;
    classDescBoxes.forEach(box => {
        if (box.classList.contains("left-j")) {
            box.classList.remove("left-j");
            box.classList.add("right-j");
        }
        else {
            box.classList.remove("right-j");
            box.classList.add("left-j");
        }
    });
}

function scrollToTarget(target, adj = 0) {
    //document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    const yOffset = 200;
    const el = document.getElementById(target);
    window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY + adj,
        behavior: 'smooth'
    });
}

setInterval(swap, 6000);
setInterval(swayBoxes, 5000);
