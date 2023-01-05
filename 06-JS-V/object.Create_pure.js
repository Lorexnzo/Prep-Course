//OBJECT CREATE & PURE PROTOTYPAL INHERITANCE (2da forma de crear objetos a partir de un constructor o clase)

//ESTA ES OTRA FORMA MAS DE HACERLO, el resultado es igual que CON PROTOTYPE
//LA FORMA QUE MAS LE GUSTA AL PROFE ES USANDO LA CLASE CONSTRUCTORA Y ACCEDIENTO A PROTOTYPE (la primera que vimos)

//Object.create -> Object es el objeto padre, todos los demas objetos tienen como prototype a Objetc, y dentro de object
//tiene un metodo llamado create, que lo que hace es crear un nuevo objeto cuyo prototype es el primer objeto que le pasamos

var Persona = { //definimos un objeto constructor?
    edad: 'Defecto', //no tenemos el this en esta forma Object.create
    getEdad: function getEdad() {
        console.log(this.edad);
    }
}

var juan = Object.create(Persona);
//al crear el objeto juan, usamos el constructor objeto Persona, pero todas las
//propiedades se guardan en el prototype de juan que es Persona ¿?

console.log(juan); //{} parece un objeto vacio, pero juan tiene realmente las propiedades, solo que las saca de su prototipo

console.log(juan.__proto__); //aca si tiene

//Por eso este metodo es medio confuso para el programador, pero es el tecnicamente mas correcto

//Cuando creamos a juan, juan tiene como proto a persona, pero a su vez juan es un ojeto vacio

var juan2 = Object.create(Persona); //me crea el objeto usando como prototipo el objeto que pongamos en el argumento
var juan3 = Object.create(Persona);
var juan4 = Object.create(Persona);

console.log(juan2);

console.log(juan2.__proto__);
console.log(Persona); //parece que si, que los prototipos de cada objeto creado son Persona

console.log(juan3);

console.log(juan3.__proto__);

console.log(juan4);

console.log(juan4.__proto__);

console.log('-----OBJETO ASSIGN---Object.assign---');

//este metodo te permite agregar propiedades a un objeto (constroctor) pasado por parámetros

Object.assign(Persona, { color: 'negro', apellido: 'garcia' });

//a persona le estoy creando nuevas propiedades que luego van a tener los objetos creados

var juan5 = Object.create(Persona);

console.log(juan5.__proto__); //== console.log(Persona);
