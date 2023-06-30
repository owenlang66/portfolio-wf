
let button = document.getElementById("btn");

//show button after 50 pixels
window.onscroll = function () { scrollBtn() };

function scrollBtn() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// scroll to the top of the document on button click
function toTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}