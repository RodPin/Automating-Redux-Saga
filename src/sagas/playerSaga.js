import { put, call } from "redux-saga/effects";
import { types } from "../reducers/playerReducer";
import { setShirtSaga } from "./shirtSaga";

export function* setPlayerSaga(action) {
  yield put({ type: types.SET_PLAYER, payload: action.payload });
  yield call(setShirtSaga, action.payload);
}
