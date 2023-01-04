
//Ejercicio 1

function crearGato(nombre, edad) {
    //creamos el nuevo objeto
    var objeto = { nombre: nombre, edad: edad, meow: function(){return 'Meow!'},}
    //agregamos propiedades, se pueden agregan propiedades de estas dos formas
    objeto['edad'] = edad; //esta notacion permite pasar el nombre de la nueva propiedad como variable objeto[variable]=69;
    objeto.meow = function () { return 'Meow!' };
    return objeto;//al retornar el objeto, podemos usarlo para hacer otras cosillas xdxd
}


console.log(crearGato('Ricardo  VII', 3).nombre);
console.log(crearGato('Sicioli', 53.).nombre);
//console.log(crearGato('Poronga II', 5));
//console.log(objeto.meow());


//Cosas interesantes con el break notation



