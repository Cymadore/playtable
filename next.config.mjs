/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.googleapis.com', // Google Cloud Storage 도메인
            port: '', // 포트는 비워둡니다
            pathname: '/playtable-photo', // 버킷 이름과 이미지 경로
          },
        ],
      },
};

export default nextConfig;
