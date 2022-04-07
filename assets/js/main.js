// navbar
let navShow = document.querySelector("#navShow");
let navHide = document.querySelector("#navHide");
let nav2 = document.querySelector(".nav2");

navShow.addEventListener("click", function () { 
    nav2.classList.add("navSlide");
    nav2.classList.remove("navSlide2");
});
navHide.addEventListener("click", function () {
    nav2.classList.add("navSlide2");
    nav2.classList.remove("navSlide");
});