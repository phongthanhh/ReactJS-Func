import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { facebookReducer } from "./reducers/facebookReducer";
import { quanLyNDReducer } from "./reducers/quanLyNDReducer";
import { shoesShopReducer } from "./reducers/shoesShopReducer";
import { TangGiamFSReducer } from "./reducers/TangGiamFSReducer";


const rootReducer = combineReducers({
    // Chứa các reducer
    TangGiamFSReducer,
    facebookReducer,
    shoesShopReducer,
    quanLyNDReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

// createStore(rootReducer, applyMiddleware(thunk))