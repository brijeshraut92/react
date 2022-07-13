import axios from 'axios';
import { GET_PRODUCTS , GET_PRODUCT } from './types';
const url = "https://fakestoreapi.com";

export const getProducts = () => async (dispatch) => {

    const responce = await axios.get(`${url}/products`);
    dispatch({
        type: GET_PRODUCTS,
        payload: responce.data,
    });


};