function getUsuarioSync(id){

    let usuario = {
        id: id,
        nombre: `Usuario ${ id }`
    }

    let startPoint = new Date().getTime();
    while(new Date().getTime() - startPoint <= 3000){

    }

    return usuario;

    /* setTimeout(() => {
        return usuario;
    }, 3000); */

}

function getUsuario(id, callback){

    let usuario = {
        id,
        nombre: `Usuario ${ id }`
    }

    setTimeout(() => {
        callback(usuario)
    }, 3000);
}

module.exports = {
    getUsuarioSync,
    getUsuario
}