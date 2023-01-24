function humanReadable(seconds) {
  function getSeconds(seconds) {
    return seconds % 60;
  }

  function getMinuts(seconds) {
    return Math.floor(seconds / 60) % 60;
  }

  function getHours(seconds) {
    return Math.floor(seconds / 3600);
  }

  function digitNumber(number) {
    let numberInArray = Array.from(number.toString());
    while (numberInArray.length < 2) {
      numberInArray.unshift('0');
    }
    return numberInArray.join('');
  }

  return `${digitNumber(getHours(seconds))}:${digitNumber(getMinuts(seconds))}:${digitNumber(getSeconds(seconds))}`;
}