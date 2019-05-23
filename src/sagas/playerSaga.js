import { put, call } from "redux-saga/effects";
import { types } from "../reducers/playerReducer";
import { setShirtSaga } from "./shirtSaga";
import { addSaga } from "./counterSaga";
export function* setPlayerSaga(action) {
  yield put({ type: types.SET_PLAYER, payload: action.payload });
  yield call(setShirtSaga, action.payload);
  yield call(addSaga);
}
