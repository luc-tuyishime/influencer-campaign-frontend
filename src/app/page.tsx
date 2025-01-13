import Link from 'next/link';
import { Button } from '@/components/shared/Button';

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Influencer View App
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Connect with Talent,Professional players from all over the world.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href="/register">
                        <Button size="lg">Get Started</Button>
                    </Link>
                    <Link href="/login">
                        <Button variant="outline" size="lg" className="text-gray-900">Sign In</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
