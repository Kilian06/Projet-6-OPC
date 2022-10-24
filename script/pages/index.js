import { recuplistapparaeil, recuplistusten, recuplistingredient } from "../utils/unique.js";

async function getrecette(){
    return fetch(`./data/recipes.json`)
    .then(listerecettes => listerecettes.json())
    .then(listerecettesJson => {
        return listerecettesJson
    })
}
getrecette()

let recettetabwindows
let recettetab = []
let myingredient



async function displayrecette(recette) {
    let recettetab = []
    var myingredient = null;
    const listerecettediv = document.getElementById("affichagerecette");
    var inputtext = document.getElementById("myInput").value
    let listerecette
    if((document.getElementById("myInput").value).length > 2){

    recette.forEach((recette) => {
        var [ingrec] = [recette.ingredients]

        Object.values(ingrec).forEach(ing => {
            window.ing = ing
            })        
        if(
            recette.name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(inputtext.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ""))||
            recette.description.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(inputtext.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ""))||
            ing.ingredient.includes(document.getElementById("myInput").value)
            )
            {
            var listerecette = recetteFactory(recette);
            // console.log(listerecette)
            const recetteCardDOM = listerecette.recetteCardDOM();
            listerecettediv.appendChild(recetteCardDOM);
            const pushinputselectingvalue = recettetab.push(listerecette);
            }
    }
   ) 

    
    }
    else{
        recette.forEach((recette) => {
            var [ingrec] = [recette.ingredients]
    
            Object.values(ingrec).forEach(ing => {
                window.ing = ing
                })  
                var listerecette = recetteFactory(recette);
                // console.log(listerecette)
                const recetteCardDOM = listerecette.recetteCardDOM();
                listerecettediv.appendChild(recetteCardDOM);
                const pushinputselectingvalue = recettetab.push(listerecette);
            }
                )
        }
    
    console.log([recettetab])
    recuplistapparaeil(recettetab)
    recuplistusten(recettetab)
    recuplistingredient(recettetab)
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

// document.getElementById("selecting").addEventListener("change",initRecette)

let selecting = []
let selectust = []
let selectapp = []


function gettaging(event){
    var inputselecting = event.currentTarget.options[event.currentTarget.selectedIndex]
    var inputselectingvalue = inputselecting.value
    const pushinputselectingvalueing = selecting.push(inputselectingvalue)
    console.log(selecting)
}

function gettagust(event){
    var inputselectust = event.currentTarget.options[event.currentTarget.selectedIndex]
    var inputselectustvalue = inputselectust.value
    const pushinputselectingvalueust = selectust.push(inputselectustvalue)
    console.log(selectust)
}

function gettagapp(event){
    var inputselectapp = event.currentTarget.options[event.currentTarget.selectedIndex]
    var inputselectappvalue = inputselectapp.value
    const pushinputselectingvalue = selectapp.push(inputselectappvalue)
    console.log(selectapp)
}



// function gettagapp(event){
//     var inputselecting = event.currentTarget.options[event.currentTarget.selectedIndex]
//     var inputselectingvalue = inputselecting.value
//     const pushinputselectingvalue = selectvalue.push(inputselectingvalue)
//     console.log(selectapp)
// }


function closetag(event){
    var inputclosetag = event.target.textContent
    const positiontag = selectvalue.indexOf(inputclosetag)
    if (positiontag > -1) { // only splice array when item is found
        array.splice(positiontag, 1); // 2nd parameter means remove one item only
      }
      console.log(selectvalue)
}

document.getElementById("selecting").addEventListener("change",gettaging)
document.getElementById("selectust").addEventListener("change",gettagust)
document.getElementById("selectapp").addEventListener("change",gettagapp)




// event sur gettag


