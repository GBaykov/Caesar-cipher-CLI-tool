const { Transform } = require('stream');
const { atbash } = require('./atbash-cipher');


class AtbashTransformStream extends Transform {
  constructor(action) {
    super();
    this.action = action;
  }

  _transform(chunk, encoding, callback) {
    const src = chunk.toString('utf8');
    let act = atbash(src);
    this.push(act);
     callback();
  }
}

module.exports =  { AtbashTransformStream } 