 // Afficher  les valeurs.
let totalsaisi;
let monnaiesaisi;
let arendre;
let nombre10euros;
let nombre5euros;
let nombre1euro;
let message10 = document.getElementById('message10');
let message5 = document.getElementById('message5');
let message1 = document.getElementById('message1');
message10.innerHTML = "0";
message5.innerHTML = "0";
message1.innerHTML = "0";

function calculmonnaie(){
    // récupération des valeur du total saisi et de la monnaie saisi avec la fonction .value.

    totalsaisi = document.getElementById('total').value;
    monnaiesaisi = document.getElementById('monnaie').value;

    // Notre condition pour calculer le rend ude la monnaie.

    arendre = monnaiesaisi - totalsaisi;

    nombre10euros = 0;
    while(arendre >=10){
        nombre10euros =nombre10euros + 1;
        arendre = arendre -10;
    }

    nombre5euros = 0;
    while(arendre >=10){
        nombre5euros =nombre5euros + 1;
        arendre = arendre -10;
    }

    message10.innerHTML = nombre10euros;
    message5.innerHTML = nombre5euros;
    message1.innerHTML = arendre;

}


    // Ajout d'un écouteur d'événement sur le bouton qui quand on clique  affichera la monnaie rendu();
    document.getElementById('button').addEventListener('click', calculmonnaie, false);