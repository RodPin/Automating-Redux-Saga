import { all } from "redux-saga/effects";

import { allSagas } from "../sagas";

export function* rootSaga() {
  yield all([...allSagas]);
}
