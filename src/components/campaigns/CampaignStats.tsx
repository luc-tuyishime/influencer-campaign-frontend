'use client';

import { Campaign } from '@/lib/types/campaign';
import { Calendar, CheckCircle, TrendingUp } from 'lucide-react';
import { format } from 'date-fns';

interface CampaignStatsProps {
    campaign: Campaign;
}

export function CampaignStats({ campaign }: CampaignStatsProps) {
    const getStatusColor = (status: Campaign['status']) => {
        switch (status) {
            case 'ACTIVE':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'PENDING':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'COMPLETED':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Campaign Stats</h2>
                <span
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                        campaign.status
                    )}`}
                >
          {campaign.status}
        </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="h-8 w-8 text-blue-500" />
                    <div>
                        <p className="text-sm text-gray-500">Deadline</p>
                        <p className="font-medium">{format(new Date(campaign.deadline), 'MMM dd, yyyy')}</p>
                    </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <div>
                        <p className="text-sm text-gray-500">Total Submissions</p>
                        <p className="font-medium">{campaign.metrics.totalSubmissions}</p>
                    </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-purple-500" />
                    <div>
                        <p className="text-sm text-gray-500">Avg. Engagement</p>
                        <p className="font-medium">{campaign.metrics.averageEngagement}%</p>
                    </div>
                </div>
            </div>

            <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-3">
                    {campaign.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span className="text-gray-600">{requirement}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
