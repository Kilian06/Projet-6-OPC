import {
  recuplistapparaeil,
  recuplistusten,
  recuplistingredient,
} from "../utils/unique.js";
import { recetteTemplate} from "../utils/printrecette.js"
import { printResultNumber} from "../utils/msgresult.js"
import { createTagApp } from "../utils/tagapp.js";
import { createTagUst } from "../utils/tagust.js";
import { createTagIng } from "../utils/taging.js";
import {miseEnFormeText} from "../utils/miseEnForme.js"

export async function getrecette() {
  return fetch(`./data/recipes.json`)
    .then((listerecettes) => listerecettes.json())
    .then((listerecettesJson) => {
      return listerecettesJson;
    });
}



window.selecting = [];
window.selectust = [];
window.selectapp = [];

async function displayrecette(recette) {
  // RAZ de l'affichage des recettes
  let recettetab = [];

  // Const pour position affichage recette dans HTML
  const listerecettediv = document.getElementById("affichagerecette");

  // Récupération de la valeur d'input dans le champ HTML
  var inputtext = document.getElementById("myInput").value;

  // Déclaration Variable
  let listerecette;

  // Si il n'y a pas de tag je cherche dans l'input sinon je cherche dans Tag + Input
  if (
    (selecting.length === 0) &
    (selectust.length === 0) &
    (selectapp.length === 0)
  ) {
    // Si longeur input >2 alors je cherche dedans sinon j'affiche tout
    if (document.getElementById("myInput").value.length > 2) {
      // Je cherche dans chaque recette
      for (var i = 0, n = recette.length; i < n; i++) {
        var recettei = recette[i];
        var recettename = recette[i].name;
        var recettedesc = recette[i].description;
        var recetteing = recette[i].ingredients;

        window.inginput = 0;
        // si il y a un ingredient qui match dans la recette alors je position la valeur inginput à 1
        for (var y = 0, m = recetteing.length; y < m; y++) {
          if (
            miseEnFormeText(recetteing[y].ingredient).includes(
              miseEnFormeText(inputtext)
            )
          ) {
            window.inginput = 1;
          }
        }
        // Recherche dans Name OU Description OU Ingredients.ingredient
        // si inginput = 1 alors l'input est présent dans un ingredient de recette

        if (
          miseEnFormeText(recettename).includes(miseEnFormeText(inputtext)) ||
          miseEnFormeText(recettedesc).includes(miseEnFormeText(inputtext)) ||
          inginput == 1
        ) {
          printRecette(recettei, recettetab);
        }
      }
    } else {
      for (var i = 0, n = recette.length; i < n; i++) {
        var recettei = recette[i];
        printRecette(recettei, recettetab);
      }
    }
  }
  //// Fin Affichage pas d'input ni de tag
  //// Debut Affichage si il y a un tag tag
  else {
    // Est ce qu'il y a du text dans l'input ?
    if (document.getElementById("myInput").value.length > 2) {
      // Est ce qu'en plus du tag il y a un input ? si oui alors je déroule

      for (var i = 0, n = recette.length; i < n; i++) {
        window.ingselect = 0;
        window.appselect = 0;
        window.ustselect = 0;
        var recettei = recette[i];
        var recettename = recette[i].name;
        var recettedesc = recette[i].description;
        var recetteing = recette[i].ingredients;
        var recetteust = recette[i].ustensils;
        window.inginput = 0;
        for (var y = 0, m = recetteing.length; y < m; y++) {
          if (
            miseEnFormeText(recetteing[y].ingredient).includes(
              miseEnFormeText(inputtext)
            )
          ) {
            window.inginput = 1;
          }
        }

        for (var z = 0, k = recetteing.length; z < k; z++) {
          for (const element of selecting) {
            if (
              miseEnFormeText(recetteing[z].ingredient) == (
                miseEnFormeText(element)
              )
            ) {
              window.ingselect = ingselect + 1;
            }
          }
        }
        for (const element of selectapp) {
          if (recette[i].appliance.includes(element)) {
            window.appselect = appselect + 1;
          }
        }
        for (const element of selectust) {
          if (recetteust.includes(element)) {
            window.ustselect = ustselect + 1;
          }
        }

        if (
          (miseEnFormeText(recettename).includes(miseEnFormeText(inputtext)) ||
            miseEnFormeText(recettedesc).includes(miseEnFormeText(inputtext)) ||
            inginput == 1) &&
          ingselect == selecting.length &&
          appselect == selectapp.length &&
          ustselect == selectust.length
        ) {
          printRecette(recettei, recettetab);
        }
      }
    } else {
      // pas d'input uniquement des tags
      for (var i = 0, n = recette.length; i < n; i++) {
        window.ingselect = 0;
        window.appselect = 0;
        window.ustselect = 0;
        var recettei = recette[i];
        var recettename = recette[i].name;
        var recettedesc = recette[i].description;
        var recetteing = recette[i].ingredients;
        var recetteust = recette[i].ustensils;
        window.inginput = 0;
        for (var y = 0, m = recetteing.length; y < m; y++) {
          for (const element of selecting) {
            if (
              miseEnFormeText(recetteing[y].ingredient) == (
                miseEnFormeText(element)
              )
            ) {
              window.ingselect = ingselect + 1;
            }
          }
        }
        for (const element of selectapp) {
          if (recette[i].appliance.includes(element)) {
            window.appselect = appselect + 1;
          }
        }
        for (const element of selectust) {
          if (recetteust.includes(element)) {
            window.ustselect = ustselect + 1;
          }
        }

        if (
          ingselect == selecting.length &&
          appselect == selectapp.length &&
          ustselect == selectust.length
        ) {
          printRecette(recettei, recettetab);
        }
      }
    }
  }
  // Gestion des options des select
  // Envoie des recettes filtré pour mettre à jour la liste des select
  recuplistapparaeil(recettetab);
  recuplistusten(recettetab);
  recuplistingredient(recettetab);
  // envoie des recettes filtré pour gestion du message sur le nombre de résultat
  printResultNumber(recettetab);

  // Fonction pour créeer les tag lors d'un click sur les listes déroulantes. La création de tag engendre un nouvelle affichage de la fonction de recherche
  document.querySelectorAll(".listeappareil").forEach((item, index) => {
    item.addEventListener("click", function (e) {
      createTagApp(e.target.innerText);
      gettagapp(e.target.innerText);
    });
  });

  document.querySelectorAll(".listeust").forEach((item, index) => {
    item.addEventListener("click", function (e) {
      createTagUst(e.target.innerText);
      gettagust(e.target.innerText);
    });
  });

  document.querySelectorAll(".listeingredient").forEach((item, index) => {
    item.addEventListener("click", function (e) {
      createTagIng(e.target.innerText);
      gettaging(e.target.innerText);
    });
  });
}

