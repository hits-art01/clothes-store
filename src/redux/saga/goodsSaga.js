import { call, put, takeEvery } from "redux-saga/effects";
import { getGoods } from "../actions";
import { GET_GOODS_WATCH } from "../types";

function* goodsWorker() {
  const response = yield call(fetch, "https://fakestoreapi.com/products");
  const data = yield call([response, response.json]);

  yield put(getGoods(data));
}

export default function* goodsWatcher() {
  yield takeEvery(GET_GOODS_WATCH, goodsWorker);
}
