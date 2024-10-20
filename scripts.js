

function Description(title, desc) {
    this.title = title;
    this.desc = desc;
}

const descriptions = [];
descriptions.push(new Description(
    title = "Coding",
    desc = "For as long as I can remember, I've been fascinated by computers and how they work. At thirteen, I wrote my first Python script to help with my math homework (don’t tell Mrs. Sadger). By fifteen, I had purchased my first Raspberry Pi to automate the light fixtures in my room. A year later, I grew tired of remembering my passwords, so I built my own encrypted password server, which I ran at home. That same server was assembled from parts scavenged from my parents’ old computers, sparking my interest in building PCs for myself and my friends. I've always loved automating the mundane and creating projects that challenge me to learn and grow."
))
descriptions.push(new Description(
    title = "Work",
    desc = "During my time in college, I worked as a bartender and server at the Bellingham Olive Garden. This experience allowed me to hone many of my core strengths, including communication, customer service, adaptability, and organization. In this fast-paced environment, I developed exceptional time management skills, as I consistently worked upwards of thirty hours a week while maintaining a full course load. Balancing these responsibilities required a high level of efficiency and dedication, which has prepared me well for future challenges. Additionally, my role involved interacting with a diverse range of customers, further enhancing my ability to handle various situations with professionalism and poise."
))
descriptions.push(new Description(
    title = "Woodworking",
    desc = "Woodworking has been a passionate hobby of mine since I was 13 years old. Over the years, I've crafted a variety of items, from coffee tables and desks to shelves and planters. There's something incredibly rewarding about seeing a blueprint come to life and transform into a functional and beautiful piece. Through this hobby, I have developed a keen attention to detail, ensuring every cut and joint is precise. Patience has also been a crucial skill I've honed, as woodworking often requires careful planning and time-consuming effort. Additionally, creativity has played a significant role, pushing me to design unique and innovative pieces. These skills have seamlessly translated into my coding projects, leading to more precise, well-thought-out, and innovative solutions. Overall, woodworking has enriched both my personal and professional life, enhancing my ability to produce high-quality work."
))

var screenWidth = 0;
const MOBILE_WIDTH = 768;
var isMobile = false;
function openMenu() {
    console.log("open menu...");
    if (screenWidth <= MOBILE_WIDTH) {
        console.log("Open menu clicked, screen width: " + screenWidth);
        const menu = document.getElementById('menuNav');
        console.log("Right: " + menu.style.right);
        if (menu.style.right != "0px") {
            menu.style.right = "0px";
        } else {
            menu.style.right = "-200px";
        }
    }
}

function updateScreenWidth() {

    screenWidth = window.innerWidth;
    if (screenWidth <= MOBILE_WIDTH)
        isMobile = true;
    else
        isMobile = false;
    const el = document.getElementsByClassName('sliding-box-card 1')[0];
    const carPhoto = document.getElementsByClassName('img')[0];
    classBoxWidth = parseFloat(getComputedStyle(el).width);
    imageWidth = parseFloat(getComputedStyle(carPhoto).width);
    console.log("Image Width: " + imageWidth);
}

function shiftArrayLeft(arr) {
    if (arr.length === 0) return arr;
    const head = arr.shift();
    arr.push(head);
    return arr;
}

var imgWidth = 0;
function carousel() {
    const photoContainer = document.getElementsByClassName('about-me-desc-img-container')[0];
    const photos = Array.from(photoContainer.getElementsByClassName('img'));
    var pos = 0;
    function animate() {
        pos -= 1;
        photoContainer.style.left = pos;
        if (pos <= -1 * imageWidth) {
            pos = 0;
            photoContainer.style.left = 0;
            photoContainer.removeChild(photos[0]);
            photoContainer.appendChild(photos[0]);
            const toShift = photos.shift();
            photos.push(toShift);
        }
        requestAnimationFrame(animate);
    }
    animate();
}

const curTitle = document.getElementById('curTitle');
const curDesc = document.getElementById('curDesc');
const descLen = descriptions.length;
let i = 0;
curTitle.textContent = descriptions[0].title;
curDesc.textContent = descriptions[0].desc;

