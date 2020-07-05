/* eslint-disable */
// Must restart server whenever you make changes in next.config

const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

// Configuration Try to install app via chrome
const offlineConfig = {
	workboxOpts: {
		swDest: process.env.NEXT_EXPORT
			? 'service-worker.js'
			: 'static/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /^https?.*/,
				handler: 'NetworkFirst',
				options: {
					cacheName: 'offlineCache',
					expiration: {
						maxEntries: 200,
					},
				},
			},
		],
	},
  async rewrites() {
    return [
      {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js',
      },
    ]
  },
};



module.exports = withPlugins([withCSS,withSass], withOffline(offlineConfig));