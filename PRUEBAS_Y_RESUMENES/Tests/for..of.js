var objeto = { a: 1, b: 'toni', c: true}; //no son iterables los objetos en for..of
var arreglo = ['toni', 12, true, 'pedro'];

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of

for (var value of arreglo) {
    
    console.log(value); //for..of itera directamente sobre los valores del arreglo

}