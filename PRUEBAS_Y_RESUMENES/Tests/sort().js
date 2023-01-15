var arreglo = ['pepe1', 'rogelio'];
var contador = 0;
function comparar(a, b) {
    //if (a.length > b.length) {
        
    //}
    console.log(a); console.log(b);
    console.log(contador++);
    // if (contador == 1) { return 0; }
    // console.log('-----');
    return -1;
    // -1 : b se pone primero y luego a (se coloca primero a luego b)
    // 1 : a queda primero y luego b (se coloca primero b luego a)
    // 0 : queda tal como esta
}

console.log(arreglo.sort(comparar));