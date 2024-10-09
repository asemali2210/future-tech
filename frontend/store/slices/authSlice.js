import { getStrapiUrl } from "@/utils/strapi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk('user/login', 
    async (values)=> {
        try {
            if (typeof window !== 'undefined') {
                const res = await fetch(getStrapiUrl('/api/auth/local'), {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                const { jwt,user } = await res.json();
                localStorage.setItem('token', jwt);
                return {jwt,user}
            }
            return null;  // Return null if no token is found or it's running on server-side

           
        
        } catch (err) {
            console.log(err.message)
        }
})



export const checkAuth = createAsyncThunk('user/isAuthenticated', 
    async () => {
        try {
            if (typeof window !== 'undefined') {
                const token = localStorage.getItem('token');
                if (token) {
                    const res = await fetch(getStrapiUrl('/api/users/me'), {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (!res.ok) {
                        throw new Error('Failed to fetch user data');
                    }

                    const userData = await res.json();
                    return {userData, token};
                }
            }
            return null;  // Return null if no token is found or it's running on server-side
        } catch (err) {
            console.error(err.message);
            throw err;  // Re-throw the error to handle it properly in the slice or component
        }
    }
);

const  authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null,
        user: null,
        status: null
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
    },
    extraReducers: (builder) => {
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.user = action.payload.userData
            state.token = action.payload.token
            state.isAuthenticated = true;
            state.status = 'fulfilled';

        }),
        builder.addCase(checkAuth.pending, (state) => {
            state.status = 'pending';
            state.isAuthenticated = false;

        }),
        builder.addCase(checkAuth.rejected, (state)=> {
            state.status = 'rejected';
            state.isAuthenticated = false;


        }),
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.token = action.payload.jwt
            state.user = action.payload.user
            state.isAuthenticated = true;
            state.status = 'fulfilled';

        }),
        builder.addCase(userLogin.pending, (state) => {
            state.status = 'pending';
            state.isAuthenticated = false;

        }),
        builder.addCase(userLogin.rejected, (state)=> {
            state.status = 'rejected';
            state.isAuthenticated = false;


        })

    }
});

export const {authLogin, authLogout} = authSlice.actions;
export default authSlice.reducer;


