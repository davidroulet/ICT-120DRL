document.addEventListener("DOMContentLoaded", init)

function init() {
    D1.addEventListener("click", Div1)
    D2.addEventListener("click", Div2)
    D3.addEventListener("mouseover", Div3)
    D3.addEventListener("mouseout", Div32)
    D4.addEventListener("click", Div4)
    D5.addEventListener("click", Div5)
    ED6.addEventListener("keyup", Div6)
    BoutonParter.style.display = "none"
    BoutonAVM.addEventListener("click", AWM)
    BoutonPret.addEventListener("click", Pret)
    BoutonParter.addEventListener("click", Parter)
    MyImage.src="Img/empty.png"

}

function Div1() {
    D1.style.backgroundColor = "lightblue"
    D1.style.textDecoration = "line-through"
}

function Div2() {
    D1.style.backgroundColor = "White"
    D1.style.textDecoration = ""
}

function Div3() {
    D3.style.fontFamily = "arial"
}

function Div32() {
    D3.style.fontFamily = ""
}

function Div4() {
    if (Cb1D4.checked && Cb2D4.checked) {
        D4.style.backgroundColor = "Green"
        D4.style.color = "white"
        document.getElementById("D4").innerHTML = "YAS"
        D4.style.border = "solid 0px black"
    }

}

function Div5() {
    document.getElementById("D5").innerHTML = "Quand on clique sur ce texte, ça détruit"
}

function Div6() {
    inisale = ""
    longeur = 0
    Space = ""
    inisale = ED6.value.substr(0, 1)
    console.log(inisale)
    Space = ED6.value.lastIndexOf(" ")
    inisale = inisale + ED6.value.substr(Space + 1, 1)
    console.log(inisale)
    longeur = ED6.value.length
    inisale = inisale + ED6.value.substr(longeur - 1, 1)
    console.log(inisale)
    SD6.value = inisale.toUpperCase()
}
function Pret() {

    BoutonAVM.disabled=true;
    BoutonPret.disabled=true;
    BoutonParter.disabled=false;

    BoutonParter.style.display = "inline";
    BoutonPret.style.display = "inline";
    BoutonAVM.style.display = "none";
    MyImage.src="Img/set.png"

}
function AWM() {

    BoutonAVM.disabled=true;
    BoutonPret.disabled=false;
    BoutonParter.disabled=true;

    BoutonParter.style.display = "inline";
    BoutonPret.style.display = "inline";
    BoutonAVM.style.display = "inline";
    MyImage.src="Img/marks.png"
}
function Parter() {
    BoutonAVM.disabled=true;
    BoutonPret.disabled=true;
    BoutonParter.disabled=true;

    BoutonParter.style.display = "none";
    BoutonPret.style.display = "inline";
    BoutonAVM.style.display = "none";
    MyImage.src="Img/go.png"
    setTimeout(Timeout, 3 * 1000);
}
function Timeout() {
    BoutonAVM.disabled=false;
    BoutonPret.disabled=true;
    BoutonParter.disabled=true;

    BoutonParter.style.display = "none";
    BoutonPret.style.display = "inline";
    BoutonAVM.style.display = "inline";
    MyImage.src="Img/empty.png"

}