import produce from "immer";
import { generateTypes } from "./index";
//DONT FORGET TO DECLARE ON sagas/index.js
const allTypes = ["ADD", "ADD_SAGA", "REMOVE_SAGA", "REMOVE"];

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
