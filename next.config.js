/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // import Image
  images: {
    domains: ['i.ibb.co'],
}
}
module.exports = nextConfig
