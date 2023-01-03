//array test


// array[0] = 'hola';
// array[1] = 2;
// array[2] = 6;
// array[3] = 'polenta';


// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

var array = [11];

for (var i= 1; i < 11; i++){
    
    array[i] = i * 6;

}

for (var i = 1; i < 11; i++){

    console.log(i+'-'+array[i]);

}












function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos.
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
    var valor;
    if (num1 > num2 && num1 > num3 && num1 > 0) {
        valor = 'Número 1 es mayor y positivo';
        console.log('entro en 1');
    } else if (num1 < 0 || num2 < 0 || num3 < 0) {
        valor = 'Hay negativos';
        console.log('entro en 2');
    } else if (num3 > num1 && num3 > num2) {
        valor = ++num3;
        console.log('entro en 3');
    } else if (num1 == 0 || num2 == 0 || num3 == 0) {
        valor = 'Error';
        console.log('entro en 4');
    } else {
        valor = false;
        console.log('entro en 5');
    }
        return valor;
}
  
console.log(operadoresLogicos(3, 1, 0));


var valor1 = 5;
console.log(valor1);
valor1 = 'test';
console.log(valor1);

function test(num1_1) {
    num1_1 = 'Que onda perros';
    return num1_1;
}

console.log(test(5));