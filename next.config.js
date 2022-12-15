const path = require('path');
// const { i18n } = require('./next-i18next.config')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    assetPrefix: './',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    reactStrictMode: true,
    swcMinify: true,
    // i18n,
    productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
