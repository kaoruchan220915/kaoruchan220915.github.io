document.getElementById("click_area").addEventListener("touchstart", function (_) {
    playAudio();
    document.getElementById("faQ").className = "Q";
}, false);

document.getElementById("click_area").addEventListener("touchend", function (event) {
    event.preventDefault();
    document.getElementById("faQ").className = "fa";
}, false);