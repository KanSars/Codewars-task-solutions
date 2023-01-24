function pigIt(str) {
  let arrayOfWords = [];
  let resultStr;

  function getChangedWord(word) {
    let firstChar = word[0];
    return `${word.substring(1)}${firstChar}ay`
  }

  function isLetter(char) {
    return (((char.charCodeAt(0) > 64) && (char.charCodeAt(0) < 91)) || ((char.charCodeAt(0) > 96) && (char.charCodeAt(0) < 123)))
  }

  arrayOfWords = str.split(' ');
  resultStr = arrayOfWords.map((char) => {
    if (isLetter(char)) {
      return getChangedWord(char)
    } else {
      return char;
    }
  })

  return `${resultStr.join(' ')}`
}