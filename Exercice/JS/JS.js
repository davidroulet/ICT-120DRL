document.addEventListener("DOMContentLoaded",init)
function init() {
    D1.addEventListener("click",Div1)
    D2.addEventListener("click",Div2)
    D3.addEventListener("mouseover",Div3)
    D3.addEventListener("mouseout",Div32)
    D4.addEventListener("click",Div4)

}
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
        D4.style.fontcolor()=white
    }
}
