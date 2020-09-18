import { getPosition, resetPosition, incrementPosition, lstSlide } from "./slider.js";
import { lstContent, getH1 } from "./sldContent.js";

const reset = false;

let sldPosition = getPosition();
let h1Args = getH1(sldPosition);
let id = null;
let timer = null;

let i = 0;
let j = 0;
const speed = 50;

let formatBorder = function (state) {
    if (!state) {
        $('#h1Writer').css({ 'border-right': 'solid 0.1rem white' });
        $('#caption').css({ 'with': '0', 'border-right': 'solid 0.1rem white' });
        $('#h1Writer').css({ 'with': '0', 'border-right': 'none' });
    } else {
        $('#h1Writer').css({ 'with': '0', 'border-right': 'solid 0.1rem white' });
    }
}

function typeWriter() {
    if (i < h1Args[1]) {

        document.getElementById('h1Writer').innerHTML += h1Args[0].charAt(i);
        i++;
        setTimeout(typeWriter, speed);

    } else if (j < h1Args[3]) {

        setTimeout(formatBorder(false), speed);

        document.getElementById('caption').innerHTML += h1Args[2].charAt(j);
        j++;
        setTimeout(typeWriter, speed);

    } else {
        i = 0;
        j = 0;

    }
}

let change = function (arg, newPosition, reset) {

    for (id of lstSlide) {

        id == arg ? $(arg).fadeToggle("fast", "linear") : $(id).hide();
    }
    console.log(lstContent[sldPosition]['h1']);

    if (reset === true) {
        clearInterval(timer);
        auto();
    }
    sldPosition = newPosition;
    h1Args = getH1(sldPosition);
    document.getElementById('h1Writer').innerHTML = '';
    document.getElementById('caption').innerHTML = '';

    setTimeout(formatBorder(true), speed);
    typeWriter(h1Args);
};

let carroussel = function () {

    sldPosition = sldPosition < lstSlide.length - 1
        ? incrementPosition(sldPosition) : resetPosition();

    change(lstSlide[sldPosition], sldPosition);

};

let auto = function () {

    timer = setInterval(carroussel, 5000);
};

typeWriter(h1Args);

window.onload = auto;

export { change, sldPosition };