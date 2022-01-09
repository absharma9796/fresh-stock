export * from './appActions/changeAppLoadingState.action';
export * from './products.action';
export * from './cart.action';

//Global App States
export type AppStateType = keyof typeof __APP_STATES;
export const __APP_STATES = Object.freeze({
    LOADING: 'LOADING',
    LOADED: 'LOADED',
});

//Global Theme States
export type AppThemeType = 'LIGHT' | 'DARK';
export const __APP_THEMES = Object.freeze({
    LIGHT: 'LIGHT',
    DARK: 'DARK'
})

//Action types
export const CONSTANTS = Object.freeze({
    CHANGE_APP_STATE: 'CHANGE_APP_STATE',
    CHANGE_APP_THEME: 'CHANGE_APP_THEME',
    //PRODUCT BASED ACTIONS
    PRODUCTS__SET_PRODUCTS: 'PRODUCTS__SET_PRODUCTS',
    //CART BASED ACTIONS
    CART__ADD_PRODUCT: 'CART__ADD_PRODUCT',
    CART__DECREASE_PRODUCT_COUNT: 'CART__DECREASE_PRODUCT_COUNT',
    CART__REMOVE_PRODUCT: 'CART__REMOVE_PRODUCT'

});