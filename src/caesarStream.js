const { Transform } = require('stream');
const { encode } = require('./encode');
const { decode } = require('./decode');

class TransformStreamCiepher extends Transform {
  constructor(action) {
    super();
    this.action = action;
  }

  _transform(chunk, encoding, callback) {
    const src = chunk.toString('utf8');
    let act = this.action === 'C1' ? 
              encode(src, 1) :
              decode(src, 1);
    this.push(act);
     callback();
  }
}

module.exports = { TransformStreamCiepher }



