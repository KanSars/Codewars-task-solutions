function queueTime(customers, n) {
  let nArray = new Array(n).fill(0)

  function getIndexFirstMinElement(array) {
    let minItemOfArray = Math.min(...array)
    return array.findIndex(item => item == minItemOfArray)
  }

  customers.forEach(element => {
    nArray[getIndexFirstMinElement(nArray)] += element;
  });

  return Math.max(...nArray)
}