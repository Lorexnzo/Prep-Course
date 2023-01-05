//¿que hace el keyword 'new'? --> explicado en KeyWordNewExplication.js

//(1) crea un objeto nuevo vacio

// -->         var objeto = {};

//(2) luego invoca la funcion que le sucede (vendria a ser Car('volskwagen', 1000, 'azul'))

// -->         Car('volskwagen', 1000, 'azul');

//(3) luego 'bindea' la funcion la funcion de llamada Car (que es la clase) con el objeto vacio creado anteriormente

// -->         Car('volskwagen', 1000, 'azul').bind(objeto);

//bind() lo que hace es que el this de la funcion Car, tiene que ser 'objeto' (el objeto vacio nuevo creado)

// == Car('volskwagen', 1000, 'azul').bind(objeto); --> == function Car(marca, cv, color){objeto.marca = marca; objeto.cv = cv;objeto.color = color;}


//(4) finalmente el keyword 'new' lo que hace es retornar el objeto antes creado (return objeto)

//--> function Car(marca, cv, color){objeto.marca = marca;this.cv = cv;objeto.color = color; return objeto;}

//El keyword 'new' lo copiaron de java, lo que hace practicamente es reducir complejidad.

//(5) luego obj.__proto__ = Car.prototype (como para copiarle las propiedades del objeto creado con las del Car.prototype)