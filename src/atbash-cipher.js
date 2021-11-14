const ALPHABET_LENGTH = 26;
const LMIN = 'a'.charCodeAt();
const LMAX = 'z'.charCodeAt();
const CMIN = 'A'.charCodeAt();
const CMAX = 'Z'.charCodeAt();

function atbash(message) {
    const result_arr = message.split('').map(letter => {

        const letterCharCode = LMIN + (LMAX - letter.charCodeAt() ) ; 
     if (letter >='a' && letter <= 'z'){
        return String.fromCharCode(LMIN + (LMAX - letter.charCodeAt() ))
     }
      else if (letter >='A' && letter <= 'Z')
        return String.fromCharCode(CMIN + (CMAX - letter.charCodeAt() ));
      else
        return letter;
    });
    return result_arr.join('');
  }
  module.exports = {
    atbash,
  };