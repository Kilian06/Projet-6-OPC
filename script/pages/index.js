import { showSelectedItem } from '../utils/select.js';


async function getrecette(){
    return fetch(`./data/recipes.json`)
    .then(listerecettes => listerecettes.json())
    .then(listerecettesJson => {
        return listerecettesJson
    })
}
getrecette()

async function displayrecette(recette) {
    const listerecettediv = document.getElementById("affichagerecette");
    if((document.getElementById("myInput").value).length > 3){
        var selectappareil = document.getElementById("myInput").value
    }
    else{
        var selectappareil = null
    }
    console.log(selectappareil)
    recette.forEach((recette) => {
        if(
        recette.name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(selectappareil.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ""))||
        recette.description.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(selectappareil.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "")))
        {
        const listerecette = recetteFactory(recette);
        console.log(listerecette)
        const recetteCardDOM = listerecette.recetteCardDOM();
        listerecettediv.appendChild(recetteCardDOM);
    }
    var grillerecherche = document.querySelectorAll(".resultatrecherche")
    grillerecherche.forEach(element => {
        var divid = element.getAttribute("id")
        console.log(divid)
        

    })

})
    
}



async function initMedia() {
    // Récupère les datas des photographes
    document.getElementById("affichagerecette").innerHTML = ""
    const listeRecettebrut = await getrecette();
    displayrecette(listeRecettebrut);

      
};
initMedia()

var inputing = document.getElementById("myInput")
inputing.addEventListener("input", initMedia);




