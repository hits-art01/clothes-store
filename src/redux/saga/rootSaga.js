import { spawn } from "redux-saga/effects";
import goodsWatcher from "./goodsSaga";
import { currentWatcher } from "./setCurrentSaga";

export default function* rootSaga() {
  yield spawn(goodsWatcher);
  yield spawn(currentWatcher);
}
