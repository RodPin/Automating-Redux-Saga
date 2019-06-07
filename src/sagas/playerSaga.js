import { put } from "redux-saga/effects";
import { types as counterTypes } from "../reducers/counterReducer";
import { types as playerTypes } from "../reducers/playerReducer";
import { types as shirtTypes } from "../reducers/shirtReducer";

export function* setPlayerSaga(action) {
  yield put({ type: playerTypes.SET_PLAYER, payload: action.payload });
  yield put({ type: shirtTypes.SET_SHIRT_SAGA, payload: action.payload });
  yield put({ type: counterTypes.ADD_SAGA });
}
