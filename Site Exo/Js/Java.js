document.addEventListener("DOMContentLoaded", init)

function init() {
    console.log("JSL")
    BTRAN.addEventListener("click", Transport)
    BACC.addEventListener("click", Acceuil)
    Button2.addEventListener("click",Train2)

}
function Transport() {
    document.location.href="Transport-acceuil.html"
}
function Acceuil() {
    document.location.href="index.html"
}
function Train2() {
    document.location.href="Train2.html"
}
