document.getElementById("click_area").addEventListener("mousedown", function (_) {
    playAudio();
    document.getElementById("faQ").className = "Q";
}, false);

document.getElementById("click_area").addEventListener("mouseup", function (_) {
    document.getElementById("faQ").className = "fa";
}, false);