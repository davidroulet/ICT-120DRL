document.addEventListener("DOMContentLoaded", init)
function init() {
    console.log("JSTL")
    BTNMOD.addEventListener("click",MOD)
    BTNADD.addEventListener("click",ADD)
    BTNREM.addEventListener("click",REM)
    BTNREM.classList.add("d-none")
    BTNADD.classList.add("d-none")

}
function MOD() {
    BTNREM.classList.remove("d-none")
    BTNADD.classList.remove("d-none")
    BTNMOD.classList.add("d-none")
    document.getElementById("CHENRH").classList.remove("d-none")
    for (i=1;i<Nb+1;i++){
        var NomEl
        NomEl = "CHENR"+i
        document.getElementById(NomEl).classList.remove("d-none")
    }
TableADD.classList.remove("d-none")
}
function ADD() {
    if(PLA.value.length==0||MAJ.value.length==0||NAME.value.length==0||PNAME.value.length==0){
        alert("Il manque des Inforamtion!")
    }else {
        Nb++
        inisale = ""
        longeur = 0
        Space = ""
        inisale = PNAME.value.substr(0, 1)
        console.log(inisale)
        inisale = inisale + NAME.value.substr(0, 1)
        console.log(inisale)
        longeur = NAME.value.length
        inisale = inisale + NAME.value.substr(longeur - 1, 1)
        console.log(inisale)
    newtr = document.createElement("tr")
    newTd1 = document.createElement("td")
    newTd2 = document.createElement("td")
    newTd3 = document.createElement("td")
    newTd4 = document.createElement("td")
    newTd5 = document.createElement("td")
    newTd6 = document.createElement("td")
    newTd7 = document.createElement("td")
        newInput= document.createElement("input")
    newTd1.innerText = Nb
    newTd2.innerText = inisale.toUpperCase()
    newTd3.innerText = PLA.value
    newTd4.innerText = " E"
    newTd5.innerText = NAME.value
    newTd6.innerText = PNAME.value

newInput.setAttribute("type", "checkbox")
        idnew="CHENR"+Nb
        newInput.setAttribute("id", idnew);
        newTd7.appendChild(newInput)
        newtr.appendChild(newTd1)
    newtr.appendChild(newTd2)
    newtr.appendChild(newTd3)
    newtr.appendChild(newTd4)
    newtr.appendChild(newTd5)
    newtr.appendChild(newTd6)
        newtr.appendChild(newTd7)
    Table.appendChild(newtr)
}}
var Nb=4;
function REM() {
    for (i=1;i<Nb+1;i++){
        IDC="CHENR"+i
        console.log(IDC)
    }
}