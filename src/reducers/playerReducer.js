import produce from "immer";
import { generateTypes } from "./index";
//DONT FORGET TO DECLARE ON sagas/index.js
const allTypes = ["SET_PLAYER", "SET_PLAYER_SAGA"];

export const types = generateTypes(allTypes);

export const initialState = {
  selectedPlayer: "Ronaldinho"
};

export default produce((draft, action) => {
  switch (action.type) {
    case types.SET_PLAYER:
      draft.selectedPlayer = action.payload;
      return draft;
    default:
      return draft;
  }
}, initialState);
