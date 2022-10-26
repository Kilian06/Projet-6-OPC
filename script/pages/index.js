import { recuplistapparaeil, recuplistusten, recuplistingredient } from "../utils/unique.js";

export async function getrecette(){
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
// RAZ de l'affichage des recettes
    let recettetab = []

// var myingredient = null;

// Const pour position affichage recette dans HTML
    const listerecettediv = document.getElementById("affichagerecette");

// Récupération de la valeur d'input dans le champ HTML
    var inputtext = document.getElementById("myInput").value

// Déclaration Variable
    let listerecette

// Si il n'y a pas de tag je cherche dans l'input sinon je cherche dans Tag + Input
    if(selecting.length === 0 & selectust.length === 0 & selectapp.length === 0){

// Si longeur input >2 alors je cherche dedans sinon j'affiche tout
    if((document.getElementById("myInput").value).length > 2){
        console.log("Recherche Input uniquement")

// Je cherche dans chaque recette
    recette.forEach((recette) => {
//String object Ingredient pour includes
        window.ing = 0
            recette.ingredients.forEach((liste) => {
            if (liste.ingredient.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(inputtext.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ""))){
                window.ing = 1
            }
        })
            
        // Recherche dans Name OU Description OU Ingredients.ingredient
        // si ing = 1 alors l'input est présent dans un ingredient de recette 
        if( 
            (recette.name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(inputtext.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "")))
            ||
            (recette.description.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(inputtext.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "")))
            ||
            ing == 1
        )
            {
            var listerecette = recetteFactory(recette);
            const recetteCardDOM = listerecette.recetteCardDOM();
            listerecettediv.appendChild(recetteCardDOM);
            const pushinputselectingvalue = recettetab.push(listerecette);
            }
    }
   ) 

    
    }
    else{
        console.log("Recherche sur aucun critere donc j'affiche tout")

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
    }
    // Debut recherche si un tag est coché
    else{
        console.log("un tag a été selectionné")
        // Est ce qu'il y a du text dans l'input ?
        if((document.getElementById("myInput").value).length > 2){
            console.log("il y a un tag et un input")


            recette.forEach((recette) => {
                window.ingselect = 0
                // window.appselect = 0
                // if(recette.appliance == selectapp){
                //     window.appselect = 2
                // }
                
                recette.ingredients.forEach((liste) => {      
                if (liste.ingredient == selecting){
                    window.ingselect = 2
                }
            })

            window.ing = 0
            recette.ingredients.forEach((liste) => {
            if (liste.ingredient.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(inputtext.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ""))){
                window.ing = 1
            }
        })
        
                if( (
                    (
                    (recette.name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(inputtext.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "")))
                    ||
                    (recette.description.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").includes(inputtext.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "")))
                    ||
                    ing == 1
                    )
                    )
                    &&(
                        ingselect ==2)
                    // (ingselect ==2 && appselect == 2)||
                    // (ingselect ==2 || appselect == 2))
                )
                    {
                    var listerecette = recetteFactory(recette);
                    console.log(ingselect)

                    const recetteCardDOM = listerecette.recetteCardDOM();
                    listerecettediv.appendChild(recetteCardDOM);
                    const pushinputselectingvalue = recettetab.push(listerecette);
                    }
            }
           ) 
        
            
            }
            else{
// pas d'input uniquement des tags
                recette.forEach((recette) => {
                    var [ingrec] = [recette.ingredients]
                    window.ingselect = 0
                    recette.ingredients.forEach((liste) => {
                    if (liste.ingredient == selecting){
                        window.ingselect = 2
                        console.log(ingselect)
                    }
                })
            
                    Object.values(ingrec).forEach(ing => {
                        window.ing = ing
                        })
    
                    var [usten] = [recette.ustensils]
    
                    if(ingselect ==2)

                        {
                        console.log("Y a un Tag")
                        var listerecette = recetteFactory(recette);
                        console.log(selecting)
                        console.log(ing.ingredient.includes(selecting))
                        const recetteCardDOM = listerecette.recetteCardDOM();
                        listerecettediv.appendChild(recetteCardDOM);
                        const pushinputselectingvalue = recettetab.push(listerecette);
                        }
                }
                )
            }
            

               
            }
// Verif nombre recette
    console.log("nombre recette "+[recettetab.length])
// Gestion des options des select
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
    initRecette()

}

function gettagust(event){
    var inputselectust = event.currentTarget.options[event.currentTarget.selectedIndex]
    var inputselectustvalue = inputselectust.value
    const pushinputselectingvalueust = selectust.push(inputselectustvalue)
    initRecette()

}

function gettagapp(event){
    var inputselectapp = event.currentTarget.options[event.currentTarget.selectedIndex]
    var inputselectappvalue = inputselectapp.value
    const pushinputselectingvalue = selectapp.push(inputselectappvalue)
    initRecette()
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


