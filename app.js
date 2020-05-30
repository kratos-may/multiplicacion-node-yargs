const {crearArchivo,listar} = require("./multiplicar/multiplicar");
const {argv}= require("./config/yargs")
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
    .then(archivo=>{
        console.log(`Archivo creado: ${archivo}`)
    }).catch(err=>console.log(err));
        break;

    default:
        break;
        console.log("comando no reconocido")
}
// para acceder a los argumentos de consola sin yargs
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
