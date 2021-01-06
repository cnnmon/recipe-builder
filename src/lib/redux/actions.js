import * as Constants from "./constants";

export function addIngredient(payload) {
  return { type: Constants.ADD_INGREDIENT, payload };
}

export function removeIngredient(payload) {
  return { type: Constants.REMOVE_INGREDIENT, payload };
}

export function setIngredients(payload) {
  return { type: Constants.SET_INGREDIENTS, payload };
}

export function setQuery(payload) {
  return { type: Constants.SET_QUERY, payload };
}

export function updateRecipes(payload) {
  return { type: Constants.UPDATE_RECIPES, payload };
}

export function resetState(payload) {
  return { type: Constants.RESET_STATE, payload };
}
