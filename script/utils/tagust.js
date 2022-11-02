import { initRecette} from "../pages/index.js";


const button = document.querySelector('#add-button');
const tagInput = document.getElementById("selectust");

const form = document.forms[0];
const tagContainer = document.querySelector('.tag-container-ust');
const tags = [];



const createTag = (tagValue) => {
    const value = tagValue.trim();

    if (value === '' || tags.includes(value)) return;

    const tag = document.createElement('span');
    const tagContent = document.createTextNode(value);
    tag.setAttribute('class', 'tag orange');
    tag.appendChild(tagContent);

    const close = document.createElement('img');
    close.setAttribute('class', 'remove-tag');
    close.onclick = handleRemoveTag;

    tag.appendChild(close);
    tagContainer.appendChild(tag);
    tags.push(tag);

    tagInput.value = '';
    tagInput.focus();
};

const handleRemoveTag = (e) => {
    console.log(selectust)
    var inputclosetag = e.target.parentElement.textContent
    const positiontag = selectust.indexOf(inputclosetag)
    if (positiontag > -1) {
        selectust.splice(positiontag, 1);
      }
    initRecette()
    const item = e.target.textContent;
    e.target.parentElement.remove();
    tags.splice(tags.indexOf(item), 1);
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    createTag(tagInput.value);
};

tagInput.addEventListener('change', (e) => {
    const { key } = e;
    if (key === ',') {
        createTag(tagInput.value.substring(0, tagInput.value.length - 1));
    }
});

document.getElementById("selectust").addEventListener("change", handleFormSubmit);