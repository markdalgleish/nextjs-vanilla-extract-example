const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const { getGlobalCssLoader } = require('next/dist/build/webpack/config/blocks/css/loaders');

module.exports = {
  webpack5: true,
  webpack(config, options) {
    const { dev, isServer } = options;

    config.module.rules[config.module.rules.length - 1].oneOf.unshift({
      test: /\.vanilla\.css$/i,
      sideEffects: true,
      use: getGlobalCssLoader(
        {
          assetPrefix: config.assetPrefix,
          future: { webpack5: true },
          isClient: !isServer,
          isServer,
          isDevelopment: dev,
        },
        [],
        []
      )
    });

    config.plugins.push(new VanillaExtractPlugin());

    return config;
  },
};
