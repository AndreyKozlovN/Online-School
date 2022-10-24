/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = {
  images: {
    domains: ['courses-top.ru']
  },
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      issuer: /\.[jt]sx&?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{
            name: 'preset-default',
            params: {
              override: {
                removeViewBox: false
              }
            }
          }]
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};