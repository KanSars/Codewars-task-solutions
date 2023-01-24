function moveZeros(arr) {
  let resultArray = [];
  let zeroArray = [];

  arr.forEach(element => {
    if (Number.isInteger(element) && element === 0) {
      zeroArray.push(element)
    } else {
      resultArray.push(element)
    }
  });
  resultArray.push(...zeroArray)

  return resultArray
}