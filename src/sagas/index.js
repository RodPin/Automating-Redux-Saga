import { takeLatest } from "redux-saga/effects";

import { types as counterTypes } from "../reducers/counterReducer";
import { types as playerTypes } from "../reducers/playerReducer";

import * as counterSagas from "./counterSaga";
import * as playerSagas from "./playerSaga";

//function to automate generation of saga
function generateSaga(type, saga, effect, name) {
  const func = name.toLowerCase().replace(/([_][a-z])/gi, $1 => {
    return $1.toUpperCase().replace("_", "");
  });
  return effect(type[name], saga[func]);
}

//get any sagas
const anySagas = [];
const PlayerSagas = [
  generateSaga(playerTypes, playerSagas, takeLatest, "SET_PLAYER_SAGA")
];

const CounterSagas = [
  generateSaga(counterTypes, counterSagas, takeLatest, "ADD_SAGA"),
  generateSaga(counterTypes, counterSagas, takeLatest, "REMOVE_SAGA")
];

//merge them all

export const allSagas = [...anySagas, ...PlayerSagas, ...CounterSagas];
