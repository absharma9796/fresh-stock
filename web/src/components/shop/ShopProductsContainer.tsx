import { updateScrollPosition__action } from '@redux/actions';
import { useReduxDispatch, useReduxSelector } from '@redux/hooks';
import React, { useEffect } from 'react';
import HeroBannner from './HeroBannner';
import ProductsListContainer from './products/ProductsListContainer';

const ShopProductsContainer = () => {

    const dispatch = useReduxDispatch();
    const prevScrollPosition = useReduxSelector(state => state.scrollPositionState.pagesByName['shop']);

    useEffect(() => {
        const scrollableTarget = document.getElementById("scrollable-body-layout");
        scrollableTarget.addEventListener("scroll", () => {
            const scrollPosition = scrollableTarget.scrollTop;
            dispatch(updateScrollPosition__action('shop', scrollPosition));
        });
        scrollableTarget.scrollTo(0, prevScrollPosition);
        return () => {
            scrollableTarget.removeEventListener("scroll", () => {});
        }
    }, []);

    return (
        <div className='flex flex-col w-full'>
            <HeroBannner />
            <hr className='w-full border-slate-200 dark:border-slate-600'/>
            <ProductsListContainer />
        </div>
    )
}

export default ShopProductsContainer;
