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
                var prout = recetteFactory(recette);
                const recetteCardDOM = listerecette.recetteCardDOM();
                listerecettediv.appendChild(recetteCardDOM);
                
                }
        }
   ) 


}
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

function gettag(){
    setTimeout(()=>{    
    var listetag = document.querySelectorAll(".tag")
    listetag.forEach(text => {
        listetag.values()
        console.log(text.textContent)
    });
    console.log(listetag)
    var listetagvalue = listetag.values()
    console.log(listetagvalue)
    var listetagtext = listetagvalue.value
    console.log(listetagtext)
    },1)
}

document.getElementById("selecting").addEventListener("change",gettag)
document.getElementById("selectust").addEventListener("change",gettag)
document.getElementById("selectapp").addEventListener("change",gettag)






