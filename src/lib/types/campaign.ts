export interface Campaign {
    _id: string;
    title: string;
    description: string;
    deadline: string;
    status: 'ACTIVE' | 'PENDING' | 'COMPLETED';
    requirements: string[];
    metrics: {
        totalSubmissions: number;
        averageEngagement: number;
    };
    createdAt?: string;
    updatedAt?: string;
}

export interface CampaignSubmission {
    campaignId: string;
    contentUrl: string;
    platform: 'TIKTOK' | 'INSTAGRAM' | 'YOUTUBE';
    description?: string;
}
