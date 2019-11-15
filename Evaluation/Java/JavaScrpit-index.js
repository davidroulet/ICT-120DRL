document.addEventListener("DOMContentLoaded", init)
function init() {  // Fonction qui vas ce lancé une fois la fin du chargement de la page
    PNameCheck.classList.add("d-none") // Ajout d'une classe pour faire disparaitre un element
    NameCheck.classList.add("d-none") // Ajout d'une classe pour faire disparaitre un element
    Password1Check.classList.add("d-none") // Ajout d'une classe pour faire disparaitre un element
    Password2Check.classList.add("d-none") // Ajout d'une classe pour faire disparaitre un element
    PName.addEventListener("keyup", PnameF) // Appel de Fonctiom avec les changement de carataire
    Name.addEventListener("keyup", NameF)  // Appel de Fonctiom avec les changement de carataire
    Password1.addEventListener("keyup", Password1F) // Appel de Fonctiom avec les changement de carataire
    Password2.addEventListener("keyup", Password2F) // Appel de Fonctiom avec les changement de carataire
    Send.disabled=true// disable le bouton par defaut
}
function PnameF() { // Fonction permetant de controler la longeurs du Prenom
if(PName.value.length>=2){ // if Pour verifé la longeur et ajouter les bonne classe en fonction ou les enlevé
    PNameCheck.classList.add("d-none")
}
else {
    PNameCheck.classList.remove("d-none")

}
    button()
}
function NameF() { // Fonction permetant de controler la longeurs du Nom
    if(Name.value.length>=2){ // if Pour verifé la longeur et ajouter les bonne classe en fonction ou les enlevé
        NameCheck.classList.add("d-none")
    }
    else {
        NameCheck.classList.remove("d-none")
    }
    button()
}
function Password1F() { // Fonction permetant de controler la longeurs du Mot de passe
    if(Password1.value.length>=6){ // if Pour verifé la longeur et ajouter les bonne classe en fonction ou les enlevé
        Password1Check.classList.add("d-none")
    }
    else {
        Password1Check.classList.remove("d-none")
    }
    button()
}
function Password2F() { // Fonction permetant de controler que les 2 mot de passe sont identique
    if(Password2.value==Password1.value){ // Comparaison avec les 2 case
        Password2Check.classList.add("d-none")
    }
    else {
        Password2Check.classList.remove("d-none")
    }
button()
}
function button() { // Fonction qui vas premetre d'eneable le boutons seulment si tout les contition sont rempli
    if (Password2.value==Password1.value&&Password1.value.length>=6&&Name.value.length>=2&&PName.value.length>=2){
        Send.disabled=false
    }else {
        Send.disabled=true
    }
}
//David Roulet
//15 11 2019
// EXA 120