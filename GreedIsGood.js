function score(dice) {
  const diesOfDice = {};
  let resultScore = 0;

  const Rules = {
    three: {
      1: 1000,
      6: 600,
      5: 500,
      4: 400,
      3: 300,
      2: 200,
    },
    one: {
      1: 100,
      5: 50,
    }
  }

  dice.forEach(die => {
    if (die in diesOfDice) {
      diesOfDice[die]++;

    } else {
      diesOfDice[die] = 1;
    }
  });

  for (const key in diesOfDice) {
    switch (diesOfDice[key]) {
      case 5:
        resultScore += Rules.one[key] || 0;
      case 4:
        resultScore += Rules.one[key] || 0;
      case 3:
        resultScore += Rules.three[key]
        break;
      case 2:
        resultScore += Rules.one[key] || 0;
      case 1:
        resultScore += Rules.one[key] || 0;
        break;
      default:
        break;
    }
  }

  return resultScore;
}