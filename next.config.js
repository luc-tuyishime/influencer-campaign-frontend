/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['example.com'], // Add your image domains here
    },
    // Add any other config options here
}

module.exports = nextConfig
