window.addEventListener("mousedown", function (_) {
    playAudio();
    document.getElementById("faQ").className = "Q";
}, false);

window.addEventListener("mouseup", function (_) {
    document.getElementById("faQ").className = "fa";
}, false);