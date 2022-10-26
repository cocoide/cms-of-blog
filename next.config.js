/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // import Image
  images: {
    domains: [],
},
 
webpack: (config) => {
  config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
  });
  return config;
},
images: {
  disableStaticImages: true, // importした画像の型定義設定を無効にする
},

}
module.exports = nextConfig


