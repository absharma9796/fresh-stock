import { Button } from '@components/reusable/Button';
import { Skeleton } from '@components/reusable/Skeleton';
import { clearCart__action } from '@redux/actions';
import { useReduxDispatch, useReduxSelector } from '@redux/hooks';
import { cartList__selector, cartTotal__selector } from '@redux/selectors';
import React from 'react'

const CartCheckoutPanel = () => {

    const cartList = useReduxSelector(state => cartList__selector(state));
    const cartTotal = useReduxSelector(state => cartTotal__selector(state));

    const dispatch = useReduxDispatch();

    const handleCheckout = () => {
        dispatch(clearCart__action());
    }

    return (
        <div className='flex w-full'>
            {
                !cartList ?
                <div className="flex flex-col p-5">
                    <Skeleton 
                        width={"100%"}
                        height={200}
                        className='my-5'
                    />
                </div> 
                    :
                <div className="flex flex-col w-full p-5">
                    <div className='text-2xl font-semibold text-slate-600 dark:text-slate-400'>
                        {
                            cartList.size > 0 ? 
                            <div className='flex flex-col sm:flex-row w-full sm:justify-between'>
                                <div className='flex'>
                                    You have {cartList.size} items in your cart.<br />
                                </div>
                                <div className="flex items-center justify-between sm:justify-end">
                                    <div className='mr-4 my-2 sm:my-0'>
                                        Your total is 
                                        <span className='text-l-primary dark:text-d-primary ml-2'>
                                            ₹ {cartTotal?.totalPrice} 
                                            {
                                                !!(cartTotal?.totalPrice < cartTotal?.totalMrp) &&
                                                <span className='line-through mx-4 text-slate-400'>{cartTotal?.totalMrp}</span>
                                            }
                                        </span>
                                    </div>
                                    <Button
                                        onClick={handleCheckout}
                                    >
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                                :
                            <div>
                                Your cart is empty. <br />Come back once you have shopped.
                            </div>
                        }
                    </div>
                </div>   
            }
        </div>
    )
}

export default CartCheckoutPanel;
