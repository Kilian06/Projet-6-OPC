import { recuplistapparaeil, recuplistusten, recuplistingredient } from "../utils/unique.js";

export async function getrecette(){
    return fetch(`./data/recipes.json`)
    .then(listerecettes => listerecettes.json())
    .then(listerecettesJson => {
        return listerecettesJson
    })
}
getrecette()

let recettetab = []
let myingredient





async function displayrecette(recette) {
// RAZ de l'affichage des recettes
let recettetab = []

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
         window.inginput = 0
            recette.ingredients.forEach((objetIngredient) => {
            if (miseEnFormeText(objetIngredient.ingredient).includes(miseEnFormeText(inputtext))){
                window.inginput = 1
            }
        })
            
        // Recherche dans Name OU Description OU Ingredients.ingredient
        // si ing = 1 alors l'input est présent dans un ingredient de recette 
        if( 
            (miseEnFormeText(recette.name).includes(miseEnFormeText(inputtext)))
            ||
            (miseEnFormeText(recette.description).includes(miseEnFormeText(inputtext)))
            ||
            inginput == 1
        )
            {
                // printRecette(recette)
                const listerecettediv = document.getElementById("affichagerecette");
                var listerecette = recetteFactory(recette);
                const recetteCardDOM = listerecette.recetteCardDOM();
                listerecettediv.appendChild(recetteCardDOM);
                var pushinputselectingvalue = recettetab.push(listerecette);
            }
    }
   ) 
   //// Fin Affichage input Seul
   //// Debut Affichage pas d'input ni de tag

    }
    else{
        console.log("Recherche sur aucun critere donc j'affiche tout")
        recette.forEach((recette) => {
            var [ingrec] = [recette.ingredients]
    
            Object.values(ingrec).forEach(ing => {
                window.ing = ing
                })  
                // printRecette(recette)
                const listerecettediv = document.getElementById("affichagerecette");
                var listerecette = recetteFactory(recette);
                const recetteCardDOM = listerecette.recetteCardDOM();
                listerecettediv.appendChild(recetteCardDOM);
                var pushinputselectingvalue = recettetab.push(listerecette);
            }
                )
        }
    }
   //// Fin Affichage pas d'input ni de tag
   //// Debut Affichage un de si il y a un tag tag

    else{
        console.log("un tag a été selectionné")
        // Est ce qu'il y a du text dans l'input ?
        if((document.getElementById("myInput").value).length > 2){

///////////////////
// Je cherche dans chaque recette
recette.forEach((recette) => {
    //String object Ingredient pour includes
             window.inginput = 0
                recette.ingredients.forEach((objetIngredient) => {
                if (miseEnFormeText(objetIngredient.ingredient).includes(miseEnFormeText(inputtext))){
                    window.inginput = 1
                }
            })
            window.ingselect = 0
            window.appselect = 0
            window.ustselect = 0
            recette.ingredients.forEach((liste) => {    
                for(const element of selecting){
                    if (liste.ingredient.includes(element)){
                        window.ingselect = ingselect + 1
                    }
                }
            })
                for(const element of selectapp){
                    if (recette.appliance.includes(element)){
                        window.appselect = appselect + 1
                    }
                }
            
            recette.ustensils.forEach((list) => {
                for(const element of selectust){
                    if (list.includes(element)){
                        window.ustselect = ustselect + 1
                    }
                }
            })
                
            // Recherche dans Name OU Description OU Ingredients.ingredient
            // si ing = 1 alors l'input est présent dans un ingredient de recette 
            if(( 
                (miseEnFormeText(recette.name).includes(miseEnFormeText(inputtext))) // Verification input Nom recette
                ||
                (miseEnFormeText(recette.description).includes(miseEnFormeText(inputtext))) // Verification input Description recette
                ||
                inginput == 1) // Verification input dans la liste des ingredient d'une recette
                &&
                (
                    (ingselect == selecting.length) // Verification des tag ingredients
                    &&
                    (appselect == selectapp.length) // Verification des tag appareils
                    &&
                    (ustselect == selectust.length) // Verification des tags Ustensiles
                )
            )


                {
                    // printRecette(recette)
                    const listerecettediv = document.getElementById("affichagerecette");
                    var listerecette = recetteFactory(recette);
                    const recetteCardDOM = listerecette.recetteCardDOM();
                    listerecettediv.appendChild(recetteCardDOM);
                    var pushinputselectingvalue = recettetab.push(listerecette);
                }
        }
       ) 
         


        }

            else{
// pas d'input uniquement des tags
                recette.forEach((recette) => {
                    window.ingselect = 0
                    window.appselect = 0
                    window.ustselect = 0
                    recette.ingredients.forEach((liste) => {    
                        for(const element of selecting){
                            if (liste.ingredient.includes(element)){
                                window.ingselect = ingselect + 1
                            }
                        }
                    })
                        for(const element of selectapp){
                            if (recette.appliance.includes(element)){
                                window.appselect = appselect + 1
                            }
                        }
                    
                    recette.ustensils.forEach((list) => {
                        for(const element of selectust){
                            if (list.includes(element)){
                                window.ustselect = ustselect + 1
                            }
                        }
                    })

            
    
                    if((ingselect == selecting.length)&&(appselect == selectapp.length)&&(ustselect == selectust.length))

                        {
                            // printRecette(recette)
                            const listerecettediv = document.getElementById("affichagerecette");
                            var listerecette = recetteFactory(recette);
                            const recetteCardDOM = listerecette.recetteCardDOM();
                            listerecettediv.appendChild(recetteCardDOM);
                            var pushinputselectingvalue = recettetab.push(listerecette);
                        }
                }
                )
            }
            

               
            }
