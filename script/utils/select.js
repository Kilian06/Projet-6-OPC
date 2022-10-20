var myingredient = await recuplistingredient()
const selecting = document.getElementById("selecting")
for(var i = 0; i < myingredient.length; i++)
{
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(myingredient[i]);
    option.appendChild(txt);
    option.setAttribute("value",myingredient[i]);
    selecting.insertBefore(option,selecting.lastChild);
}

var myapp = await recuplistapparaeil()
const selectapp = document.getElementById("selectapp")
for(var i = 0; i < myapp.length; i++)
{
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(myapp[i]);
    option.appendChild(txt);
    option.setAttribute("value",myapp[i]);
    selectapp.insertBefore(option,selectapp.lastChild);
}

var myust = await recuplistusten()
const selectust = document.getElementById("selectust")
for(var i = 0; i < myapp.length; i++)
{
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(myust[i]);
    option.appendChild(txt);
    option.setAttribute("value",myust[i]);
    selectust.insertBefore(option,selectust.lastChild);
}

export function showSelectedItem() {
    window.item = document.getElementById("selectapp").value;
    console.log(item)
    return item
}

