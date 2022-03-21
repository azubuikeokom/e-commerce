import {createStore,combineReducers, compose, applyMiddleware} from "redux";
import { productListReducer,productDetailsReducer } from "./reducers/productsReducers";
import thunk from 'redux-thunk'
import { cartReducer } from "./reducers/cartReducer";

const initialState={};
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer
});
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));