// Gestion des options des select
recuplistapparaeil(recettetab)
recuplistusten(recettetab)
recuplistingredient(recettetab)
printResultNumber(recettetab)

}




export async function initRecette() {
    document.getElementById("affichagerecette").innerHTML = ""
    const listeRecettebrut = await getrecette();
    displayrecette(listeRecettebrut);

      
};
initRecette()

var inputing = document.getElementById("myInput")
inputing.addEventListener("input", initRecette);

// document.getElementById("selecting").addEventListener("change",initRecette)

window.selecting = []
window.selectust = []
window.selectapp = []


function gettaging(event){
    var inputselecting = event.currentTarget.options[event.currentTarget.selectedIndex]
    var inputselectingvalue = inputselecting.value
    const pushinputselectingvalueing = selecting.push(inputselectingvalue)
    // const optioning = event.currentTarget.options[event.currentTarget.selectedIndex]
    // console.log(optioning)
    // optioning.remove()
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







document.getElementById("selecting").addEventListener("change",gettaging)
document.getElementById("selectust").addEventListener("change",gettagust)
document.getElementById("selectapp").addEventListener("change",gettagapp)




function miseEnFormeText(text){
    return text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "")

}



function printRecette (recette){
    const listerecettediv = document.getElementById("affichagerecette");
    var listerecette = recetteFactory(recette);
    const recetteCardDOM = listerecette.recetteCardDOM();
    listerecettediv.appendChild(recetteCardDOM);
    var pushinputselectingvalue = recettetab.push(listerecette);
}

async function printResultNumber (recettetab){
    var zonenumberresult = document.getElementById("resultmsg")
    const listeRecettebrut = await getrecette();


    if(document.querySelector(".zone-nombre") != null){
        document.querySelector(".zone-nombre").remove()
    }
        if(recettetab.length == listeRecettebrut.length){     
        zonenumberresult.setAttribute("class","result-message init")
        var nombreRecette = document.createElement("div")
        nombreRecette.setAttribute("class","zone-nombre")
        var closeNumber = document.createElement("img")
        closeNumber.setAttribute("class","close-resutl")
        closeNumber.setAttribute("id","close-resutl")
        zonenumberresult.appendChild(nombreRecette)
        zonenumberresult.appendChild(closeNumber)
        nombreRecette.textContent = " Pour commencer a effectuer une recherche merci de saisir des éléments dans la barre de recherche ou de selectionner des tags"}

        if((recettetab.length > 1)&&(recettetab.length < listeRecettebrut.length)){        
        zonenumberresult.setAttribute("class","result-message reponse")
        var nombreRecette = document.createElement("div")
        nombreRecette.setAttribute("class","zone-nombre")
        zonenumberresult.appendChild(nombreRecette)
        nombreRecette.textContent = recettetab.length + " recettes correspond à votre recherche"}

        if(recettetab.length == 1){        
        zonenumberresult.setAttribute("class","result-message reponse")
        var nombreRecette = document.createElement("div")
        nombreRecette.setAttribute("class","zone-nombre")
        zonenumberresult.appendChild(nombreRecette)
        nombreRecette.textContent = recettetab.length + " recette correspond à votre recherche"}

        if(recettetab.length == 0){        
        zonenumberresult.setAttribute("class","result-message erreur")
        var nombreRecette = document.createElement("div")
        nombreRecette.setAttribute("class","zone-nombre")
        zonenumberresult.appendChild(nombreRecette)
        nombreRecette.textContent = " Aucune recette correspond à votre recherche"}
        }

