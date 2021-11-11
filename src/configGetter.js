const { transformStreams } = require('./tranformStreams');
const { TransformStreamCiepher } = require('./transformStream');
const { TransformStreamRot } = require('./rotStream');

function configGetter(config) {
    let configArr = config.split('-');
    for(let i = 0; i< configArr.length; i++) {
      let action = configArr[i]
        if(action[0] === 'C') {
          const stream = new TransformStreamCiepher(action)
          transformStreams.push(stream)
       }
            
      else if(action[0] === 'R') {
        const stream = new TransformStreamRot(action)
        transformStreams.push(stream)
      }
    }
}

module.exports = {configGetter}