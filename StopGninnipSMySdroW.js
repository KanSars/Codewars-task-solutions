function spinWords(string) {
  let arrayOfWords = string.split(' ');
  let resultArray = [];

  function reverseWord(word) {
    return `${Array.from(word).reverse().join('')}`;
  }

  resultArray = arrayOfWords.map((word) => word.length > 4 ? reverseWord(word) : word);

  return resultArray.join(' ');
}