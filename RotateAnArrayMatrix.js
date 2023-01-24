function rotate(matrix, direction) {
  let element = [];
  let newMatrix = [];
  const maxIndex = Math.max(matrix.length, matrix[0].length)

  for (let i = 0; i < maxIndex; i++) {
    matrix.forEach(innerArray => {
      if (innerArray[i]) element.unshift(innerArray[i])
    });
    element = (direction === 'counter-clockwise') ? element.reverse() : element;
    if (element.length) newMatrix.push(element);
    element = [];
  }
  newMatrix = (direction === 'counter-clockwise') ? newMatrix.reverse() : newMatrix;
  return newMatrix;
}