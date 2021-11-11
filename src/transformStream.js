const { Transform } = require('stream');
const { encode } = require('./encode');
const { decode } = require('./decode');

class TransformStreamCiepher extends Transform {
  constructor(action) {
    super();
    this.action = action;
    // this.shift = +shift;
  }

  _transform(chunk, encoding, callback) {
    const src = chunk.toString('utf8');
    let act = this.action === 'C1' ? 
              encode(src, 1) :
              decode(src, 1);
    this.push(act);
     callback();
    // if(this.action === 'C0') act = decode(src, Math.abs(1));
    // if(this.action === 'C1') act = encode(src, Math.abs(1));
    // if(this.action === 'R0') act = decode(src, Math.abs(8));
    // if(this.action === 'R1') act = encode(src, Math.abs(8));
    // if(this.action === 'A') act = encode(src, Math.abs(this.shift))
    
  }
}




// class TransformStream extends Transform {
//   constructor(config) {
//     super();
//     this.config = config;
//     // this.shift = +shift;
//   }

//   _transform(chunk, encoding, callback) {
//     const src = chunk.toString('utf8');
//     let act;
//     let configArr = this.config.split('-');

//     for(let i = 0; i < configArr.length; ++i) {
//       if(configArr[i] === 'c0') {
//         act = decode(src, Math.abs(1));
//         continue
//       }
//       else if(configArr[i] === 'c1') {
//         act = encode(src, Math.abs(1))
//         continue
//       }
//       else if(configArr[i] === 'r0') {
//         act = decode(src, Math.abs(8))
//         continue
//       }

//       else if(configArr[i] === 'r1') {
//         act = encode(src, Math.abs(8)) 
//         continue
//       }
//       new TransformStream()
//       // else  { //(configArr[i] === 'A')
//       //   act = encode(src, Math.abs(this.shift))
//       // }

//     }
 
//     this.push(act);
//      callback();
//   }
// }



// const config = 'C1-F1-C0';

// function TransformCicle(config) {
// let configArr = config.split('-');
// let stream;
// for(let i = 0; i < configArr.length; i++) {
//   stream = new TransformStream(configArr[i]);
//   return stream.pipe(null)
//   // if(i === configArr.length -1) {
//   //   return stream;
//   // }
// }

// }
// new TransformStream(action, shift),

module.exports = { TransformStreamCiepher }


// функция(конфинг, src){
//  аrr = конфинг.split('-')
//  for(let i = 0; i<аrr.length; i++) {
//    в зависимост иот настроек конфига
// валидация и использование Шифров-функций(src)
//  }
// }


