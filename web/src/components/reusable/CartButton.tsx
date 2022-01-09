import { useReduxSelector } from '@redux/hooks';
import { cartList__selector } from '@redux/selectors';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { CartEmptyRounded, CartFullRounded } from './icons';

const CartButton = () => {

    const { theme } = useTheme();
    const router = useRouter();

    const cartList = useReduxSelector(state => cartList__selector(state));

    // const handleClick = () => {
    //     setcartCount(prev => prev + 1)
    // }

    return (
        <button 
            onClick={() => router.push('/cart')}
            className={`relative grid place-content-center rounded ${theme==="light" ? "hover:bg-l-primaryLight" : "hover:bg-slate-600"} p-2`}
        >
            {
                !!cartList?.size ?
                <CartFullRounded 
                    className={`text-l-primary dark:text-white`}
                />
                    :
                <CartEmptyRounded 
                    className={`text-l-primary dark:text-white`}
                />
            }
            {
                !!cartList?.size &&
                <div className="grid place-items-center absolute -top-2 -right-2 h-6 w-6 bg-red-500 text-white rounded-full">
                    {cartList?.size > 9 ? "9+" : cartList?.size}
                </div>
            }
        </button>
    )
}

export default CartButton
