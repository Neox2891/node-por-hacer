let { argv } = require('./config/yargs');
let { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');
let colors = require('colors');

let comando = argv._[0];
// console.log(comando);
// console.log(argv)

switch (comando) {
    case 'crear':
        let crearTarea = crear(argv.d);
        console.log(crearTarea);
        //let guardarDatos = guardarDb(crearTarea);
        break;
    case 'listar':
        let listarTarea = getListado(argv.c);
        for (const tarea of listarTarea) {
            console.log('======Por hacer======='.green);
            console.log('Tarea: ' + tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================'.green);
        }
        // console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let update = actualizar(argv.d, argv.c);
        console.log(update);
        // console.log('Actualiza un tarea por hacer');
        break;
    case 'borrar':
        let borrado = borrar(argv.d);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}