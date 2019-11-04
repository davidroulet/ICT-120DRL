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
        console.log(i)
        console.log(NomEl)
        document.getElementById(NomEl).classList.remove("d-none")
    }

}
function ADD() {
    console.log("ADD")
}
var Nb=3;
function REM() {

}