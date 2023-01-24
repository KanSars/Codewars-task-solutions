snail = function (array) {
  let xMax = array[0].length - 1;
  let xMin = 0;
  let yMax = array.length - 1;
  let yMin = 0;
  let resultArray = [];

  while (true) {
    for (let i = xMin; i <= xMax; i++) {
      resultArray.push(array[yMin][i])
    }
    yMin++;
    if (yMin > yMax) break

    for (let j = yMin; j <= yMax; j++) {
      resultArray.push(array[j][xMax])
    }
    xMax--;
    if (xMin > xMax) break

    for (let i = xMax; i >= xMin; i--) {
      resultArray.push(array[yMax][i])
    }
    yMax--;
    if (yMin > yMax) break

    for (let j = yMax; j >= yMin; j--) {
      resultArray.push(array[j][xMin])
    }
    xMin++;
    if (xMin > xMax) break
  }

  return resultArray;
}