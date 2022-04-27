import { combineReducers, Reducer } from "redux";
import product from "./product";

const rootReducer: Reducer = combineReducers({ product });

export default rootReducer;
