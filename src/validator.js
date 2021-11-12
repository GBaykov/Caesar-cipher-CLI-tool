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
  if(!options.config){
    console.error('"config" is required option');
    isError = true;
  } else {
    const configArr = options.config.split('-');
    for (let opt of configArr){
      if(opt[0] === 'C' || opt[0] === 'R') {
        if(opt[1] != 1 & opt[1] != 0) {
          console.error(`Config "${opt[0]}" incorrect. Mast be "${opt[0]}1" or "${opt[0]}0"`)
          isError = true;
        }
      } else if(opt[0] === 'A') {
          if(opt[1]) {
            console.error(`Config "A" must not contain other characters`)
            isError = true;
          }
      } else{
        console.error(`Config incorrect, try another`)
        isError = true;
      }
    }
  } 
 
  
  // if (options.action === undefined) {
  //   console.error('"action" is required option');
  //   isError = true;
  // }
  
  // if (options.action !== 'encode' && options.action !== 'decode') {
  //   console.error('"action" must be "encode" or "decode"');
  //   isError = true;
  // }

  // if (options.shift === undefined) {
  //   console.error('"shift" is required option');
  //   isError = true;
  // }

  // if (!Number.isInteger(+options.shift)) {
  //   console.error('"shift" must be an integer number');
  //   isError = true;
  // }

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