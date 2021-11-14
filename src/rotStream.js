const { Transform } = require('stream');
const { encode } = require('./encode');
const { decode } = require('./decode');

class TransformStreamRot extends Transform {
  constructor(action) {
    super();
    this.action = action;
  }

  _transform(chunk, encoding, callback) {
    const src = chunk.toString('utf8');
    let act = this.action === 'R1' ? 
              encode(src, 8) :
              decode(src, 8);
    this.push(act);
     callback();
  }
}

module.exports =  { TransformStreamRot } 