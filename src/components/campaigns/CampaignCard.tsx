'use client';

import { Campaign } from '@/lib/types/campaign';
import { Calendar, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';

interface CampaignCardProps {
    campaign: Campaign;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
    const getStatusColor = (status: Campaign['status']) => {
        switch (status) {
            case 'ACTIVE':
                return 'bg-green-100 text-green-800';
            case 'PENDING':
                return 'bg-yellow-100 text-yellow-800';
            case 'COMPLETED':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <Link
            href={`/campaigns/${campaign._id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{campaign.title}</h3>
                    <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            campaign.status
                        )}`}
                    >
            {campaign.status}
          </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{campaign.description}</p>

                <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">
              Deadline: {format(new Date(campaign.deadline), 'MMM dd, yyyy')}
            </span>
                    </div>

                    <div className="flex items-center text-gray-500">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm">
              {campaign.metrics.totalSubmissions} submissions
            </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
