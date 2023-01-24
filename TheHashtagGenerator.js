function generateHashtag(str) {
  if (str.length === 0) return false;
  const innerStr = ' ' + str;
  let resultStrInArray = [];
  let resultStr = '';

  for (let i = 0; i < innerStr.length - 1; i++) {
    if (innerStr[i] === ' ' && innerStr[i + 1] !== ' ') {
      resultStrInArray.push(innerStr[i + 1].toUpperCase());
      continue
    }
    resultStrInArray.push(innerStr[i + 1]);
  }

  resultStr = resultStrInArray.join('');

  resultStr = resultStr.replace(/ /g, '');

  return (resultStr.length !== 0 && resultStr.length < 140) ? `#${resultStr}` : false;
}