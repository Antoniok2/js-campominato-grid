
const gridCont = document.querySelector(".grid");

for (i = 0; i < 100; i++) {
    let newElement = generaElemento("div", "square");
    gridCont.appendChild(newElement);
}




function generaElemento(elementoGen, classPlus) {
    let cont = document.createElement(elementoGen);
    cont.classList.add(classPlus);
    return cont
}