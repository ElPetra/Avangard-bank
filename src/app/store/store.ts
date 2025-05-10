import { configureStore } from '@reduxjs/toolkit';
import { clientApi } from 'features/client/api/clientApi';
import { authApi } from 'features/auth/api/authApi';
import authReducer from 'features/auth/model/authSlice';
import { passwordRecoveryApi } from 'features/recovery-pass/api/passwordRecoveryApi';
import passwordRecoveryReducer from 'features/recovery-pass/model/passwordRecoverySlice';

import { checkTokenExpirationtstsMiddleware } from './middleware/checkTokenExpiration';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [clientApi.reducerPath]: clientApi.reducer,
        [passwordRecoveryApi.reducerPath]: passwordRecoveryApi.reducer,
        auth: authReducer,
        passwordRecovery: passwordRecoveryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware, clientApi.middleware)
            .concat(checkTokenExpirationtstsMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
