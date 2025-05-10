import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'features/config/apiConfig';
import {
    RequestRecoveryCodePayload,
    ResetPasswordPayload,
    VerifyRecoveryCodePayload,
} from '../model/passwordRecoveryTypes';

export const passwordRecoveryApi = createApi({
    reducerPath: 'passwordRecoveryApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({
        requestRecoveryCode: builder.mutation<void, RequestRecoveryCodePayload>(
            {
                query: (data) => ({
                    url: '/endpoint 1 ещё не написан',
                    method: 'POST',
                    body: data,
                }),
            },
        ),
        verifyRecoveryCode: builder.mutation<void, VerifyRecoveryCodePayload>({
            query: (data) => ({
                url: '/endpoint 2 ещё не написан',
                method: 'POST',
                body: data,
            }),
        }),
        resetPassword: builder.mutation<void, ResetPasswordPayload>({
            query: (data) => ({
                url: '/endpoint 3 ещё не написан',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useRequestRecoveryCodeMutation,
    useVerifyRecoveryCodeMutation,
    useResetPasswordMutation,
} = passwordRecoveryApi;
