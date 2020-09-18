import { speed, timer, auto } from "./scripts.js";
import { getH1, lstSlide, formatBorder, typeWriter, resetWriter } from "./sldContent.js";

const reset = true;

let position = 0;
let sldText = getH1(position);
let id;

let resetPosition = function () {
    // RESET THE POSITION OF SLIDER
    position = 0;
    return position;
}

let incrementPosition = function (position) {
    // RETURN THE NEXT SLIDE
    position++;
    return position;
}

let decrement = function (position) {
    // RETURN THE PREVIUS SLIDE
    position--;
    return position;
}

let carroussel = function () {

    // LOOP ALL SLIDER IMAGES
    position = position < lstSlide.length - 1
        ? incrementPosition(position) : resetPosition();
    resetWriter();

    sldText = getH1(position);
    change(lstSlide[position], position);

};
let change = function (arg, newPosition, reset) {

    // arg = atual position (div ID)
    // newPosition = nextPosition (div ID)
    // RESET ALL CURSOR WRITER PARAMETERS

    // HIDE ALL DIFERENT SLIDE != ID
    for (id of lstSlide) {
        id == arg ? $(arg).fadeToggle("fast", "linear") : $(id).hide();
    }

    // RESET THE SLIDE TIMER 
    if (reset === true) {
        clearInterval(timer);
        auto();
    }
    position = newPosition;
    setTimeout(formatBorder(true), speed);

    resetWriter();
    sldText = getH1(position);
    typeWriter();
};

// JQuery EVENT LISTENERS (CLICK)
$('#l1').click(function () {
    if (position != 0) change(lstSlide[0], position, reset);
    position = 0;
});

$('#l2').click(function () {
    if (position != 1) change(lstSlide[1], position, reset);
    position = 1;
});

$('#l3').click(function () {
    if (position != 2) change(lstSlide[2], position, reset);
    position = 2;
});

$('#l4').click(function () {
    if (position != 3) change(lstSlide[3], position, reset);
    position = 3;
});

$('#l5').click(function () {
    if (position != 4) change(lstSlide[4], position, reset);
    position = 4;
});

$('#goRight').click(function () {
    position = position >= 4 ? 0 : incrementPosition(position)
    change(lstSlide[position], position, reset);
});

$('#goLeft').click(function () {
    position = position <= 0 ? 4 : decrement(position);
    change(lstSlide[position], position, reset);
});


export { change, carroussel, resetPosition, incrementPosition, lstSlide, sldText, position };