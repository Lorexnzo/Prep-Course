//JS es diseño basado en prototipos

//Todos los objetos de js tienen referenciados a otro objeto llamado prototipo

//si Car es una clase, y una instancia de esa clase es 'audi', entonces el prototipo de audi es Car

//El prototipo padre es uno llamado Object, es el prototipo de un objeto vacio es el proto padre llamado Object

//el prototipo de [].__proto__ es Array[], el cual es el que tiene todas las propiedades de los arrays como .length, .push() .pop(), todos esos metodos salen de prototipo

//pasa lo mismo con 'string'.__proto__, su prototipo son los String, la prop .length salen del prototipo String

//cada objeto tiene sus propias propiedades, y a al vez tiene definido un proto

console.log([].__proto__);
console.log({}.__proto__);

var lista = [1, 2, 3, 4];

lista.push(5); //el método push no esta definido en var lista , no que esta definido en el prototipo que es Array, es como un constructor

console.log(lista.__proto__);

console.log('-----');

// var obj1 = {

//     edad: 23,
//     getEdad: function () {
//         console.log(this.edad) //estoy repitiendo 3 veces un misma funcion
//     },

// }

// var obj2 = {

//     edad: 23,
//     getEdad: function () {
//         console.log(this.edad)
//     },

// }

// var obj3 = {

//     edad: 23,
//     getEdad: function () {
//         console.log(this.edad)
//     },

// }

//dijimos que JS busca una funcion en el objeto, y si no la tiene, busca en su prototipo, entonces
//definiendo en su prototipo de esos objetos esa funcion getEdad(), con solo declarar una vez el metodo ya lo tenemos para todos

//definimos el constructor

function Persona(edad) {
    this.edad = edad; //defini el constructor
}

var obj1 = new Persona(15);

var obj2 = new Persona(23);

var obj3 = new Persona(44);  

//luego queremos que todos tengan la funcion getEdad()

Persona.prototype.getEdad = function () { console.log(this.edad);} //y aca defini una propiedad del prototipo getEdad que imprime la edad del objeto

console.log(obj1); //Persona { edad: 15 }
console.log(obj2); //Persona { edad: 23 }
console.log(obj3); //Persona { edad: 44 } //en ningun lado aparece el metodo getEdad, porque esta en su prototipe
console.log(obj1.__proto__); //{ getEdad: [Function (anonymous)] }

//luego usamos la funcion nueva

console.log(obj1.getEdad());
console.log(obj2.getEdad());
console.log(obj3.getEdad());

//el obj1 solo tiene una propiedad llamada edad, luego al llamar el metodo getEdad(), como no lo encuentra, js se va a buscar a su prototipo, y como si lo tiene, lo ejecuta sin problema

//ahora yo quiero que el obj3 tenga una funcion distinta

obj3.getEdad = function () { console.log(this.edad * 2); }//aca estamos creando EN EL OBJETO una propiedad metodo
//llamada getEdad

console.log(obj3.getEdad()); //ahora va a buscar la propiedad del objeto, ya que ahora si tiene
//console.log(obj3.__proto__.getEdad()); //ejecutamos metodo del proto (NO FUNCA)
console.log(obj3);
console.log(obj3.__proto__);
//si el objeto tendria definida su propia getEdad, usa el que esta definido en el objeto.

Persona.prototype.getEdad = function () { console.log('tiene: ' + this.edad); } //aca al cambiar aca ya modifico todo

obj2.getEdad(); //como ya cambie el metodo de getEdad, ya cambie para todos
obj1.getEdad();
obj3.getEdad(); //aca va al metodo del objeto

//prototype chain, va buscando prototipos en jerarquia para arriba, si no lo encontro en ninguno, saca error

//Todos lo que sean metodos van en el prototype

//------------------------------

//https://prep.soyhenry.com/javascript_v/#herencia-cl%C3%A1sica

//basicamente la herencia en JS se maneja mediante prototipos (prototype chain)