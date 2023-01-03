//VAMOS A VER ARREGLOS

//Nosotros usamos muchos las listas, vamos a necesitar elementos que contengan elementos ordenados.

//Son básicamente listas de elementos

//Se define usando los brackets

var arreglo = []; //vacio

var arreglo1 = [1, 2, 3, 4, 5];

//Pueden tener todo tipo de datos, puede tener de hecho hasta una funcion, otro arreglo etc

var arreglo2 = [1, 'toni', 'hola', 3, undefined, null, [1, 2, 3, 4, 5], function () { console.log('Hola'); return; }, function suma(a, b) { return a + b; }];

//Se acceden mediante un índice

console.log(arreglo2[0]);
console.log(arreglo2[4]);
console.log(arreglo2[6]);
//Muy importante esto de poder invocar una funcion desde un array
console.log(arreglo2[7]()); //como se que existe una funcion en el índice 7, la puedo invocar colocando ()
console.log(arreglo2[8](5, 6)); //5+6 = 11
//puedo usar normalmente a los elementos de los arreglos

var numero = arreglo2[0] * 3;
console.log(numero);

console.log(arreglo2[6][4]); //puedo acceder al array desde el array y buscar un elemento

//LAS STRINGs SECRETAMENTE SON ARREGLOS de Caracteres

console.log(arreglo2[1][2]); //En la pos 1 tenemos 'toni', luego buscamos la pos 2 de toni y resulta la letra n

//Para saber cuantos elementos tiene un arreglo

console.log(arreglo2.length); //8

//El arreglo NO ES un tipo de dato nativo (number, string, boolean, null, undefined), el arreglo es una estructura de datos

//Asignando valores

var lista = [1, 2, 3, 4]; //esta manera de definir una arreglo se llama la forma literal.

var lista1 = []; //declaramos un arreglo vacio

lista1[0] = 'pepe';
lista1[1] = 'pepe';
lista1[2] = 'pepe';
lista1[3] = 'pepe';
lista1[10] = 'pepe';

console.log(Object.keys(lista1)); //funcion nativa para ver los objetos del arreglo, la saque de MDN
console.log(lista1); //con esto ya podemos ver los elementos de lista1

console.log('-------------');

//Otra forma de asignar valores es mediante funciones nativas push() & pop() , unshift() & shift()

var arrayVacio = [];

//PUSH - METE EL ELEMENTO EN LA ULTIMA POSICION y UNSHIFT COLOCA ELEMENTO EN LA PRIMERA POSICION

arrayVacio.push(1); //push coloca el elemento dentro de () en el fondo de arreglo hacia adelante []<-

console.log(arrayVacio);

arrayVacio.push(2);

arrayVacio.push(1);

arrayVacio.push('toni');

console.log(arrayVacio);

//POP - SACA EL ULTIMO ELEMENTO DE ARREGLO, ese elemento se puede guardar, como si fuera un ctrl+x.
//SHIFT SACA ELEMENTO DESDE LA PRIMERA POSICION

//Esta es la que se llama funcion idempotente ¿?

var ultimoElemento = arrayVacio.pop();

console.log(arrayVacio); console.log(ultimoElemento);

arrayVacio.pop(); //si no los guardo en ninguna variable los pierdo para siempre

console.log(arrayVacio);

console.log('----------');

//BUCLES + ARRAYS

var lista = [1,2,3,4,5,6,7,8,9,10,'toni','mati','chao'];

for(var i = 0; i < lista.length; i++){

    console.log(lista[i]);

}

console.log('----');

while (lista.length > 0) {
    
    console.log(lista.shift()); //igual que pop pero va sacando desde el primer elemento

}

console.log(lista);

console.log('------------');

console.log(Math.floor(98 / 10));

console.log('------------');

//-----------------------

var array2 = ['Hola', 'Pepe', 'Como', 'Estas'];

function arrayAString(array2) {
    var textoConcatenado = array2[0];
    for (var i = 1; i < array2.length; i++){

        textoConcatenado = textoConcatenado + ' ' + array2[i];

    }
    return textoConcatenado;
}

console.log(arrayAString(array2));

console.log('------------');

//----------

console.log('------------ARGUMENTS------------');

function test1() { 
    var total = 1;
    console.log(arguments.length);

    for (var i = 0; i < arguments.length; i++){
        total *= arguments[i];
    }
    return total;
}

console.log(test1());

//----------

console.log('-----');

function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    var lista = [];
    //var salida;
    //var contador = 0;
    for (var i = 0; i < 10; i++) {
    
        numero += 2;
        lista[i] = numero;
        
        
      console.log(lista);
      if (numero == i) {
        return 'Se interrumpió la ejecución';
        }
        

    }
    return lista;
}

console.log(breakStatement(-4));
















