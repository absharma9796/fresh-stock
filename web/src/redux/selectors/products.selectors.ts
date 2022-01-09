import { RootState } from "@redux/reducers";
import logger from "@utils/logger";
import { createSelector } from "reselect";

const productsListSlice = (state: RootState) => state.productState.products;

export const productList__selector = createSelector(
    [productsListSlice],
    (productsList) => {
        // return Object.values(productsById);
        return productsList;
    }
);

const productByIdSlice = (state: RootState, productId: number) => state.productState.productsById[productId];
export const productById__selector = createSelector(
    [productByIdSlice],
    (product) => {
        return product;
    }
)