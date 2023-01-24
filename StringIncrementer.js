function incrementString(strng) {
  const stringInArray = strng.split('');
  let numbersTailArray = [];
  let index = stringInArray.length - 1;
  let resultArray = [];
  let resultIncrementedNumbersTailArray = [];

  numbersTailArray = getNumbersTailArray(stringInArray);
  resultIncrementedNumbersTailArray = getFullNumbersTail(numbersTailArray);

  function getNumbersTailArray(stringInArray) {
    let numbersTailArray = [];
    while (!isNaN(stringInArray[index])) {
      numbersTailArray.unshift(stringInArray[index]);
      --index;
    }
    return numbersTailArray;
  }

  function getFullNumbersTail(numbersTailArray) {
    let resultIncrementedNumbersTailArray = [];
    const incrementedNumbersTail = +numbersTailArray.join('') + 1;
    const incrementedNumbersTailArray = incrementedNumbersTail.toString().split('');
    for (let i = 0; i < Math.max(numbersTailArray.length, incrementedNumbersTailArray.length); i++) {
      if (incrementedNumbersTailArray[i]) {
        resultIncrementedNumbersTailArray.push(incrementedNumbersTailArray[i])
      } else {
        resultIncrementedNumbersTailArray.unshift(0)
      }
    }
    return resultIncrementedNumbersTailArray;
  }

  resultArray = stringInArray.slice(0, index + 1);
  resultArray.push(resultIncrementedNumbersTailArray.join(''));

  return resultArray.join('');
}