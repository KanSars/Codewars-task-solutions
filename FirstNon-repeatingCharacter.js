function firstNonRepeatingLetter(s) {
  const string = [...s];
  const lowerCaseString = string.map((letter) => letter.toLowerCase()).join('');

  function getFirstNonRepeatingLetter(lowerCaseStringString) {
    let lowerCaseString = lowerCaseStringString.split('');

    while (lowerCaseString.includes(lowerCaseString[0], 1)) {
      lowerCaseString = [...lowerCaseString].join("").replace(new RegExp(`${lowerCaseString[0]}`, 'g'), '');
    }

    return lowerCaseString[0];
  }

  const firstNonRepeatingLetterLowerCase = getFirstNonRepeatingLetter(lowerCaseString);
  const indexFirstNonRepeatingLetter = lowerCaseString.indexOf(firstNonRepeatingLetterLowerCase)

  return string[indexFirstNonRepeatingLetter] ?? ''
}