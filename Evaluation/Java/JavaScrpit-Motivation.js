document.addEventListener("DOMContentLoaded", init)
const LimitT =146 // Nombre limite de carataire dans le Texte
function init() { // Fonction qui vas ce lancé une fois la fin du chargement de la page
   TextZone.addEventListener("keyup", TextZ)
    Desc.classList.add("d-none")  // Ajout d'une classe pour faire disparaitre un element
    Ok.classList.add("d-none") // Ajout d'une classe pour faire disparaitre un element
    NbRD.classList.add("d-none") // Ajout d'une classe pour faire disparaitre un element
    TextLimit.innerText=LimitT  // ajoute La limite de carataire dans le texte
    var EmplacmentName
    var LongeurTot
    var Name
    var Link = window.location.search // Ajoute de L url dans une variable
    EmplacmentName= Link.lastIndexOf("=") // Cherche a connaitre l'emplacment du nom de famille
    LongeurTot = Link.length // Ajout de la longeur de l url dans une variable
    Name = Link.substr(EmplacmentName+1,LongeurTot-EmplacmentName) // Vas deduire l emplacment du nom de famille du Nombre total de carataire

    var EmplacmentPName
    var EmplacmentPNameFin
    var PName
    EmplacmentPName=Link.indexOf("=") // Cherche l'emplacment du bebut de Pernom
    EmplacmentPNameFin=Link.indexOf("+") // Cherche l' emplacment de la fin du Prenom
    PName = Link.substr(EmplacmentPName+1,EmplacmentPNameFin-EmplacmentPName-1) // Vas Selectioné le Prenom a l aide des 2 Variable précédente
    NameM.innerText=Name // Vas affichier le Nom Trouvé
    PNameM.innerText=PName // vas affichier le Prenom Trouvé
}
function TextZ() { //Fonction permetant de gerée la longeur du texte insi que du bouton et le message d'erreur
    var NbC = LimitT-TextZone.value.length // cherche a connaitre le Nombre de carataire restant avant d'arrivé a la limite
    NbR.innerText = NbC // Affiche les carataire restant dans le texte
    if(NbC<0){ // Vas mettre le conteur de caraitre restant a 0 pour evité les -1 -2 etc
        NbR.innerText=0
    }
    if(TextZone.value.length>30){ // Ce if vas verrifié que le texte et bien supperieur a 30 et vas affichier les bon elements ou les faire dispataire
        Desc.classList.add("d-none")
        Ok.classList.remove("d-none")
        NbRD.classList.remove("d-none")
    }else {
        Desc.classList.remove("d-none")
        Ok.classList.add("d-none")
        NbRD.classList.add("d-none")
    } // ce if vas limité le texte a 144 caratere
    if(TextZone.value.length>LimitT){
        TextZone.value=TextZone.value.substr(0,LimitT)
    }
}
//David Roulet
//15 11 2019
// EXA 120