import produce from "immer";

//DONT FORGET TO DECLARE ON index.js
const allTypes = ["ADD", "ADD_SAGA", "REMOVE_SAGA", "REMOVE"];
function generateTypes(allTypes) {
  const types = {};
  allTypes.forEach(t => {
    types[t] = t;
  });
  return types;
}
export const types = generateTypes(allTypes);

export const initialState = {
  counter: 1
};

export default produce((draft, action) => {
  switch (action.type) {
    case types.ADD:
      draft.counter++;
      return draft;
    case types.REMOVE:
      draft.counter--;
    default:
      return draft;
  }
}, initialState);

export function getAction(name) {
  const func = name.toLowerCase().replace(/([_][a-z])/gi, $1 => {
    return $1.toUpperCase().replace("_", "");
  });
  const actionObj = {};
  actionObj[func] = action => ({ type: name, payload: action });
  return actionObj;
}
