const faQ = new Audio('../static/media/faQ.aac');


function playAudio() {
    faQ.pause();
    faQ.currentTime = 0;
    faQ.play();
}