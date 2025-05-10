import { Middleware } from '@reduxjs/toolkit';
import { logout } from 'features/auth/model/authSlice';
import { isTokenExpired } from 'features/auth/model/authUtils';

export const checkTokenExpirationtstsMiddleware: Middleware =
    (store) => (next) => (action) => {
        const { token } = store.getState().auth;
        if (token && isTokenExpired(token)) {
            store.dispatch(logout());
        }

        return next(action);
    };
