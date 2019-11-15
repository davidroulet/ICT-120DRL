//DAvid Roulet DRT
// 10.11.2019
// Projet Voyage d'edute
//
document.addEventListener("DOMContentLoaded", init)

function init() { // Fonction d'inisalisation
    BTNMOD.addEventListener("click", MOD)
    BTNADD.addEventListener("click", ADD)
    BTNREM.addEventListener("click", REM)
    BTNREM.classList.add("d-none")
    BTNADD.classList.add("d-none")
}

function MOD() { // Fonction de modification
    BTNREM.classList.remove("d-none")
    BTNADD.classList.remove("d-none")
    BTNMOD.classList.add("d-none")
    document.getElementById("CHENRH").classList.remove("d-none")
    for (i = 1; i < Nb + 1; i++) { // Affiche les Ligne avec les CheckBox
        var NomEl
        NomEl = "Ligne" + i
        document.getElementById(NomEl).classList.remove("d-none")
    }
    TableADD.classList.remove("d-none")
}

function ADD() { //Fonction Ajout
    if (PLA.value.length == 0 || MAJ.value.length == 0 || NAME.value.length == 0 || PNAME.value.length == 0) { // Verification que les champs sont bien rempli
        alert("Il manque des Inforamtion!")
    } else { // Ajoute une nouvelle ligne et complete tout les case Non rempli (N.,Initaile,Majeur,et ajoute la case avec la checkbos)
        Nb++
        inisale = ""
        longeur = 0
        Space = ""
        inisale = PNAME.value.substr(0, 1)
        inisale = inisale + NAME.value.substr(0, 1)
        longeur = NAME.value.length
        inisale = inisale + NAME.value.substr(longeur - 1, 1)
        newtr = document.createElement("tr")
        newTd1 = document.createElement("td")
        newTd2 = document.createElement("td")
        newTd3 = document.createElement("td")
        newTd4 = document.createElement("td")
        newTd5 = document.createElement("td")
        newTd6 = document.createElement("td")
        newTd7 = document.createElement("td")
        newInput = document.createElement("input")
        newTd1.innerText = Nb
        newTd2.innerText = inisale.toUpperCase()
        newTd3.innerText = PLA.value
        if(MAJ.checked){
            newTd4.innerText = "OUI"
        }else {
            newTd4.innerText = "NON"
        }
        newTd5.innerText = NAME.value
        newTd6.innerText = PNAME.value
        newtr.setAttribute("id", "ENR" + Nb)
        newInput.setAttribute("type", "checkbox")
        idnew = "CHENR" + Nb
        newInput.setAttribute("id", idnew);
        newInput.classList.add("CHKBOX")
        newTd7.appendChild(newInput)
        newtr.appendChild(newTd1)
        newtr.appendChild(newTd2)
        newtr.appendChild(newTd3)
        newtr.appendChild(newTd4)
        newtr.appendChild(newTd5)
        newtr.appendChild(newTd6)
        newtr.appendChild(newTd7)
        Table.appendChild(newtr)
    }
}
var Nb = 4; // Nb d'enrgistrement
function REM() { //Fonction Supprimé
    for (i = 1; i < Nb + 1; i++) { // Vas verifié tout les ligne qui sont cochée et les cache
        IDC = "CHENR" + i
        IDCC = document.getElementById(IDC).checked
        if (IDCC == true) {
            document.getElementById("ENR"+i).classList.add("d-none")
           // Table.removeChild(document.getElementById("ENR"+i))
        }
    }
}