import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducer";
import rootSaga from "./saga";

export interface Review {
    customer: string;
    review: string;
    score: number;
}

export interface Sales {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

export interface ProductState {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: Review[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: Sales[];
}

export interface DefaultState {
    product: ProductState;
}

const defaultState: DefaultState = {
    product: {
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
    },
};

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

export default store;
