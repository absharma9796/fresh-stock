const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: config => {
    config.resolve.modules.push(path.resolve(__dirname))
    return config
  },
  images: {
    domains: ['assets.myntassets.com'],
  },
}
