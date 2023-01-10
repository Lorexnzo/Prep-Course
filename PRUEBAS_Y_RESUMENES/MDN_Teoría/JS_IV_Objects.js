/*

Objetos: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects

*/

//Creando un objeto

var myCar = new Object();

//Luego le creamos propiedades

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

//La otra forma de crear un objeto es mediante un INICIADOR DE OBJETOS o creacion de objetos mediante notacion LITERAL

var myCar2 = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

myCar2['color'] = 'red';

console.log(myCar2);
