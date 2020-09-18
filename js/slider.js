import { change, sldPosition } from "./scripts.js";
import { lstSlide } from "./sldContent.js";

let position;
const reset = true;

let resetPosition = function () {
    position = 0;
    return position;
}

let incrementPosition = function (position) {
    position++;
    return position;
}

let decrement = function (position) {
    position--;
    return position;
}
let getPosition = function () {
    position = 0;
    return position = 0;
}

$('#l1').click(function () {
    position = 0;
    if (sldPosition != 0) change(lstSlide[0], position, reset);
});

$('#l2').click(function () {
    position = 1;
    if (sldPosition != 1) change(lstSlide[1], position, reset);
});

$('#l3').click(function () {
    position = 2;
    if (sldPosition != 2) change(lstSlide[2], position, reset);
});

$('#l4').click(function () {
    position = 3;
    if (sldPosition != 3) change(lstSlide[3], position, reset);
});

$('#l5').click(function () {
    position = 4;
    if (sldPosition != 4) change(lstSlide[4], position, reset);
});

$('#goRight').click(function () {
    position = position >= 4 ? 0 : incrementPosition(position)
    change(lstSlide[position], position, reset);
});

$('#goLeft').click(function () {
    position = position <= 0 ? 4 : decrement(position);
    change(lstSlide[position], position, reset);
});


export { resetPosition, incrementPosition, getPosition, lstSlide };