//проверяет на отсутствие дублирования

function uniqValidation(Argv, terminator) {
    let repeat = false;
    let err = false;
    const arr = [];
  
    for(let flag = 2; flag < Argv.length; flag++) {
    if(Argv[flag] === '-c' || Argv[flag] === '--config') {
      if(!arr.includes('c')){
        arr.push('c')
      } else repeat = err = true; 
    }
    else if(Argv[flag] === '-i' || Argv[flag] === '--input') {
      if(!arr.includes('i')){
        arr.push('i')
      } else repeat = err = true; 
    }
    else if(Argv[flag] === '-o' || Argv[flag] === '--output') {
      if(!arr.includes('o')){
        arr.push('o')
      } else repeat = err = true; 
    } 
  }
    if(err) {
      if(repeat) console.error('arguments should not be repeated')
      err = true; 
      terminator()
    } else return true;
  }

  module.exports = uniqValidation;