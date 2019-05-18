import { takeLatest } from "redux-saga/effects";
import { types } from "../reducers/index";
import * as sagas from "./counterSaga";

//function to automate generation of saga
function generateSaga(type, saga, effect, name) {
  const func = name.toLowerCase().replace(/([_][a-z])/gi, $1 => {
    return $1.toUpperCase().replace("_", "");
  });
  return effect(type[name], saga[func]);
}

//get any sagas
const anySagas = [];
//get any sagas 2
const anySagas2 = [];

const CounterSagas = [
  generateSaga(types, sagas, takeLatest, "ADD_SAGA"),
  generateSaga(types, sagas, takeLatest, "REMOVE_SAGA")
];

//merge them all

export const allSagas = [...anySagas, ...anySagas2, ...CounterSagas];
