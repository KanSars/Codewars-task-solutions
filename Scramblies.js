function scramble(str1, str2) {
  let str1Map = createMapFromString(str1);
  let str2Map = createMapFromString(str2);

  function createMapFromString(string) {
    let stringMap = new Map();
    for (let i = 0; i < string.length; i++) {
      if (stringMap.has(string[i])) {
        stringMap.set(string[i], stringMap.get(string[i]) + 1)
      } else {
        stringMap.set(string[i], 1);
      }
    }
    return stringMap;
  }

  for (let [key, value] of str2Map) {
    if (!str1Map.has(key) || str1Map.get(key) < value)
      return false;
  }
  return true
}