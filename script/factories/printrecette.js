
function recetteFactory(data) {

    const {name, description, time, id, appliance,ustensils} = data;
    const [ingredients] = [data.ingredients]
    function recetteCardDOM() {
        const divrecette = document.createElement('div');
        divrecette.setAttribute("id", id)
        divrecette.setAttribute("class", "resultatrecherche")
        const divzonerecette = document.createElement('div')
        divzonerecette.setAttribute("class", "divzonerecette")

        const imgrecette = document.createElement('img')
        imgrecette.setAttribute("class","imgrecette")

        const namerecette = document.createElement('p')
        namerecette.setAttribute("class","titrerecette")
        const descrecette = document.createElement('p')
        descrecette.setAttribute("class","descriptionrecette")

        const timerecette = document.createElement('p')
        timerecette.setAttribute("class","timerecette")
        const zoneingdes = document.createElement('div')
        zoneingdes.setAttribute("class","zoneingdes")
        const zonetitretimer = document.createElement('div')
        zonetitretimer.setAttribute("class","zonetitretimer")

        const ingreslot = document.createElement('p')
        namerecette.textContent = name;
        descrecette.textContent = description;
        const pictohorloge = document.createElement('img')
        pictohorloge.setAttribute("src","./data/image/lhorloge.png")
        pictohorloge.setAttribute("class","pictohorloge")

        timerecette.textContent = time +" min";
        Object.values(ingredients).forEach(val => {
            if (val.quantity === undefined) {
                val.quantity = "";
              }
              if (val.unit === undefined) {
                val.unit = "";
              }
        ingreslot.innerHTML = ingreslot.innerHTML + "<span>"+ val.ingredient +": "+"</span>"+ val.quantity+ " "+ val.unit +"<br/>"
            });        
        divrecette.appendChild(imgrecette);
        divrecette.appendChild(divzonerecette);
        divzonerecette.appendChild(zonetitretimer);
        divzonerecette.appendChild(zoneingdes);



        zonetitretimer.appendChild(namerecette);
        timerecette.appendChild(pictohorloge);

        zonetitretimer.appendChild(timerecette);
        zoneingdes.appendChild(ingreslot);
        zoneingdes.appendChild(descrecette);

        return (divrecette);
    }
    return {name, description,time,ingredients,appliance,ustensils, recetteCardDOM }
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