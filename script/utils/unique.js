async function recupjson(){
    return fetch(`./data/recipes.json`)
    .then(dataRecipes => dataRecipes.json())
    .then(dataRecipesJson => {
        return dataRecipesJson
    })
}

 async function recuplistingredient(){
    const listelement = await recupjson();
    const listeIngredients = [...new Set(listelement.map(item => item.ingredients))];
    const listeIngredientsflat = listeIngredients.flat(Infinity)
    const ingredientUnique = [...new Set(listeIngredientsflat.map(item => item.ingredient))];
    const ingredientUniqueMaj = new Map(ingredientUnique.map(s => [s.toLowerCase(), s]));
    const ingredientUniqueSansMaj = [...ingredientUniqueMaj.values()]
    ingredientUniqueSansMaj.sort(function(a, b) {
        return a.localeCompare(b)
      })
    return ingredientUniqueSansMaj
}

async function recuplistusten(){
    const listelement = await recupjson();
    const listeUstensils = [...new Set(listelement.map(item => item.ustensils))];
    const listeUstensilsFlat = listeUstensils.flat(Infinity)
    let ustensilsUniquefunc = new Map(listeUstensilsFlat.map(s => [s.toLowerCase(), s]));
    const ustensilsUniqueSort = [...ustensilsUniquefunc.values()]
    ustensilsUniqueSort.sort(function(a, b) {
        return a.localeCompare(b)
      })
    return ustensilsUniqueSort
}

 async function recuplistapparaeil(){
    const listappareil = await recupjson();
    const listappareils = [...new Set(listappareil.map(item => item.appliance))];
    let appareilunique = new Map(listappareils.map(s => [s.toLowerCase(), s]));
    const appareiluniquevalue = [...appareilunique.values()]
    appareiluniquevalue.sort(function(a, b) {
        return a.localeCompare(b)
      })
    return appareiluniquevalue



}
recuplistapparaeil()
recuplistusten()
recuplistingredient()






