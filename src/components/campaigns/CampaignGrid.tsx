'use client';

import { Campaign } from '@/lib/types/campaign';
import { CampaignCard } from './CampaignCard';
import { Filter } from 'lucide-react';

interface CampaignGridProps {
    campaigns: Campaign[];
    searchTerm?: string;
}

export function CampaignGrid({ campaigns, searchTerm }: CampaignGridProps) {
    if (campaigns.length === 0) {
        return (
            <div className="text-center py-12">
                <Filter className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No campaigns found</h3>
                {searchTerm && (
                    <p className="mt-1 text-sm text-gray-500">
                        Try adjusting your search term: `${searchTerm}`
                    </p>
                )}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
                <CampaignCard key={campaign._id} campaign={campaign} />
            ))}
        </div>
    );
}
