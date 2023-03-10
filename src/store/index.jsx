import { configureStore } from '@reduxjs/toolkit'
import  addCartSlice  from './slices/addCart.slice'
import  isLoadingSlice  from './slices/isLoading.slice'
import  newsSlice  from './slices/news.slice'
import purchasesSlice from './slices/purchases.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        news: newsSlice,
        purchases: purchasesSlice,
        addCart: addCartSlice

    }
})
