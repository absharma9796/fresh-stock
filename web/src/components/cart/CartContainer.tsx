import { Button } from '@components/reusable/Button';
import { ArrowUpwardRounded } from '@components/reusable/icons';
import Link from 'next/link';
import React from 'react';
import CartCheckoutPanel from './CartCheckoutPanel';
import CartProductList from './CartProductList';

const CartContainer = () => {
    
    return (
        <div className='flex flex-col w-full'>
            <div className="flex w-full my-4 px-4">
                <div className="flex">
                    <Link
                        href='/shop'
                        scroll={false}
                    >
                        <Button
                            variant='none'
                            startIcon={
                                <ArrowUpwardRounded className='transform -rotate-90 mr-1'/>
                            }
                        >
                            Back to Shop
                        </Button>
                    </Link>
                </div>
            </div>
            <CartCheckoutPanel />
            <hr className='w-full border-slate-200 dark:border-slate-600'/>
            <CartProductList />
        </div>
    )
}

export default CartContainer;
