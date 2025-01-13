// src/lib/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { campaignApi } from './services/campaignApi';
import { authApi } from './services/authApi';
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [campaignApi.reducerPath]: campaignApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, campaignApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
