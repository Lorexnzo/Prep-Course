//clase o funcion constructora

function Persona(nombre, edad, paisNacimiento) { //creamos una func constructora o una clase Persona

    this.nombre = nombre;
    this.edad = edad;
    this.paisNacimiento = paisNacimiento;

}

var juliana = new Persona('juliana', 13, 'Argentina'); //se denomina creacion literal de un objeto a partir de una clase o constructor

console.log(juliana);

function Clase_01(identificador, id, nombreObjeto) {
    this.identificador = identificador;
    this.id = id;
    //no se pueden crear objetos dentro de un constructor de objeto? esto haria que un objeto tenga objetos?
    var objeto = {
        nombre: this.nombreObjeto,
        color: 'rojo',
        getNombre: function () { console.log(this.nombre); },
    };

}

var objeto1 = new Clase_01('rojo', 123123, 'Pedro');

//algo1.objeto.getNombre();

console.log(objeto1);

//creo una clase y meto adentro una funcion

function Clase_02(nombre, a, b) {

    this.nombre = nombre;
    this.a = a;
    this.b = b;
    this.resultado = function () { console.log('fiumba'); }; 
    this.suma = function (c) { console.log((this.a + this.b) - (c || 1)); };

}

console.log('-------OBJETO 2-------');

var objeto2 = new Clase_02('Lorenzo', 14, 15);

//¿Que hace el keyword new?

//(1) - crea un objeto vacio: var objeto2 = {}
//(2) - invoca a Clase_02('Lorenzo', 14, 15)
//(3) - blindea la funcion Clase_02('Lorenzo', 14, 15).blind(objeto2)
/*(4) - Clase_02('Lorenzo', 14, 15){
    objeto2.nombre = nombre; 
    objeto2.pepe = a; 
    objeto2.pepe2 = b; 
    objeto2.resultado = function(){clog}
    return objeto2;
}
*/


console.log(objeto2);
objeto2.resultado();

console.log('------------');


console.log('-------OBJETO 3-------');

var objeto3 = new Clase_02('Julian', 20, 21);
console.log(objeto3);
objeto3.suma(); //por defecto si no le paso nada, le resta 0 (c || 0)

console.log('------------');

//DEFINIMOS CONSTRUCTORES CON MÉTODOS (Clase_02) ¿ES IGUAL A DEFINIR LOS METODOS EN SU PROTOTYPE?

console.log('-------OBJETO 4-------');

function Clase_03(name, id) {
    this.name = name;
    this.id = id;
}

var objeto4 = new Clase_03('objeto4', '0100');

Clase_03.prototype.getID = function () { console.log(this.id) };
//al definir un metodo, siempre usar this en las variables, ya que tenemos que tener en
//cuenta que cada variable le corresponde a un objeto
console.log(objeto4);
console.log(objeto4.__proto__);
console.log(Clase_03.__proto__); //{}

/*Lo que pasa, es que al definir metodos en el constructor, luego si hacemos mil objetos
instanciados con ese constructor, todos van a tener los metodos, que en si son iguales
a los metodos de los otros objetos, entonces estariamos ocupando un monton de memoria
al pedo, para eso es que usamos los prototipos, ahi metemos los metodos que despues
cualquier objeto va a poder usar, sin necesidad de estar guardando memoria.

Es como si fuera una nube, 1 metodos para infinitos objetos = 1 metodo para 10 objetos
En cambio indicando metodo en el contructor, 1 metodo para cada objeto = 10 metodos para 10 objetos

*/

console.log('----------------');



