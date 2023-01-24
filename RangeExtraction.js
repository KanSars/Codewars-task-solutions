function solution(list) {
  let array = list.sort((a, b) => a - b);
  const resultArray = [];
  let groupItem = [];

  function isGroup(groupItem, nexItem) {
    return (groupItem[groupItem.length - 1] == (nexItem - 1))
  }

  function getEdges(groupItem) {
    if (groupItem.length == 1) return groupItem[0];
    if (groupItem.length == 2) return `${groupItem[0]},${groupItem[groupItem.length - 1]}`;
    return `${groupItem[0]}-${groupItem[groupItem.length - 1]}`
  }

  for (let i = 0; i < array.length; i++) {
    if (groupItem.length === 0) {
      groupItem = [array[i]]
    }

    if (!(i == array.length - 1) && isGroup(groupItem, array[i + 1])) {
      groupItem.push(array[i + 1])
    } else {
      resultArray.push(getEdges(groupItem))
      groupItem = [array[i + 1]]
    }
  }

  return resultArray.join(',')
}