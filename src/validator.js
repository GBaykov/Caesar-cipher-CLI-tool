const fs = require('fs');
const uniqValidation = require('./uniqValidation');
const optionsValidator = require('./optionsValidator')


const validArgument = ['-i','-o', '-c', '--config', '--input', '--output']

//объединяет валидаторы и проверет, чтоб не было лишних или неправилных аргументов
function validator(Argv, options, terminator){
  const bool = uniqValidation(Argv, terminator);
  if(bool) {
    const val = optionsValidator(options, terminator);
    for(let flag = 2; flag < Argv.length; flag++) {
      if(!validArgument.includes(Argv[flag]) & 
          Argv[flag] !== options.config & 
          Argv[flag] !== options.input & 
          Argv[flag] !== options.output) {
          console.error(`"${Argv[flag]}" is incorrect or excess option`);
          err = true;
          terminator()
        }
      }
  }
  
}

  module.exports = validator;
