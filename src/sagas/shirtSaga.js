import { put } from "redux-saga/effects";
import { types } from "../reducers/shirtReducer";

export function* setShirtSaga(action) {
  yield put({ type: types.SET_SHIRT, payload: action.payload });
}
