//Contructores anidados

function Persona(nombre, apellido, ciudad) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;

}

Persona.prototype.saludar = function () { console.log('Soy ' + this.nombre + ' de ' + this.ciudad); }

var juan = new Persona('juan', 'perez', 'santa fe');

juan.saludar();

//ahora todo alumno es una persona, y para reutilizar las propiedades de Persona, podemos
//utilizar los constructores anidados

//creamos el constructor alumno, el cual va a heredar las propiedades de Persona

function Alumno(nombre, apellido, ciudad, curso) {
    
    //llamamos a las propiedades de persona
    Persona.call(this, nombre, apellido, ciudad);

    //le agregamos las propiedades especificas de Alumno
    this.curso = curso;
    this.empresa = 'mercadolibre';

}
Alumno.prototype.chiflar = function () { console.log('shhhuiik'); }
var lorenzo = new Alumno('lorenzo', 'vonkler', 'sta fe', 'full stack');

console.log('lorenzo objeto');
console.log(lorenzo);//alumno, con persona heredada
console.log(lorenzo.__proto__);
console.log('--------');
console.log('juan objeto');
console.log(juan);//persona
console.log(juan.__proto__);

//lorenzo.saludar(); //TypeError, lorenzo.saludar not defined, porque no existe
//ni en su objeto ni en su prototipo esta saludar(), saludar esta definido en persona solamente, no en alumno

//Los metodos de persona (los metodos en el prototipo) no son pasadas al constructor ni prototipo de Alumno

//para solucionar esto, podemos 'copiar' el proto de Persona al proto de Alumno:
console.log('--------Copiamos el obj prototipe de Persona al obj prototipe de Alumno para que tenga Alumno la funcion saludar de Persona -------');

Alumno.prototype = Object.create(Persona.prototype);


//el prototipo de Persona (el cual SÍ tiene la funcion saludar) lo copiamos al prototipo de Alumno

//Luego hay un detalle; tenemos que volver a añadir a una funcion que se hace referencia a si mismo
//ya que al copiarle el proto de persona, quedo justamente con el proto de persona
Alumno.prototype.constructor = Alumno; //(si no hacemos esto queda con = Persona y se rompe el codigo)

//creamos un nuevo objeto con el nuevo constructor clase Alumno

var pepePicaPiedras = new Alumno('pepe', 'picaPiedras', 'rocacity', 'fullpiedra');

console.log(lorenzo.__proto__); 

console.log(pepePicaPiedras);
console.log(pepePicaPiedras.__proto__); //ahora vemos el proto de pepe que es Alumno, con las props de Persona copiadas:

pepePicaPiedras.saludar();  //por último volvemos a intentar

console.log('---------------');