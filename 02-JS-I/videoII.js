//repaso funciones

function test(argumento1, argumento2) {
    //codigo
    return;
}

//expresiones matematicas

console.log(1 + 2);

//expresiones booleanas, retornan inmediatamente algo

console.log(1 == 2); //false

//statements

if (1 < 2) {
    console.log("Siempre");
}

if (false) {
    console.log("imposible");
}

//veracidad o comparaciones

if (10) console.log(true);
if (-10) console.log(true);
if (!0) console.log(false);

//cualquier numero excepto el 0, es true por defecto para javascript

if ('hola') console.log('hola');
if ('') console.log('hola2');
if (' ') console.log('hola3');

//la unica string falsa va a ser la string vacia, el resto es todo true, tambien el space

function prueba() { };

console.log(!prueba());


//PARTICULARIDADES
console.log('---------------------');
console.log(1 == 1);
console.log(1 == '1'); //particularidad de JS, lo que hace JS es convertir automaticamente el numero en string, el doble igual solo compara el valor

//para forzar a JS a que compare tambien el tipo, usando el triple ===, compara el valor y el tipo de dato

console.log(1 === '1');

//----------

console.log(1 == true);

console.log(1 === false); //falso, porque 1 NO es booleano

//Conclusion, se recomienda usar el triple igual.

console.log(1 !== 1); // === console.log(1 != 1);

//OPERADORES LÓGICOS

// and &&, or ||, not !

console.log(5 % 2);

if (5 % 2 != 0) console.log("no divisible");



