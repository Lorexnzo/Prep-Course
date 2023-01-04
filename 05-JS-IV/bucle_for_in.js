//EXPLICACION DE LA WEB PAGE DE HENRY YA QUE EN EL VIDEO NO EXPLICA

//BUCLE FOR IN (const clave in objeto){}

//Basicamente permite recorrer un objeto y sus propiedades (claves)

//creamos un objeto

const objeto1 = {

    nickname: 'julianMataDragones99',
    value: 1579,
    passwordKey: 10011011,
    getNickname: function getNickname() { console.log(this.nickname); },
    admin: false,
    friendsAdded: ['Macarena', 'Lorenzo', 'Terremoto88'],
    inventario: { slot1: 'Golden_Sword', slot2: 'Health_Potion', slot3: 'Regen_Cookie' },
    meow: function () { return 'Meow!'; },

}

//console.log(objeto1);

for (const key in objeto1) { //var o const o let se pueden usar, lo que hace es recorrer las claves (keys) del objeto
    //console.log(key);
    if (key == 'meow') {
        console.log('!MEEEEOOOWWW¡');
    }
    //como que estamos creando una contante llamda value en donde se guardan los datos de objeto1
    //console.log(objeto1[key]);
}

console.log('----');

//console.log(value);

//objeto1.getNickname();

//console.log(objeto1.meow());