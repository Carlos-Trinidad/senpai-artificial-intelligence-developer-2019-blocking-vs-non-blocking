let { getUsuario } = require('./usuarios/usuario');

console.log("Inicio del programa");

getUsuario(1, function(usuario1){
    console.log(usuario1);
});

getUsuario(2, function(usuario2){
    console.log(usuario2);
});

console.log("Hola Mundo!");