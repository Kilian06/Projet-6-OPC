document.getElementById("filterInputApp").onkeyup =  function (e) {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('filterInputApp');
    filter = input.value.toUpperCase();
    ul = document.getElementById("selectapp");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        console.log(li.length)
        console.log(document.querySelectorAll(".listeappareil")[i])
      a = document.querySelectorAll(".listeappareil")[i];
      txtValue = a.innerText;
      console.log(txtValue)
      let filters = filter.split(" ") 
      filters = filters.filter(f => f.length)   
      let shouldDisplay = true
      filters.forEach(filt => {
        shouldDisplay = shouldDisplay && txtValue.toUpperCase().includes(filt)
      })
      li[i].style.display = (shouldDisplay || filters.length === 0) ? "" : "none";
    }
  }

document.getElementById("filterInputUst").onkeyup =  function (e) {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('filterInputUst');
  filter = input.value.toUpperCase();
  ul = document.getElementById("selectust");
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
      console.log(li.length)
      console.log(document.querySelectorAll(".listeust")[i])
    a = document.querySelectorAll(".listeust")[i];
    txtValue = a.innerText;
    console.log(txtValue)
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
        console.log(li.length)
        console.log(document.querySelectorAll(".listeingredient")[i])
      a = document.querySelectorAll(".listeingredient")[i];
      txtValue = a.innerText;
      console.log(txtValue)
      let filters = filter.split(" ") 
      filters = filters.filter(f => f.length)   
      let shouldDisplay = true
      filters.forEach(filt => {
        shouldDisplay = shouldDisplay && txtValue.toUpperCase().includes(filt)
      })
      li[i].style.display = (shouldDisplay || filters.length === 0) ? "" : "none";
    }
  }


function opening(){
  document.getElementById("filterInputIng").style.display = "flex"
  document.getElementById("filterInputIng").focus()
  document.querySelector(".arrowingopen").style.display = "none"
  document.querySelector(".arrowingclose").style.display = "block"
  document.getElementById("selecting").style.display = "flex"
  document.querySelector(".ingbtn").style.display ="none"
}

function closeing(){
  document.getElementById("filterInputIng").style.display = "none"
  document.querySelector(".arrowingopen").style.display = "block"
  document.querySelector(".arrowingclose").style.display = "none"
  document.getElementById("selecting").style.display = "none"
  document.querySelector(".ingbtn").style.display ="block"
}

function openapp(){
  document.getElementById("filterInputApp").style.display = "flex"
  document.getElementById("filterInputApp").focus()
  document.querySelector(".arrowappopen").style.display = "none"
  document.querySelector(".arrowappclose").style.display = "block"
  document.getElementById("selectapp").style.display = "flex"
  document.querySelector(".appbtn").style.display ="none"
}

function closeapp(){
  document.getElementById("filterInputApp").style.display = "none"
  document.querySelector(".arrowappopen").style.display = "block"
  document.querySelector(".arrowappclose").style.display = "none"
  document.getElementById("selectapp").style.display = "none"
  document.querySelector(".appbtn").style.display ="block"
}

function openust(){
  document.getElementById("filterInputUst").style.display = "flex"
  document.getElementById("filterInputUst").focus()
  document.querySelector(".arrowustopen").style.display = "none"
  document.querySelector(".arrowustclose").style.display = "block"
  document.getElementById("selectust").style.display = "flex"
  document.querySelector(".ustbtn").style.display ="none"
}

function closeust(){
  document.getElementById("filterInputUst").style.display = "none"
  document.querySelector(".arrowustopen").style.display = "block"
  document.querySelector(".arrowustclose").style.display = "none"
  document.getElementById("selectust").style.display = "none"
  document.querySelector(".ustbtn").style.display ="block"
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

