
var arreglo = [3];

arreglo[4] = 5;

console.log(arreglo);

//vamos a jugar con matrices 2x2

const M = 10;
 
var arr = [];

for (var i = 0; i < M; i++) {
    arr[i] = [];
}

arr[0][0] = 'holis';
arr[1][0] = 'holis';
arr[2][0] = 'holis';
arr[0][1] = 'holis2';
arr[0][2] = 'holis3';
 
console.log(arr);

            //c0 c1 c2
var matriz2 = [[1,2,3], //f 0
               [4,5,6], //f 1
               [7,8,9]];//f 2

matriz2[0][2] = 'A'; //[fila][columna]

//matriz2[3][0] = 'B'; me salta error, porque yo puedo estar metiendo valores a un arreglo, pero no puedo estar CREANDO arreglos de la nada [3][0] me exije eso, crear un 3r arreglo mas

console.log(matriz2);