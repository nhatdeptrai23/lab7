function show() {
    var tooltip = document.getElementById("sidTip");
    tooltip.style.display = "inline";
}

function hide() {
    var tooltip = document.getElementById("sidTip");
    tooltip.style.display = "none";
}

function init() {
    var user = document.getElementById("user");
    user.addEventListener("mouseover", show);
    user.addEventListener("mouseout", hide);
}

window.onload = init;
