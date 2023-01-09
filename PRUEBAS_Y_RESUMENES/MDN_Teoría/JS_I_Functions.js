/*

Funciones: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

*/

//Declaración de una función

function square(number123) {
    return number123 * number123;
}

var numero = 5; 

console.log(square(numero));

/*
Los parametros primitivos se pasan por valor, estamos pasando una copia de la variable numero
por ende si se modifica la var 'numero' dentro de la funcion, no estariamos modificandola globalmente
*/

//Si pasas un valor no primitivo (como un objeto o un array), este se vera modificado si se modifica dentro de la funcion

var auto = { model: 'Honda', year: 2002, price: '$ 20000' };

function modifyObject(objeto) {
    objeto.model = 'Toyota';
}

modifyObject(auto); //funcion llamadora

console.log(auto);

//Functions Expressions (como que inmediatamente se guardan en una variable)

const sumar3 = function (num) { return num + 3; }
var x = sumar3(2);  //5
console.log(x);

const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); }
console.log(factorial(7));

//Una funcion se puede definir en base a una condicion

var myFunc;
var num = 0;
if (num === 0) {
  myFunc = function (num) {
      return num + 10;
  };
}

//Ámbito de la función

function multiplicar() {
    console.log(x * 3); //una funcion puede utilizar las variables que se encuentren en su ambito
    //en este caso x es ambito global y multiplicar() tambien
}

multiplicar();

//Otro ejemplo

function getScore() {
    var num1 = 3;
    function adds5() {
        //el ambito de adds5 se reduce a dentro de getScore() (no puede estar dentro de otro bloque siquiera)
        console.log(x); //Parace que una variable global se te puede meter a cualquier nivel siempre que este en funciones o en condiciones
        if (x != undefined) {
            console.log('tranquilos, yo lo conozco');
        }
        if (true) {
            //console.log(x);
            // if (x != undefined) {
            //     var bees = x + x; console.log(bees); console.log(x);
            //     console.log('quien es x? ni idea quien es x amigo wataofoook');
            // }
        }
        return (num1 + 5);
    }
    return adds5();
}

console.log(getScore());

//FUNCIONES RECURSIVAS

//CIERRES (ver)

//objeto arguments

function dameArgumentosCabron(a, b, c, d, e, pepe) {
    
    var espacio = ' ';

    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[3]);

    for (var i = 0; i < arguments.length; i++){
        espacio = espacio + arguments[i] + ' ';
    }
    return espacio;
}

var b = dameArgumentosCabron(1, 'toni', [1, 23, 55], { model: 'toyota' }, 5.55, true);

console.log(b);

//console.log(dameArgumentosCabron.arguments);

//Parámetros determinados (por defecto en caso de no pasarse) (pre ECMAS 2015)

function porDefecto(a = 1, b = 3) {
    console.log(a + b);
}

porDefecto(4, 77); // 81
porDefecto(); //4, si no les paso nadam usa los valores por defecto


//Parámetros rest (para pasarle una cantidad inf de parametros)

function parametrosRest(a, b, ...masArgumentos) {
    console.log(a);//1
    console.log(b);//2
    console.log(masArgumentos); //el resto en formato de arreglo
}


parametrosRest(1, 2, 3, 5, 6, 7, 8, 3, 5, 7, 3, 5, 2, 5, 3, 6, 7, 2, 5, 3, 5);

//FUNCIONES FLECHA : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions

var arrow = 4;

var amor = valor => valor * 40;

arrow => arrow * 4; //en este caso, arrow es un parametro any, NO! esta tomando 4

var amor2 = arrow => arrow * 4; 

if (amor2(arrow) > 10) console.log('SIIIIIIIIII');

console.log(amor(arrow));





















































