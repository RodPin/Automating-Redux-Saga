import produce from "immer";
import { generateTypes } from "./index";
//DONT FORGET TO DECLARE ON sagas/index.js
const allTypes = ["SET_SHIRT", "SET_SHIRT_SAGA"];

export const types = generateTypes(allTypes);

export const initialState = {
  selectedShirt: "10 Legendary"
};

export default produce((draft, action) => {
  switch (action.type) {
    case types.SET_SHIRT:
      switch (action.payload) {
        case "Ronaldo":
          draft.selectedShirt = 7;
          return draft;
        case "Messi":
          draft.selectedShirt = 10;
          return draft;
      }
    default:
      return draft;
  }
}, initialState);
