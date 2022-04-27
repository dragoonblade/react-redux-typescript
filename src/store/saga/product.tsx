import { put, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import { ActionTypes } from "../actions";
import { getProductSuccess, getProductFailure } from "../actions";
import { ProductState } from "..";
import products from "../../resources/stackline_frontend_assessment_data_2021.json";

export function* productSaga(action: AnyAction) {
    const id: string = action.id
    const response: ProductState[] = yield products;
    const product = response.find((item) => item.id === id);

    if (product) {
        yield put(getProductSuccess(product))
    } else {
        yield put(getProductFailure("Product not found"))
    }
}

export function* productWatcher() {
    yield takeLatest(ActionTypes.GET_PRODUCT, productSaga)
}