//EJERCICIO DE REVERSE()

var palabra = 'Monturas';

console.log(palabra.split('t')); //lo 'corta' y a cada sub pedazo lo mete en un array

console.log(palabra.split(''));

console.log(palabra.split('').reverse());

console.log(palabra.split('').reverse().join(''));

//pasa a todo el string en un array, luego con reverse (que es un prototype de array),
//da vuelta el array y luego con joint, vuelve a unir todo en un string.

String.prototype.reverse = function () { return this.split('').reverse().join(''); };

console.log('LaConchaDeTuMadreAllBoys'.reverse());



