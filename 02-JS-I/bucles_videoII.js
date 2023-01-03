//imprimir los números del 1 al 10

//BUCLE FOR

for (var i = 0; i <= 100; i++){

    console.log(i);

}

function imprime1AN(N) {
    
    for (var i = 1; i <= N; i++){
        console.log(i);
    }

}

imprime1AN(5);

console.log('---');

function imprime1AN_2(N) {
    
    for (var i = 1; i <= N; i++){

        if (i % 2 == 0) {
            console.log(i);
        }
        if (i >= 40) return; //cuando i sea 40 entonces termina con return
    }

}

imprime1AN_2(50);

function matriz(n, m) {
    
    for (var i = 0; i <= n; i++){
        for (var j = 0; j <= m; j++){
            console.log(i + ', ' + j);
        }
    }
}

matriz(3, 3);

console.log('---');

//BUCLE WHILE

//mientras la condicion sea verdadera, el bloque de codigo se a va repetir indefinidamente

var i = 0;

while(i <= 4){
    console.log('que onda ' + i);
    i++;
}

function matriz2(n, m) {
    
    var i = 0;
    var j = 0;

    while (i < n) {
        j = 0;
        while (j < m) {
            console.log(i+', '+j);
            j++;
        }
        i++;
    }
}

matriz2(4, 4);

//Diferencia entre el while y el for

//Cuando escribis el for, ya sabemos exactamente la condicion de parada, si estamos BUSCANDO/ESPERANDO que algo suceda, para eso buscamos un while





