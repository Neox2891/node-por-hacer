const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Acutaliza la tarea con un valor true o false'
}
const argv = require('yargs')
    .command('crear', 'crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('listar', 'Muestra todas las tareas', {
        completado: {
            alias: 'c',
            desc: 'Acutaliza la tarea con un valor true o false'
        }
    })
    .command('borrar', 'Elimina una tarea especifica', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
};