import { RootState } from "@redux/reducers";
import logger from "@utils/logger";
import { createSelector } from "reselect";

const cartSlice = (state: RootState) => state.cartState.productsInCartById;

export const cartList__selector = createSelector(
    [cartSlice],
    (productsInCartById) => {
        return new Map(Object.entries(productsInCartById));
    }
);