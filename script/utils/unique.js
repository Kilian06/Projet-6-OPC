
   export function recuplistapparaeil(recettetab){
        const listappareil = recettetab;
        document.querySelectorAll("option.listeappareil").forEach(e => e.remove())
        const listappareils = [...new Set(listappareil.map(item => item.appliance))];
        let appareilunique = new Map(listappareils.map(s => [s.toLowerCase(), s]));
        const appareiluniquevalue = [...appareilunique.values()]
        appareiluniquevalue.sort(function(a, b) {
            return a.localeCompare(b)
        })
        const selectapp = document.getElementById("selectapp")
for(var i = 0; i < appareiluniquevalue.length; i++)
{
    var option = document.createElement("OPTION"),txt = document.createTextNode(appareiluniquevalue[i]);
    option.appendChild(txt);
    option.setAttribute("class","listeappareil")

    option.setAttribute("value",appareiluniquevalue[i]);
    selectapp.insertBefore(option,selectapp.lastChild);
}
  }




  export function recuplistusten(recettetab){
  const listelement = recettetab;
  document.querySelectorAll("option.listeust").forEach(e => e.remove())
  const listeUstensils = [...new Set(listelement.map(item => item.ustensils))];
  const listeUstensilsFlat = listeUstensils.flat(Infinity)
  let ustensilsUniquefunc = new Map(listeUstensilsFlat.map(s => [s.toLowerCase(), s]));
  const ustensilsUniqueSort = [...ustensilsUniquefunc.values()]
  ustensilsUniqueSort.sort(function(a, b) {
      return a.localeCompare(b)
    })

  const selectust = document.getElementById("selectust")
  for(var i = 0; i < ustensilsUniqueSort.length; i++)
  {   
      var option = document.createElement("OPTION"),txt = document.createTextNode(ustensilsUniqueSort[i]);
      option.appendChild(txt);
      option.setAttribute("class","listeust")
      option.setAttribute("value",ustensilsUniqueSort[i]);
      selectust.insertBefore(option,selectust.lastChild);
  }
  }

export function recuplistingredient(recettetab){
    const listelement = recettetab;
    document.querySelectorAll("option.listeingredient").forEach(e => e.remove())
    const listeIngredients = [...new Set(listelement.map(item => item.ingredients))];
    const listeIngredientsflat = listeIngredients.flat(Infinity)
    const ingredientUnique = [...new Set(listeIngredientsflat.map(item => item.ingredient))];
    const ingredientUniqueMaj = new Map(ingredientUnique.map(s => [s.toLowerCase(), s]));
    const ingredientUniqueSansMaj = [...ingredientUniqueMaj.values()]
    ingredientUniqueSansMaj.sort(function(a, b) {
        return a.localeCompare(b)
      })
    const selecting = document.getElementById("selecting")
for(var i = 0; i < ingredientUniqueSansMaj.length; i++)
{
    var option = document.createElement("OPTION"),txt = document.createTextNode(ingredientUniqueSansMaj[i]);
    option.setAttribute("class","listeingredient")
    option.appendChild(txt);
    option.setAttribute("value",ingredientUniqueSansMaj[i]);
    selecting.insertBefore(option,selecting.lastChild);
}
  }

//   function recuplistapparaeil(){
//     if((document.getElementById("myInput").value).length > 2){
//   const listappareil = recupjson();
//   console.log(listappareil)
//   // const listappareils = [...new Set(listappareil.map(item => item.appliance))];
//   // let appareilunique = new Map(listappareils.map(s => [s.toLowerCase(), s]));
//   // const appareiluniquevalue = [...appareilunique.values()]
//   // appareiluniquevalue.sort(function(a, b) {
//   //     return a.localeCompare(b)
//   //   })
//   return appareiluniquevalue
//     }}

// recuplistapparaeil()
// recuplistusten()
// recuplistingredient()




// async function recupjson(){
//   return fetch(`./data/recipes.json`)
//   .then(dataRecipes => dataRecipes.json())
//   .then(dataRecipesJson => {
//       return dataRecipesJson
//   })
// }

// async function recuplistingredient(){
//   const listelement = await recupjson();
//   const listeIngredients = [...new Set(listelement.map(item => item.ingredients))];
//   const listeIngredientsflat = listeIngredients.flat(Infinity)
//   const ingredientUnique = [...new Set(listeIngredientsflat.map(item => item.ingredient))];
//   const ingredientUniqueMaj = new Map(ingredientUnique.map(s => [s.toLowerCase(), s]));
//   const ingredientUniqueSansMaj = [...ingredientUniqueMaj.values()]
//   ingredientUniqueSansMaj.sort(function(a, b) {
//       return a.localeCompare(b)
//     })
//   return ingredientUniqueSansMaj
// }

// async function recuplistusten(){
//   const listelement = await recupjson();
//   const listeUstensils = [...new Set(listelement.map(item => item.ustensils))];
//   const listeUstensilsFlat = listeUstensils.flat(Infinity)
//   let ustensilsUniquefunc = new Map(listeUstensilsFlat.map(s => [s.toLowerCase(), s]));
//   const ustensilsUniqueSort = [...ustensilsUniquefunc.values()]
//   ustensilsUniqueSort.sort(function(a, b) {
//       return a.localeCompare(b)
//     })
//   return ustensilsUniqueSort
// }

// async function recuplistapparaeil(){
//   const listappareil = await recupjson();
//   const listappareils = [...new Set(listappareil.map(item => item.appliance))];
//   let appareilunique = new Map(listappareils.map(s => [s.toLowerCase(), s]));
//   const appareiluniquevalue = [...appareilunique.values()]
//   appareiluniquevalue.sort(function(a, b) {
//       return a.localeCompare(b)
//     })
//   return appareiluniquevalue
// }
// recuplistapparaeil()
// recuplistusten()
// recuplistingredient()