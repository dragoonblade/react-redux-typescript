import { all } from "redux-saga/effects";
import { productWatcher } from "./product";

export default function* rootSaga() {
    yield all([productWatcher()]);
}
