/*

Cadenas de texto en JS: Strings


*/

//Creando una cadena

var string = 'Que onda manolo!.'; //string literal
var string2 = 'Que onda "calabaza"';

//Concatenando palabras

//Conversion de numeros a strings y viceversa

console.log(typeof('hola ' + 255)); //convierte a string

var string3 = '55'; console.log(typeof string3); //convierte num a string al poner comillas

//Otra forma de conversion son con el objeto Number() y el metodo toString()

var number = Number(string3); //55
console.log(typeof number);

var number = number.toString(); //convertimos 55 a string otra vez

console.log(typeof number); 

//Métodos útiles con Cadenas (métodos que se encuentran en String prototype)

let string4 = 'dale que la vida es una fiesta';
console.log(string4.length);
console.log(string4[0]);
console.log(string4[string4.length - 10]); //el espacio cuenta 1

//Encontrar una subcadena dentro de una cadena y extraerla método indexOf('subcadena');

console.log(string4.indexOf('vida')); //devuelde la pos de donde arranca la subcadena, si no encuentra -1

if (string4.indexOf('vida') !== -1) {
    //do stuff
}

//Chopear una string mediante slice()

console.log(string4.slice(0, 11)); //2do parametro opcional

//Cambiando todo a mayuscula o minuscula (util para normalizar entradas del usuario)

let string5 = 'Yo SOy BrAsIlero';
console.log(string5.toLowerCase());
console.log(string5.toUpperCase());

//Reemplazando partes de una cadena

console.log(string4.replace('vida', 'falopa'));

//Más métodos e información sobre cadenas: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String







