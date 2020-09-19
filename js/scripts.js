import { carroussel, resetPosition } from "./slider.js";
import { getH1, typeWriter } from "./sldContent.js";
import { getArticle } from "./content.js";

const speed = 60;

let timer = null;

let auto = function () {

    // INITIAL INFO SLIDE
    let writerArgs = getH1(resetPosition());
    typeWriter(writerArgs);

    // INITIAL TIMER ROTATE
    timer = setInterval(carroussel, 5000);

    getArticle();

};

window.onload = auto;

export { speed, timer, auto };