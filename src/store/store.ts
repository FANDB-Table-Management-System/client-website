import {configureStore} from '@reduxjs/toolkit'
import cartDishReducer from './slices/cartDishSlice';
import qtyReducer from './slices/qtySlice'
import authReducer from './slices/authSlice'
const store=configureStore({
    reducer:{
        cart:cartDishReducer,
        quantity:qtyReducer,
        auth:authReducer,
    }
});

export default store;
