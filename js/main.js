let choiseDifficult = prompt("Benvenuto al gioco Campo minato: scegli difficolta: 1, 2, 3");
const difficolta = ["1", "2", "3"];
const gridCont = document.querySelector(".grid");


// SE L'USER SCEGLIE DIFFICOLTA 1
if (choiseDifficult === difficolta[0]) {
    for (i = 0; i < 100; i++) {
        let newElement = generaElemento("div", "square");
        gridCont.appendChild(newElement);
    } 

    // SE L'USER SCEGLIE DIFFICOLTA 2
} else if (choiseDifficult === difficolta[1]) {
    for (i = 0; i < 81; i++) {
        let newElement = generaElemento("div", "square1");
        gridCont.appendChild(newElement);
    }

    // SE L'USER SCEGLIE DIFFICOLTA 3
} if (choiseDifficult === difficolta[2]) {
    for (i = 0; i < 49; i++) {
        let newElement = generaElemento("div", "square2");
        gridCont.appendChild(newElement);
    }
}







function generaElemento(elementoGen, classPlus) {
    let cont = document.createElement(elementoGen);
    cont.classList.add(classPlus);
    return cont
}