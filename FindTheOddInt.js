function findOdd(array) {
  let valueObject = {};
  for (const iterator of array) {
    if (!(iterator in valueObject)) {
      valueObject[iterator] = true;
      continue;
    }
    valueObject[iterator] = !valueObject[iterator];
  }

  return +Object.keys(valueObject).find(key => valueObject[key] === true);
}