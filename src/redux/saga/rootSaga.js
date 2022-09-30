import { spawn } from "redux-saga/effects";
import goodsWatcher from "./goodsSaga";

export default function* rootSaga() {
  yield spawn(goodsWatcher);
}
