/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.googleapis.com', // Google Cloud Storage 도메인
            port: '', // 포트는 비워둡니다
            pathname: '/playtable-photo', 
          },
        ],
      },
};

export default nextConfig;
