/* eslint-disable */
// Must restart server whenever you make changes in next.config

const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
require('dotenv').config();


// Configuration
const config = {
	env: {
		// Reference a variable that was defined in the .env file and make it available at
		// Project Build Time / Frontend
		appName: process.env.APP_NAME,
		appUrl: process.env.APP_URL,
		appPort: process.env.APP_PORT
	}
};


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



module.exports = withPlugins([[withCSS],[withSass],[withOffline,offlineConfig]], config);


//module.exports = config;

// module.exports = withSass({
// 	webpack(config, options) {
// 		return config;
// 	}
// });
