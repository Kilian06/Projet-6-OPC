import { initRecette} from "../pages/index.js";


const button = document.querySelector('#add-button');
const tagInput = document.getElementById("selecting");

const form = document.forms[0];
const tagContainer = document.querySelector('.tag-container-ing');
const tags = [];



export const createTagIng = (tagValue) => {
    const value = tagValue.trim();

    if (value === '' || tags.includes(value)) return;

    const tag = document.createElement('span');
    const tagContent = document.createTextNode(value);
    tag.setAttribute('class', 'tag bleu');
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
    console.log(selecting)
    var inputclosetag = e.target.parentElement.textContent
    const positiontag = selecting.indexOf(inputclosetag)
    if (positiontag > -1) {
        selecting.splice(positiontag, 1);
      }
    initRecette()
    const item = e.target.textContent
    e.target.parentElement.remove();
    tags.splice(tags.indexOf(item), 1);
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    createTagIng(tagInput.value);
};
