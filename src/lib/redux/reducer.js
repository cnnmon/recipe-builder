import * as Constants from "./constants";

const initialState = {
  ingredients: [],
  query: "",
  recipes: [],
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case Constants.ADD_INGREDIENT:
      return Object.assign({}, state, { ingredients: state.ingredients.concat(action.payload) });
    case Constants.REMOVE_INGREDIENT:
      return Object.assign({}, state, { ingredients: state.ingredients.filter((ingredient) => ingredient !== action.payload) });
    case Constants.SET_QUERY:
      return Object.assign({}, state, { query: action.payload });
    case Constants.UPDATE_RECIPES:
      return Object.assign({}, state, { recipes: action.payload });
    case Constants.SET_INGREDIENTS:
      return Object.assign({}, state, { ingredients: action.payload });
    case Constants.RESET_STATE:
      return Object.assign({}, initialState, { ingredients: action.payload });
    default:
      return state;
  }
}

export default rootReducer;
