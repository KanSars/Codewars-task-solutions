function lookSay(number) {
  let arrayNumber = String(number).split('').map((num) => Number(num))
  let sequenceArray = [arrayNumber[0]];
  let resultArray = [];

  arrayNumber.forEach((number, index) => {
    if (index == 0) return;
    if (sequenceArray.includes(number)) {
      sequenceArray.push(number);
      return;
    } else {
      setCortage(resultArray, sequenceArray)
      sequenceArray.push(number);
      return;
    }
  });

  setCortage(resultArray, sequenceArray);

  function setCortage(resultArray, sequenceArray) {
    resultArray.push(sequenceArray.length);
    resultArray.push(sequenceArray[0]);
    sequenceArray.length = 0;
  }

  return +resultArray.join('');
}