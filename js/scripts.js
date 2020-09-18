import { getPosition, resetPosition, incrementPosition, lstSlide } from "./slider.js";

const h1Writer = ['Frontend development...', '#2', '#3', '#4', '#5'];

const reset = false;
let sldPosition = getPosition();
let id = null;
let timer = null;

let change = function (arg, newPosition, reset) {

    for (id of lstSlide) {

        id == arg ? $(arg).fadeToggle("fast", "linear") : $(id).hide();
    }
    $(writer).text(h1Writer[sldPosition]);
    if (reset === true) {
        clearInterval(timer);
        auto();
    }
    sldPosition = newPosition;
};

let carroussel = function () {

    sldPosition = sldPosition < lstSlide.length - 1
        ? incrementPosition(sldPosition) : resetPosition();

    change(lstSlide[sldPosition], sldPosition);

};

let auto = function () {
    timer = setInterval(carroussel, 5000);
};

window.onload = auto;

export { change, sldPosition };