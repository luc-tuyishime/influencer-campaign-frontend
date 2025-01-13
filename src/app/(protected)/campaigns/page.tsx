'use client';

import { useState } from 'react';
import { useGetInfluencerCampaignsQuery } from '@/lib/redux/services/campaignApi';
import { CampaignGrid } from '@/components/campaigns/CampaignGrid';
import { Input } from '@/components/shared/Input';
import { Loading } from '@/components/shared/Loading';
import { Search } from 'lucide-react';

export default function CampaignsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('ALL');

    const { data: campaigns = [], isLoading, error } = useGetInfluencerCampaignsQuery();

    if (isLoading) return <Loading />;

    if (error) {
        return (
            <div className="text-center py-12">
                <p className="text-red-500">Failed to load campaigns</p>
            </div>
        );
    }

    const filteredCampaigns = campaigns.filter((campaign) => {
        const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'ALL' || campaign.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">My Campaigns</h1>
                <div className="flex space-x-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search campaigns..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>

                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="ALL">All Status</option>
                        <option value="ACTIVE">Active</option>
                        <option value="PENDING">Pending</option>
                        <option value="COMPLETED">Completed</option>
                    </select>
                </div>
            </div>

            <CampaignGrid campaigns={filteredCampaigns} searchTerm={searchTerm} />
        </div>
    );
}
