https://prep.soyhenry.com/conceptos/

var contador=0;

//EXPRESIONES (retornan inmediatamente algo)

'pepe'+' tiene olor a queso';
console.log('PEPE TIENE '+(2+5)+' AÑOS');
console.log(Math.pow(2,10));


//expresiones primarias
true;
false;
'hola';
9;
numero; //hace referencia a la variable numero

//expresiones con efectos secundarios

contador++;
++contador;
console.log(contador);
contador +=2; //contador = contador + 2;
console.log(contador);

//expresiones de asignacion

contador = 3;


//SENTENCIAS (hacen algo)

var prueba;
var numero = 10;

//las funciones pueden ser function statement o function expression

//function statement

function toni (a, b, c){

}

//function expression (que se comporta como expresion)
var resultado, a=10, b=5;
var resultado = function (a,b){return a-b}; //llamadas la funciones anonimas
console.log(resultado);

//inmediatly invoke function expression

(function (){
    return console.log(15);
})();

//statement conditional

if (condition) {
    
} else {
    
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}

//loops

while (condition) {
    
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
        
}

//jumps

//sirven para hacer saltos en los flujos de codigo

function name(params) {
    return;   //<-- pega un salto y sale del function
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    continue; //pega un salgo a partir de aca pero sigue con el for
    //aca abajo no se ejecuta nada
}

//throw new 'Error'; //este es otro tipo de statement de salto

console.log(!!'toni'); // true

