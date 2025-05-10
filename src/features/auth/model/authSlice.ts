import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../api/authApi';
import { AuthState } from './authTypes';

const initialState: AuthState = {
    email: '',
    password: '',
    isAuthenticated: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isAuthenticated = false;
            state.email = '';
            state.password = '';
            state.token = null;
            state.error = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApi.endpoints.login.matchFulfilled,
                (state, action) => {
                    state.isAuthenticated = true;
                    state.token = action.payload.token;
                    state.email = action.meta.arg.originalArgs.email;
                    state.password = action.meta.arg.originalArgs.password;
                    state.error = null;
                    localStorage.setItem('token', action.payload.token);
                },
            )
            .addMatcher(
                authApi.endpoints.login.matchRejected,
                (state, action) => {
                    state.isAuthenticated = false;
                    state.token = null;
                    state.error =
                        action.error.message || 'Неправильный логин или пароль';
                },
            );
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
