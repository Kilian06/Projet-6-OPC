document.getElementById("filterInputApp").onkeyup =  function (e) {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('filterInputApp'); // Champ de saisie d'input pour les listes
    filter = input.value.toUpperCase(); // mise en MAJ de la saisie
    ul = document.getElementById("selectapp"); 
    li = ul.getElementsByTagName('li'); // récup de la liste des éléments à filtrer
    for (i = 0; i < li.length; i++) {

      a = document.querySelectorAll(".listeappareil")[i];
      txtValue = a.innerText; // Recup chaque champ des lites en text
      let filters = filter.split(" ") // Séparer avec des espaces
      filters = filters.filter(f => f.length)   
      let shouldDisplay = true
      filters.forEach(filt => {
        shouldDisplay = shouldDisplay && txtValue.toUpperCase().includes(filt) // Match la saisie avec un element li
      })
      li[i].style.display = (shouldDisplay || filters.length === 0) ? "" : "none"; // Display none si la fonction shouldDisplay
    }
  }

document.getElementById("filterInputUst").onkeyup =  function (e) {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('filterInputUst');
  filter = input.value.toUpperCase();
  ul = document.getElementById("selectust");
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {

    a = document.querySelectorAll(".listeust")[i];
    txtValue = a.innerText;
    let filters = filter.split(" ") 
    filters = filters.filter(f => f.length)   
    let shouldDisplay = true
    filters.forEach(filt => {
      shouldDisplay = shouldDisplay && txtValue.toUpperCase().includes(filt)
    })
    li[i].style.display = (shouldDisplay || filters.length === 0) ? "" : "none";
  }
}


document.getElementById("filterInputIng").onkeyup =  function (e) {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('filterInputIng');
    filter = input.value.toUpperCase();
    ul = document.getElementById("selecting");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {

      a = document.querySelectorAll(".listeingredient")[i];
      txtValue = a.innerText;
      let filters = filter.split(" ") 
      filters = filters.filter(f => f.length)   
      let shouldDisplay = true
      filters.forEach(filt => {
        shouldDisplay = shouldDisplay && txtValue.toUpperCase().includes(filt)
      })
      li[i].style.display = (shouldDisplay || filters.length === 0) ? "" : "none";
    }
  }

var filterInputIng = document.getElementById("filterInputIng")
var arrowIngOpen =  document.querySelector(".arrowingopen")
var arrowIngClose =  document.querySelector(".arrowingclose")
var selecting = document.getElementById("selecting")
var ingbtn = document.querySelector(".ingbtn")

var filterInputApp = document.getElementById("filterInputApp")
var arrowAppOpen =  document.querySelector(".arrowappopen")
var arrowAppClose =  document.querySelector(".arrowappclose")
var selectapp = document.getElementById("selectapp")
var appbtn = document.querySelector(".appbtn")

var filterInputUst = document.getElementById("filterInputUst")
var arrowUstOpen =  document.querySelector(".arrowustopen")
var arrowUstClose =  document.querySelector(".arrowustclose")
var selectust = document.getElementById("selectust")
var ustbtn = document.querySelector(".ustbtn")


function flex(element){
  element.style.display = "flex"
}

function none(element){
  element.style.display = "none"
}

function block(element){
  element.style.display = "block"
}

function opening(){
  flex(filterInputIng)
  filterInputIng.focus()
  none(arrowIngOpen)
  block(arrowIngClose)
  flex(selecting)
  none(ingbtn)
}

function closeing(){
  none(filterInputIng)
  block(arrowIngOpen)
  none(arrowIngClose)
  none(selecting)
  block(ingbtn)
}

function openapp(){
  flex(filterInputApp)
  filterInputApp.focus()
  none(arrowAppOpen)
  block(arrowAppClose)
  flex(selectapp)
  none(appbtn)
}

function closeapp(){
  none(filterInputApp)
  block(arrowAppOpen)
  none(arrowAppClose)
  none(selectapp)
  block(appbtn)
}

function openust(){
  flex(filterInputUst)
  filterInputUst.focus()
  none(arrowUstOpen)
  block(arrowUstClose)
  flex(selectust)
  none(ustbtn)
}

function closeust(){
  none(filterInputUst)
  block(arrowUstOpen)
  none(arrowUstClose)
  none(selectust)
  block(ustbtn)
}

// Open liste Ingredient
document.querySelector(".arrowingopen").addEventListener("click", () =>{
  opening();
  closeapp();
  closeust()
})
// Close liste Ingredient
document.querySelector(".arrowingclose").addEventListener("click", closeing)

// Open liste Appareil
document.querySelector(".arrowappopen").addEventListener("click", () =>{
  openapp()
  closeing()
  closeust()
})

// Close liste Appareil
document.querySelector(".arrowappclose").addEventListener("click", closeapp)

document.querySelector(".arrowustopen").addEventListener("click", () =>{
  openust()
  closeapp()
  closeing()
})

document.querySelector(".arrowustclose").addEventListener("click", closeust)

