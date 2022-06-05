const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de multiplicacion'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: 'Muestra la tabla en consola'

  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: false,
    default: 10,
    describe: 'Indica hasta que numero se genera la tabla'

  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser un número';
    }

    if (isNaN(argv.h)) {
      throw 'La bandera hasta debe ser un número';
    }
    return true;
  }).argv;

  module.exports = argv;