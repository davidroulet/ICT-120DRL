document.addEventListener("DOMContentLoaded",init)
function init() {
    D1.addEventListener("click",Div1)
    D2.addEventListener("click",Div2)
    D3.addEventListener("mouseover",Div3)
    D3.addEventListener("mouseout",Div32)
    D4.addEventListener("click",Div4)
    D5.addEventListener("click",Div5)

}
var YAS="YAS"
function Div1(){
     D1.style.backgroundColor="lightblue"
     D1.style.textDecoration="line-through"
 }
function Div2(){
    D1.style.backgroundColor="White"
    D1.style.textDecoration=""
}
function Div3(){
        D3.style.fontFamily="arial"
}
function Div32(){
    D3.style.fontFamily=""
}
function Div4() {
    if(Cb1D4.checked&&Cb2D4.checked){
        D4.style.backgroundColor="Green"
        D4.style.color="white"
        document.getElementById("D4").innerHTML = "YAS"
        D4.style.border="solid 0px black"
    }

}
function Div5() {
    document.getElementById("D5").innerHTML = "Quand on clique sur ce texte, ça détruit"
}
