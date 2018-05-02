const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw err
        else
            console.log('Datos guardados en la base de datos!');
    });
}

let cargarDb = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        // console.log(error);
        listadoPorHacer = [];
    }
}

let crear = (descripcion) => {

    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

let getListado = (completado) => {
    // listadoPorHacer = require('../db/data.json');
    // return listadoPorHacer;
    cargarDb();
    if (completado === 'false') {
        completado = false;
    }
    let listarTrueFalse = listadoPorHacer.filter((elemento) => elemento.completado === completado);
    if (completado === 'true' || completado === false) {
        return listarTrueFalse;
    } else {
        return listadoPorHacer;
    }
}

let actualizar = (descripcion, completado = true) => {
    cargarDb();

    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }

    // console.log(descripcion);
    // console.log(completado);
    // for (tarea of listadoPorHacer) {
    //     if (tarea.descripcion === descripcion) {

    //         tarea.descripcion = descripcion;
    //         tarea.completado = completado;
    //         console.log(listadoPorHacer[0]);
    //         guardarDb();
    //         return `Tarea "${tarea}" ha sido actualizada!`;
    //     } else {
    //         return `tarea "${descripcion}" no encontrada, asi que no se puede actualizar!`;
    //     }
    // }
}

let borrar = (descripcion) => {
    cargarDb();

    let borrarTarea = listadoPorHacer.filter((elemento) => elemento.descripcion !== descripcion);

    if (listadoPorHacer.length === borrarTarea.length) {
        return false;
    } else {
        listadoPorHacer = borrarTarea;
        guardarDb();
        return true;
    }

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}