import { AnyAction, Reducer } from "redux";
import { ProductState } from "..";
import { ActionTypes } from "../actions";

const initialState: ProductState = {
    id: "",
    title: "",
    image: "",
    subtitle: "",
    brand: "",
    reviews: [],
    retailer: "",
    details: [],
    tags: [],
    sales: [],
};

const product: Reducer<ProductState> = (
    state = initialState,
    action: AnyAction
) => {
    const { type, product, error } = action;
    console.log(action);

    switch (type) {
        case ActionTypes.GET_PRODUCT:
            return { ...state, fetching: true };
        case ActionTypes.GET_PRODUCT_SUCCESS:
            return { ...state, ...product, fetching: false };
        case ActionTypes.GET_PRODUCT_FAILURE:
            return { ...state, error, fetching: true };
        default:
            return state;
    }
};

export default product;
