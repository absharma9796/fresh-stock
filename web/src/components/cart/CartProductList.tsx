import { useReduxSelector } from '@redux/hooks';
import { cartList__selector } from '@redux/selectors';
import React from 'react';
import CartItem from './CartItem';

const CartProductList = () => {

    const cartList = useReduxSelector(state => cartList__selector(state));

    return (
        <div className='flex justify-center w-full p-2 sm:p-10'>
            <div className="flex flex-col items-center py-5 w-full">
                {
                    cartList?.size > 0 ?
                    Array.from(cartList).map(([productId, count]) => (
                        <CartItem 
                            key={productId}
                            productId={productId}
                            count={count}
                        />
                    ))
                        :
                    <img 
                        src="/empty_cart_illustration.svg" 
                        alt="" 
                        width={300}
                        className='opacity-100'
                    />
                }
            </div>
        </div>
    )
}

export default CartProductList;
