window.addEventListener("keydown", function (event) {
    if (event.repeat) return;
    playAudio();
    document.getElementById("faQ").className = "Q";
}, false);

window.addEventListener("keyup", function (_) {
    document.getElementById("faQ").className = "fa";
}, false);