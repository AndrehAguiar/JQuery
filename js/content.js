import { contentArticle } from "./artContent.js";

let i;
let announcement;

const formatAnnoun = function (text, i) {

    if (i <= 300) {
        if (text.charAt(i) != " ") {
            i++;
            formatAnnoun(text, i);
        }
        else {
            console.log('return', text.slice(0, i));
            announcement = text.slice(0, i);
            return announcement;
        }

    }
}

const setArticle = function (article) {

    let name = article.name;
    let title = article.title;
    let image = article.image;
    let text = article.text;
    let link = article.citeLink;
    let cite = article.citation;
    let date = article.citeDate;

    formatAnnoun(article.text, 250);

    const objArticle = `
    <article>
        <div id='imgLabel' style='background-image:url("img/${image}")'></div>
        <h4 id='title'>${title}</h4>
        <span>${announcement}...
        </span >
    <hr>
        <cite><a href='${link}' target="_blank">&ldquo;${cite}&rdquor;,</a> ${date}.</cite>
    </article>`;
    document.getElementById('content').innerHTML += objArticle;
}

const getArticle = function () {
    for (let obj of contentArticle) {
        setArticle(obj);
    }
}
export { getArticle };