function cakes(recipe, available) {
  const ingredientsEnough = {};
  let arrayingredientsEnough = [];
  let possibleToBake;

  for (ingredient in recipe) {
    if (!(ingredient in available)) {
      ingredientsEnough[ingredient] = 0;
      continue;
    }
    ingredientsEnough[ingredient] = Math.floor(available[ingredient] / recipe[ingredient]);
  }

  arrayingredientsEnough = Object.values(ingredientsEnough);
  possibleToBake = Math.min(...arrayingredientsEnough);

  return possibleToBake;
}