const { transformStreams } = require('./tranformStreams');
const { TransformStreamCiepher } = require('./transformStream');
const { TransformStreamRot } = require('./rotStream');

function configGetter(config) {
    let configArr = config.split('-');
    for(let elem of configArr) {
       if(elem === 'C1') {
           const stream = new TransformStreamCiepher()
        transformStreams.push(stream)
       }
            
      else if(elem === 'R1') {
        const stream = new TransformStreamRot()
        transformStreams.push(stream)
      }
    }
}

module.exports = {configGetter}