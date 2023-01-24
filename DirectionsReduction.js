function dirReduc(arr) {
  const digitalEquivalentsWindRose = {
    NORTH: 1,
    SOUTH: -1,
    WEST: 2,
    EAST: -2,
  };
  let digitalCompassPointsArr = arrayInDigitalEquivalentsArr(arr, digitalEquivalentsWindRose);

  while (true) {
    const currentArrLength = digitalCompassPointsArr.length;
    digitalCompassPointsArr = shortcut(digitalCompassPointsArr)
    if (currentArrLength === digitalCompassPointsArr.length) {
      break
    }
  }

  return digitalEquivalentsArrInArray(digitalCompassPointsArr, digitalEquivalentsWindRose)
}

function arrayInDigitalEquivalentsArr(arr, digitalEquivalentsWindRose) {
  const resultArr = [];
  arr.forEach(compassPoint => {
    resultArr.push(digitalEquivalentsWindRose[compassPoint]);
  });

  return resultArr;
}

function shortcut(digitalCompassPointsArr) {
  const shortenedDigitalCompassPointsArr = digitalCompassPointsArr;
  for (let i = 0; i < shortenedDigitalCompassPointsArr.length - 1; i++) {
    if ((shortenedDigitalCompassPointsArr[i] + shortenedDigitalCompassPointsArr[i + 1]) === 0) {
      shortenedDigitalCompassPointsArr.splice(i, 2);
    }
  }

  return shortenedDigitalCompassPointsArr;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function digitalEquivalentsArrInArray(digitalEquivalentsArr, digitalEquivalentsWindRose) {
  const resultArr = [];
  digitalEquivalentsArr.forEach(compassPoint => {
    resultArr.push(getKeyByValue(digitalEquivalentsWindRose, compassPoint))
  });

  return resultArr;
}