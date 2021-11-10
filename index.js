const { program } = require('commander');
const validator = require('./src/validator');
const fs = require('fs');
const { pipeline } = require('stream');
//const { TransformStream } = require('./src/transformStream');
const { streams } = require('./src/streams');
const { transformStreams } = require('./src/tranformStreams');
const { configGetter } = require('./src/configGetter')
// const transformCicle = require('./src/transformCicle');



// program
// .version('0.0.1')
// .option('-i, --input <file>', 'input file')
// .option('-o, --output <file>', 'output file')
// .option('-s, --shift <number>', 'integer number for shift')
// .option('-a, --action <type>', 'action that can be "encode" or "decode"')
// .parse(process.argv);

// const { action, shift, input, output } = program.opts();

function getValue(flag) {
  const flagIndex = process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}

const config =  getValue('--config') ? getValue('--config')  : getValue('-c');
const input = getValue('-i') ?  getValue('-i') : getValue('--input');
const output = getValue('-o') ? getValue('-o') : getValue('--output');

const options = {
'config': config,
'input': input,
'output': output
}


validator(options, ()=>{
  process.exit(-1)
});
configGetter(options.config);


const pipelineInput = input ? fs.createReadStream(input) : process.stdin;
const pipelineOutput =  output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout;

pipeline(
  pipelineInput,
 ...transformStreams,
  pipelineOutput,
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
      process.exit(-1);
    }
  }
);



//TO DO: +++ 1. сделать 4 опции/ функцию возвращающую их (подразумеваем, что аргументы есть)
// 2. проверка на наличие аргументов(опций) у process(если можно) (обязательны шифт и action - если их нет то дружественное сообщениеж
//                                инпут и отпут - если нет, то использовать process stdin stdout)
// 3.создать функции-потоки, принимающие инпут и отпут
// 3.1 создать функцию-шифратор
// 3.2 п=создаь трансформ поток, использующую функцию-шифратор