function changeDesc(direction) {
    let move = "";
    if (direction) {
        move = "100%";
    } else {
        move = "-100%";
    }
    console.log("button clicks")
    curTitle.style.left = move;
    curDesc.style.left = move;
    setTimeout(() => {
        curTitle.style.opacity = 0;
        curTitle.style.left = (direction) ? "-100%" : "100%";
        curTitle.classList.remove("move-left");
        curDesc.style.opacity = 0;
        curDesc.style.left = (direction) ? "-100%" : "100%";
        curDesc.classList.remove("move-left");
        i = (direction) ? i += 1 : i -= 1;
        if (i == -1) i = descLen - 1;
        curTitle.textContent = descriptions[i % descLen].title;
        curDesc.textContent = descriptions[i % descLen].desc;

    }, 200);
    setTimeout(() => {
        curTitle.style.opacity = 1;
        curTitle.style.left = "";
        curDesc.style.opacity = 1;
        curDesc.style.left = "";
    }, 300);
}

const toStore = document.getElementById('projects');
const original = toStore.innerHTML;
var changed = false;
function swapOrderForMobile() {
    const screenWidth = window.innerWidth;
    const MOBILE_WIDTH = 768;
    if (screenWidth <= MOBILE_WIDTH && !changed) {
        changed = true;
        const menuNav = document.getElementById('menuNav');
        menuNav.insertAdjacentHTML('afterbegin', '<div class="x" onclick="openMenu()">&#10540</div>')
        const boxesToSwap = Array.from(document.getElementsByClassName("project-box-container"));
        const certCont = Array.from(document.getElementsByClassName('container cert-cont'));
        boxesToSwap.forEach((box) => {
            console.log("making swap");
            const video = box.querySelector('video');
            const desc = box.querySelector('.vert-container');

            // Remove and reorder elements
            box.removeChild(video);
            box.removeChild(desc);
            box.appendChild(video);
            box.appendChild(desc);
        });
        certCont.forEach((box) => {
            const img = box.querySelector('a');
            const desc = box.querySelector('div');
            const h2 = desc.querySelector('h2');
            desc.style.display = 'block';
            desc.style.textAlign = 'center';

            h2.style.width = '100%';
            box.removeChild(img);
            box.removeChild(desc);
            box.appendChild(img);
            box.appendChild(desc);
        });
    } else {
        // Restore the original layout by resetting the body's innerHTML
        const toChangeBack = document.getElementById('projects');
        toChangeBack.innerHTML = original;
    }
}

function scrollToElement(id) {
    const offset = (isMobile) ? -60 : -90;
    const thingToScrollTo = document.getElementById(id).getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: thingToScrollTo, behavior: 'smooth' });
    if (isMobile) openMenu();
}


var classBoxWidth = 0;
function classCarousel() {
    const containers = Array.from(document.getElementsByClassName("class container"));
    containers.forEach((container) => {
        const classBoxes = Array.from(container.getElementsByClassName('sliding-box-card'));
        classBoxes.forEach((box) => {
            const textToShow = box.getElementsByClassName('hidden-text')[0];
            if (!isMobile) {
                box.addEventListener("mouseover", function () {
                    textToShow.style.height = "100px";
                });
                box.addEventListener("mouseout", function () {
                    textToShow.style.height = "0";
                });
            } else {
                box.addEventListener("click", function () {
                    const isClicked = (box.style.height == '300px') ? true : false;
                    if (isClicked) {
                        box.style.height = '100px';
                        textToShow.style.height = "0px";
                    } else {
                        box.style.height = '300px';
                        textToShow.style.height = "200px";
                    }

                });
            }

        });
    });
    console.log("Width: " + classBoxWidth);
    containers.forEach((container, index) => {
        if (index % 2)
            container.style.right = classBoxWidth / 2;
        const classes = Array.from(container.getElementsByClassName('sliding-box-card'));
        var pos = parseFloat(container.style.right);
        function spin() {
            //const cur = parseFloat(container.style.right + 20);
            pos += 1;

            container.style.right = pos;
            if (pos >= classBoxWidth + 20) {
                container.style.right = 0;
                pos = 0;
                const toChange = classes[0];

                container.removeChild(toChange);
                container.appendChild(toChange);
                if (isMobile) {
                    const ht = toChange.getElementsByClassName('hidden-text')[0];
                    ht.style.height = '0px';
                    toChange.style.height = '100px';

                }
                const temp = classes.shift();
                classes.push(temp);

            }
            requestAnimationFrame(spin);
        }
        spin();
    });

}



updateScreenWidth();
swapOrderForMobile();
classCarousel();

carousel();
window.addEventListener('resize', updateScreenWidth);
//window.addEventListener('resize', swapOrderForMobile);

