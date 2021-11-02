let choiseDifficult = prompt("Benvenuto al gioco Campo minato: scegli difficolta: 1, 2, 3");
const difficolta = ["1", "2", "3"];
const gridCont = document.querySelector(".grid");
const squareCont = document.querySelector(".square", "square1", "square2");


// SE L'USER SCEGLIE DIFFICOLTA 1
if (choiseDifficult === difficolta[0]) {
    numeroBlocchi = 100;
    defaultClass = "square";

    // SE L'USER SCEGLIE DIFFICOLTA 2
} else if (choiseDifficult === difficolta[1]) {
    numeroBlocchi = 81;
    defaultClass = "square1";

    // SE L'USER SCEGLIE DIFFICOLTA 3
} if (choiseDifficult === difficolta[2]) {
    numeroBlocchi = 49;
    defaultClass = "square2";
}


for (i = 0; i < numeroBlocchi; i++) {
    let newElement = generaElemento("div", defaultClass);
    gridCont.appendChild(newElement);
}

squareCont.addEventListener('click',
    function(){
        this.classList.add("selection_square")
    }


)






function generaElemento(elementoGen, classPlus) {
    let cont = document.createElement(elementoGen);
    cont.classList.add(classPlus);
    return cont
}