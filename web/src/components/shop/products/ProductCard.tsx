import { Button } from '@components/reusable/Button';
import { RemoveRounded } from '@components/reusable/icons';
import { AddRounded } from '@components/reusable/icons/AddRounded.icon';
import { Product } from '@dataTypes/product.type';
import { addProduct__action, decreaseProductCount__action, removeProductCount__action } from '@redux/actions';
import { useReduxSelector } from '@redux/hooks';
import { cartList__selector } from '@redux/selectors';
import React from 'react';
import { useDispatch } from 'react-redux';

type ProductCardProps = {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({
    product
}) => {

    const dispatch = useDispatch();

    const cartList = useReduxSelector(state => cartList__selector(state));

    const handleAddToCart = async () =>  {
        // alert(`Product Id', ${product?.productId}`)
        dispatch(addProduct__action(`${product?.productId}`));
    }
    
    const handleIncreaseCount = async () => {
        dispatch(addProduct__action(`${product?.productId}`))
    }

    const handleDecreaseCount = async () => {
        if(cartList.get(`${product?.productId}`) === 1) {
            dispatch(removeProductCount__action(`${product?.productId}`));
            return;
        }
        dispatch(decreaseProductCount__action(`${product?.productId}`))
    }

    return (
        <div 
            className='flex flex-col bg-white dark:bg-slate-600 rounded-lg shadow w-full'
            style={{
                minHeight: "400px",
                maxWidth: "350px"
            }}
        >
            <img 
                width={"100%"}
                height={"350px"}
                src={product?.images[0]?.src}
                className='rounded-t-lg'
            />
            <div className="flex flex-col">
                <p 
                    className="py-2 px-3 font-medium text-sm text-slate-700 dark:text-slate-50 w-5/6 h-20"
                    style={{
                        maxHeight: "5rem"
                    }}
                    title={product?.productName}
                >
                    {product?.productName}
                </p>
                <div className="flex w-full justify-center px-2">
                    <hr className='w-full border-slate-200 dark:border-slate-500'/>
                </div>
                <div className="flex flex-col text-xs sm:text-base sm:flex-row sm:justify-between items-center p-3">
                    <div className="flex items-center my-2 sm:my-0">
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
                    {
                        cartList.has(`${product?.productId}`) ?
                        <div className="flex items-center gap-1">
                            Qty
                            <Button
                                variant='none'
                                sizeVariant='small'
                                startIcon={<RemoveRounded />}
                                onClick={handleDecreaseCount}
                                style={{
                                    padding: "6px"
                                }}
                            />
                            <span
                                className='mx-2'
                            >
                                {cartList.get(`${product?.productId}`)}
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
                            :
                        <Button
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
