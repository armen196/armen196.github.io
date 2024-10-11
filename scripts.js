

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
function openMenu() {
    if (screenWidth <= MOBILE_WIDTH) {
        console.log("Open menu clicked, screen width: " + screenWidth);
        const menu = document.getElementById('menuNav');
        if (menu.classList.contains('hide')) {
            menu.classList.remove('hide');
        } else {
            menu.classList.add('hide');
        }
    }
}

function updateScreenWidth() {
    screenWidth = window.innerWidth;

}

function shiftArrayLeft(arr) {
    if (arr.length === 0) return arr;
    const head = arr.shift();
    arr.push(head);
    return arr;
}

function carousel() {
    let photos = Array.from(document.getElementsByClassName("img"));
    let container = document.querySelector('.about-me-desc-img-container');


    arrLen = photos.length;
    console.log(photos);
    let position = 0;
    const intervalId = setInterval(() => {
        position -= .05;
        photos.forEach((photo, index) => {
            photo.style.left = (position) + "%";
            if (position <= -100) {
                const firstPhoto = photos.shift(); // Remove the first image from the array
                photos.push(firstPhoto);
                position = 0;
                container.removeChild(photos[2]);
                container.appendChild(photos[2]);
            }
        })
    }, 5);
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
        i = (direction) ? i+=1 : i-=1;
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

carousel();
window.addEventListener('resize', updateScreenWidth);

