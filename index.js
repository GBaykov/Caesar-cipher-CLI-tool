const { program } = require('commander');
const validator = require('./src/validator');

program
.version('0.0.1')
.option('-i, --input <file>', 'input file')
.option('-o, --output <file>', 'output file')
.option('-s, --shift <number>', 'integer number for shift')
.option('-a, --action <type>', 'action that can be "encode" or "decode"')
.parse(process.argv);

const { action, shift, input, output } = program.opts();

const options = {
  'action': action,
  'shift': shift,
  'input': input,
  'output': output
}
validator(options)



//TO DO: 1. сделать 4 опции/ функцию возвращающую их (подразумеваем, что аргументы есть)
// 2. проверка на наличие аргументов(опций) у process(если можно) (обязательны шифт и action - если их нет то дружественное сообщениеж
//                                инпут и отпут - если нет, то использовать process stdin stdout)
// 3.создать функции-потоки, принимающие инпут и отпут
// 3.1 создать функцию-шифратор
// 3.2 п=создаь трансформ поток, использующую функцию-шифратор