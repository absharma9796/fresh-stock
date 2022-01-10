import { CONSTANTS } from './index';

export const addProduct__action = (productId: string) => {
    return {
        type: CONSTANTS.CART__ADD_PRODUCT,
        payload: { productId }
    }
}

export const decreaseProductCount__action = (productId: string) => {
    return {
        type: CONSTANTS.CART__DECREASE_PRODUCT_COUNT,
        payload: { productId }
    }
}

export const removeProductCount__action = (productId: string) => {
    return {
        type: CONSTANTS.CART__REMOVE_PRODUCT,
        payload: { productId }
    }
}

export const clearCart__action = () => {
    return {
        type: CONSTANTS.CART__CLEAR_CART,
    }
}