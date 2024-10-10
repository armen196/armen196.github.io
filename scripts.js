var screenWidth = 0;
const MOBILE_WIDTH = 768;
function openMenu() {
    if (screenWidth <= MOBILE_WIDTH) {
        console.log("Open menu clicked, screen width: " + screenWidth);
    }
}

function updateScreenWidth() {
    screenWidth = window.innerWidth;
    
}

updateScreenWidth();


window.addEventListener('resize', updateScreenWidth);