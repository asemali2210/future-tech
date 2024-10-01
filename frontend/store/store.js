import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import  newsSlice  from './slices/newsSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        news: newsSlice,
    }
})

export default store;