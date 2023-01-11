var matriz = [];
var contador = 0;

var objeto = {

    A: 1,
    B: 2,
    C: 3,
    D: 4,

}

for (key in objeto) {

    matriz[contador] = [];
    matriz[contador][0] = key;
    matriz[contador][1] = objeto[key];
    contador++;

}

console.log(matriz);

console.log('---');

var str = 'The Henry Challenge is close!';

str = str.split(' ');

var str2 = '';

for (var value of str) {
    value.split('').reverse().join('');

    str2 = str2 + value.split('').reverse().join('') + ' ';
}

console.log(str2);

console.log('---');

var objeto2 = {};

var frase = 'Holaaaa';// value
//           0123456     key  

for (key in frase) {
    
    if (objeto2[frase[key]] == undefined) {
        objeto2[frase[key]] = 1; 
    } else if (objeto2[frase[key]] >= 1) {
        objeto2[frase[key]] += 1;
    } 

}

console.log(objeto2);

console.log('-----');

var contador1 = 0;
var contador2 = 0;

var s = 'soyHENRY';
s=s.split('');
console.log(s);

s = 'SOYdePERUxdHOLA';

var arrM = [], arrm = [];

for (var i = 0; i < s.length; i++) {

    if (s[i] == s[i].toLowerCase()) {
        arrm[i] = s[i]; 
    }else if (s[i] == s[i].toUpperCase()) {
        arrM[i] = s[i];
    //     console.log(s[i]);
    //   var aux = s[i];
    //   s[contador] = s[i];
    //   s[i] = aux;
    //   contador++;
    }
}

s = arrM.join('') + arrm.join('');

console.log(s);
  
console.log('-----');

var numero2 = 1221;

var contador = 0;

console.log(numero2.toString().length);

var esCapicua = true;

function esCapicuaFunction(numero2) { 
    for(var i = numero2.toString().length-1; i > 0; i--){
        if (numero2.toString().split('')[contador] == numero2.toString().split('')[i]) {
            contador++;
            continue;   
        } else {
            esCapicua = false;
            break;
        }
    }
    if (esCapicua == true) {
        esCapicua = 'Es Capicua';
    } else if (esCapicua == false) {
        esCapicua = 'No es Capicua';
    }
    return esCapicua;
}

console.log(esCapicuaFunction(numero2));


console.log('-----');

var aux = '';
var cadena = 'abchola';

for (value of cadena) {
    //console.log(value);
    if (value == 'a' || value == 'b' || value == 'c') {
        aux = aux + value.replace(value,'');
    } else {
        aux = aux + value;
    }
}

console.log(aux);

console.log('-----');

//var arreglo3 = ['jfdsjflkdsjf',"You", "are", "beautiful", "looking",'1234', 'papa'];

var arreglo3 = ['pera','manzana','alcaucil','papa'];

console.log(arreglo3.length);
var aux;

// for (var i = 0; i < arreglo3.length-1; i++) {
//     if (arreglo3[i].split('').length > arreglo3[i + 1].split('').length) {
//         aux = arreglo3[i];
//         arreglo3[i] = arreglo3[i + 1];
//         arreglo3[i + 1] = aux;
//     } else {
//         continue;
//     }
// }

// function comparar(a, b) {
//     var value=0;
//     if (a.length > b.length) {
//         value = -1;
//     }
//     return value;
// }
// //-1 -> a b, 0 queda como esta, 1 b a
// arreglo3.sort(comparar).reverse();


// console.log(arreglo3);



console.log('-----');

function comparar(a, b) {
  var value=0;
  if (a.length > b.length) {
      value = -1;
  } else if (a.length == b.length) {
    if (a[0] == a[0].toUpperCase() && b[0] != b[0].toUpperCase()) {
        value = 1;
    } else if (b[0] == b[0].toUpperCase() && a[0] != a[0].toUpperCase()) {
        value = -1;
    } else {
        value = -1;
    }
  }
  return value;
}

console.log(arreglo3.sort(comparar).reverse());

console.log('-----');

var nuevoArr = [], arr1 = [4,2,3], arr2 = [1,3,4], contador=0;

for (var value of arr1) {
    for (var value2 of arr2) {
        if (value == value2) {
            nuevoArr[contador] = value;
            contador++;
        }
    }
}

console.log(nuevoArr);


console.log('-----');
