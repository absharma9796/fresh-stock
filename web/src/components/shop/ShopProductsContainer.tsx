import React from 'react';
import HeroBannner from './HeroBannner';
import ProductsListContainer from './products/ProductsListContainer';

const ShopProductsContainer = () => {

    return (
        <div className='flex flex-col w-full'>
            <HeroBannner />
            <hr className='w-full border-slate-200 dark:border-slate-600'/>
            <ProductsListContainer />
        </div>
    )
}

export default ShopProductsContainer;
