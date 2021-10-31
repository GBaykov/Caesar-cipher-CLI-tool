const fs = require('fs');



function validator(options, exit) {
    let error = false;

    if (options.action === undefined) {
      console.error('"action" is required option');
      error = true;
    }
    
    if (options.action !== 'encode' && options.action !== 'decode') {
      console.error('"action" must be "encode" or "decode"');
      error = true;
    }
  
    if (options.shift === undefined) {
      console.error('"shift" is required option');
      error = true;
    }
  
    if (!Number.isInteger(+options.shift)) {
      console.error('"shift" must be an integer number');
      error = true;
    }

    if (fs.existsSync(options.input)) {
        try {
            fs.access(fs.constants.R_OK)
          } catch (e) {
            console.error(`input file is not accessible`);
            error = true;
            return false;
          }
    } else {
        console.error(`input file does not exist`);
        error = true;
        return false;
      }

    if (fs.existsSync(options.output)) {
        try {
            fs.access(fs.constants.W_OK)
          } catch (e) {
            console.error(`${options.output} is not accessible`);
            error = true;
            return false;
          }
    } else {
        console.error(`"${options.output}" file does not exist`);
        error = true;
        return false;
      }
    
if(error){
  console.log(error)
    exit()
}
  }

  module.exports = validator;