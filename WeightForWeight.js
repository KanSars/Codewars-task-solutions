function orderWeight(strng) {
  let array = strng.split(' ')
  let weightsObj = {};
  let resultArray = [];

  function getNumberWeight(number) {
    const numberInArray = `${number}`.split('');
    let result = numberInArray.reduce((sum, current) => sum + +current, 0);
    return result;
  }

  array.forEach(number => {
    if (weightsObj[getNumberWeight(number)]) {
      weightsObj[getNumberWeight(number)].push(number)
    } else {
      weightsObj[getNumberWeight(number)] = [number]
    }
  });

  for (let weight in weightsObj) {
    weightsObj[weight] = weightsObj[weight].sort();
    resultArray.push(...weightsObj[weight])
  }

  return resultArray.join(' ');
}