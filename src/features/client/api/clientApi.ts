import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'features/config/apiConfig';
import { ClientData } from '../model/clientTypes';

export const clientApi = createApi({
    reducerPath: 'clientApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: (builder) => ({
        registerClient: builder.mutation<void, ClientData>({
            query: (clientData) => ({
                url: 'clients',
                method: 'POST',
                body: clientData,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
    }),
});

export const { useRegisterClientMutation } = clientApi;
