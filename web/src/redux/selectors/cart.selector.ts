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

const productsByIdSlice = (state: RootState) => state.productState.productsById;
export const cartTotal__selector = createSelector(
    [cartSlice, productsByIdSlice],
    (productsInCartById, productsById) => {
        let totalPrice = 0;
        let totalMrp = 0;
        logger.info({productsByIdSlice})
        Object.entries(productsInCartById).forEach(([id, count]) => {
            logger.log(`id: ${id}, count: ${count}`);
            totalPrice += productsById[id]?.price * count;
            totalMrp += productsById[id]?.mrp * count;
        });
        return {totalPrice, totalMrp};
    }
)