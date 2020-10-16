
const selectEl = function(element) {
    return document.querySelector(element);
}

const menuToggler = selectEl(".menu-toggle");
const body = selectEl("body");

menuToggler.addEventListener("click", function() {
    console.log("clicked");
    body.classList.toggle("open");
})

