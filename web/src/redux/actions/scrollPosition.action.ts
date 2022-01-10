import { AllowedPages } from '@dataTypes/pages.type';
import { CONSTANTS } from './index';

export const updateScrollPosition__action = (pageName: AllowedPages, scrollPos: number) => {
    return {
        type: CONSTANTS.SCROLL__UPDATE_SCROLL_POS,
        payload: { pageName, scrollPos }
    }
}