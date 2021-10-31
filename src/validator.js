const fs = require('fs');



function checkFile(file, purpose) {
  if (purpose !== 'input file' && purpose !== 'output file') {
    return false;
  }

  if (fs.existsSync(file)) {
    try {
      fs.accessSync(file, purpose === 'input file' ? fs.constants.W_OK : fs.constants.R_OK);
    } catch (err) {
      console.error(`"${purpose}" file "${file}" is not accessible`);
      return false;
    }
  } else {
    console.error(`"${purpose}" file "${file}" does not exist`);
    return false;
  }

  return true;
}

function validator(options, terminator) {
  let isError = false;
  
  if (options.action === undefined) {
    console.error('"action" is required option');
    isError = true;
  }
  
  if (options.action !== 'encode' && options.action !== 'decode') {
    console.error('"action" must be "encode" or "decode"');
    isError = true;
  }

  if (options.shift === undefined) {
    console.error('"shift" is required option');
    isError = true;
  }

  if (!Number.isInteger(+options.shift)) {
    console.error('"shift" must be an integer number');
    isError = true;
  }

  if (options.input && !checkFile(options.input, 'input file')) {
    isError = true;
  }

  if (options.output && !checkFile(options.output, 'output file')) {
    isError = true;
  }

  if (isError) {
    terminator();
  }
}

  module.exports = validator;

  module.exports = validator;