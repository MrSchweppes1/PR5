var buttonL = document.getElementById("slidersLeft");
var buttonR = document.getElementById("slidersRight");
var bi = document.getElementById("had");

var i = 1;

buttonR.addEventListener("click", () => {
    i += 1;
    getRan();
});

buttonL.addEventListener("click", () => {
    i -= 1;
    getRan();
});

function getRan() {

    if (i > 3) {
        i = 1;
    }
    if (i < 1) {
        i = 3;
    }
    switch (i) {
        case 1:
            bi.style.background = "url(img/headerBG.png)";
            bi.style.backgroundSize = "100%";
            break;
        case 2:
            bi.style.background = "url(img/headerBG2.jpg)";
            bi.style.backgroundSize = "100%";
            break;
        case 3:
            bi.style.background = "url(img/headerBG3.jpg)";
            bi.style.backgroundSize = "100%";
            break;
        default:
            console.log("check");
            break;
    }
    bi.style.backgroundRepeat = "no-repeat";
}