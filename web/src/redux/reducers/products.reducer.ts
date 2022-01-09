import { CONSTANTS } from '../actions';
import produce from 'immer';
import { Product } from '@dataTypes/product.type';
import logger from '@utils/logger';

type InitialState = {
    productsById: {
        [key: string]: Product
    },
    products: Product[]
}

const initialState: InitialState = {
    productsById: {
        // '1': {
        //     id: '1',    
        //     name: 'Product 1',
        //     description: 'Product 1 description',
        //     created_at: '2020-01-01',
        //     created_by: '1
        //  }
    },
    products: []
}

const productsReducer = (state: InitialState = initialState, action) => 
produce(state, draft => {
    switch (action.type) {
        case CONSTANTS.PRODUCTS__SET_PRODUCTS: {
            const { products }: {products: Product[]} = action.payload;
            logger.info('productsReducer: ', products);

            if(!Array.isArray(products)) {
                logger.error('productsReducer: products is not an array');
                break;
            }

            draft.products = [...draft.products, ...products];

            products.forEach((product, index) => {
                if(product?.productId) {
                    draft.productsById[product.productId] = product;
                }
            })
            break;
        }
    
        default:
            break;
    }
});

export default productsReducer;