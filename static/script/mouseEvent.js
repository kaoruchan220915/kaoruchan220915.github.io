window.addEventListener("mousedown", function (event) {
    console.log('mouse down');
    document.getElementById("faQ").className = "Q";
}, false);


window.addEventListener("mouseup", function (e) {
    console.log('mouse up');
    document.getElementById("faQ").className = "fa";
}, false);