import { initRecette } from "../pages/index.js";

const tagInput = document.getElementById("selectust");

const tagContainer = document.querySelector(".tag-container-ust");
const tags = [];

export const createTagUst = (tagValue) => {
  const value = tagValue.trim();
  const tag = document.createElement("span");
  const tagContent = document.createTextNode(value);
  tag.setAttribute("class", "tag orange");
  tag.appendChild(tagContent);
  const close = document.createElement("img");
  close.setAttribute("class", "remove-tag");
  close.onclick = handleRemoveTag;
  tag.appendChild(close);
  tagContainer.appendChild(tag);
  tags.push(tag);
};

const handleRemoveTag = (e) => {
  var inputclosetag = e.target.parentElement.textContent;
  const positiontag = selectust.indexOf(inputclosetag);
  if (positiontag > -1) {
    selectust.splice(positiontag, 1);
  }
  initRecette();
  const item = e.target.textContent;
  e.target.parentElement.remove();
  tags.splice(tags.indexOf(item), 1);
};
