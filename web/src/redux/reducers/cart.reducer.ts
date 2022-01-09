import { CONSTANTS } from '../actions';
import produce from 'immer';
import logger from '@utils/logger';

type InitialState = {
    productsInCartById: {
        [key: string]: number
    }
}

const initialState: InitialState = {
    productsInCartById: {
        // '1': {
        //     id: '1',    
        //     name: 'Product 1',
        //     description: 'Product 1 description',
        //     created_at: '2020-01-01',
        //     created_by: '1
        //  }
    }
}

const cartReducer = (state: InitialState = initialState, action) => 
produce(state, draft => {
    switch (action.type) {
        case CONSTANTS.CART__ADD_PRODUCT: {
            const { productId } = action.payload;
            logger.debug("In reducer", productId)
            if(productId in draft.productsInCartById) {
                draft.productsInCartById[productId] += 1;
                break;
            }
            draft.productsInCartById[productId] = 1;
            break;
        }

        case CONSTANTS.CART__DECREASE_PRODUCT_COUNT: {
            const { productId } = action.payload;
            if(productId in draft.productsInCartById) {
                if(draft.productsInCartById[productId] > 1) {
                    draft.productsInCartById[productId] -= 1;
                }
            }
            break;
        }

        case CONSTANTS.CART__REMOVE_PRODUCT: {
            const { productId } = action.payload;
            if(productId in draft.productsInCartById) {
                delete draft.productsInCartById[productId];
            }
            break;
        }
    
        default:
            break;
    }
});

export default cartReducer;