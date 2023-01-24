function pickPeaks(array) {
  const pos = []
  const peaks = []

  function isPickBegin(array, i) {
    for (let index = i + 1; index < array.length; index++) {
      if (array[index] < array[i]) {
        return true
      }
      if (array[index] > array[i]) {
        return false
      }
    }
    return false
  }

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] > array[i - 1]) {
      if (isPickBegin(array, i)) {
        pos.push(i)
        peaks.push(array[i])
      }
    }
  }

  return { pos: pos, peaks: peaks }
}