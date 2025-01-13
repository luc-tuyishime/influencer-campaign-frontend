import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Campaign, CampaignSubmission } from '@/lib/types/campaign';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api';

export const campaignApi = createApi({
    reducerPath: 'campaignApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as any).auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getInfluencerCampaigns: builder.query<Campaign[], void>({
            query: () => 'campaigns/influencer',
        }),
        getCampaignDetails: builder.query<Campaign, string>({
            query: (id) => `campaigns/${id}`,
        }),
        submitCampaignContent: builder.mutation<void, CampaignSubmission>({
            query: (data) => ({
                url: 'campaigns/create',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useGetInfluencerCampaignsQuery,
    useGetCampaignDetailsQuery,
    useSubmitCampaignContentMutation,
} = campaignApi;
