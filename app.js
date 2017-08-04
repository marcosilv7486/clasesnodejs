console.log("Inicio.. app.js");
//Cargar modulos de note
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var command = process.argv[2];
console.log('Commando : ', command);

if(command === 'agregar'){
    console.log('Agregando nueva nota');
}else if (command === 'listar'){
    console.log('listando notas');
}else if (command === 'remover'){
    console.log('Remover Nota');
}else if (command === 'Leer'){
    console.log('Leyendo Nota');
}
else {
    console.log('comando no reconocido');
}