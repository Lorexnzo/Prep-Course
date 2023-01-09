/*

VARIABLES: https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables

*/

let variable; //declaramos una variable (crear una variable)
variable = 35; //inicializamos la variable (guardar un valor en esa variable)
var variable2 = 'tobi'; //estamos declarando e inicializando la variable

//let vs var, algunas diferencias 

// 1 Hoistling (elevacion)

myVar = 'holis';

function getVar() { console.log(myVar); }

getVar();

var myVar;

//Esto funciona gracias a la elevacion (hoistling) https://developer.mozilla.org/es/docs/Glossary/Hoisting

//Esta elevacion funciona solo con var, con let no, pero resulta confuso.

// 2 Declarar una variable varias veces, con var si, let no permite.

var variable3 = true;
var variable3 = false;
//En su lugar habria que hacer:
let variable4 = true;
variable4 = false;

//Por esto y otras razones se recomienda usar let en nuestros codigos JS

//Tipos de datos de las variables: numeros, strings, booleanos, arreglos, objetos

//JS es un lenguaje tipado dinámicamente (no es necesario especificar el tipo de dato que contendrá una variable)








