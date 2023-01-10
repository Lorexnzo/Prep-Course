var matriz = [];
var contador = 0;

var objeto = {

    A: 1,
    B: 2,
    C: 3,
    D: 4,

}

for (key in objeto) {

    matriz[contador] = [];
    matriz[contador][0] = key;
    matriz[contador][1] = objeto[key];
    contador++;

}

console.log(matriz);