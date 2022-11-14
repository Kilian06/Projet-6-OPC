import { initRecette} from "../pages/index.js";


const tagInput = document.getElementById("selecting"); // ul de la liste des ingredients

const tagContainer = document.querySelector('.tag-container-ing'); // lieu de cration des tags
const tags = [];



export const createTagIng = (tagValue) => {
    const value = tagValue.trim(); // suppression des whites space sur le tag selectionné
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
};

const handleRemoveTag = (e) => {
    var inputclosetag = e.target.parentElement.textContent
    const positiontag = selecting.indexOf(inputclosetag)
    if (positiontag > -1) {
        selecting.splice(positiontag, 1); // Spile pour supprimer le tag en fonction de sa position
      }
    initRecette()
    const item = e.target.textContent
    e.target.parentElement.remove();
    tags.splice(tags.indexOf(item), 1);
};
