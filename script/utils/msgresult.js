import { getrecette} from "../pages/index.js"

// Affichage du nombre de recette

export async function printResultNumber(recettetab) {
    var zonenumberresult = document.getElementById("resultmsg");
    const listeRecettebrut = await getrecette();
  
    if (document.querySelector(".zone-nombre") != null) {
      document.querySelector(".zone-nombre").remove();
    }
    if (recettetab.length == listeRecettebrut.length) {
      zonenumberresult.setAttribute("class", "result-message init");
      var nombreRecette = document.createElement("div");
      nombreRecette.setAttribute("class", "zone-nombre");
      var closeNumber = document.createElement("img");
      closeNumber.setAttribute("class", "close-resutl");
      closeNumber.setAttribute("id", "close-resutl");
      zonenumberresult.appendChild(nombreRecette);
      zonenumberresult.appendChild(closeNumber);
      nombreRecette.textContent =
        " Pour commencer a effectuer une recherche merci de saisir des éléments dans la barre de recherche ou de selectionner des tags";
    }
  
    if (recettetab.length > 1 && recettetab.length < listeRecettebrut.length) {
      zonenumberresult.setAttribute("class", "result-message reponse");
      var nombreRecette = document.createElement("div");
      nombreRecette.setAttribute("class", "zone-nombre");
      zonenumberresult.appendChild(nombreRecette);
      nombreRecette.textContent =
        recettetab.length + " recettes correspond à votre recherche";
    }
  
    if (recettetab.length == 1) {
      zonenumberresult.setAttribute("class", "result-message reponse");
      var nombreRecette = document.createElement("div");
      nombreRecette.setAttribute("class", "zone-nombre");
      zonenumberresult.appendChild(nombreRecette);
      nombreRecette.textContent =
        recettetab.length + " recette correspond à votre recherche";
    }
  
    if (recettetab.length == 0) {
      zonenumberresult.setAttribute("class", "result-message erreur");
      var nombreRecette = document.createElement("div");
      nombreRecette.setAttribute("class", "zone-nombre");
      zonenumberresult.appendChild(nombreRecette);
      nombreRecette.textContent = " Aucune recette correspond à votre recherche";
    }
  }