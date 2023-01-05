//Cuando modelamos objetos, puede pasar que dos objetos o mas, tengan las mismas propiedades

//Por ejemplo los objetos alumnos, sus estructuras/propiedades entre sí van a ser muy similares

//ahora es cuando aparece el concepto de NOT REPEAT YOURSELF clave en la programacion

//¿Como hacemos para tener una plantilla de objetos?  -> usando clases

//ejemplo, la clase es ANIMAL y perro, gato, loro son objetos o INSTANCIAS de los ANIMALES

//la clase alumno define la plantilla, luego lorenzo, boris, mark son instancias de alumno

//Ahora vamos a ver como definir una clase y como usar las clases para crear objetos, llamados ahora instancias

//Hay una pelea de paradigma, hay otros lenguajes que son fuertemente orientados a objetos, es la filosifia con la que
//se encaran los problemas etc, el lenguaje Java es fuertemente orientado a objetos, de hecho todo es una clase, hay que empezar usando

//En js no esta orientado a objetos, es un lenguaje de prototipado, js empezo a copiar sintaxis de java en js, lo hacian para que el programador que venia de java se sienta mas comodo en js
//a pesar de que funcionaban distintos los lenguajes, eso creo una serie de peleas y confusiones.
//JS lo podes usar orientado a objetos, pero no se diseño 100% para eso

//CLASES

//Para eso vamos a introducir function constructor e introducimos el keyword "new"

//Creamos la funcion constructora = plantilla = clase

//a la funcion constructora tambien se le conoce como 'fabrica'

function Persona() { //nombre de la clase, todas las funciones contructoras de clases,
                    //tienen que empezar con mayuscula, eso me quiere decir que no es una f cualquiera, sino es una funcion contructora
    //aca dentro se usa el 'this'
    this.nombre = 'Juan';
    this.apellido = 'Perez';
    //es una funcion extraña a primera vista
} 

//new Persona();

var juan = new Persona();

console.log(juan); //en la salida dice Persona {key:value}, nos avisa que es un juan creado con una funcion constructora Juan

function Car(marca, cv, color){

    this.marca = marca;
    this.cv = cv;
    this.color = color;

}

var audi = new Car('audi', 1500, 'verde'); //estoy instanciando autos

var golcito = new Car('volskwagen', 1000, 'azul'); //instancio otro auto

console.log(audi);
console.log(golcito);

//De esta forma me es facil escribir muchos objetos (instancias) a partir de una clase (plantilla)

//Vamos a explicarlo detalladamente

//¿que hace el keyword 'new'? --> explicado en KeyWordNewExplication.js

//DEFAULT OPERATOR
//si no le paso un valor en argumento (nombre=undefined), va a ser el por defecto.
console.log('---');
function Persona(nombre, edad){

    this.nombre = nombre || 'default nickname';
    this.edad = edad || 'default age';

}

var perez = new Persona('julian');
//var boris = new Persona('boris', 45);

console.log(perez);
//console.log(boris);


//idea interesante sacada del nombre || 'default' (default operator);
//se llama short circuit
//console.log(boris && boris.edad); //si existe boris, que me busque e imprima la edad, de lo contrario si solo pongo boris.edad me tira error
//se usa para que no me tire error
//aca en VSC no me esta funcando

console.log('-----');

//PROTOTYPE
//JS diseño basado en prototipos, todos los objetos en JS estan referenciados a otro objeto llamado su prototype

//El prototipo de perez es Persona, el prototipo de audi es car.

console.log(perez.__proto__); //Persona
console.log('string'.__proto__); //String

//dato, NUNCA cambiar una propiedad que tenga doble giones, del tipo 'a'.__proto__ = 2414 -> MAL

//cualquier cosa que yo use tiene un prototipo que es un objeto o una clase

//el prototipo del objeto maximo es el protipo del objeto vacio, que se llama Object.

//gracias a esto existe algo llamado el prototypo chain, lo que hace
// es que un array por ejemplo tenga la propiedad / metodo push(), ya que nunca definimos en el array ese metodo.
//lo que hace es buscar en el prototipo del objeto lista, que se llama array, y array tiene un monton de propiedades.
//lo mismo pasa con 'hola'.lenght, hola es un string, no tiene nada, pero su prototipo si tiene un monton de propiedades y metodos.

//JS funciona asi, todos los objetos tienen un prototipo, cuando uso un constructor, el prototipo de los objetos es el contructor.

//seguir en prototype.js







