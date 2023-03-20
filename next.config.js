/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images:{
    remotePatterns: [
      {
        protocol : 'https',
        hostname : 'storage.googleapis.com',
        port : '',
        pathname : '/portofolio/**'
      }
    ]
  }
}

module.exports = nextConfig
