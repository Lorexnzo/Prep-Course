//Constructor de clases (SINCERAMENTE ES LO UNICO QUE NO ENTENDI UN CHOTO)

//JS es un lenguaje que se va renovando, se armo una comicion llamada EcmaScript que lo que hacen es regular JS

//Por eso fueron sacando versiones de JS, ES1 ES2 ES3.. ES6 es la ultima gran version

//ES6 esta esta nueva keyword class, lo malo es que agarras un proyecto de hace 6 años, y ta todo escrito diferente a lo que seria
//un proyecto en ES6 actual

//Lo ideal es aprender JS basico, y luego aprender ES6, y cuando lees ambos codigos te das cuenta

//Un ejemplo es el siguiente:

//EN JS CLASICO
function test(nombre, edad) {
    return { //tamos retornando un objeto con esas 2 propiedades
        nombre: nombre,
        edad: edad,
    }
}
//EN JS ES6 se puede resumir asi
function test1(nombre, edad) {
    return { //tamos retornando un objeto con esas 2 propiedades
        nombre,
        edad
    }
}

//este es un ejemplo pavo, por ende primero se aprende js clasico y luego aprendes ES6

//En ES6 le copiaron fuerte la sintaxis a otros lenguajes que usan el keyword class

//sintaxis

class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombre() {
        console.log(this.nombre);
    }

    saludar() {
        console.log('hola, soy ' + this.nombre + ' ' + this.apellido);
    }

}

var lorenzo = new Persona('lorenzo', 'garcia');

console.log(lorenzo);
console.log(lorenzo.__proto__);
lorenzo.getNombre();
lorenzo.saludar();

//luego por ultimo tenemos que una clase puede HEREDAR de otra clase

class Empleado extends Persona{ //la clase empleado se extiende a persona
    //entonces el constructor de Empleado, 
    constructor(nombre, apellido, empleo, sueldo) {
        super(nombre, apellido); //super invoca al constructor de la clase que extiendo (Persona), que recibe nombre y apellido
        this.empleo = empleo;
        this.sueldo = sueldo;
    }
}
//entonces cuando construyo un empleado, toni es un empleado, pero empleado tiene como prototipo a persona
var toni = new Empleado('toni', 'tralice', 'profesor', 100);
toni.saludar();//toni es un objeto que NO tiene el metodo saludar, entonces js busca en su prototipo que es empleado,
//luego empleado tampoco tiene el metodo saludar, busca en su prototipo que es persona que si lo tiene, luego ejecuta
console.log(toni);
console.log(toni.__proto__);

//Esta forma ultima es la que menos vamos a usar.



