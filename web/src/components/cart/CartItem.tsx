import { Button } from '@components/reusable/Button';
import { AddRounded, RemoveRounded } from '@components/reusable/icons';
import { Skeleton } from '@components/reusable/Skeleton';
import { addProduct__action, decreaseProductCount__action } from '@redux/actions';
import { useReduxDispatch, useReduxSelector } from '@redux/hooks';
import { productById__selector } from '@redux/selectors';
import React from 'react'

const CartItem = ({
    productId,
    count,
}) => {

    const product = useReduxSelector(state => productById__selector(state, productId));

    const dispatch = useReduxDispatch();

    const handleIncreaseCount = async () => {
        dispatch(addProduct__action(`${product?.productId}`))
    }

    const handleDecreaseCount = async () => {
        if(count === 1) {
            // dispatch(removeProductCount__action(`${product?.productId}`));
            return;
        }
        dispatch(decreaseProductCount__action(`${product?.productId}`))
    }

    if(!product) {
        return (
            <Skeleton 
                width={"100%"}
                height={350}
            />
        )
    }
    return (
        <div className='flex w-full lg:w-4/5 bg-slate-50 shadow dark:bg-slate-600 rounded p-4 my-3'>
            <div>
                <img 
                    src={product?.searchImage}
                    width={150}
                    style={{
                        objectFit: 'contain',
                    }}
                    className="rounded"
                />
            </div>
            <div className='flex flex-col justify-between w-full'>
                <p 
                    className="py-2 px-3 font-medium text-base sm:text-xl text-slate-700 dark:text-slate-50 h-20"
                    style={{
                        maxHeight: "5rem"
                    }}
                    title={product?.productName}
                >
                    {product?.productName}
                </p>
                <div className="flex w-full justify-between action-buttons-panel">
                    <div className="flex flex-col">
                        <label className='px-5 mx-2 font-medium text-slate-500'>
                            Price
                        </label>
                        <div className="flex text-lg items-center my-2 sm:my-0 px-5">
                            <span
                                className='mx-2 text-l-primary dark:text-d-primary font-medium'
                            >
                                ₹ {product?.price}
                            </span>
                            {
                                !!(product?.price < product?.mrp) &&
                                <span
                                    className='line-through mx-2 text-slate-400'
                                >
                                    {product?.mrp}
                                </span>
                            }
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        Qty
                        <Button
                            variant='none'
                            sizeVariant='small'
                            startIcon={<RemoveRounded />}
                            disabled={count === 1}
                            onClick={handleDecreaseCount}
                            style={{
                                padding: "6px"
                            }}
                        />
                        <span
                            className='mx-2'
                        >
                            {count}
                        </span>
                        <Button
                            variant='none'
                            sizeVariant='small'
                            startIcon={<AddRounded />}
                            onClick={handleIncreaseCount}
                            style={{
                                padding: "6px"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
