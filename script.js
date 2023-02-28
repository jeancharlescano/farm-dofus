function calculateRessources(ressource) {
  if (ressource == "orge") {
    let nb = document.getElementById("orgeInput").value;
    let res = nb / 4;
    document.getElementById("ortie").innerHTML = `= ${res}`;
  } else if (ressource == "avoine") {
    let nb = document.getElementById("avoineInput").value;
    let res = nb / 5;
    document.getElementById("aubergine").innerHTML = `= ${res}`;
    document.getElementById("sauge").innerHTML = `= ${res}`;
  } else if (ressource == "houblon") {
    let nb = document.getElementById("houblonInput").value;
    let res = nb / 5;
    document.getElementById("trefle5feuilles").innerHTML = `= ${res}`;
    document.getElementById("cendres_eternelles").innerHTML = `= ${res}`;
  }
}

// let affiche = false; // variable pour indiquer si l'input est affiché

// function afficher() {
//   if (affiche) {
//     document.getElementById("monLabel").style.display = "none";
//     document.getElementById("monInput").style.display = "none";
//     affiche = false;
//   } else {
//     document.getElementById("monLabel").innerHTML = "Nom :";
//     document.getElementById("monLabel").style.display = "inline";
//     document.getElementById("monInput").style.display = "inline";
//     affiche = true;
//   }
// }
