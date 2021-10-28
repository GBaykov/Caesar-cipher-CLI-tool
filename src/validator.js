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
  }