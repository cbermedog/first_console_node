const fs = require('fs');
const colors = require('colors/safe');


const multiplicar = async (base = 5, listar = false, hasta = 10) => {
  let salida = '';
  let salidaConsola = ''

  for (let index = 1; index <= hasta; index++) {
    salida += `${base} x ${index} = ${base * index}\n`;
    salidaConsola += `${colors.green(base)} ${colors.red('x')} ${colors.green(index)} ${colors.red('=')} ${colors.blue(base * index)}\n`;
  }

  if (listar) {
    console.log(salidaConsola);
  }

  try {
    fs.writeFileSync(`./salida/table-${base}.txt`, salida);
  } catch (error) {
    console.error('Error al guardar !');
  }

  return `table-${base}.txt`;
};

module.exports = {
  multiplicar
};
