const { multiplicar } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

multiplicar(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(`${nombreArchivo} Creado con exito !`))
  .catch((error) => {
    console.error('Error al generar el archivo de tabla.!!');
  });
