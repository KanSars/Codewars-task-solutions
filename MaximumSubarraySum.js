function maxSequence(array) {
  let summOfSubArray;
  let arrayOfSummOfSubArray = [0];
  if (array.length) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        let subArray = array.slice(i, j + 1);
        summOfSubArray = subArray.reduce((sum, current) => sum + current, 0);
        arrayOfSummOfSubArray.push(summOfSubArray);
      }
    }
  } else {
    return 0;
  }

  return Math.max(...arrayOfSummOfSubArray);
}