export async function initRecette() {
  document.getElementById("affichagerecette").innerHTML = ""; // Reset affichage recette
  const listeRecettebrut = await getrecette(); // Attente recup Json
  displayrecette(listeRecettebrut); // Init affichage recette
}

initRecette(); // Affichage recette au chargement de la page
document.getElementById("myInput").addEventListener("input", initRecette); // A chaque input je relance le moteur

// Etap de créations des tableaux pour l'ensemble des tag


function gettaging(e) {
  var inputselecting = e;
  var inputselectingvalue = inputselecting;
  selecting.push(inputselectingvalue); // push la value dans le tableau
  initRecette(); // relance du moteur de recherche
}

function gettagust(e) {
  var inputselectust = e;
  var inputselectustvalue = inputselectust;
  selectust.push(inputselectustvalue);
  initRecette();
}

function gettagapp(e) {
  var inputselectapp = e;
  var inputselectappvalue = inputselectapp;
  selectapp.push(inputselectappvalue);
  initRecette();
}

// Enregistrement de la selection dans les listes
document.getElementById("selecting").addEventListener("change", gettaging);
document.getElementById("selectust").addEventListener("change", gettagust);
document.getElementById("selectapp").addEventListener("change", gettagapp);



// Affichage via template du résultat des recettes
function printRecette(recette, recettetab) {
  const listerecettediv = document.getElementById("affichagerecette");
  var listerecette = recetteTemplate(recette);
  const recetteCardDOM = listerecette.recetteCardDOM();
  listerecettediv.appendChild(recetteCardDOM);
  recettetab.push(listerecette);
}

