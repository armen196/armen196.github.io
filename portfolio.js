document.addEventListener("DOMContentLoaded", function () {
    const fadeDuration = 500;
    const fadeDelay = 2000;

    const pictures = ['Images/Sloth_1.jpg', 'Images/Sloth_2.jpg', 'Images/Sloth_3.jpg'];

    function fadeOut() {
        var pic = document.getElementById("Picture");
        pic.style.opacity = 1; // Set initial opacity to 1 (fully visible)
        
        var fadeInterval = setInterval(function () {
            var opacity = pic.style.opacity;
            if (opacity > 0) {
                pic.style.opacity-=.01; 
            } else {
                clearInterval(fadeInterval);
                
            }
        }, 10);
    }
    
    setInterval(fadeOut, 10000);
});
