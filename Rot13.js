function rot13(message) {
  let messageAtCode = [];
  let resultArrayElements = [];
  let resultArrayChars = [];

  function isUpperCase(element) {
    return ((element > 96) && (element < 123))
  }

  function getEncodingElement(element) {
    if (isUpperCase(element)) {
      return ((element + 13) < 123) ? (element + 13) : (97 + ((element + 13) - 123))
    } else {
      return ((element + 13) < 91) ? (element + 13) : (65 + ((element + 13) - 91))
    }
  }

  function isLetter(element) {
    return (((element > 64) && (element < 91)) || ((element > 96) && (element < 123)))
  }

  message.split('').forEach(element => {
    messageAtCode.push(element.charCodeAt(0))
  });

  messageAtCode.forEach(element => {
    if (isLetter(element)) {
      resultArrayElements.push(getEncodingElement(element))
    } else {
      resultArrayElements.push(element)
    }
  });

  resultArrayElements.forEach(element => {
    resultArrayChars.push(String.fromCharCode(element))
  });

  return resultArrayChars.join('')
}