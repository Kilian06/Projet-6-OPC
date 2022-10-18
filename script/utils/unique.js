async function recupjson(){
    return fetch(`./data/recipes.json`)
    .then(dataRecipes => dataRecipes.json())
    .then(dataRecipesJson => {
        return dataRecipesJson
    })
}

async function recuplistingredient(){
    const listelement = await recupjson();
    console.log(listelement)
    const listeIngredients = [...new Set(listelement.map(item => item.ingredients))];
    const listeIngredientsflat = listeIngredients.flat(Infinity)
    const ingredientUnique = [...new Set(listeIngredientsflat.map(item => item.ingredient))];
    console.log(ingredientUnique)
    const ingredientUniqueMaj = new Map(ingredientUnique.map(s => [s.toLowerCase(), s]));
    const ingredientUniqueSansMaj = [...ingredientUniqueMaj.values()]
    ingredientUniqueSansMaj.sort()
    console.log(ingredientUniqueSansMaj)
}

async function recuplistusten(){
    const listelement = await recupjson();
    console.log(listelement)
    const listeUstensils = [...new Set(listelement.map(item => item.ustensils))];
    const listeUstensilsFlat = listeUstensils.flat(Infinity)
    let ustensilsUniquefunc = new Map(listeUstensilsFlat.map(s => [s.toLowerCase(), s]));
    const ustensilsUniqueSort = [...ustensilsUniquefunc.values()]
    ustensilsUniqueSort.sort()
    console.log(ustensilsUniqueSort)
}


recuplistingredient()


