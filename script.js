document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// JavaScript to toggle the contact form overlay
const contactButton = document.getElementById("contact-button");
const contactOverlay = document.getElementById("contact-overlay");
const closeButton = document.getElementById("close-button");

contactButton.addEventListener("click", () => {
    contactOverlay.style.display = "flex"; // Change "display" to "flex"
});

closeButton.addEventListener("click", () => {
    contactOverlay.style.display = "none";
});