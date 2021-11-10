const { Transform } = require('stream');
const { encode } = require('./encode');
const { decode } = require('./decode');

class TransformStreamRot extends Transform {
  constructor() {
    super();
    //this.action = action;
    // this.shift = +shift;
  }

  _transform(chunk, encoding, callback) {
    const src = chunk.toString('utf8');
    let act = encode(src, Math.abs(8));
    // if(this.action === 'C0') act = decode(src, Math.abs(1));
    // if(this.action === 'C1') act = encode(src, Math.abs(1));
    // if(this.action === 'R0') act = decode(src, Math.abs(8));
    // if(this.action === 'R1') act = encode(src, Math.abs(8));
    // if(this.action === 'A') act = encode(src, Math.abs(this.shift))
    this.push(act);
     callback();
  }
}

module.exports =  { TransformStreamRot } 