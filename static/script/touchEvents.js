window.addEventListener("touchstart", function (_) {
    playAudio();
    document.getElementById("faQ").className = "Q";
}, false);

window.addEventListener("touchend", function (event) {
    event.preventDefault();
    document.getElementById("faQ").className = "fa";
}, false);