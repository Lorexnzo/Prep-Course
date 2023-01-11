var objeto = { a: 1, b: 'toni', c: true};

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in

for (var key in objeto) {
    
    console.log(key); //iteramos en las claves de nuestro objeto
    console.log(objeto[key]);
    console.log(objeto);

}

//Prueba en Arrays

var arreglo = ['toni', true, 42, 45.55, 'lorenzo', [1, 2, 3], { modelo: 'Honda Civic' }];

for (var key in arreglo) {
    
    console.log(key); //iteramos en las claves de nuestro array, que son indirectamente 0, 1, 2, etc.
    console.log(arreglo[key]);

}