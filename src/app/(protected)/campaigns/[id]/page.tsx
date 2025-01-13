'use client';

import { useParams, useRouter } from 'next/navigation';
import { useGetCampaignDetailsQuery } from '@/lib/redux/services/campaignApi';
import { CampaignStats } from '@/components/campaigns/CampaignStats';
import { CampaignForm } from '@/components/campaigns/CampaignForm';
import { Loading } from '@/components/shared/Loading';
import { Button } from '@/components/shared/Button';
import { ChevronLeft } from 'lucide-react';

export default function CampaignDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const campaignId = params.id as string;

    const { data: campaign, isLoading, error } = useGetCampaignDetailsQuery(campaignId);

    if (isLoading) return <Loading />;

    if (error) {
        return (
            <div className="text-center py-12">
                <p className="text-red-500">Failed to load campaign details</p>
            </div>
        );
    }

    if (!campaign) return null;

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Button
                className="mb-6"
                onClick={() => router.back()}
            >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Campaigns
            </Button>

            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">{campaign.title}</h1>
                    <p className="mt-2 text-gray-600">{campaign.description}</p>
                </div>

                <CampaignStats campaign={campaign} />

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Submit Content</h2>
                    <CampaignForm campaignId={campaignId} />
                </div>
            </div>
        </div>
    );
}
