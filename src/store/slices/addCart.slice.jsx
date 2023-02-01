import { createSlice } from '@reduxjs/toolkit';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';

export const addCartSlice = createSlice({
    name: 'addCart',
    initialState: [],
    reducers: {
        setAddCart: (state, action) => {
            const addCart = action.payload;
            return addCart ;
        
        }
    }
})
export const getaddCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://e-commerce-api-v2.academlo.tech/api/v1/cart", getConfig())
        .then( (res) => dispatch(setAddCart(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setAddCart  } = addCartSlice.actions;

export default addCartSlice.reducer;
