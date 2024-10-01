
import { getStrapiUrl } from '@/utils/strapi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    
    
    try {
        
        const res = await fetch(getStrapiUrl('/api/news?populate=*'))
        const date=  await res.json();
        return date
    } catch (error) {
        console.error(error.message)
    }
})
const initialState = {
    status: '',
    news: []
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.status = 'pending';
        }),
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.news = action.payload;
        }),
        builder.addCase(fetchNews.rejected, (state) => {
            state.status = 'rejected';
        })
    }
})

export default newsSlice.reducer;

