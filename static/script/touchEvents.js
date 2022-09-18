window.addEventListener("touchstart", function (event) {
    document.getElementById("faQ").className = "Q";
}, false);


window.addEventListener("touchend", function (e) {
    document.getElementById("faQ").className = "fa";
}, false);