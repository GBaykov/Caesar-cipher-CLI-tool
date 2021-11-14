const { program } = require('commander');
const validator = require('./src/validator');
const fs = require('fs');
const { pipeline } = require('stream');
//const { TransformStream } = require('./src/transformStream');
const { streams } = require('./src/streams');
const { transformStreams } = require('./src/tranformStreams');
const { configGetter } = require('./src/configGetter')
// const transformCicle = require('./src/transformCicle');




const validArgument = ['-i','-o', '-c', '--config', '--input', '--output']

function uniqValidation(Argv, options, terminator) {
  let repeat = false;
  let err = false;
  //const val = validator(options, terminator);
  const arr = [];

  for(let flag = 2; flag < Argv.length; flag++) {
  if(Argv[flag] === '-c' || Argv[flag] === '--config') {
    if(!arr.includes('c')){
      arr.push('c')
    } else repeat = err = true; 
  }
  else if(Argv[flag] === '-i' || Argv[flag] === '--input') {
    if(!arr.includes('i')){
      arr.push('i')
    } else repeat = err = true; 
  }
  else if(Argv[flag] === '-o' || Argv[flag] === '--output') {
    if(!arr.includes('o')){
      arr.push('o')
    } else repeat = err = true; 
  } 
  //   else if(!validArgument.includes(Argv[flag]) & Argv[flag] !== options.config ) {
  //   console.error(`"${Argv[flag]} is incorrect or excess option`);
  //   err = true;
  // }
}
  if(err) {
    if(repeat) console.error('arguments should not be repeated')
    err = true; 
    terminator()
  } else return true;
}

function validArg(Argv, terminator){
  const bool = uniqValidation(process.argv, options, terminator);
  if(bool) {
    const val = validator(options, terminator);
    for(let flag = 2; flag < Argv.length; flag++) {
      if(!validArgument.includes(Argv[flag]) & 
          Argv[flag] !== options.config & 
          Argv[flag] !== options.input & 
          Argv[flag] !== options.output) {
          console.error(`"${Argv[flag]} is incorrect or excess option`);
          err = true;
          terminator()
        }
      }
  }
  
}

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
validArg(process.argv,terminator)


function terminator(){
  process.exit(-1)
}


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