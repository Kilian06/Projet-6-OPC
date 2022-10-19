
function recetteFactory(data) {
    const {name, description, time, id,ingredients} = data;

    function recetteCardDOM() {
        const divrecette = document.createElement('div');
        divrecette.setAttribute("id", id)
        divrecette.setAttribute("class", "resultatrecherche")

        const namerecette = document.createElement('p')
        const descrecette = document.createElement('p')
        const timerecette = document.createElement('p')
        const ingreslot = document.createElement('p')
        namerecette.textContent = name;
        descrecette.textContent = description;
        timerecette.textContent = time +"minutes";
        divrecette.appendChild(namerecette);
        namerecette.appendChild(descrecette)
        namerecette.appendChild(timerecette)
        namerecette.appendChild(ingreslot)
        return (divrecette);
    }
    return {name, description,time, recetteCardDOM }
}

function ingredientFactory(data) {
    const {ingredient, quantity, unit} = data;

    function ingredientCardDOM() {
        const divingredient = document.createElement('div');
        divrecette.setAttribute("class", "listeingredient")

        const nameingredient = document.createElement('p')
        const qtingredient = document.createElement('p')
        const uniteingredient = document.createElement('p')
        nameingredient.textContent = ingredient;
        qtingredient.textContent = quantity;
        uniteingredient.textContent = unit;
        divingredient.appendChild(nameingredient);
        divingredient.appendChild(qtingredient)
        divingredient.appendChild(uniteingredient)
        return (divingredient);
    }
    return {ingredient, quantity,unit, ingredientCardDOM }
}