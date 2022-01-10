import { CONSTANTS } from '../actions';
import produce from 'immer';
import logger from '@utils/logger';
import { AllowedPages } from '@dataTypes/pages.type';

type InitialState = {
    pagesByName: {
        [key in AllowedPages]: number
    }
}

const initialState: InitialState = {
    pagesByName: {
        shop: 0,
        cart: 0
    }
}

const scrollPositionReducer = (state: InitialState = initialState, action) => 
produce(state, draft => {
    switch (action.type) {
        case CONSTANTS.SCROLL__UPDATE_SCROLL_POS: {
            const { pageName, scrollPos }: {pageName: AllowedPages, scrollPos: number} = action.payload;
            
            if(!(pageName in draft.pagesByName)) {
                logger.info('scrollPositionReducer: pageName not found AllowedPages');
                break;
            }

            draft.pagesByName[pageName] = scrollPos;

            break;
        }
    
        default:
            break;
    }
});

export default scrollPositionReducer;