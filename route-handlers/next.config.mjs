/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.southernliving.com',
                port: '',
                pathname: '/thmb/**',
            }
        ]
    }
};

export default nextConfig;
