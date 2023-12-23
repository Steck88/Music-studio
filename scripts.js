const images = [
    {"src":"images/studio.jpg", "alt":"Studio"},
    {"src":"images/lessons.jpg", "alt":"Lesson photo"},
    {"src":"images/lesson.jpg", "alt":"Lesson photo"}
];
let imgIndex = 0;

function changeImg() {
    document.getElementById("slideshow").src = images[imgIndex].src;
    document.getElementById("slideshow").alt = images[imgIndex].alt;
    if (images.length > imgIndex + 1) {
        imgIndex++;
    } else {
        imgIndex = 0;
    }
}
function showAlert() {
    alert("Sorry, these classes don't exist yet!");
}
function sendAlert() {
    alert("Message has been sent!");
}

changeImg();
setInterval(changeImg, 2000);

