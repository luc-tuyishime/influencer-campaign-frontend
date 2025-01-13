import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginCredentials, RegisterCredentials, AuthResponse } from '@/lib/types/auth';
import Cookies from 'js-cookie';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/auth`,
    }),
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginCredentials>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(_, {queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // Set token in cookie
                    Cookies.set('token', data.token, { expires: 7 });
                } catch {}
            },
        }),
        register: builder.mutation<AuthResponse, RegisterCredentials>({
            query: (credentials) => ({
                url: '/register',
                method: 'POST',
                body: credentials,
            }),
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
            async onQueryStarted(_, {queryFulfilled }) {
                try {
                    await queryFulfilled;
                    Cookies.remove('token');
                } catch {}
            },
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
} = authApi;
