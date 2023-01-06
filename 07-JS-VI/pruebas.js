String.prototype.capitalize = function () { return this.charAt(0).toUpperCase() + this.slice(1); }
  
var nombre = 'lorenzo';

nombre = nombre.split(''); //[l,o,r,e,n,z,o];

var mayus = nombre.map(function (elem, index) {
    if (index == 0) {
        return elem[index].capitalize() 
    };
    return elem;
})

mayus = mayus.join('');

console.log(mayus);

console.log('------------');

var numeros = [1, 2, 3, 4, 5]; //15
var a;

numeros.reduce(function (acumulador, elemento) { return acumulador + elemento }, 0);

var sumaReduce = numeros.reduce(function (acumulador, elemento) { return acumulador + elemento }, 0);
console.log(sumaReduce);
console.log(numeros.reduce(function (acumulador, elemento) { return acumulador + elemento }, 0));
//otra prueba
numeros.reduce(function (acumulador, elemento) { a = acumulador + elemento; console.log(a); return a; }, 0);

console.log('------------');

var array = [1, 4, 6, 9];
var arrayNuevo = [];
arrayNuevo.length = array.length;

array.forEach(function (elemento, indice) {  arrayNuevo[indice] = cb(elemento); });
//no es necesario un return si o si en la function

function cb(num) {
    return num * num;
}

console.log(array);
console.log(arrayNuevo);


console.log('------------');









