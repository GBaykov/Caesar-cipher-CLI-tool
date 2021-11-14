const ALPHABET_LENGTH = 26;
const LMAX = 'z'.charCodeAt();
const CMAX = 'Z'.charCodeAt();

//дешифратор для цезаря и ROT-8
function decode(message, shift) {
    const result_arr = message.split('').map(letter => {
      if (letter >='a' && letter <= 'z')
        return String.fromCharCode(LMAX - (LMAX - letter.charCodeAt() + shift) % ALPHABET_LENGTH);
      else if (letter >='A' && letter <= 'Z')
        return String.fromCharCode(CMAX - (CMAX - letter.charCodeAt() + shift) % ALPHABET_LENGTH);
      else
        return letter;
    });
    return result_arr.join('');
  }
  module.exports = {
    decode,
  };