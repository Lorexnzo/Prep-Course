//FUNCIONES

//Se usan para ahorrar codigo practicamente.

//Agrupa codigo, y vos despues podes ejecutar ese bloque de codigo

//console.log(argumento) es una funcion que viene por defecto en JS

//funcion agrupa codigo que despues podemos invocar para que se ejecute

function MiFuncion(a, b) {
    sumar = a + b; //estoy creando la variable
    return sumar;
}

MiFuncion(10, 20); //aca estamos invocando a la funcion

console.log(sumar);

function presentar(nombre, edad) {
    console.log('Hola, soy ' + nombre + ' y medio pelotudo');
    console.log('tengo ' + edad + ' años');
}

presentar('Lorenzo', 99);

function prueba() {
    console.log(numero1);
}

//prueba(); UNDEFINED, porque la salida de la funcion requiere una variable no definida.

//SCOPE

var nombre = "Lorenzo";

function saludar(nombre) {
    console.log('hola ' + nombre);
}

saludar('Matias'); //sale matias, porque se pisa con lorenzo

var nombre2 = "jorge"; //variable global (scope global)

function test02() {
    console.log('hola ' + nombre2);
}

test02(); //JS busca el scope global y lo utiliza

//Cuando defino una funcion, es un scope nuevo de menor jerarquia.

function ejemplo(){
    var hola=5;
    var chao = 4;
    console.log(hola);
}
var hola = 6;
console.log(hola);
ejemplo();

//alert('kdsjksadl'); sale un cartelito en consola de JS de browsers

//FUNCIONES RETURN

//TODAS LAS FUNCIONES RETORNAN ALGO, SIEMPRE RETORNAN EL CONTROL DE FLUJO O MINIMAMENTE UNDEFINED

//El código que esté debajo del return no retorna nada, solo se puede retornan una sola vez

function noRetorna() {
    var hola = 2;
    var chao = 5;
}

noRetorna(); //undefined

var toni = noRetorna();
console.log(toni);

function siRetorna() {
    return 15;
}

var toni2 = siRetorna() + 12;
console.log(toni2);

function producto(a, b) {
    return a * b;
}

var resultado = producto(2, 3) + producto(3, 5);

console.log(resultado);

var resultado2 = producto(producto(2, 3), 5); //6 * 5 = 30

console.log(resultado2);

//IF ELSE

var hola22 = 22;

function puedeManejar(edad) {
    var siOno;
    if (edad >= 18) {
        siOno=true;
    } else { siOno = false }
    return siOno;
}

console.log(puedeManejar(hola22));

function test03(valor){
    if (valor > 21 && valor <30) console.log("sos viejo");
    else if (valor > 40) console.log("sos tremendo viejardo xd");
    else console.log("tremendo pendejo pelotudo");
}

test03(9);

var str1 = 'lorenzo';
var str2 = '1234567';

console.log(str1.length==str2.length);

