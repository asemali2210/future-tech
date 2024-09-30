
import { createSlice } from "@reduxjs/toolkit";

const  authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null,
    },
    reducers: {
        authLogin: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload
        },
        authLogout: (state) => {
            state.isAuthenticated = false;
            state.token = null
        }
    }
});

export const {authLogin, authLogout} = authSlice.actions;
export default authSlice.reducer;