import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS } from '../constantes/productConstantes';
import axios from 'axios';

const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get("/api/products");
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    }
    catch(error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
}

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST, payload: productID});
        const {data} = await axios.get("/api/products/" + productId);
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } 
    catch (erroe) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
}
export {listProducts, detailsProduct}