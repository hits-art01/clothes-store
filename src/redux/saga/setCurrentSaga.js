import { put, takeEvery } from "redux-saga/effects";
import { setCurrentProduct } from "../actions";
import { SET_CURRENT_SAGA } from "../types";

function* currentWorker(action) {
  yield put(setCurrentProduct(action.payload));
  console.log(action);
}

export function* currentWatcher() {
  yield takeEvery(SET_CURRENT_SAGA, currentWorker);
}
