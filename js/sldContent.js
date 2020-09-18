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
const lstContent = Object.values(sldContent);
let getH1 = function (sldPosition) {

    let text = sldContent[`#${sldPosition + 1}`]['h1'];
    let textLength = sldContent[`#${sldPosition + 1}`]['h1'].length;
    let capt = sldContent[`#${sldPosition + 1}`]['caption'];
    let captLength = sldContent[`#${sldPosition + 1}`]['caption'].length;

    return [text, textLength, capt, captLength];

}
export { lstSlide, lstContent, getH1 };