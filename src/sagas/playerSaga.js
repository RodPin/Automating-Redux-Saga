import { put } from "redux-saga/effects";
import { types } from "../reducers/playerReducer";

export function* setPlayerSaga(action) {
  yield put({ type: types.SET_PLAYER, payload: action.payload });
}
