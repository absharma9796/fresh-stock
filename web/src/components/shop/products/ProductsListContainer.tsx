import { Product } from '@dataTypes/product.type';
import logger from '@utils/logger';
import React, { useEffect, useState } from 'react';
import { getProducts__api } from 'src/pages/api/products';
import ProductCard from './ProductCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Skeleton } from '@components/reusable/Skeleton';
import { Button } from '@components/reusable/Button';
import { ArrowUpwardRounded } from '@components/reusable/icons';
import { useReduxDispatch, useReduxSelector } from '@redux/hooks';
import { productList__selector } from '@redux/selectors/products.selectors';
import { setProducts__action } from '@redux/actions';

type ProductListContainerProps = {
    
}

const ProductsListContainer: React.FC<ProductListContainerProps> = ({ 
    
}) => {

    const dispatch = useReduxDispatch();

    const [hasMore, sethasMore] = useState(true);
    const productsList = useReduxSelector(state => productList__selector(state));
    // const [productsList, setproductsList] = useState<Product[]>([]);

    const getMoreProducts = async () => {
        const { success, data } = await getProducts__api({
            limit: 2,
            start: productsList?.length
        });
        if(success && Array.isArray(data)) {
            logger.info("productlist ", data)
            if(productsList?.length && !data?.length) sethasMore(false);
            dispatch(setProducts__action(data));
            // setproductsList((prev) => [...prev, ...data]);
        }
    }

    const handleBackToTop = () => {
        const bodyLayout = document.getElementById("scrollable-body-layout")
        bodyLayout.scrollTop = 0;
    }

    useEffect(() => {
        const loadProductsList = async () => {
            getMoreProducts();
        }
        loadProductsList();
        return () => {}
    }, []);

    return (
        <div className='flex justify-center w-full p-2 sm:p-10'>
            {
                !!productsList?.length ?
                <InfiniteScroll
                    className='grid w-auto justify-items-center grid-cols-2 gap-2 sm:gap-10'
                    dataLength={productsList?.length}
                    next={getMoreProducts}
                    hasMore={hasMore}
                    loader={
                        <>
                            <Skeleton 
                                width={350}
                                height={450}
                            />
                            <Skeleton 
                                width={350}
                                height={450}
                            />
                        </>
                    }
                    endMessage={(
                        <div className="flex flex-col items-center col-span-2 w-full justify-center text-lg font-medium text-slate-400 dark:text-slate-500">
                            <div className="flex my-3">
                                <Button
                                    variant='none'
                                    startIcon={<ArrowUpwardRounded />}
                                    onClick={handleBackToTop}
                                >
                                    Back to top
                                </Button>
                            </div>
                            <span
                                className='w-full text-center'
                            >
                                Hurray you have explored everything!
                            </span>
                        </div>
                    )}
                    scrollableTarget="scrollable-body-layout"
                >
                    {
                        productsList?.map((product, index) => (
                            <ProductCard 
                                key={`${product?.productId}-${index}`}
                                product={product}
                            />
                        ))
                    }
                </InfiniteScroll>
                    :
                <div className="grid w-auto justify-items-center grid-cols-2 gap-2 sm:gap-10">
                    <Skeleton 
                        width={350}
                        height={450}
                    />
                    <Skeleton 
                        width={350}
                        height={450}
                    />
                </div>
            }
        </div>
    )
}

export default ProductsListContainer;
