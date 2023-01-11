// No cambies los nombres de las funciones.

const { forEach } = require("../../07-JS-VI/homework/homework");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
  
  //Forma 1 con bucle
    
  // var matriz = [];
  // var contador = 0;  
    
  // for (key in objeto) {

  //   matriz[contador] = [];
  //   matriz[contador][0] = key;
  //   matriz[contador][1] = objeto[key];
  //   contador++;

  // }
  //return matriz;
  
  //Forma 2 con metodo de los objetos .entries()
  var array = Object.entries(objeto);
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  var objeto2 = {};
  
  for (key in string) {
    
    if (objeto2[string[key]] == undefined) {
        objeto2[string[key]] = 1; 
    } else if (objeto2[string[key]] >= 1) {
        objeto2[string[key]] += 1;
    } 
    
  }
  return objeto2;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var contador = 0;
  s=s.split('');
  var arrM = [], arrm = [];
  for (var i = 0; i < s.length; i++) {
      if (s[i] == s[i].toLowerCase()) {
          arrm[i] = s[i]; 
      }else if (s[i] == s[i].toUpperCase()) {
          arrM[i] = s[i];
      }
  }
  s = arrM.join('') + arrm.join('');
  return s;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  str = str.split(' ');

  var str2 = '';

  for (var value of str) {
      value.split('').reverse().join('');

      str2 = str2 + value.split('').reverse().join('') + ' ';
  }
  return str2.trimEnd();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var contador = 0;
  var esCapicua = true;
  for(var i = numero.toString().length-1; i > 0; i--){
    if (numero.toString().split('')[contador] == numero.toString().split('')[i]) {
        contador++;
        continue;   
    } else {
        esCapicua = false;
        break;
    }
  }
    if (esCapicua == true) {
        esCapicua = 'Es capicua';
    } else if (esCapicua == false) {
        esCapicua = 'No es capicua';
    }
    return esCapicua;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var aux = '';
  for (value of cadena) {
      if (value == 'a' || value == 'b' || value == 'c') {
          aux = aux + value.replace(value,'');
      } else {
          aux = aux + value;
      }
  }
  return aux;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arreglo3 = arr;
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

  return (arreglo3.sort(comparar).reverse());
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 

  var nuevoArr = [], contador=0;

  for (var value of arreglo1) {
      for (var value2 of arreglo2) {
          if (value == value2) {
              nuevoArr[contador] = value;
              contador++;
          }
      }
  }
  return nuevoArr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

