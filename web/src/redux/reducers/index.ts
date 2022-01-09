import { combineReducers } from "redux";
import appStateReducer from "./appState.reducer";
import cartReducer from "./cart.reducer";
import productsReducer from "./products.reducer";

export const rootReducer = combineReducers({
    appState: appStateReducer,
    //PRODUCT BASED REDUCERS
    productState: productsReducer,
    //CART BASED REDUCERS
    cartState: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;