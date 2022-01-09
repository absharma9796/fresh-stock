import AppLayout from '@components/layouts/AppLayout';
import ShopProductsContainer from '@components/shop/ShopProductsContainer';
import logger from '@utils/logger';
import { GetServerSideProps } from 'next';
import React from 'react'
import { getProducts__api } from '../api/products';

const ShopProductsPage = () => {
    return (
        <AppLayout>
            <ShopProductsContainer />
        </AppLayout>
    )
}

export default ShopProductsPage;
