console.log("Inicio.. app.js");
//Cargar modulos de note
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
var result = notes.addNote();
console.log(notes.add(10,-11));
var user = os.userInfo();
//funcion para cargar un archivo y agregar texto
fs.appendFile('saludo.txt',`Hola ${user.username} tu edad es ${notes.age}`,function (err) {
  if (err){
    console.log("Error al abrir el archivo");
  }
});

console.log(_.isString(true));
console.log(_.isString('Marcos'));
var arrayFiltrado=_.uniq(['Marcos','Marcos','Luis',1,1,2,3,4,6,3,2]);
console.log(arrayFiltrado);
