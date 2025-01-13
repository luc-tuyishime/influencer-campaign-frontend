'use client';

import { useState } from 'react';
import { useSubmitCampaignContentMutation } from '@/lib/redux/services/campaignApi';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { toast } from 'react-hot-toast';

interface CampaignFormProps {
    campaignId: string;
}

export function CampaignForm({ campaignId }: CampaignFormProps) {
    const [submitContent, { isLoading }] = useSubmitCampaignContentMutation();
    const [contentUrl, setContentUrl] = useState('');
    const [platform, setPlatform] = useState<'TIKTOK' | 'INSTAGRAM' | 'YOUTUBE'>('TIKTOK');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await submitContent({
                campaignId,
                contentUrl,
                platform,
                description,
            }).unwrap();

            toast.success('Content submitted successfully!');
            setContentUrl('');
            setDescription('');
        } catch (error) {
            toast.error('Failed to submit content. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Platform
                </label>
                <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value as typeof platform)}
                    className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="TIKTOK">TikTok</option>
                    <option value="INSTAGRAM">Instagram</option>
                    <option value="YOUTUBE">YouTube</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content URL
                </label>
                <Input
                    type="url"
                    placeholder="https://"
                    value={contentUrl}
                    onChange={(e) => setContentUrl(e.target.value)}
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description (Optional)
                </label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="Add any additional notes about your submission"
                />
            </div>

            <Button type="submit" isLoading={isLoading} className="w-full">
                Submit Content
            </Button>
        </form>
    );
}
