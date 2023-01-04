//OBJETOS

//Son colecciones de propiedades

//Keyvalue quiere decir que podemos acceder a un determinado valor mediante un key, en el array los key son los indices y sin numericos unicamente

//si quisieramos crear un modelo de cosas se complicaria, ya que los key son unicamente numericos

//Que pasa si por ejemplo queremos representar una persona

//si solo existieran los arreglos, nos quedariamos corto, deberiamos andar haciendo consensos es un quilombo

//Los objetos nos dan la posibilidad de justamente tener strings asociados a valores, vamos a poder modelar el mundo de forma mas facil

//Objeto de forma literal (sintaxis)

//Practicamente todo son objetos

https://prep.soyhenry.com/javascript_iv/

//key: value

var lorenzo = {
    nombre: 'lorenzo',
    edad: 20,
    cursando: true,
    hobbie: 'romper las gindas'
};

//se puede acceder a los valores de las propiedades usando puntos (dot notation) o usando corchetes (brecket notation)

console.log(lorenzo.nombre); //dot notation

console.log(lorenzo['nombre']); //bracket notation
console.log(lorenzo['edad']);
console.log(lorenzo['cursando']);

//podemos meter funciones dentro de los objetos

lorenzo['saludar'] = function () { console.log('hola gente soy ' + lorenzo.nombre)}; //estamos creando otra propiedad del objeto lorenzo

lorenzo.saludar(); //como lorenzo.saludar es una funcion, para invocarlo añadimos ();

console.log(lorenzo.nombre[0]);

//La ventaja de dot notation es que es super facil de escribir.

//podemos hacer tambien

var j = 'hobbie';

console.log(lorenzo[j]); //la ventaja de la bracket notation es que podemos acceder a una propiedad usando otra variables

//en cambio no se puede acceder mediante el dot notation

//lorenzo.j //no existe porque accede de manera literal es equivalente a poner lorenzo['j'];

//ASIGNANDO VALORES

lorenzo.edad = 23;
lorenzo['hobbie'] = 'drogon';

console.log(lorenzo);

//Eliminar una propiedad

delete lorenzo.cursando;

console.log(lorenzo);
console.log('-------------');

//ARREGLO DE OBJETOS 

var alumnos = [
//no le puso un nombre a este objeto, investigar esto
//creo que porque al estar dentro de un arreglo, ya es suficiente indicando el index
    {//objeto 0 dentro del arreglo alumnos
        nombre: 'Emi',
        edad: 23,
        hobbies: ['correr', 'dormir', 'nadar'],
        amigos: [
            {//objeto 0 dentro del arreglo amigos
                nombre: 'Martin',
            },
            {//objeto 1 dentro del arreglo amigos
                nombre: 'Leo'
            }
        ],
        
    },

    {//objeto 1 dentro del arreglo alumnos
        nombre: 'Franco',
        edad: 21,
        hobbies: ['futbol', 'golf'],
        amigos: [ //3 objetos dentro del arreglo amigos, donde en cada objeto existe una propiedad con key 'nombre'
            {
                nombre: 'Emi',
            },
            {
                nombre: 'Jimmy',
            },
            {
                nombre: 'Matias',
            }
        ],
    },
];


console.log(alumnos[1].amigos[1].nombre);


console.log('------------');


//AHORA VAMOS A VER UN KEY WORD LLAMADO THIS

//A las funciones dentro de los objetos les vamos a llamar METODOS

//Esto viene historicamente desde otros lenguajes de programacion, aca en js los metodos y funciones se definen igual, y quedo el nombre nomas

//Para que sirve THIS? (KEYWORD 'THIS')
//el keyword this se usa para metodos practicamente
//DRY CODE, NOT REPEAT YOURSELF

//Tengo que darme cuenta que para cambiar una sola cosa tener que modificar dos cosas, ahi tengo que ver eso.

persona = {

    nombre: 'toni',
    saludar: function () {
        console.log('hola gente, soy ' + this.nombre); //+ la propiedad nombre de ESTE objeto el cual esta dentro, que es 'toni' a no ser que sea cambiado
    }

};

persona.saludar();

persona.nombre = 'Lorenzo';

persona.saludar();

//Esto me ahorra un monton de codigo, cambiando solo la propiedad, todas las funciones o demas que esten vinculadas se van a actualizar automaticamente

//DOS OBJETOS (en este caso 'personas') estan compartiendo el MISMO metodo (funcion)

function saludito(){

    console.log('Hola gente, me llamo ' + this.nombre);
    //gracias a la variable this, una sola funcion + this hace referencia al objeto el cual estoy invocando

}

var manuel = {

    nombre: 'Manuel',
    saludar: saludito, //esto se considera Método, porque estamos en un objeto.

}

var martin = {

    nombre: 'Martin',
    saludar: saludito,

}

martin.nombre = 'El loco galarza';
martin.saludar();

//Podria añadir una persona nueva y reutilizo la funcion sin necesidad de tocar nada gracias al this
//no puedo estar escribiendo una funcion para cada uno de los vagos

var maca = { nombre: 'maca', saludar: saludito };
maca.saludar();

saludito(); //si lo pongo solo me tira undefined, porque this.nombre no existe en el global, esto NO es casualidad

//JS trabaja con OBJETOS, son todos full objetos.

//Pero si pongo algo asi

var nombre = 'que paso aca';

saludito(); //Hola gente, me llamo que paso aca -> porque como js es todo objetos, el 'main' donde escribimos es como un gran objeto global, entonces la funcion toma el this.nombre la variable que esta a su nivel de jerarquia

console.log('-----------------');

//hacemos otra pruebita

function getEdad() {
    
    console.log(this.edad);
    return;
}

var objeto0 = {

    nickname: 'ElMataCrackens89',
    edad: 75,
    getEdad //javaScript ya sabe que nos refenimos a la funcion, por eso de que es flexible

}

var objeto1 = {

    nickname: 'PedroJulianComeViejas78',
    edad: 1004,
    getEdad: getEdad, //las funciones guardadas en objetos se denominan metodos
    
}

objeto0.getEdad(); //el metodo getEdad invoca a la funcion, y this identifica la edad de el objeto de donde invocamos
objeto1.getEdad();

//HASTA ACA TERMINA EL VIDEO PERO SIGUE EN LA WEB PAGE, bucles for in y demas ejemplos con this, reviso en proximos files.js

//Contexto global

//console.log(this === window); es true en paginas web, eso verifica lo del contexto global y el objeto main en donde estamos posados






























