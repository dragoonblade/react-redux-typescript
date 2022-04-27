import { AnyAction } from "redux";
import { ProductState } from "..";

export enum ActionTypes {
    GET_PRODUCT = "GET_PRODUCT",
    GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS",
    GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE",
}

const getProduct = (id: string): AnyAction => {
    return{
    type: ActionTypes.GET_PRODUCT,
    id,
}};

const getProductSuccess = (product: ProductState): AnyAction => ({
    type: ActionTypes.GET_PRODUCT_SUCCESS,
    product,
});

const getProductFailure = (error: string): AnyAction => ({
    type: ActionTypes.GET_PRODUCT_FAILURE,
    error,
});

export { getProduct, getProductSuccess, getProductFailure };
