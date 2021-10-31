const { Transform } = require('stream');
const { encode } = require('./encode');
const { decode } = require('./decode');

class WriteStream extends Transform {
  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = +shift;
  }

  write(chunk, encoding, callback) {
    const src = chunk.toString('utf8');
    const act = (this.action === 'encode' && this.shift > 0 || 
      this.action === 'decode' && this.shift < 0) ?
      encode(src, Math.abs(this.shift)) : 
      decode(src, Math.abs(this.shift));
    this.push(act);
    // callback();
  }
}

module.exports = WriteStream;