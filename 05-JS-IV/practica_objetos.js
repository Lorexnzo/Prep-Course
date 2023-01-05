//PRACTICA OBJETOS

var objeto0 = {
    name: 'lorenzo',
    edad: '20',
    subObjeto1: {
        name: 'subLorenzo_1',
        edad: 'sub20_1',
    },
    lista0: ['toni', 'drogadura', 'elcabeza'],
    subObjeto2: {
        subObjeto3: {
            name: 'subsubLorenzo_3',
            edad: 'subsub20_3',
        },
        name: 'subLorenzo2',
        edad: 'sub20_2',
    },
}

console.log(objeto0);

for (const clave in objeto0) {
    console.log(clave); //recorre solo las key del objeto
}

console.log('---------');

console.log(objeto0.subObjeto2.subObjeto3.name);

console.log('---------');


for (const clave in objeto0) {
    console.log(objeto0[clave]); //recorre solo las key del objeto
}