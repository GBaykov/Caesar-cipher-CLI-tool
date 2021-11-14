const { transformStreams } = require('./tranformStreams');
const { TransformStreamCiepher } = require('./caesarStream');
const { TransformStreamRot } = require('./rotStream');
const { AtbashTransformStream } = require('./atbashStream');

function configGetter(config) {
    let configArr = config.split('-');
    for(let i = 0; i< configArr.length; i++) {
      let action = configArr[i];

      if(action === 'A') {
        const stream = new AtbashTransformStream(action)
        transformStreams.push(stream)
      }
       if(action[0] === 'C') {
          const stream = new TransformStreamCiepher(action)
          transformStreams.push(stream)
       }
            
       if(action[0] === 'R') {
        const stream = new TransformStreamRot(action)
        transformStreams.push(stream)
      }
    }
}

module.exports = {configGetter}