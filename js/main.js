var toggle = document.querySelector(".outter-toggle");
var mainDiv = document.querySelector("main");

toggle.onclick = function() {
    mainDiv.classList.toggle("annual");
}