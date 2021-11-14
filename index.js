const validator = require('./src/validator');
const fs = require('fs');
const { pipeline } = require('stream');
const { transformStreams } = require('./src/tranformStreams');
const { configGetter } = require('./src/configGetter')



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

function terminator(){
  process.exit(-1)
}


validator(process.argv, options, terminator)
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
