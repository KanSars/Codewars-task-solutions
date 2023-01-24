function solution(number) {
  let arrayForSumm = [];

  function isMultiple(divider, number) {
    return number % divider == 0
  }

  for (let i = 0; i < number; i++) {
    if (isMultiple(3, i) || isMultiple(5, i)) {
      arrayForSumm.push(i)
    }
  }

  return arrayForSumm.reduce((sum, current) => sum + current, 0);
}