console.log('Iniciando note.js');
//console.log(module);

module.exports.age = 25;

module.exports.addNote = () => {
  console.log('AddNote');
  return 'New Note';
};

module.exports.add = (a,b) => {
  return a + b ;
};
