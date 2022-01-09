import { NextApiResponse } from 'next';
import nc from 'next-connect';
import Axios from 'axios';
import { ApiResponse, ExtendedRequest } from 'src/dataTypes/api.type';
import logger from '@utils/logger';
import { Product } from '@dataTypes/product.type';

/**
 * Server Side Request Handlers
 */
const handler = nc<ExtendedRequest, NextApiResponse>();
/**
 * /products GET endpoint - server side 
 *  Gives a list of products
 */
handler.get(async (req, res) => {

    const limit = req.query?.limit as string;
    const start = req.query?.start as string;

    let response: ApiResponse<Product[] | string> = {
        success: false
    }
    const url = process.env.MOCK_API_SERVER_URL + "/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6";
    logger.log("mock url", url)
    await Axios.get(url).then(res => {
        logger.info(`Response from mock server `, res.status);
        if(Array.isArray(res.data?.products)) {
            response.success = true;
            const productsList = res.data?.products;
            let startIndex = start ? parseInt(start) || 0 : 0;
            let endIndex = limit ? startIndex + (parseInt(limit) || 10) : productsList.length;

            logger.info({limit, start, length: res.data?.products?.length, sliceLength: productsList?.length}, parseInt(start) || 0, parseInt(start) + parseInt(limit))
            
            response.data = productsList.slice(startIndex, endIndex);
        } else {
            response.success = false;
            response.data = JSON.stringify(res?.data);
        }
    }).catch((err) => {
        logger.error("Error from mock server ", err?.message);

        res?.status(500);
        response.message = err?.message;
    });
    return res.json(response);
})

export default handler;

/**
 * Client Side Request Handlers
 */
type getProductApiProps = {
    limit?: number;
    start?: number;
}
export const getProducts__api: (args: getProductApiProps) => Promise<ApiResponse<Product[] | string>> = async ({
    limit,
    start=0
}) => {

    const url = '/api/products';

    const params = new URLSearchParams();
    if(limit) params.append("limit", `${limit}`);
    if(start) params.append("start", `${start}`);

    let result: ApiResponse<Product[] | string> = {
        success: false,
    }
    await Axios.get(url, {
        params
    }).then(response => {
        result = {...result, ...response.data};
    }).catch(error => {
        result = {...result, message: error.message};
    });

    return result;
}