import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios'



export const newsSlice = createSlice({
    name: 'news',
    initialState: [],
    reducers: {
        setNews: (state, action) =>{
            const news = action.payload
            return news

        }

    }
})
export const getNewsThunk = () => dispatch => {
    dispatch(setIsLoading(true))
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products/')
    .then(res => dispatch(setNews(res.data)))
    .finally(()=> dispatch(setIsLoading(false)))
} 
export const filterNewsCategoryThunk = (id) => dispatch => {
    dispatch(setIsLoading(true))
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
    // ? antes de category.. Id con I mayuscula y lo que pasas como parametro
    .then(res => dispatch(setNews(res.data)))
    .finally(()=> dispatch(setIsLoading(false)))
} 
export const filterProductsHeadlineThunk = (productsSearch) => dispatch => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${productsSearch}`)
        .then(res => dispatch(setNews(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

/* export const filterProductsPriceThunk = (productsPrice) => dispatch => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?price=${productsPrice}`)
        .then(res => dispatch(setNews(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
} */

export const { setNews  } = newsSlice.actions;

export default newsSlice.reducer;
