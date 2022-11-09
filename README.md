# Projet-6-OPC

Mesure de benchmark

Script ForEach

var inputtext ="car";
const recette = []

recette.forEach((recette) => {
        //String object Ingredient pour includes
        window.inginput = 0;
        recette.ingredients.forEach((objetIngredient) => {
          if (
            (objetIngredient.ingredient).includes(
      (inputtext)
            )
          ) {
            window.inginput = 1;
          }
        });

        // Recherche dans Name OU Description OU Ingredients.ingredient
        // si ing = 1 alors l'input est présent dans un ingredient de recette
        if (
          (recette.name).includes((inputtext)) ||
          (recette.description).includes(
            (inputtext)
          ) ||
          inginput == 1
        ) {
          console.log("ok");
        }
      });
      
      Script For
      
var inputtext ="car";
const recette = []
    }
];
for (var i = 0, n = recette.length; i < n; i++) {
        var recettei = recette[i];
        var recettename = recette[i].name;
        var recettedesc = recette[i].description;
        var recetteing = recette[i].ingredients;

        window.inginput = 0;
        for (var y = 0, m = recetteing.length; y < m; y++) {
          if (
            (recetteing[y].ingredient).includes(
              (inputtext)
            )
          ) {
            window.inginput = 1;
          }
        }
        // Recherche dans Name OU Description OU Ingredients.ingredient
        // si ing = 1 alors l'input est présent dans un ingredient de recette

        if (
          (recettename).includes((inputtext)) ||
          (recettedesc).includes((inputtext)) ||
          inginput == 1
        ) {
          console.log("ok");
        }
      }![Capture d’écran 2022-11-08 à 11 18 00](https://user-images.githubusercontent.com/19333694/200645281-f0ebab92-b1b9-414f-83ce-7b882aae9dad.png)
<img width="660" alt="Capture d’écran 2022-11-08 à 19 24 19" src="https://user-images.githubusercontent.com/19333694/200645291-ac4acc18-cc33-4629-8fcf-7db387c925a1.png">
