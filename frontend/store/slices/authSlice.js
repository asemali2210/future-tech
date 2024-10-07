
import { createSlice } from "@reduxjs/toolkit";

const  authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null,
        user: null
    },
    reducers: {
        authLogin: (state, action) => {
            const { token, user } = action.payload;
            state.isAuthenticated = true;
            state.token = token;
            state.user = user;
        },
        authLogout: (state) => {
            state.isAuthenticated = false;
            state.token = null
            state.user = null
        }
    }
});

export const {authLogin, authLogout} = authSlice.actions;
export default authSlice.reducer;