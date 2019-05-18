import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootStore } from "./rootStore";
import { rootSaga } from "./rootSaga";

const rootReducer = combineReducers(rootStore);

let composeEnchancers = compose;

const sagaMiddleware = createSagaMiddleware();

if (__DEV__) {
  composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
