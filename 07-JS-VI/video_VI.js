//CALLBACKS (creo que es parecido a las funciones recursivas)

//First class functions

//JS trata a las funciones como first class functions, quiere decir que
//las funciones son iguales a cualquier otro objeto

//Osea, que se puede pasar funciones por argumentos, retornar funciones, guardarlas en una variable o en un array

//Estos es particular de JS, en otros lenguajes las functions son cosas apartes
//El hecho de poder pasar funciones como argumentos, hace que podamos tener un abanico de cosas que podemos hacer

//FFfunctions: Esto permite hacer Callback

//Cuando pasamos una funcion como argumento a otra funcion, esa funcion que recibe se denomina CB (CALLBACK)

//ejemplo:

function decirHolaAlUsuario(usuario) {
    
    return 'Hola ' + usuario + '!';

}

function decirAdiosAlUsuario(usuario) {
    
    return 'Adiós ' + usuario + '!';

}

function crearSaludo(usuario, cb) { //cb = callback
    
    return cb(usuario); // == return decirHolaAlUsuario('Lorenzo');
    //sé que lo que se pasa en cb como argumento es una funcion porque luego se está invocando a cb
    
}

console.log(crearSaludo('Lorenzo', decirHolaAlUsuario));
console.log(crearSaludo('Lorenzo', decirAdiosAlUsuario)); // != crearSaludo('Lorenzo', decirAdiosAlUsuario()); ojo, porque ahi le voy a estar pasando lo que retorne la funcion, porque la estoy invocando.

//resumiendo, crearSaludo recibe algo y luego invoca la funcion que le pasamos con ese algo

//es equivalente a colocarla así:

crearSaludo('toni', function estornudar(usuario) { console.log('ACHU! ' + usuario) });

//== return estornudar(toni)

crearSaludo(15, function saludar(usuario) {return console.log(usuario * 10);});

//Es una herramienta mas que tenemos

//Hay que dejar claro (o anotado), que argumentos/parametros tiene que recibir la funcion callback

//¿Cómo nos puede servir esto con los arreglos?

//arreglo.forEach: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//Vamos a ver como funciona el forEach:

console.log('------------');

var alumnos = ['mati', 'leo', 'tincho', 'emi', 'jimmy', 'franco'];

//sin callbacks (tipo de 'programacion iterativa')

for (var i = 0; i < alumnos.length; i++){
    console.log(alumnos[i]);
}

console.log('------------');

//con callback y forEach (método que nace del prototype de Arrays) (forEach = paraCada en spanish)
//esto es un tipo de 'programacion declarativa'

alumnos.forEach(function (elemento, indice) {
    console.log(elemento+' | '+indice);
});

//lo que esta haciendo es ejecutar la funcion para CADA elemento del array, entonces quedaria

/*
function('mati', 0); = console.log(mati | 0); 
function('leo', 0); = console.log(leo | 1);
function('tincho', 0); = console.log(tincho | 2);
function('emi', 0); = console.log(emi | 3);
function('jimmy', 0); = console.log(jimmy | 4);
*/

//la invoca para cada elemento del array, pasandolos como argumentos de la funcion

//array.map() AHORA VEMOS MAP: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//la idea es la misma que con forEach();

//El método map() crea un nuevo array con los resultados
//de la llamada a la función indicada aplicados a cada uno de sus elementos.

//por eso se llama map, como que mapea y genera un nuevo arreglo

var numbers = [1, 5, 10, 15];

var doubles = numbers.map(function (x) { return x * 2 });

console.log(numbers);
console.log(doubles);

console.log('-----------------');

//otro ejemplo de los slides de la clase

String.prototype.capitalize = function () { return this.charAt(0).toUpperCase() + this.slice(1); }


console.log('testing'.capitalize()); //me pone en mayus la primera letra del string

//con callbacks

var nuevoAlumnos = alumnos.map(function(elemento, indice){return elemento.capitalize()})

console.log(nuevoAlumnos);


//sin callbacks

var nuevoArray = [];

for (var i = 0; i < alumnos.length; i++){
    
    nuevoArray.push(alumnos[i].capitalize());

}

console.log(nuevoArray);
console.log('---------------');
//el map lo vamos a usar un monton de veces, podemos tenr arreglos de objetos para cambiar cosas, ahi se usan de nashe

//AHORA VEMOS REDUCE(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

//reduce devuelve un único valor, map devolvia un arreglo, forEach no devuelve nada


//el valor devuelto de la funcion reductora se asigna al acumulador

var nums = [1, 2, 3, 4, 5, 6, 7];

//sin callbacks, forma iterativa

var suma = 0;

for (var i = 0; i < nums.length; i++){
    suma = suma + nums[i];
}


//con callbacks (forma declarativa) y la func reduce

//var nums = [1, 2, 3, 4, 5, 6, 7];

var sumaReduce = nums.reduce(function(acumulador, elemento){ return acumulador + elemento}, 0);

//en este caso está recibiendo dos parametros, la funcion, y el 0 que es el valor con el que el
//acumulador va a empezar


//      acu+ele
//return 0 + 1 -> acumulador = 1; //lo que retorna, va a pasar a ser el acumulador de la siguiente funcion
//return 1 + 2 = 3;
//return 3 + 3 = 3; y así

//por defecto acumulador arranca en 0, si no le pasamos el 0 como parametro.

console.log(sumaReduce);

var multiReduce = nums.reduce(function(acumulador, elemento){ return acumulador * elemento}, 1);

console.log(multiReduce); //factorial de 7

//es una herramienta mas esto de las funciones callbacks







































































