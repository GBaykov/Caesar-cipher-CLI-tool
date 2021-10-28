const fs = require('fs');

function validator(options) {
    
    if (options.action === undefined) {
      console.error('"action" is required option');
    }
    
    if (options.action !== 'encode' && options.action !== 'decode') {
      console.error('"action" must be "encode" or "decode"');
    }
  
    if (options.shift === undefined) {
      console.error('"shift" is required option');
    }
  
    if (!Number.isInteger(+options.shift)) {
      console.error('"shift" must be an integer number');
    }

    if (fs.existsSync(options.input)) {
        try {
            fs.access(fs.constants.R_OK)
          } catch (e) {
            console.error(`${options.input} is not accessible`);
            return false;
          }
    } else {
        console.error(`"${options.input}" file does not exist`);
        return false;
      }

    if (fs.existsSync(options.output)) {
        try {
            fs.access(fs.constants.W_OK)
          } catch (e) {
            console.error(`${options.output} is not accessible`);
            return false;
          }
    } else {
        console.error(`"${options.output}" file does not exist`);
        return false;
      }
    
console.log('GOOD')
  }

  module.exports = validator;