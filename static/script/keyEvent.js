window.addEventListener("keydown", function (event) {
    console.log('key down');
    document.getElementById("faQ").className = "Q";
}, false);


window.addEventListener("keyup", function (e) {
    console.log('key up');
    document.getElementById("faQ").className = "fa";
}, false);