import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { ReduxProvider } from '@/lib/redux/provider';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Influencer Campaign Platform',
    description: 'Manage your influencer marketing campaigns effectively',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ReduxProvider>
            <Toaster position="top-right" />
            {children}
        </ReduxProvider>
        </body>
        </html>
    );
}
