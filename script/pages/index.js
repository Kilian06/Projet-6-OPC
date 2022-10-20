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
    var selectappareil = document.getElementById("myInput").value
    var listetag = document.querySelector(".tag")
    console.log(listetag)
    let listerecette


    if((document.getElementById("myInput").value).length > 2){

    recette.forEach((recette) => {
            if(
                recette.name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(selectappareil.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ""))||
                recette.description.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(selectappareil.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "")))
                {
                var listerecette = recetteFactory(recette);
                var prout = recetteFactory(recette);
                const recetteCardDOM = listerecette.recetteCardDOM();
                listerecettediv.appendChild(recetteCardDOM);
                }
        }
   ) }

}

async function initRecette() {
    // Récupère les datas des photographes
    document.getElementById("affichagerecette").innerHTML = ""
    const listeRecettebrut = await getrecette();
    displayrecette(listeRecettebrut);

      
};
initRecette()

var inputing = document.getElementById("myInput")
inputing.addEventListener("input", initRecette);

document.getElementById("selecting").addEventListener("change",initRecette)







