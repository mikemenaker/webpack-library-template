import "./style.css";

export default function createParagraph(id, text) {
    const parent = document.getElementById(id);

    const paragraph = document.createElement("p");
    paragraph.innerHTML = text;
    parent.appendChild(paragraph);
}
