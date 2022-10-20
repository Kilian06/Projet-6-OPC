document.getElementById("selectapp").addEventListener("change",function(){
    console.log(this.value)

})

const button = document.querySelector('#add-button');
const tagInput = document.getElementById("selectapp");

const form = document.forms[0];
const tagContainer = document.querySelector('.tag-container-app');
const tags = [];



const createTag = (tagValue) => {
    const value = tagValue.trim();

    if (value === '' || tags.includes(value)) return;

    const tag = document.createElement('span');
    const tagContent = document.createTextNode(value);
    tag.setAttribute('class', 'tag vert');
    tag.appendChild(tagContent);

    const close = document.createElement('span');
    close.setAttribute('class', 'remove-tag');
    close.innerHTML = '&#10006;';
    close.onclick = handleRemoveTag;

    tag.appendChild(close);
    tagContainer.appendChild(tag);
    tags.push(tag);

    tagInput.value = '';
    tagInput.focus();
};

const handleRemoveTag = (e) => {
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

document.getElementById("selectapp").addEventListener("change", handleFormSubmit);