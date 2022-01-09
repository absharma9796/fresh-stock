import { Product } from '@dataTypes/product.type';
import { CONSTANTS } from './index';

export const setProducts__action = (products: Product[]) => {
    return {
        type: CONSTANTS.PRODUCTS__SET_PRODUCTS,
        payload: { products }
    }
}