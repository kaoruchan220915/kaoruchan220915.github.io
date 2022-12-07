const faQ = new Audio("../static/media/faQ.mp3");

function playAudio() {
    faQ.pause();
    faQ.currentTime = 0;
    faQ.play();
}