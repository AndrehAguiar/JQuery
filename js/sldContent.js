import { speed } from "./scripts.js";
import { sldText } from "./slider.js";

let i = 0;
let j = 0;

const sldContent = {
    '#1': {
        'h1': 'Frontend development', 'caption': 'HTML, CSS, JavaScript...'
    },
    '#2': {
        'h1': 'Backend development', 'caption': 'PHP, SQL, Python...'
    },
    '#3': {
        'h1': 'Exponential Design', 'caption': 'WEB, Graphic, UX, UI...'
    },
    '#4': {
        'h1': 'Full Stack development', 'caption': 'All in one...'
    },
    '#5': {
        'h1': 'WEB Master', 'caption': 'Development and host...'
    }
};

const lstSlide = Object.keys(sldContent);

let getH1 = function (position) {

    // RESEIVE THE POSITION OF SLIDE AND RETURN DE PARAMETERS
    let text = sldContent[`#${position + 1}`]['h1'];
    let textLength = sldContent[`#${position + 1}`]['h1'].length;
    let capt = sldContent[`#${position + 1}`]['caption'];
    let captLength = sldContent[`#${position + 1}`]['caption'].length;

    return [text, textLength, capt, captLength];
}

let formatBorder = function (state) {

    // RESET DOM HTML STYLE
    if (!state) {
        $('#h1Writer').css({ 'border-right': 'solid 0.1rem white' });
        $('#caption').css({ 'with': '0', 'border-right': 'solid 0.1rem white' });
        $('#h1Writer').css({ 'with': '0', 'border-right': 'none' });
    } else {
        $('#h1Writer').css({ 'with': '0', 'border-right': 'solid 0.1rem white' });
    }
}

let typeWriter = function () {

    // INSERT EACH CHARACTERS AT THE TIME
    if (i < sldText[1]) {

        // H1 TEXT SPLITER
        document.getElementById('h1Writer').innerHTML += sldText[0].charAt(i);
        setTimeout(typeWriter, speed);
        i++;

    } else if (j < sldText[3]) {

        // H1 INFO SPLITER
        setTimeout(formatBorder(false), speed);

        document.getElementById('caption').innerHTML += sldText[2].charAt(j);
        j++;
        setTimeout(typeWriter, speed);

    }
}

let resetWriter = function () {

    // CLEAN THE TEXT OF DOM HTML
    i = 0;
    j = 0;
    document.getElementById('h1Writer').innerHTML = '';
    document.getElementById('caption').innerHTML = '';
}

export { lstSlide, getH1, formatBorder, typeWriter, resetWriter };