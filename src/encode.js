const ALPHABET_LENGTH = 26;
const LMIN = 'a'.charCodeAt();
const CMIN = 'A'.charCodeAt();

function encode(message, shift) {
    const result_arr = message.split('').map(letter => {
      if (letter >='a' && letter <= 'z')
        return String.fromCharCode(LMIN + (letter.charCodeAt() - LMIN + shift) % ALPHABET_LENGTH);
      else if (letter >='A' && letter <= 'Z')
        return String.fromCharCode(CMIN + (letter.charCodeAt() - CMIN + shift) % ALPHABET_LENGTH);
      else
        return letter;
    });
    return result_arr.join('');
  }
  module.exports = {
    encode,
  };