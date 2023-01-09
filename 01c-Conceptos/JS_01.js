//VARIABLES

//El concepto basico es poder recuperar la informacion que querramos, anteriormente guardada.

//En javascript se escribe:

var nombre=75; //a la derecha se guarda lo que necesito, ; siempre al final.

/*
Es la forma de declarar un variable en JS
*/

// JavaScript fue diseñado originalmente para dar dinamismo a las paginas web

console.log(nombre+10);

let agustin='el loco'; //Es una nueva palabra clave insertada en ES6, es practicamente igual a var, funcionan por scope, por ahora no lo vemos

const g = 75; //Es una variable que no se podrá cambiar, osea, que NO se "pisa"

const PI = 3.14159;

//PI=3; TypeError: Assignment to constant variable.

var precencia = g + 6 + 6 * 2 - 10;
console.log(precencia);

//var var = 15; no puedo escribir una variable con palabras reservadas de nombre, son palabras reservadas para que JS funque bien y no se pueden usar

//podes crear variable sin poner el var (propio de la flexibilidad de JS)

martin = 'Varon Homosexual 27 años adicto al LOL';

console.log(martin);

//TIPOS DE DATOS

//Strings (cadenas o bloques de de texto) es lo mismo usando comillas '' o ""

var pedro = 'pedro';
var pedro2 = "pedrito";

//Numbers

var num1 = 152905;
var num2 = -3593205;
var real = 4.25;

//Boolean

var meEncantaLaPizza = true;

meEncantaLaPizza = false;

var age; //varible definida sin nada adentro, undefined

var holis = null; //null es nada, no es ni 0 o una palabra vacia, es realmente nada.

var indefinido = undefined;

console.log(holis);
console.log(age); //undefined
console.log(indefinido || !indefinido);
console.log(!!holis);

//Operadores (+ * / -)

var suma = 3 + 5; //esta forma se llama la infija, ya que los operadores se encuentran entre medio, el operador ENTRE los operandos

//console.log(+ 3 5);

console.log(1 + 3 * 5 / 3); //hace 1+3: 4*5:20/3 = 6
//pero tambien puede ser por: 15/3 = 5 + 1 = 6
console.log(1 - 3 * 2 - 2 / 2); //1 - 6 - 1 = -6
//-2 * 2 = -4 -2 = -6/2 = -3

//CASTEO DE DATOS

//JS puede convertir tipos de datos para resolver lo que el usuario esta pidiendo

console.log('1' + '1'); //Convierto el numero a string, en este caso la suma de string me devuelve el string contatenado
//acá paso el casteo de datos.

console.log(null + undefined); //= NaN (El resultado NO es un numero)

console.log(1 + '1');

var pepe = 'pepe';

console.log(pepe += ' hola'); // pepe = 'pepe hola'
console.log(pepe);

//Tambien existe la prefija y sufija

//Los operadores son funciones



