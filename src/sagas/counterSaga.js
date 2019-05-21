import { put } from "redux-saga/effects";
import { types } from "../reducers/counterReducer";

export function* removeSaga() {
  yield put({ type: types.REMOVE });
}

export function* addSaga() {
  yield put({ type: types.ADD });
}
