let notifications = document.querySelector(".notifications");
let success = document.getElementById("success");
let error = document.getElementById("error")
let warning = document.getElementById("warning")
let info = document.getElementById("info")
let like = document.getElementById("like")


function createToast(type, link, tittle, text) {
    let newToast = document.createElement(`div`);
    newToast.innerHTML = `<div class="toast ${type}" >
            <img src="${link}">
            <div class="content">
                <div class="tittle">${tittle}</div>
                <span>${text}</span>
            </div>
            <img src="SVG/close-circle.svg" onclick="(this.parentElement).remove()">
        </div>`;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(
        () => newToast.remove(), 5000
    );
}

success.onclick = function () {
    let type = `success`;
    let link = `SVG/checkmark-circle.svg`;
    let tittle = `Success`;
    let text = `This is a Success msg.`;
    createToast(type, link, tittle, text);
}
error.onclick = function () {
    let type = `error`;
    let link = `SVG/alert-circle.svg`;
    let tittle = `Error`;
    let text = `This is a Error msg.`;
    createToast(type, link, tittle, text);
}
warning.onclick = function () {
    let type = `warning`;
    let link = `SVG/warning.svg`;
    let tittle = `Warning`;
    let text = `This is a Warning msg.`;
    createToast(type, link, tittle, text);
}
info.onclick = function () {
    let type = `info`;
    let link = `SVG/information-circle.svg`;
    let tittle = `Info`;
    let text = `This is a Info msg.`;
    createToast(type, link, tittle, text);
}
like.onclick = function () {
    let type = `like`;
    let link = `SVG/heart-circle.svg`;
    let tittle = `Like`;
    let text = `This is a Like msg.`;
    createToast(type, link, tittle, text);
}
